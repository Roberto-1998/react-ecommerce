import ProductItem from "../ProductItem/ProductItem";
import { popularProducts } from "../../data";
import { Container } from "./FeatureProducts.styled";

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
