import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image, Info, Title } from "./CategoryItem.styled";
import { useTranslation } from "react-i18next";

const CategoryItem = ({ category }) => {
  const [t] = useTranslation("homePage");

  return (
    <Container>
      <Link to={`/products/${category.cat}`}>
        <Image src={category.img} />
        <Info>
          <Title>{t(`${category.title}`)}</Title>
          <Button>{t("categories.btn")}</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
