import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/userRedux";
import { emptyCart } from "../../redux/cartRedux";

const Paypal = ({ amount }) => {
  const [amountStr] = useState(amount.toString());

  const dispatch = useDispatch();

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ARwCXwmknYj5aAqKUVKcP5JYTgazx8j817v9vgHjnvdifWhYhz_g5t_g5o9YLk45W7_g7D1pf85MPFeh",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: amountStr,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            // Your code here after capture the order

            dispatch(addOrder(details));
            dispatch(emptyCart());
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
