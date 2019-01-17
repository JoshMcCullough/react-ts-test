import { action } from "typesafe-actions";
import { ApiErrorResponse } from "./ApiErrorResponse";
import { Profile } from "./Profile";
import ActionTypes from './action-types';

export const getProfilesRequest = () => action(ActionTypes.GET_PROFILES_REQUEST); // EmptyAction<string>
export const getProfilesSuccess = (profiles: Profile[]) => action(ActionTypes.GET_PROFILES_SUCCESS, { profiles }); // Action<string, { profiles: Profile[] }>
export const getProfilesFailure = (error: ApiErrorResponse) => action(ActionTypes.GET_PROFILES_FAILURE, { error }); // Action<string, { error: ApiErrorResponse }>