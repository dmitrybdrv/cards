import { createSlice } from '@reduxjs/toolkit'
import { appActions } from 'app'
import { createAppAsyncThunk, path } from 'common/utils'
import { errorHandler } from 'common/utils/errorUtils'
import { authApi } from 'features/auth/auth.api'
import {
    CreatePassType,
    DataLoginType,
    DataRegType,
    DataUpdateType,
    ForgotPassType,
    RedirectType,
    UserType
} from 'features/auth/auth.types'

const authMe = createAppAsyncThunk<{ profile: UserType }, void>(
    'auth/authMe',
    async (_, { dispatch, rejectWithValue }) => {
        dispatch(authActions.authClearInfo())
        try {
            const res = await authApi.authMe()
            return { profile: res.data }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const registration = createAppAsyncThunk<{ redirect: RedirectType }, DataRegType>(
    'auth/register',
    async (arg, { dispatch, rejectWithValue }) => {
        dispatch(authActions.authClearInfo())
        try {
            await authApi.register(arg)
            return { redirect: path.LOGIN }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const login = createAppAsyncThunk<{ profile: UserType }, DataLoginType>(
    'auth/login',
    async (arg, { dispatch, rejectWithValue }) => {
        dispatch(authActions.authClearInfo())
        try {
            const res = await authApi.login(arg)
            return { profile: res.data }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const logout = createAppAsyncThunk<{ info: string }, void>('auth/logout', async (_, { dispatch, rejectWithValue }) => {
    dispatch(authActions.authClearInfo())
    try {
        const res = await authApi.logout()
        dispatch(appActions.setAppStatus({ appStatus: 'idle' }))
        return { info: res.data.info }
    } catch (e) {
        const err = errorHandler(e)
        return rejectWithValue(err)
    }
})

const authForgot = createAppAsyncThunk<{ info: string }, ForgotPassType>(
    'auth/authForgot',
    async (arg, { dispatch, rejectWithValue }) => {
        dispatch(authActions.authClearInfo())
        try {
            const res = await authApi.forgot(arg)
            return { info: res.data.info }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const createPass = createAppAsyncThunk<{ info: string }, CreatePassType>(
    'auth/createPass',
    async (arg, { dispatch, rejectWithValue }) => {
        dispatch(authActions.authClearInfo())
        try {
            const res = await authApi.createPass(arg)
            return { info: res.data.info }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const updateMe = createAppAsyncThunk<{ profile: UserType }, DataUpdateType>(
    'auth/updateMe',
    async (arg, { dispatch, rejectWithValue }) => {
        dispatch(authActions.authClearInfo())
        try {
            const res = await authApi.updateMe(arg)
            return { profile: res.data.updatedUser }
        } catch (e) {
            const err = errorHandler(e)
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
        authInfo: '',
        isLoggedIn: false,
        profile: null as UserType | null,
        redirect: '/' as RedirectType
    },
    reducers: {
        authClearRedirect: (state) => {
            state.redirect = '/'
        },
        authClearInfo: (state) => {
            state.authInfo = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authThunk.authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })

            .addCase(authThunk.registration.fulfilled, (state, action) => {
                state.redirect = '/auth/login'
            })

            .addCase(authThunk.login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })

            .addCase(authThunk.logout.fulfilled, (state, action) => {
                state.profile = null
                state.isLoggedIn = false
            })

            .addCase(authThunk.authForgot.fulfilled, (state, action) => {
                state.redirect = '/auth/check-email'
            })

            .addCase(authThunk.createPass.fulfilled, (state, action) => {
                state.redirect = '/auth/login'
            })

            .addCase(authThunk.updateMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })

    }
})

export const { reducer: authReducer, actions: authActions } = slice
export const authThunk = { registration, login, logout, authMe, authForgot, createPass, updateMe }
