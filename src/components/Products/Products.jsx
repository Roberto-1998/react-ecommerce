import React, { useEffect, useState } from "react";
import { filteredProducts } from "../../utils/filteredProducts";
import { Container, Title } from "./Products.styled";
import { ProductItem } from "../ProductItem";

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
