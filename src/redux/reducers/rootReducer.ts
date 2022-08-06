import { combineReducers } from 'redux';

import { leaderboardReducer } from './leaderboard';

export const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
