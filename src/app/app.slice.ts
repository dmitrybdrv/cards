import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        isLoading: false,
        isAppInitialized: false,
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
        },
        setAppInitialized: (state, action: PayloadAction<{ isAppInitialized: boolean }>) => {
            state.isAppInitialized = action.payload.isAppInitialized
        },
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => {
                    return action.type.endsWith('/pending')
                },
                (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                (action) => {
                    return action.type.endsWith('/fulfilled')
                },
                (state) => {
                    state.isLoading = false
                    state.isAppInitialized = true
                }
            )
            .addMatcher(
                (action) => {
                    return action.type.endsWith('/rejected')
                },
                (state, action) => {
                    if (action.payload) {
                        state.error = action.payload
                    }
                    state.error = 'Some error occurred'
                    state.isLoading = true
                    state.isAppInitialized = true
                }
            )
    },
})

export const { reducer: appReducer, actions: appAction } = slice
