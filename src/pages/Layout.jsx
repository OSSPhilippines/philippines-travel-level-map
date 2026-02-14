import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '.././App.css';

const Layout = () => {
	return (
		<section className="nav">
			<nav className="nav">
				<ul  className="nav-ul">
					<li className="nav">
						<Link className="nav" to="/">Home</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</section>
	);
};

export default Layout;
