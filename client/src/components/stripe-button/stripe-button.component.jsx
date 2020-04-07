import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2RZmgGusG0Tpp8wauMSwEyhR00iTmCIV7o";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="CRW Clothing LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton;
