import React from "react";

const ProjectCard = ({ image, alt, tech, name, url }) => {
	return (
		<button className="md:w-[45%]">
			<div
				className={`bg-white text-center shadow-card rounded-lg items-center flex flex-col p-6 my-4`}
			>
				<a href={url}>
					<img
						src={image}
						className="rounded-lg drop-shadow-md transform hover:scale-110 transition duration-2000 ease-out"
						alt={alt}
					/>
				</a>
				<div className="flex flex-col items-center mt-4">
					<h4 className="text-lg font-semibold font-sans">{name}</h4>
					<p>{tech}</p>
				</div>
			</div>
		</button>
	);
};

export default ProjectCard;
