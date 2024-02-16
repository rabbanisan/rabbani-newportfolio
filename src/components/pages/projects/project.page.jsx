import React, { useEffect } from "react";
import Container from "../../layouts/container";
import ProjectCard from "../../common/card.project";
import UserData from "../../../constant/user.data";
import SectionTitle from "../../common/section.title";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section className="aboutMe md:mt-32">
			<SectionTitle>Projects.</SectionTitle>
			<Container className={"bg-gray-200 py-4 -mt-10 md:-mt-24 md:pb-12"}>
				<div
					id="projectList"
					className="my-4 flex flex-col md:flex-row md:flex-wrap md:justify-around md:mt-16"
				>
					{UserData.projects.map((item, i) => {
						return (
							<ProjectCard
								key={i}
								image={`${process.env.PUBLIC_URL} ${item.image}`}
								name={item.name}
								tech={item.tech}
							/>
						);
					})}
				</div>
			</Container>
		</section>
	);
};

export default Projects;
