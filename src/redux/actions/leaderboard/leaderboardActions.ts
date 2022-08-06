import {
FetchLeaderboardRequest, FetchLeaderboardSuccess, FetchLeaderboardSuccessPayload, FetchLeaderboardFailure, FetchLeaderboardFailurePayload
 } from "./LeaderboardActionsTypes";
 import {
FETCH_LEADERBOARD_REQUEST, FETCH_LEADERBOARD_SUCCESS, FETCH_LEADERBOARD_FAILURE
 } from "../../constants";
 
 export const fetchLeaderboardRequest = (): FetchLeaderboardRequest => ({
   type: FETCH_LEADERBOARD_REQUEST,
 });
 
 export const fetchLeaderboardSuccess = (
   payload: FetchLeaderboardSuccessPayload
 ): FetchLeaderboardSuccess => ({
   type: FETCH_LEADERBOARD_SUCCESS,
   payload,
 });
 
 export const fetchLeaderboardFailure = (
   payload: FetchLeaderboardFailurePayload
 ): FetchLeaderboardFailure => ({
   type: FETCH_LEADERBOARD_FAILURE,
   payload,
 });