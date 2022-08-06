import { all, fork } from "redux-saga/effects";

import {leaderboardSaga} from "./leaderboard";

export function* rootSaga() {
  yield all([fork(leaderboardSaga)]);
}