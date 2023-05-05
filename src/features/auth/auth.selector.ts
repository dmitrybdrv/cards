import { RootState } from 'app/store'

export const selectisLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectUser = (state: RootState) => state.auth.user
