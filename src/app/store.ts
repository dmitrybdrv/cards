import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from 'app/app.slice'
import { authReducer } from 'features/auth'
import { packsReducer } from 'features/packs'

/**
 * Store всего приложения
 * @param appReducer
 */
export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        packs: packsReducer,
    },
})

// @ts-ignore
window.store = store
