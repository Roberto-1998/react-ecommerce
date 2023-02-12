import { Categories } from "../../components/Categories";
import FeaturedProducts from "../../components/FeatureProducts/FeatureProducts";
import { Slider } from "../../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <FeaturedProducts />
    </>
  );
};

export default Home;
