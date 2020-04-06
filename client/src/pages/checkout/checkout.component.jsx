import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Decription</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test card for payments* <br /> 4242 4242 4242
        4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
