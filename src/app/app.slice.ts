import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppStatusType } from 'app/app.types'

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        appStatus: 'idle' as AppStatusType,
        isAppInitialized: false,
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ status: AppStatusType }>) => {
            state.appStatus = action.payload.status
        },
        setAppInitialized: (state, action: PayloadAction<{ isAppInitialized: boolean }>) => {
            state.isAppInitialized = action.payload.isAppInitialized
        },
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
    },
    extraReducers: (builder) => {},
})

export const { reducer: appReducer, actions: appAction } = slice
