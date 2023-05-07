import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RequestStatusType } from 'app/app.types'

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        status: 'idle' as RequestStatusType,
        isAppInitialized: false,
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
            state.status = action.payload.status
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
