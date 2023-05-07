import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'features/auth/auth.slice'
import { appReducer } from './app.slice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
