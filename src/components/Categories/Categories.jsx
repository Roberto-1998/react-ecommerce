import React from "react";
import { categories } from "../../data";
import { Container } from "./Categories.styled";
import { CategoryItem } from "../CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
