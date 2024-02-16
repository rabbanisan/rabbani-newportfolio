import React from "react";
import { Outlet } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import NavItem from "../common/nav.item";
import Container from "../layouts/container";

const Navbar = (props) => {
	// const [showDropdown, setShowDropdown] = useState(false);

	const menu = [
		{
			menu: "Home",
			menuPath: "/",
			locationName: "",
		},
		{
			menu: "About",
			menuPath: "aboutMe",
			locationName: "aboutMe",
		},
		{
			menu: "Project",
			menuPath: "projects",
			locationName: "projects",
		},
		{
			menu: "Experience",
			menuPath: "experience",
			locationName: "experience",
		},
		{
			menu: "Contact",
			menuPath: "contact",
			locationName: "contact",
		},
	];

	const toogleNav = () => {
		const menu = document.querySelector("#menu");
		menu.classList.toggle("hidden");
	};

	return (
		<>
			<nav className="navbar sticky top-0 mb-5 md:mb-8 py-5 h-[20%] bg-white z-[999]">
				<Container>
					<div className="flex flex-wrap justify-between items-center mx-auto">
						<div className="navbrand flex flex-col justify-center">
							<a
								id="navBrand"
								className="uppercase font-semibold"
								href="https://github.com/rabbanisan"
							>
								<p>MUHAMMAD RABBANI</p>
							</a>
							<a className="text-sm" href="https://github.com/rabbanisan">
								<p>Web Developer, Instructor</p>
							</a>
						</div>
						<div className="navLink flex space-x-4 md:hidden">
							<button type="button" className="flex hover:text-gray-500">
								<a href="https://github.com/rabbanisan">
									<ImGithub size={30} />
								</a>
							</button>
							{/* <button type="button">
								<a href="https://github.com/rabbanisan">
									<ImLinkedin size={30} />
								</a>
							</button> */}
						</div>
						<button
							type="button"
							className="inline-flex justify-center items-center text-gray-800 rounded-lg md:hidden hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
							onClick={toogleNav}
						>
							<MdOutlineMenu size={30} />
						</button>
						<div className="navitem hidden w-full md:block md:w-auto" id="menu">
							<ul className="flex flex-col mt-4 p-2 bg-gray-50 rounded-lg text-sm md:flex-row md:space-x-2 md:mt-0 md:text-sm md:border-0 md:bg-transparent">
								{menu.map((item, i) => {
									return (
										<NavItem
											key={i}
											locationName={item.locationName}
											menuPath={item.menuPath}
											toogleNav={toogleNav}
										>
											{item.menu}
										</NavItem>
									);
								})}
							</ul>
						</div>
						<div className="space-x-4 hidden md:flex">
							<button type="button" className="flex hover:text-gray-500">
								<a href="https://github.com/rabbanisan">
									<ImGithub size={30} />
								</a>
							</button>
							{/* <button type="button">
								<a href="https://github.com/rabbanisan">
									<ImLinkedin size={30} />
								</a>
							</button> */}
						</div>
					</div>
				</Container>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
