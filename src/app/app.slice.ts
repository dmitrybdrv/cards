import { createSlice } from '@reduxjs/toolkit'
import { StatusType } from 'app/app.types'

const slice = createSlice({
    name: 'app',
    initialState: {
        errors: '',
        infoText: '',
        initialize: false,
        status: 'idle' as StatusType,
    },
    reducers: {},
})

export const { reducer: appReducer } = slice
