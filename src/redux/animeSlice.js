import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//need to see how this works in the test
export const fetchAnimeAsync = createAsyncThunk(
	"anime/fetchAnime",
	async () => {
		try {
			const response = await axios.get("https://api.jikan.moe/v4/top/anime");
			return response.data;
		} catch (err) {
			console.error(err);
		}
	}
);

const initialState = {
	data: [],
	error: null,
};

export const animeSlice = createSlice({
	name: "anime",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchAnimeAsync.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(fetchAnimeAsync.rejected, (state, action) => {
				state.error = action.error;
			});
	},
});

export const getAnime = (state) => {
	return state.anime;
};

export default animeSlice.reducer;
