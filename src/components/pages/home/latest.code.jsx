import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../layouts/container";
import UserData from "../../../constant/user.data";
import GithubRepoCard from "../../common/card.githubrepo";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const LatestCode = () => {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const username = UserData.githubUsername;
		// const token = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
		axios
			.get(
				`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
				// {
				// 	headers: {
				// 		Authorization: `token ${token}`,
				// 	},
				// }
			)
			.then((res) => {
				let latestRepos = res.data.items;
				let latestSixRepos = latestRepos.splice(0, 6);
				// console.log(latestSixRepos);
				setRepos(latestSixRepos);
			});
	}, []);

	return (
		<Container className={"my-5 md:my-14"}>
			<section className="flex flex-col md:justify-arround">
				<div className="flex justify-between items-center">
					<div>
						<h4 className="text-2xl md:text-[46px] font-semibold px-4 py-2 md:py-5 bg-gray-100 rounded-lg w-[90%] md:w-[100%]">
							Latest Code
						</h4>
						<p className="px-2 md:text-[24px]">some of my latest code</p>
					</div>
					<a
						className="h-[10%] md:h-[50%] md:py-4 px-2 rounded-md bg-white shadow-md text-md md:text-xl font-semibold flex flex-row space-x-4 items-center group-hover:translate-y-6"
						href={`https://github.com/${UserData.githubUsername}`}
					>
						<BsBoxArrowInUpRight />
						<p>View Github</p>
					</a>
				</div>
				<div
					id="codeList"
					className="my-4 flex flex-col md:flex-row md:flex-wrap md:justify-between "
				>
					{repos.map((item, i) => {
						return (
							<GithubRepoCard
								key={i}
								reposName={item.name}
								description={item.description}
								sclone_url={item.clone_url}
							/>
						);
					})}
				</div>
			</section>
		</Container>
	);
};

export default LatestCode;
