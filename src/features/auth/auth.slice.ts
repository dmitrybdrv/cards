import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils'
import { authAPI } from 'features/auth/auth.api'
import { AuthType, ProfileType } from 'features/auth/auth.types'

const authMe = createAppAsyncThunk<{ profile: ProfileType }, void>('auth/authMe', async (_, { rejectWithValue }) => {
    try {
        const res = await authAPI.authMe()
        return { profile: res.data }
    } catch (e) {
        return rejectWithValue(e)
    }
})

const login = createAppAsyncThunk<{ profile: ProfileType }, AuthType>(
    'auth/login',
    async (arg, { rejectWithValue }) => {
        try {
            const res = await authAPI.login(arg)
            return { profile: res.data }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

//TODO пофиксить тип any
const logout = createAppAsyncThunk<any, void>('auth/logout', async (_, { rejectWithValue }) => {
    try {
        const res = await authAPI.logout()
        return { info: res.data.info }
    } catch (e) {
        return rejectWithValue(e)
    }
})

//Slice
const slice = createSlice({
    name: 'auth',
    initialState: {
        redirectPath: '/',
        profile: null as null | ProfileType,
    },
    reducers: {
        clearRedirect: (state) => {
            state.redirectPath = '/'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(logout.fulfilled, (state) => {
                state.profile = null
            })
    },
})

export const { reducer: authReducer, actions: authAction } = slice
export const authThunk = { authMe, login, logout }
