
import AppData from "./Main.jsx";
import React from 'react';
import { useReducer } from "react";
import {BrowserRouter as Router} from 'react-router-dom'



function App() {
	return (
		<Router >
			<AppData />
		</Router>
	);
}

export default App;
