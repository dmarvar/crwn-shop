import React from "react";
import {
  CartItemContainer,
  CartItemDetails,
  CartItemDetailsPrice,
  CartItemDetailsName
} from "./cart-item.styles";
// import "./cart-item.styles.scss";

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <CartItemDetails>
      <CartItemDetailsName>{name}</CartItemDetailsName>
      <CartItemDetailsPrice>
        {quantity} x ${price}
      </CartItemDetailsPrice>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
