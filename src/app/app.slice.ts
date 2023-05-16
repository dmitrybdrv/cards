import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StatusType, StringNullType } from 'app/app.types'

/**
 * appReducer - Slice состояния приложения (App)
 */
const slice = createSlice({
    name: 'app',
    initialState: {
        appErrors: null as StringNullType,
        appInfo: null as StringNullType,
        appInitializing: false as boolean,
        appStatus: 'idle' as StatusType,
    },
    reducers: {
        setAppError: (state, action: PayloadAction<{ error: StringNullType }>) => {
            state.appErrors = action.payload.error
        },
        setAppInfo: (state, action: PayloadAction<{ info: StringNullType }>) => {
            state.appInfo = action.payload.info
        },
        setAppInitializing: (state, action: PayloadAction<{ appInitializing: boolean }>) => {
            state.appInitializing = action.payload.appInitializing
        },
        setAppStatus: (state, action: PayloadAction<{ appStatus: StatusType }>) => {
            state.appStatus = action.payload.appStatus
        },
    },
})

export const { reducer: appReducer, actions: appActions } = slice
