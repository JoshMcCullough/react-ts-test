import { ActionType, getType } from "typesafe-actions";
import * as Actions from './actions';
import { Profile } from "./Profile";

// reducer
export type ProfileAction = ActionType<typeof Actions>;

export type State = {
    profiles: Profile[];
    errorMessage: string;
    loading: boolean;
};

const INITIAL_STATE = {
    profiles: [],
    errorMessage: null,
    loading: false,
};

export default (state: State = INITIAL_STATE, action: ProfileAction): State => {
    switch (action.type) {
        case getType(Actions.getProfilesRequest): return {
            ...state,
            loading: true,
        };

        case getType(Actions.getProfilesSuccess): return {
            ...state,
            profiles: action.payload.profiles,
            // ERROR: Property 'payload' does not exist on type 'EmptyAction<string> | PayloadAction<string, { profiles: Profile[]; }> | PayloadAction<string, { error: ApiErrorResponse; }>'.
            // Property 'payload' does not exist on type 'EmptyAction<string>'. [2339]
            loading: false,
        };

        case getType(Actions.getProfilesRequest): return {
            ...state,
            errorMessage: action.payload.error.message,
            // ERROR: Property 'payload' does not exist on type 'EmptyAction<string> | PayloadAction<string, { profiles: Profile[]; }> | PayloadAction<string, { error: ApiErrorResponse; }>'.
            // Property 'payload' does not exist on type 'EmptyAction<string>'. [2339]
            loading: false,
        };

        default: return state;
    }
};