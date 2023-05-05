import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/counterSlice";
import animeSlice from "../redux/animeSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		anime: animeSlice,
	},
});
