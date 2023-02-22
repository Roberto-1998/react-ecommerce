import { Categories } from "../../components/Categories";
import FeaturedProducts from "../../components/FeatureProducts/FeatureProducts";
import Newsletter from "../../components/Newsletter/Newsletter";
import { Slider } from "../../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />

      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
};

export default Home;
