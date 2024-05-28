import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    image: null,
    results: [],
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    resetImage(state) {
      state.image = null;
      state.results = [];
    }
  },
});

export const { setImage, setResults, resetImage } = imageSlice.actions;

export default imageSlice.reducer;