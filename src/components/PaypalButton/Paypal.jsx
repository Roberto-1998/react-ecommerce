import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../../redux/userRedux";

const Paypal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const paypalOptions = {
    clientId:
      "ARwCXwmknYj5aAqKUVKcP5JYTgazx8j817v9vgHjnvdifWhYhz_g5t_g5o9YLk45W7_g7D1pf85MPFeh",
    intent: "capture",
    currency: "EUR",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        products: cart.products,
        payment: data,
      };

      dispatch(addOrder(newOrder));
      navigate("/");
    }
  };

  return <h1>Hola</h1>;
};

export default Paypal;
