import { createSlice } from '@reduxjs/toolkit'
import { StatusType, StringNullType } from 'app/app.types'

/**
 * appReducer - Slice состояния приложения (App)
 */
const slice = createSlice({
    name: 'app',
    initialState: {
        appErrors: null as StringNullType,
        appInfo: null as StringNullType,
        appInitializing: false as boolean,
        appStatus: 'idle' as StatusType,
    },
    reducers: {},
})

export const { reducer: appReducer } = slice
