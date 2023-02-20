import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import { addProduct, addProductAmount } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { Circle, Container, Icon, Image, Info } from "./ProductItem.styled";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    let productExists = cart.products.find((prod) => prod.id === product.id);

    if (productExists) {
      dispatch(addProductAmount(product.id));
    } else {
      dispatch(
        addProduct({
          ...product,
          quantity: 1,
          size: product.size[0],
        })
      );
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon onClick={handleClick}>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <Link to={`/product/${product.id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
