import React from "react";
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
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Paypal } from "../../components/Paypal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  return (
    <Container isEmpty={!cart.products.length > 0}>
      {cart.products.length > 0 ? (
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButtom onClick={() => navigate(-2)}>
              CONTINUE SHOPPING
            </TopButtom>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product key={product.id}>
                  <ProductDetails>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product.id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size: </b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
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
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItems>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItems>
              <SummaryItems>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItems>
              {cart.total > 50 && (
                <SummaryItems>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItems>
              )}
              <SummaryItems type="total">
                <SummaryItemText>Total</SummaryItemText>
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
                  You should{" "}
                  <Link to={"/login"}>
                    {" "}
                    <strong>
                      <em>login</em>
                    </strong>
                  </Link>{" "}
                  to proceed with the payment
                </LoginMessage>
              )}
            </Summary>
          </Bottom>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>YOUR BAG IS EMPTY</Title>
        </Wrapper>
      )}
    </Container>
  );
};

export default Cart;
