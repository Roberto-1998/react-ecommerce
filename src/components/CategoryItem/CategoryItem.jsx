import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image, Info, Title } from "./CategoryItem.styled";

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`/products/${category.cat}`}>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
