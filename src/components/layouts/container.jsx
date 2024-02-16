import React from "react";

const Container = ({ children, className, id }) => {
	return (
		<div id={id} className={`px-5 md:px-20 ${className}`}>
			{children}
		</div>
	);
};

export default Container;
