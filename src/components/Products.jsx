import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { filteredProducts } from "../utils/filteredProducts";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  text-align: center;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setFilteredProducts] = useState([]);

  console.log(filters, cat);

  useEffect(() => {
    setFilteredProducts(filteredProducts(filters, cat));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, filters]);

  return (
    <Container>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      ) : (
        <Title>No products were found</Title>
      )}
    </Container>
  );
};

export default Products;
