import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ children, locationName, menuPath, toogleNav }) => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<Link to={menuPath} onClick={toogleNav}>
			<li
				className={`${
					splitLocation[1] === locationName
						? "font-semibold text-orange-600 bg-gray-200"
						: ""
				} hover:bg-gray-200 px-2 rounded-md md:text-xl`}
			>
				{children}
			</li>
		</Link>
	);
};

export default NavItem;
