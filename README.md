This is failing, don't know why! Stackoverflow question is here: https://stackoverflow.com/questions/54240438/redux-typescript-typesafe-actions

[![Build Status](https://travis-ci.org/JoshMcCullough/react-ts-test.svg?branch=master)](https://travis-ci.org/JoshMcCullough/react-ts-test)

```
src/reducer.ts:29:30 - error TS2339: Property 'payload' does not exist on type 'EmptyAction<string> | PayloadAction<string, { profiles: Profile[]; }> | PayloadAction<string, { error: ApiErrorResponse; }>'.
  Property 'payload' does not exist on type 'EmptyAction<string>'.
29             profiles: action.payload.profiles,
                                ~~~~~~~
src/reducer.ts:37:34 - error TS2339: Property 'payload' does not exist on type 'EmptyAction<string> | PayloadAction<string, { profiles: Profile[]; }> | PayloadAction<string, { error: ApiErrorResponse; }>'.
  Property 'payload' does not exist on type 'EmptyAction<string>'.
37             errorMessage: action.payload.error.message,
                                    ~~~~~~~
```