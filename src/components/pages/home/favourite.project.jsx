import React from "react";
import Container from "../../layouts/container";
import ProjectCard from "../../common/card.project";
import UserData from "../../../constant/user.data";

const FavProject = () => {
	return (
		<Container className={"bg-gray-200 my-5 md:my-14 py-5"}>
			<section className="favouriteProject flex flex-col md:justify-arround">
				<div>
					<h4 className="text-2xl md:text-[46px] font-semibold px-4 py-2 md:py-5 bg-gray-100 rounded-lg w-[68%] md:w-[35%]">
						Favourite Project
					</h4>
					<p className="px-2 md:text-[24px]">some of my favourite project</p>
				</div>
				<div
					id="projectList"
					className="my-4 flex flex-col md:flex-row md:flex-wrap md:justify-around"
				>
					{UserData.favProjects.map((item, i) => {
						return (
							<ProjectCard
								key={i}
								image={`${process.env.PUBLIC_URL} ${item.image}`}
								name={item.name}
								tech={item.tech}
								url={item.projectUrl}
							/>
						);
					})}
				</div>
			</section>
		</Container>
	);
};

export default FavProject;
