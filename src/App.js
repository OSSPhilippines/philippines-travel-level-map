import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import NoPage from './pages/NoPage';

function App () {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="map" element = {<MapPage />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;