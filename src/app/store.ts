import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from 'app/app.slice'
import { authReducer } from 'features/auth'

/**
 * Store всего приложения
 * @param appReducer
 */
export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
    },
})
