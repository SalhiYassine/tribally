import {
  FETCH_LEADERBOARD_REQUEST,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_FAILURE,
} from '../../constants';
import { User } from '../../../types/Leaderboard/User';

export interface FetchLeaderboardSuccessPayload {
  users: User[];
}

export interface FetchLeaderboardFailurePayload {
  error: string;
}

export interface FetchLeaderboardRequest {
  type: typeof FETCH_LEADERBOARD_REQUEST;
}

export type FetchLeaderboardSuccess = {
  type: typeof FETCH_LEADERBOARD_SUCCESS;
  payload: FetchLeaderboardSuccessPayload;
};

export type FetchLeaderboardFailure = {
  type: typeof FETCH_LEADERBOARD_FAILURE;
  payload: FetchLeaderboardFailurePayload;
};

export type LeaderboardActions =
  | FetchLeaderboardRequest
  | FetchLeaderboardSuccess
  | FetchLeaderboardFailure;
