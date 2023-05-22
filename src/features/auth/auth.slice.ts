import { createSlice } from '@reduxjs/toolkit'
import { RedirectType, UserType } from 'features/auth/auth.types'
import { authThunk } from './auth.thunk'


/**
 * authReducer - Slice используется для управления состоянием авторизации на веб-странице.
 */
const slice = createSlice({
    name: 'auth',
    initialState: {
        info: '',
        isLoggedIn: false,
        profile: null as UserType | null,
        redirect: '/' as RedirectType,
    },
    reducers: {
        clearRedirect: (state) => {
            state.redirect = '/'
        },
        clearInfo: (state) => {
            state.info = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authThunk.registration.fulfilled, (state, action) => {
                state.redirect = action.payload.redirect
            })
            .addCase(authThunk.login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })

            .addCase(authThunk.logout.fulfilled, (state) => {
                state.profile = null
                state.isLoggedIn = false
            })

            .addCase(authThunk.authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })

            .addCase(authThunk.authForgot.fulfilled, (state, action) => {
                state.redirect = '/auth/check-email'
                state.info = action.payload.info
            })

            .addCase(authThunk.createPass.fulfilled, (state, action) => {
                state.redirect = action.payload.redirect
            })
    },
})

export const { reducer: authReducer, actions: authActions } = slice