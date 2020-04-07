import React from "react";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toogleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// import "./cart-dropdown.styles.scss";
import {
  CartDropdownContainer,
  CartDropdownEmpty,
  CartDropdownItems
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartDropdownItems>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <CartDropdownEmpty>Your cart is Empty</CartDropdownEmpty>
      )}
    </CartDropdownItems>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toogleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
