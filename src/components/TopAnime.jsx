import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnime, fetchAnimeAsync } from "../redux/animeSlice";

function TopAnime() {
	const dispatch = useDispatch();
	// note the dot counter dot value
	//get the ability to use the functions within the reducers object in counterSlice
	const anime = useSelector(getAnime);
	
  useEffect(() => {
		dispatch(fetchAnimeAsync());
  }, [dispatch]);

	return (
		<div>
			{
				anime.data.data && anime.data.data.length ? anime.data.data.map((anime) => {
					return <span key={anime.mal_id}>{anime.title}</span>
				}) : console.log('oh no')  
			}
		</div>
	);
}


export default TopAnime;