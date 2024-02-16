import React from "react";
import { BsArrow90DegUp } from "react-icons/bs";
import Container from "../../layouts/container";
import UserData from "../../../constant/user.data";

const Hero = () => {
	return (
		<Container>
			<section className="hero flex flex-col md:flex-row md:justify-arround md:justify-center items-center">
				<div className="flex flex-col justify-center items-center md:w-10/12">
					<img
						src={`${process.env.PUBLIC_URL}${UserData.avatarUrl}`}
						alt="rabbani"
						id="profilePhoto"
						className="shadow rounded-full bg-[#23324f] p-1 w-[50%] md:w-[58%]"
					/>
					<div className="flex items-centertext-lg mt-2">
						<p>it's me</p>
						<BsArrow90DegUp size={20} style={{ transform: "scaleX(-1)" }} />
					</div>
				</div>
				<div className="w-10/12 font-bold mt-4 text-2xl md:pr-28 md:text-[48px] md:leading-tight">
					<p className="p-2 m-2 rounded-lg bg-blue-400">Muhammad Rabbani.</p>
					<p className="p-2 m-2 rounded-lg bg-orange-400">Web Developer.</p>
					<p className="p-2 m-2 rounded-lg bg-emerald-500">Instructor.</p>
				</div>
			</section>
		</Container>
	);
};

export default Hero;
