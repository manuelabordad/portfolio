import React from "react";

import picture from "../images/CV_foto.jpeg";
export const Contact = ({ icons }) => {
	return (
		<div className="contact container d-flex align-items-center justify-content-center">
			<div className="row">
				<div className="col">
					<img src={picture} alt="" className="picture rounded-circle " />
				</div>
				<div className="col contact_info">
					<h3>Contact me !</h3>
					<p>
						<icons.FaMailBulk className="me-2" size={20} />
						manuelaborda2019@gmail.com
					</p>
					<p>
						<icons.FaPhone className="me-2" size={20} />
						+57 3192221896
					</p>
					<p>
						<icons.FaLinkedin className="me-2" size={20} />
						<a
							href="https://www.linkedin.com/in/manuela-borda-diaz-44698a221/"
							target="_blank"
						>
							{" "}
							Visit my linkedin account
						</a>
					</p>
					<p>
						<icons.FaWhatsapp className="me-2" size={20} />
						<a
							href="https://wa.me/573192221896"
							target="_blank"
							rel="noreferrer"
						>
							Send whatsapp
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};
