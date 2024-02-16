import FavProject from "./favourite.project";
import Hero from "./hero";
import LatestCode from "./latest.code";
import React, { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Hero />
			<FavProject />
			<LatestCode />
		</>
	);
};

export default Home;
