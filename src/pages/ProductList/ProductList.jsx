import React, { useState } from "react";
import { sortProducts } from "../../data";
import { useParams } from "react-router-dom";
import { camelCategory } from "../../utils/camelCategory";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from "./ProductList.styled";
import { Products } from "../../components/Products";
import { getColors } from "../../utils/getColors";
import { getSizes } from "../../utils/getSizes";
import Newsletter from "../../components/Newsletter/Newsletter";
import { useTranslation } from "react-i18next";

const ProductList = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [t] = useTranslation("productList");

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container>
        <Title>{t(`${camelCategory(category)}`)}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>{t("filter")}:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option value={""} defaultChecked>
                {t("color")}
              </Option>
              {getColors().map((item) => (
                <Option key={item} value={item}>
                  {t(`products.colors.${item}`)}
                </Option>
              ))}
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option value={""} defaultChecked>
                {t("size")}
              </Option>
              {getSizes().map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Filter>
          <Filter>
            <FilterText>{t("sort")}:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              {sortProducts.map((item) => (
                <Option key={item.id} value={item.value}>
                  {t(`sortWays.${item.value}`)}
                </Option>
              ))}
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={category} filters={filters} sort={sort} />
      </Container>
      <Newsletter />
    </>
  );
};

export default ProductList;
