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
                state.info = 'Your Account has been created :)'
            })

            .addCase(authThunk.login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
                state.info = `Welcome ${action.payload.profile.name}!`
            })

            .addCase(authThunk.logout.fulfilled, (state, action) => {
                state.profile = null
                state.isLoggedIn = false
                state.info = action.payload.info
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

            .addCase(authThunk.updateMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })

    },
})

export const { reducer: authReducer, actions: authActions } = slice