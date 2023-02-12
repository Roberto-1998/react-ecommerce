import React, { useState } from "react";
import { filterProducts, sortProducts } from "../../data";
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

const ProductList = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>{camelCategory(category)}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            {filterProducts.color.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            {filterProducts.size.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            {sortProducts.map((item) => (
              <Option key={item.id} value={item.value}>
                {item.text}
              </Option>
            ))}
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filters={filters} sort={sort} />
    </Container>
  );
};

export default ProductList;
