import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StatusType, StringNullType } from 'app/app.types'
import { rejectedMatcher } from 'common/utils'

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
        setAppInitializing: (state, action: PayloadAction<{ appInitializing: boolean }>) => {
            state.appInitializing = action.payload.appInitializing
        },
        setAppStatus: (state, action: PayloadAction<{ appStatus: StatusType }>) => {
            state.appStatus = action.payload.appStatus
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => {
                    return action.type.endsWith('pending')
                },
                (state) => {
                    state.appInfo = null
                    state.appStatus = 'loading'
                    state.appErrors = null
                }
            )


            .addMatcher(
                (action) => {
                    return action.type.endsWith('fulfilled')
                },
                (state, action) => {
                    state.appStatus = 'idle'
                    state.appInitializing = true
                }
            )



            .addMatcher(
                (action) => {
                    return action.type.endsWith('rejected')
                },
                (state, action) => {
                    state.appStatus = 'failed'
                    state.appInitializing = true
                }
            )
            .addMatcher(rejectedMatcher, (state, action) => {
                if (action.payload) {
                    state.appErrors = action.payload
                }
            })
    }
})

export const { reducer: appReducer, actions: appActions } = slice
