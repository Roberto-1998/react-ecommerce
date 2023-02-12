import React from "react";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import {
  Bottom,
  Button,
  Container,
  Details,
  Hr,
  Image,
  Info,
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
  TopText,
  TopTexts,
  Wrapper,
} from "./Cart.styled";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      {cart.products.length > 0 ? (
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButtom>CONTINUE SHOPPING</TopButtom>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButtom type="filled"> CHECKOUT NOW</TopButtom>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product>
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

              <Button>CHECKOUT NOW</Button>
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