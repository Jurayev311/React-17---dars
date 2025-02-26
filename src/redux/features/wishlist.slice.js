import { createSlice } from "@reduxjs/toolkit";

const loadWishlist = () => {
  const data = localStorage.getItem("wishlist");
  return data ? JSON.parse(data) : [];
};

const initialState = {
  wishlist: loadWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const movie = action.payload;
      const movies = state.wishlist.find((item) => item.id === movie.id);
      if (!movies) {
        state.wishlist.push(movie);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
