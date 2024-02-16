import SectionTitle from "../../common/section.title";
import Detail from "./about.detail";
import React, {  useEffect } from "react";

const AboutMe = (UserData) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="aboutMe md:mt-32">
			<SectionTitle>About Me.</SectionTitle>
			<Detail />
		</section>
	);
};

export default AboutMe;
