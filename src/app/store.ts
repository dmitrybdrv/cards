import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from 'app/app.slice'

/**
 * Store всего приложения
 * @param appReducer
 */
export const store = configureStore({
    reducer: {
        app: appReducer,
    },
})
