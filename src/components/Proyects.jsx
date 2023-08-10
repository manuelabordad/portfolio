import React from "react";
import * as appicons from "react-icons/si";

export const Proyects = ({ icons }) => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="titles">
							Proyects <icons.FaCode className="me-3" />
						</h1>
					</div>
				</div>
				<div className="row">
					<div className="col m-2">
						<div className="card card_size">
							<div className="card-body">
								<h3>CRUD library</h3>
								<p className="card-text">
									 Fullstack CRUD app built with the following tecnologies:
								</p>
								<div className="d-block icons">
									<appicons.SiReact className="m-3" size={30} />
									<appicons.SiNodedotjs className="m-3" size={30} />
									<appicons.SiMysql className="m-3" size={30} />
								</div>
								<div className="d-grid gap-2 d-md-block ">
									<button className="btn proyects_btn me-2" type="button">
										<a href="https://github.com/manuelabordad/CRUD-APP"target="_blank" rel="noreferrer">Code </a>
									</button>
									{/* <button className="btn proyects_btn me-2 " type="button">
									Demo 
									</button> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
