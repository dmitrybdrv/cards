import { createSlice } from '@reduxjs/toolkit'
import { appActions } from 'app'
import { createAppAsyncThunk, handleServerNetworkError } from 'common/utils'
import { authApi } from 'features/auth/auth.api'
import { DataBaseType, RedirectType, UserType } from 'features/auth/auth.types'

const registration = createAppAsyncThunk<{ path: RedirectType }, { email: string; password: string }>(
    'auth/register',
    async (arg, { dispatch, rejectWithValue }) => {
        try {
            await authApi.register(arg)
            return { path: '/auth/login' }
        } catch (e) {
            handleServerNetworkError(e, dispatch)
            return rejectWithValue(e)
        }
    }
)

const login = createAppAsyncThunk<any, DataBaseType>('auth/login', async (arg, { dispatch, rejectWithValue }) => {
    try {
        const res = await authApi.login(arg)
        dispatch(appActions.setAppInfo({ info: 'Welcome Back' }))
        return { profile: res.data }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(e)
    }
})

const logout = createAppAsyncThunk<any, void>('auth/logout', async (_, { dispatch, rejectWithValue }) => {
    try {
        debugger
        const res = await authApi.logout()
        dispatch(appActions.setAppInfo({ info: res.data.info }))
        return { profile: null }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(e)
    }
})
/**
 * authReducer - Slice используется для управления состоянием авторизации на веб-странице.
 */
const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        profile: null as UserType | null,
        redirect: '/' as RedirectType,
    },
    reducers: {
        clearRedirect: (state) => {
            state.redirect = '/'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.redirect = action.payload.path
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true
                state.profile = action.payload.profile
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = false
                state.profile = action.payload.profile
            })
    },
})

export const { reducer: authReducer, actions: authActions } = slice
export const authThunk = { registration, login, logout }
