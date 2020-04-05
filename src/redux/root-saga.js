import { all, call } from "redux-saga/effects";
import storeSaga from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(storeSaga)]);
}
