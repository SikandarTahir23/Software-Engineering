import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {

    const codedDescription = (
		<span>
			<p>
				As a software engineer and <strong>web and chatbot developer</strong>, I bring a rich blend of technical expertise and innovative problem-solving skills to every project. 
				My experience spans <strong>front-end development</strong>, <strong>generative AI</strong>, and <strong>LLM projects</strong>, where I specialize in creating seamless user experiences and efficient solutions. 
				I am proficient in technologies like <strong>HTML, CSS,TailwindCSS ,  JavaScript, TypeScript, Node.js, Express.js, Tailwind, React.js, and Next.js</strong>, and I have hands-on expertise in chatbot development using <strong>Dialogflow, Kommunicate, and Flowise AI</strong>.
			</p>
			<p>
				Beyond coding, I am passionate about continuously learning and exploring cutting-edge tools to stay ahead in the tech world. Whether it's building innovative projects or diving into new frameworks, I thrive on pushing boundaries and delivering exceptional results.
			</p>
			<p>
				Outside of work, I enjoy sharing knowledge, exploring new ideas, and mentoring aspiring developers. My commitment to excellence, adaptability, and love for technology drive me to excel in dynamic and challenging environments.
			</p>
		</span>
	)
	
    const codedTitle = (
        <span>
            Get to know me!
        </span>
    )

    useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title !== "" ? INFO.about.title : codedTitle}
                                </div>

								<div className="subtitle about-subtitle">
									{INFO.about.description !== "" ? INFO.about.description : codedDescription}
                                </div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="pic2.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
