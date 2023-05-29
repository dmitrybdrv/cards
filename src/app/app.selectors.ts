import { RootState } from 'app/app.types'

export const selectorAppStatus = (state: RootState) => state.app.appStatus
export const selectorAppInitializing = (state: RootState) => state.app.appInitializing
export const selectorAppErrors = (state: RootState) => state.app.appErrors
export const selectorAppInfo = (state: RootState) => state.app.appInfo