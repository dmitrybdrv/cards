import { RootState } from 'app'

export const selectorAuthProfile = (state: RootState) => state.auth.profile
export const selectorAuthInfo = (state: RootState) => state.auth.authInfo
export const selectorAuthRedirect = (state: RootState) => state.auth.redirect
export const selectorAuthIsLoggedIn = (state: RootState) => state.auth.isLoggedIn