import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StatusType, StringNullType } from 'app/app.types'
import { authMeFulfilled, authMeRejected, fulfilledMatchers, pendingMatchers, rejectedMatchers } from 'common/utils'

/**
 * appReducer - Slice состояния приложения (App)
 */
const slice = createSlice({
    name: 'app',
    initialState: {
        appErrors: null as StringNullType,
        appInfo: null as StringNullType,
        appInitializing: false as boolean,
        appStatus: 'idle' as StatusType
    },
    reducers: {
        setAppError: (state, action: PayloadAction<{ error: StringNullType }>) => {
            state.appErrors = action.payload.error
        },
        setAppInfo: (state, action: PayloadAction<{ info: StringNullType }>) => {
            state.appInfo = action.payload.info
        },
        setAppStatus: (state, action: PayloadAction<{ appStatus: StatusType }>) => {
            state.appStatus = action.payload.appStatus
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(pendingMatchers, (state) => {
                state.appInfo = null
                state.appErrors = null
                state.appStatus = 'loading'
            })
            .addMatcher(authMeFulfilled, (state) => {
                state.appStatus = 'idle'
                state.appInitializing = true
            })

            .addMatcher(fulfilledMatchers, (state) => {
                state.appStatus = 'idle'
            })

            .addMatcher(authMeRejected, (state) => {
                state.appStatus = 'failed'
                state.appInitializing = true
            })
            .addMatcher(rejectedMatchers, (state) => {
                state.appStatus = 'failed'
            })
    }
})

export const { reducer: appReducer, actions: appActions } = slice
