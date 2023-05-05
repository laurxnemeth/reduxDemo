import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./components";
// importing our created store
import { store } from "./redux/store";
// gives us the ability to provide that storage to our entire app
import { Provider } from "react-redux";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(
	// setting the store of the provider to be our defined store
	<Provider store={store}>
		<Counter />
	</Provider>
);
