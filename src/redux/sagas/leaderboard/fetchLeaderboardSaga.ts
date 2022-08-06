import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchLeaderboard } from "../../../api";
import { User } from "../../../types/Leaderboard/User";

import { fetchLeaderboardSuccess, fetchLeaderboardFailure } from "../../actions";
import { FETCH_LEADERBOARD_REQUEST } from "../../constants";

interface Res{
    data:User[],
}

/*
  Worker Saga: Fired on FETCH_LEADERBOARD_REQUEST action
*/
function* fetchLeaderboardSaga() {
  try {
    const response: Res = yield call(fetchLeaderboard);
    yield put(
        fetchLeaderboardSuccess({
        users: response.data,
      })
    );
  } catch (e: any) {
    yield put(
        fetchLeaderboardFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_LEADERBOARD_REQUEST` action.
  Allows concurrent increments.
*/
export function* leaderboardSaga() {
  yield all([takeLatest(FETCH_LEADERBOARD_REQUEST, fetchLeaderboardSaga)]);
}