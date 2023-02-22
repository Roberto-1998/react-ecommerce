import React, { useState } from "react";
import { Add, Remove } from "@material-ui/icons";

import {
  Bottom,
  Container,
  Details,
  Hr,
  Image,
  Info,
  LoginMessage,
  PriceDetails,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetails,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItemPrice,
  SummaryItemText,
  SummaryItems,
  SummaryTitle,
  Title,
  Top,
  TopButtom,
  Wrapper,
} from "./Cart.styled";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Paypal } from "../../components/Paypal";
import { addProductAmount, removeProductAmount } from "../../redux/cartRedux";
import { findProductById } from "../../utils/findProductById";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantityValue, setQuantityValue] = useState(1);
  const [t] = useTranslation("cart");

  const handleAddProduct = (id) => {
    let product = findProductById(id);

    if (quantityValue < product.quantity) {
      setQuantityValue(quantityValue + 1);
      dispatch(addProductAmount({ id, quantity: 1 }));
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProductAmount(id));
    setQuantityValue(quantityValue - 1);
  };

  return (
    <Container isEmpty={!cart.products.length > 0}>
      {cart.products.length > 0 ? (
        <Wrapper>
          <Title>{t("bagTitle")}</Title>
          <Top>
            <TopButtom onClick={() => navigate("/")}>{t("shopBtn")}</TopButtom>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product key={product.id}>
                  <ProductDetails>
                    <Link to={`/product/${product.id}`}>
                      <Image src={product.img} />
                    </Link>
                    <Details>
                      <ProductName>
                        <b>{t("product.product")}:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>{t("product.id")}:</b> {product.id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>{t("product.size")}: </b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add onClick={() => handleAddProduct(product.id)} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove onClick={() => handleRemoveProduct(product.id)} />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetails>
                </Product>
              ))}

              <Hr />
            </Info>

            <Summary>
              <SummaryTitle>{t("order.summary")}</SummaryTitle>
              <SummaryItems>
                <SummaryItemText>{t("order.subtotal")}</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItems>
              <SummaryItems>
                <SummaryItemText>{t("order.shipping")}</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItems>
              {cart.total > 50 && (
                <SummaryItems>
                  <SummaryItemText>{t("order.discount")}</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItems>
              )}
              <SummaryItems type="total">
                <SummaryItemText>{t("order.total")}</SummaryItemText>
                <SummaryItemPrice>
                  $ {cart.total < 50 ? cart.total + 5.9 : cart.total}
                </SummaryItemPrice>
              </SummaryItems>

              {user ? (
                <Paypal
                  amount={cart.total < 50 ? cart.total + 5.9 : cart.total}
                />
              ) : (
                <LoginMessage>
                  {t("order.paymentInitial")}{" "}
                  <Link to={"/login"}>
                    {" "}
                    <strong>
                      <em>{t("order.paymentLogin")}</em>
                    </strong>
                  </Link>{" "}
                  {t("order.paymentFinally")}
                </LoginMessage>
              )}
            </Summary>
          </Bottom>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>{t("empty")}</Title>
        </Wrapper>
      )}
    </Container>
  );
};

export default Cart;
