import { all, call } from "redux-saga/effects";
import storeSaga from "./shop/shop.sagas";
import userSaga from "./user/user.sagas";
import cartSaga from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(storeSaga), call(userSaga), call(cartSaga)]);
}
