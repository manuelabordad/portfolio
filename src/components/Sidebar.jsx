import React from "react";
import { NavLink } from "react-router-dom";
export const Sidebar = ({ icons }) => {
	return (
		<div className="sidebar d-flex align-items-center">
			<ul>
				<li>
					<NavLink
						to="/"
						className="text-light rounded py-2 w-100 d-inline-block px-3"
						exact
						activeClassName="active"
					>
						<icons.FaHome className="me-3" />
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/proyects"
						className="text-light rounded py-2 w-100 d-inline-block px-3"
						exact
						ctiveClassName="active"
					>
						<icons.FaCode className="me-3" />
						Proyects
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						className="text-light rounded py-2 w-100 d-inline-block px-3"
						exact
						ctiveClassName="active"
					>
						<icons.FaRegEnvelope className="me-3" />
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
