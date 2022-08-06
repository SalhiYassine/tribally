import { createSelector } from 'reselect';

import { AppState } from '../../reducers';

const getLeaderboard = (state: AppState) => state.leaderboard;

export const getLeaderboardSelector = createSelector(
  getLeaderboard,
  (leaderboard) => leaderboard
);
