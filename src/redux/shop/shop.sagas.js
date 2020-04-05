import { all, call, put, takeLatest } from "redux-saga/effects";
import shopActionsTypes from "./shop.types";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess
} from "./shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  yield console.log("Fetching Collections");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }

  //   return dispatch => {
  //     const collectionRef = firestore.collection("collections");
  //     dispatch(fetchCollectionsStart());
  //     collectionRef
  //       .get()
  //       .then(snapshot => {
  //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //         dispatch(fetchCollectionsSuccess(collectionsMap));
  //       })
  //       .catch(e => dispatch(fetchCollectionsFailure(e.message)));
  //   };
}

export function* onFetchingCollectionsStart() {
  yield takeLatest(
    shopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

function* shopSagas() {
  yield all([call(onFetchingCollectionsStart)]);
}

export default shopSagas;
