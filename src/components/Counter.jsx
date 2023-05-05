import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, setAmount } from "../redux/counterSlice";
// import { fetchAnimeAsync } from "../redux/animeSlice";
import { TopAnime } from './'

function Counter() {
	const dispatch = useDispatch();
	// note the dot counter dot value
	const count = useSelector((state) => state.counter.value);
	const setNumber = useSelector((state) => state.counter.setNum);
	//get the ability to use the functions within the reducers object in counterSlice


	// console.log(counterSlice);
	return (
		<div>
			<div>
				<button onClick={() => dispatch(decrement())}>-</button>
				<span className="counter">{count}</span>
				<button onClick={() => dispatch(increment())}>+</button>
			</div>
			<div>
				<input
					value={setNumber}
					onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
				/>
				<button onClick={() => dispatch(incrementByAmount(setNumber))}>Add Amount</button>
				<TopAnime />
			</div>
		</div>
	);
}


export default Counter;
