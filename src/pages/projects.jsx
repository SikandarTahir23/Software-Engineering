import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {

    const codedDescription = (
        <span>
                   Since embarking on my coding journey in 2022, I've contributed to a diverse range of projects, and I'm proud of the progress I've made. All of my work is open-source, and I welcome any feedback or contributions. I'm actively researching backend technologies and exploring how they can be integrated into future projects. My current interests include <strong>non-KYC verification</strong> and <strong>distinguishing AI-generated content from non-AI-generated content</strong>, and I'm particularly interested in developing tools in these areas. I focus on building scalable and secure solutions that address real-world problems.

        </span>
    )

    const codedTitle = (
        <span>
            Each project tile contains production and Git repo links. Give them a try!'
        </span>
    )
    useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
                            {INFO.project.title !== "" ? INFO.project.title : codedTitle}
						</div>

						<div className="subtitle projects-subtitle">
                            {INFO.project.description !== "" ? INFO.project.description : codedDescription}
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
