import React from "react";
import Container from "../../layouts/container";
import UserData from "../../../constant/user.data";

const AboutDetail = () => {
	return (
		<Container className={"bg-gray-200 py-4 -mt-10 md:-mt-24 md:pb-12"}>
			<div className="aboutTitle font-bold my-5 md:mt-12 md:mb-10 md:text-[32px]">
				{UserData.about.title}
			</div>
			<div className="sectionDetails md:text-lg">
				<div className="leftDetail">
					<div className="contactMe mt-4">
						<h5 className="font-semibold md:text-xl mb-2">Contact</h5>
						<p className="">
							{UserData.about.contact}
							<a
								href={`mailto:${UserData.email}`}
								className="font-bold border-b-2 border-black"
							>
								Email
							</a>
						</p>
					</div>
					<div className="jobOportunities mt-4">
						<h5 className="font-semibold md:text-xl mb-2">Job Oportunities</h5>
						<p>
							{UserData.about.jobOportunities} berikut{" "}
							<a
								href={`${UserData.resumeUrl}`}
								className="font-bold border-b-2 border-black"
							>
								CV
							</a>{" "}
							saya
						</p>
					</div>
					<div className="socialLinks mt-4">
						<h5 className="font-semibold md:text-xl mb-2">Social Links</h5>
						<div className="socials ml-4 font-mono space-y-2">
							<div className="github group">
								<div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition duration-300">
									<p>&rarr;</p>
									<a href={`${UserData.socialLinks.github}`}>Github</a>
								</div>
							</div>
							<div className="Linkedin group">
								<div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition duration-300">
									<p>&rarr;</p>
									<a href={`${UserData.socialLinks.linkedin}`}>Linkedin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rightDetail space-y-2 my-5 col-span-1 md:col-span-2">
					<div className="prestations">
						<h4 className="text-xl font-semibold">
							Prestasi saya selama saya berkerja
						</h4>
						<ol className="list-decimal ml-4 mt-2">
							{UserData.about.prestations.map((desc, i) => {
								return (
									<li key={i} className="text-lg">
										{desc}
									</li>
								);
							})}
						</ol>
						<div className="mt-5 space-y-4">
							{UserData.about.description.map((desc, i) => {
								return <p key={i}>{desc}</p>;
							})}
						</div>
						<h1 className="bg-red-500 md:text-3xl text-xl rounded-md px-2 py-1 mt-4 inline-block font-bold text-gray-50">
							Tech Stack
						</h1>
						<div className="flex flex-row flex-wrap mt-4">
							<img
								alt="javascript-logo"
								src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="php-logo"
								src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/php.svg"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="html5-logo"
								src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="css3-logo"
								src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="sass-logo"
								src="https://sass-lang.com/assets/img/logos/logo.svg"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="react-logo"
								src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="nodejs-logo"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
								className="md:h-20 md:w-40 h-10 w-20 mx-4 my-4"
							/>
							<img
								alt="laravel-logo"
								src="https://www.svgrepo.com/show/303379/laravel-logo.svg"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="codeigniter-logo"
								src="https://www.svgrepo.com/show/303425/codeigniter-logo.svg"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="mysql-logo"
								src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="mongodb-logo"
								src="https://www.svgrepo.com/show/303232/mongodb-logo.svg"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
							<img
								alt="git-logo"
								src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg"
								className="md:h-20 md:w-20 h-10 w-10 mx-4 my-4"
							/>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutDetail;
