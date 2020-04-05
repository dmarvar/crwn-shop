import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
  CollectionItemContainer,
  ImgContainer,
  CollectionFooterContainer,
  CustomButtonContainer,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer className="collection-item">
      <ImgContainer
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButtonContainer inverted onClick={() => addItem(item)}>
        {" "}
        Add to Cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};
const mapDisptachToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDisptachToProps)(CollectionItem);
