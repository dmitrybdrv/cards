import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils'
import { errorHandler } from 'common/utils/errorUtils'
import { packsApi } from 'features/packs/packs.api'
import { CardPacksType, PacksParamsType } from 'features/packs/packs.types'

const getPacks = createAppAsyncThunk<CardPacksType, PacksParamsType>
('packs/getPacks', async (arg, { rejectWithValue }) => {
    try {
        const res = await packsApi.getPacks(arg)
        return res.data
    } catch (e) {
        const err = errorHandler(e)
        return rejectWithValue(err)
    }
})

const slice = createSlice({
    name: 'packs/getPacks',
    initialState: {
        packsData: null as CardPacksType | null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                state.packsData = action.payload
            })
    }
})

export const { reducer: packsReducer, actions: packsActions } = slice
export const packsThunk = { getPacks }