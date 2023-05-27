import { appActions } from 'app'
import { createAppAsyncThunk, path } from 'common/utils'
import { errorHandler } from 'common/utils/errorUtils'
import { authActions } from 'features/auth/auth.slice'
import { authApi } from './auth.api'
import {
    CreatePassType,
    DataLoginType,
    DataRegType, DataUpdateType,
    ForgotPassType,
    RedirectType,
    UserType
} from './auth.types'

const registration = createAppAsyncThunk<{ redirect: RedirectType }, DataRegType>(
    'auth/register',
    async (arg, {dispatch, rejectWithValue }) => {
        try {
            dispatch(authActions.clearInfo())
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
        try {
            dispatch(authActions.clearInfo())
            const res = await authApi.login(arg)
            return { profile: res.data }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const logout = createAppAsyncThunk<{ info: string }, void>('auth/logout', async (_, { dispatch, rejectWithValue }) => {
    try {
        dispatch(authActions.clearInfo())
        const res = await authApi.logout()
        return { info: res.data.info }
    } catch (e) {
        const err = errorHandler(e)
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
            const err = errorHandler(e)
            return rejectWithValue(err)
        } finally {
            dispatch(appActions.setAppInitializing({ appInitializing: true }))
        }
    }
)

const authForgot = createAppAsyncThunk<{ info: string }, ForgotPassType>(
    'auth/authForgot',
    async (arg, { rejectWithValue }) => {
        try {
            await authApi.forgot(arg)
            return { info: arg.email }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const createPass = createAppAsyncThunk<{redirect: RedirectType}, CreatePassType>(
    'auth/createPass',
    async (arg, { rejectWithValue }) => {
        try {
            await authApi.createPass(arg)
            return { redirect: path.LOGIN }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

const updateMe = createAppAsyncThunk<{ profile: UserType}, DataUpdateType>(
    'auth/updateMe',
    async (arg, {rejectWithValue }) => {
        try {
            const res = await authApi.updateMe(arg)
            return { profile: res.data.updatedUser }
        } catch (e) {
            const err = errorHandler(e)
            return rejectWithValue(err)
        }
    }
)

export const authThunk = { registration, login, logout, authMe, authForgot, createPass, updateMe }