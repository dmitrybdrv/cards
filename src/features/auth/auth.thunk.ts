import { createAppAsyncThunk, handleError, path } from 'common/utils'
import { CreatePassType, DataLoginType, DataRegType, ForgotType, RedirectType, UserType } from './auth.types'
import { authApi } from './auth.api'
import { appActions } from 'app'

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

export const authThunk = { registration, login, logout, authMe, authForgot, createPass }