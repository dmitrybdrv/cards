import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { authThunk } from 'features/auth'

export const pendingMatchers = isPending(
    authThunk.authMe,
    authThunk.registration,
    authThunk.login,
    authThunk.logout,
    authThunk.authForgot,
    authThunk.createPass,
    authThunk.updateMe,
)
export const fulfilledMatchers = isFulfilled(
    authThunk.registration,
    authThunk.login,
    authThunk.logout,
    authThunk.authForgot,
    authThunk.createPass,
    authThunk.updateMe,
)
export const rejectedMatchers = isRejected(
    authThunk.registration,
    authThunk.login,
    authThunk.logout,
    authThunk.authForgot,
    authThunk.createPass,
    authThunk.updateMe,
)
//authMe
export const authMeFulfilled = isFulfilled(authThunk.authMe)
export const authMeRejected = isRejected(authThunk.authMe)