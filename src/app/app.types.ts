/**
 * Типы данных относящихся к файлам app
 */
import { store } from 'app/store'

export type StatusType = 'idle' | 'loading' | 'failed'
export type StringNullType = string | null
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
