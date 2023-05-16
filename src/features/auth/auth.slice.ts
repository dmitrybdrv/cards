import { createSlice } from '@reduxjs/toolkit'

/**
 * authReducer - Slice используется для управления состоянием авторизации на веб-странице.
 */
const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        profile: null,
    },
    reducers: {},
})

export const { reducer: authReducer, actions: authActions } = slice
