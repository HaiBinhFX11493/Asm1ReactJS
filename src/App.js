
import AppData from "./Main.jsx";
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
	return (
		<div>
			<Provider store={store} >
				<Router >
					<AppData />
				</Router>
			</Provider>
		</div>

	);
}

export default App;
