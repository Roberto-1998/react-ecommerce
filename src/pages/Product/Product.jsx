import { Add, Remove } from "@material-ui/icons";
import { findProductById } from "../../utils/findProductById";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { addProduct, addProductAmount } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "./Product.styled";

const Product = () => {
  const cart = useSelector((state) => state.cart);

  const { id } = useParams();
  const product = findProductById(id);
  const { img, title, price, desc, color, size, quantity } = product;
  const [quantityValue, setQuantityValue] = useState(1);
  const [sizeValue, setSizeValue] = useState("");
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleQuantity = (type) => {
    if (type === "dec" && quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }

    if (type === "inc" && quantityValue <= quantity - 1) {
      setQuantityValue(quantityValue + 1);
    }
  };

  const handleClick = () => {
    if (sizeValue === "") {
      ref.current.focus();
      return;
    }

    let productExists = cart.products.find((prod) => prod.id === id);

    if (productExists) {
      dispatch(addProductAmount(id));
    } else {
      dispatch(
        addProduct({
          ...product,
          quantity: quantityValue,
          color,
          size: sizeValue,
        })
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <Price>${price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {color.map((item) => (
                <FilterColor key={item} color={item} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                onChange={(e) => setSizeValue(e.target.value)}
                ref={ref}
              >
                <FilterSizeOption value="">Select Size</FilterSizeOption>
                {size.map((item) => (
                  <FilterSizeOption key={item} value={item}>
                    {item}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantityValue}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
