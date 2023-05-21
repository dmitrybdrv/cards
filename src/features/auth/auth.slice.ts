import { createSlice } from '@reduxjs/toolkit'
import { appActions } from 'app'
import { createAppAsyncThunk, handleError, path } from 'common/utils'
import { authApi } from 'features/auth/auth.api'
import {
    CreatePassType,
    DataLoginType,
    DataRegType,
    ForgotType,
    RedirectType,
    UserType
} from 'features/auth/auth.types'

const registration = createAppAsyncThunk<{ redirect: RedirectType }, DataRegType>(
    'auth/register',
    async (arg, { dispatch, rejectWithValue }) => {
        try {
            const res = await authApi.register(arg)
            return { redirect: path.LOGIN }
        } catch (e) {
            const err = handleError(e, dispatch)
            return rejectWithValue(err)
        }
    }
)
const login = createAppAsyncThunk<{ profile: UserType }, DataLoginType>(
    'auth/login',
    async (arg, { dispatch, rejectWithValue }) => {
        try {
            debugger
            const res = await authApi.login(arg)
            return { profile: res.data }
        } catch (e) {
            const err = handleError(e, dispatch)
            return rejectWithValue(err)
        }
    }
)
const logout = createAppAsyncThunk<{ info: string }, void>('auth/logout', async (_, { dispatch, rejectWithValue }) => {
    try {
        const res = await authApi.logout()
        return { info: res.data.info }
    } catch (e) {
        const err = handleError(e, dispatch)
        return rejectWithValue(err)
    }
})

const authMe = createAppAsyncThunk<{ profile: UserType }, void>(
    'auth/authMe',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const res = await authApi.authMe()
            return { profile: res.data }
        } catch (e) {
            const err = handleError(e, dispatch)
            return rejectWithValue(err)
        } finally {
            dispatch(appActions.setAppInitializing({ appInitializing: true }))
        }
    }
)

const authForgot = createAppAsyncThunk<{ info: string }, ForgotType>(
    'auth/authForgot',
    async (arg, { dispatch, rejectWithValue }) => {
        try {
            await authApi.forgot(arg)
            return { info: arg.email }
        } catch (e) {
            const err = handleError(e, dispatch)
            return rejectWithValue(err)
        }
    }
)
const createPass = createAppAsyncThunk<{redirect: RedirectType}, CreatePassType>(
    'auth/createPass',
    async (arg, { dispatch, rejectWithValue }) => {
        try {
            await authApi.createPass(arg)
            return { redirect: path.LOGIN }
        } catch (e) {
            const err = handleError(e, dispatch)
            return rejectWithValue(err)
        }
    }
)
/**
 * authReducer - Slice используется для управления состоянием авторизации на веб-странице.
 */
const slice = createSlice({
    name: 'auth',
    initialState: {
        info: '',
        isLoggedIn: false,
        profile: null as UserType | null,
        redirect: path.MAIN as RedirectType,
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
            .addCase(registration.fulfilled, (state, action) => {
                state.redirect = action.payload.redirect
            })
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })

            .addCase(logout.fulfilled, (state) => {
                state.profile = null
                state.isLoggedIn = false
            })

            .addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })

            .addCase(authForgot.fulfilled, (state, action) => {
                state.redirect = path.CHECK_EMAIL
                state.info = action.payload.info
            })

            .addCase(createPass.fulfilled, (state, action) => {
                state.redirect = action.payload.redirect
            })
    },
})


export const { reducer: authReducer, actions: authActions } = slice
export const authThunk = { registration, login, logout, authMe, authForgot, createPass }
