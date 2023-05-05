import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils'
import { authApi } from 'features/auth/auth.api'

const slice = createSlice({
    name: 'auth',
    initialState: {
        error: null as string | null,
        user: {},
        isLoggedIn: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(login.fulfilled, (state, action) => {
                debugger
                state.user = action.payload
            })

            .addMatcher(
                (value) => {
                    return value.type.endsWith('/pending')
                },
                () => {}
            )
            .addMatcher(
                (value) => {
                    return value.type.endsWith('/fulfilled')
                },
                (state) => {
                    state.isLoggedIn = true
                }
            )
    },
})

const registration = createAppAsyncThunk<{ isLoggedIn: boolean }, { email: string; password: string }>(
    'auth/registration',
    async (arg, { rejectWithValue }) => {
        try {
            await authApi.registration({ email: arg.email, password: arg.password })
            return { isLoggedIn: true }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const login = createAppAsyncThunk<any, any>('auth/login', async (arg, { rejectWithValue }) => {
    try {
        debugger
        const res = await authApi.login({ email: arg.email, password: arg.password, rememberMe: arg.rememberMe })
        return res.data
    } catch (e) {
        return rejectWithValue(e)
    }
})

const logout = createAppAsyncThunk<any, void>('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await authApi.logout()
        return { isLoggedIn: false }
    } catch (e) {
        return rejectWithValue(e)
    }
})

/*const isAuthMe = createAppAsyncThunk<any, void>('auth/isAuthMe', async (_, thunkAPI) => {
    const res = authApi.me()
    return { isLoggedIn: true }
})*/

export const { reducer: authReducer, actions: authAction } = slice
export const authThunk = { registration, login, logout }
