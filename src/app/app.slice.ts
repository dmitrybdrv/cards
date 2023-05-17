import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StatusType, StringNullType } from 'app/app.types'
import { fulfilled, pending, rejected } from 'common/utils'

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
    extraReducers: (builder) => {
        builder
            .addMatcher(pending, (state) => {
                state.appErrors = null
                state.appInfo = null
                state.appStatus = 'loading'
            })
            //TODO обработать положительное сообщение (приходящие положит сообщ. в документации)
            .addMatcher(fulfilled, (state, action) => {
                state.appInfo = action.payload.info
                state.appStatus = 'idle'
            })
            .addMatcher(rejected, (state, action) => {
                state.appErrors = action.payload
                state.appStatus = 'failed'
            })
    },
})

export const { reducer: appReducer, actions: appActions } = slice
