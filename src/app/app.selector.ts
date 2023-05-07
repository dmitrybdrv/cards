import { RootState } from 'app/store'

export const selectAppStatus = (state: RootState) => state.app.status
export const selectIsAppInitialized = (state: RootState) => state.app.isAppInitialized
export const selectProfile = (state: RootState) => state.auth.profile
