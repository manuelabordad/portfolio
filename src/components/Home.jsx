import React from "react";
import homeImg from "../images/homeImg.jpeg";
import { NavLink } from "react-router-dom";
import CV from "../images/CV_acualizado (1).pdf";

export const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="titles">Welcome!</h1>
						<div className="introduction ">
							<h3>
								My name is Manuela Borda, I'm a Software Engineering student
								<br />
							</h3>
							<p>
								I like to create frontend proyects with great user experiences,
								<br />
								i'm a quick learner and a good teammate.
							</p>
							<div class="d-grid gap-2 d-md-block">
								<a href={CV} download="CV" className="text-light">
									<button className="btn me-2 homeBtn" type="button">
										Download CV
									</button>
								</a>
								<button class="btn me-2 homeBtn" type="button">
									<NavLink className="text-light" to="/proyects">
										Check proyects
									</NavLink>
								</button>
							</div>
						</div>
					</div>
					<div className="col">
						<img className="homeImg" src={homeImg}></img>
					</div>
				</div>
			</div>
		</div>
	);
};
