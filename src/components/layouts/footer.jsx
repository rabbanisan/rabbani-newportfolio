// import UserData from "../../constant/user.data";
import React from "react";
import { ImGithub } from "react-icons/im";

const Footer = () => {
	return (
		<div className="mx-auto px-4 py-10 bg-gray-800 space-x-5 md:justify-around md:py-10 md:px-10 md:text-[18px] md:flex">
			<div
				id="socials"
				className="hidden md:flex md:items-center space-x-4 flex text-gray-200"
			>
				<button type="button" className="hover:text-orange-400">
					<a href="https://github.com/rabbanisan">
						<ImGithub size={30} />
					</a>
				</button>
				{/* <button type="button" className="hover:text-orange-400">
					<a href="https://github.com/rabbanisan">
						<ImLinkedin size={30} />
					</a>
				</button> */}
			</div>
			<div className="flex flex-col text-white text-sm md:text-xl md:space-x-20 justify-between md:items-center md:flex-row">
				<div>
					<p>&copy; Muhammad Rabbani. All Rights Reserved.</p>
				</div>
				<div>
					<div className="text-sm md:text-xl">
						Developed by
						<div className="inline-block transform hover:scale-110 transition duration-300">
							<a
								className="hover:bg-orange-500 rounded-md px-2 py-1 hover:text-gray-50 md:text-xl"
								href="https://themasfebrianto.github.io"
							>
								Muhammad Rabbani
							</a>
						</div>
					</div>
				</div>
			</div>
			<div id="socials" className="md:hidden space-x-4 flex mt-4 text-gray-200">
				<button type="button" className="hover:text-orange-400">
					<a href="https://github.com/rabbanisan">
						<ImGithub size={25} />
					</a>
				</button>
				{/* <button type="button" className="hover:text-orange-400">
					<a href="https://github.com/rabbanisan">
						<ImLinkedin size={25} />
					</a>
				</button> */}
			</div>
		</div>
	);
};

export default Footer;
