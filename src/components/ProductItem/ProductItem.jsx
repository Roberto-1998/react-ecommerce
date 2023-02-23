import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import { addProduct, addProductAmount } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { Circle, Container, Icon, Image, Info } from "./ProductItem.styled";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [t] = useTranslation("cart");

  const handleClick = () => {
    let productExists = cart.products.find((prod) => prod.id === product.id);

    const notify = () => toast.success(t("added"));

    if (productExists) {
      dispatch(addProductAmount(product.id));
      notify();
    } else {
      dispatch(
        addProduct({
          ...product,
          quantity: 1,
          size: product.size[0],
        })
      );
      notify();
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
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
      />
    </Container>
  );
};

export default ProductItem;
