import axios from 'axios';
import { User } from '../../types/Leaderboard/User';

type LeaderboardResponse = {
  data: User[];
};

const URL: string = 'https://tribally.xyz/leaderboard/origin/arena'

export const fetchLeaderboard = () => axios.get<LeaderboardResponse>(URL);
  

