import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {
    setBlocks: (state, action) => {
      state.list = action.payload;
    },
  },
})

export const selectBlocks = (state) => state.block.list

export const { setBlocks } = blockSlice.actions

export default blockSlice.reducer