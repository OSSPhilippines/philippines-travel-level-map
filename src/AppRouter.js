import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
// import Map from './pages/Map';

function AppRouter () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				{/* <Route path="/map" element={<Map />} />*/}
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;