import React from "react";
import Container from "../layouts/container";

const SectionTitle = ({ children }) => {
	return (
		<Container>
			<div className="sectionTitle mb-3 md:mb-10">
				<h1 className="text-[42px] md:text-[100px] font-bold text-center md:text-left">
					{children}
				</h1>
			</div>
		</Container>
	);
};

export default SectionTitle;
