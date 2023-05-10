import { createSlice } from '@reduxjs/toolkit'
import { appAction } from 'app/app.slice'
import { createAppAsyncThunk } from 'common/utils'
import { authApi } from 'features/auth/auth.api'
import { FormDataType, ProfileType, RedirectPathType } from 'features/auth/auth.types'

//Thunks
const registration = createAppAsyncThunk<{ redirectPath: RedirectPathType }, FormDataType>(
    'auth/registration',
    async (arg, { rejectWithValue }) => {
        try {
            await authApi.registration(arg)
            return { redirectPath: '/login' }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const login = createAppAsyncThunk<{ profile: ProfileType }, FormDataType>(
    'auth/login',
    async (arg, { rejectWithValue }) => {
        try {
            const res = await authApi.login({ email: arg.email, password: arg.password, rememberMe: arg.rememberMe })
            return { profile: res.data }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, void>('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await authApi.logout()
        return { isLoggedIn: false }
    } catch (e) {
        return rejectWithValue(e)
    }
})

const isAuthMe = createAppAsyncThunk<any, void>('auth/isAuthMe', async (_, { dispatch, rejectWithValue }) => {
    try {
        await authApi.me()
        return { isLoggedIn: true }
    } catch (e) {
        return rejectWithValue(e)
    } finally {
        dispatch(appAction.setAppInitialized({ isAppInitialized: true }))
    }
})

//Slice
const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        redirectPath: '/' as RedirectPathType,
        profile: null as ProfileType | null,
    },
    reducers: {
        clearRedirect: (state) => {
            state.redirectPath = '/'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.redirectPath = action.payload.redirectPath
            })
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.isLoggedIn = true
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(isAuthMe.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
    },
})

export const { reducer: authReducer, actions: authAction } = slice
export const authThunk = { isAuthMe, login, logout, registration }
