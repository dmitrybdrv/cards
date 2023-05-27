import { isPending, isRejected } from '@reduxjs/toolkit'
import { authThunk } from 'features/auth'

export const pending = isPending(authThunk.registration)

export const rejectedMatcher = isRejected(
    authThunk.registration,
    authThunk.login,
    authThunk.authForgot,
    authThunk.logout,
    authThunk.createPass,
    authThunk.updateMe,
)