import {
  FETCH_LEADERBOARD_REQUEST,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_FAILURE,
} from '../../constants';

import { LeaderboardActions } from '../../actions';
import { User } from '../../../types/Leaderboard/User';

const initialState: {
  pending: boolean;
  users?: User[];
  error: Error | null;
} = {
  pending: false,
  error: null,
};

export const leaderboardReducer = (
  state = initialState,
  action: LeaderboardActions
) => {
  switch (action.type) {
    case FETCH_LEADERBOARD_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LEADERBOARD_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };
    case FETCH_LEADERBOARD_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
