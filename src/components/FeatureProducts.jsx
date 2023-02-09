import styled from "styled-components";
import ProductItem from "./ProductItem";
import { popularProducts } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const FeaturedProducts = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default FeaturedProducts;
