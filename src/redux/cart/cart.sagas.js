import { all, call, put, takeLatest } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { emptyCart } from "./cart.action";

function* emptyCartOnSignOut() {
  yield put(emptyCart());
}

function* onEmptyCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, emptyCartOnSignOut);
}

function* cartSaga() {
  yield all([call(onEmptyCart)]);
}

export default cartSaga;
