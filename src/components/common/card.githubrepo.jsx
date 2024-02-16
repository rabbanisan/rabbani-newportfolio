import React from "react";

const GithubRepoCard = (props) => {
	const { reposName, description, sclone_url } = props;
	return (
		<div className="github-repo rounded-lg my-2 p-4 bg-gradient-to-b from-gray-200 to-gray-0 md:mb-4 md:w-[32%]">
			<h1 className="font-semibold text-xl">{reposName}</h1>
			<p className="text-base font-normal my-4 text-">{description}</p>
			<a
				href={sclone_url}
				className="font-semibold group flex flex-row space-x-2 w-full items-center"
			>
				<p>View Repository </p>
				<div className="transform  group-hover:translate-x-2 transition duration-300">
					&rarr;
				</div>
			</a>
		</div>
	);
};

export default GithubRepoCard;
