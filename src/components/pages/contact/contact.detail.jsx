import React from "react";
import Container from "../../layouts/container";
import UserData from "../../../constant/user.data";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapPin,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";

const ContactDetail = () => {
	return (
		<Container className={"bg-gray-200 py-4 mt-2 md:-mt-24 md:pb-12"}>
			<div className="contactContainer bg-[#02044A] mt-8 md:mt-10 p-5 md:p-20 rounded-lg pl-10">
				<div className="leftSide text-white space-y-8 md:space-y-0 flex flex-col md:flex-row md:justify-between md:items-center">
					<div className="getInTouch space-y-2 mx-5 md:mx-0 md:w-[30%]">
						<h4 className="text-2xl font-semibold">
							Get in touch, let's talk.
						</h4>
						<p>Contact me, I'll get back to you as soon as I can.</p>
					</div>
					<div className="icons-container flex flex-col">
						<div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-orange-500 p-4">
							<FaPhoneAlt className="h-4 w-4 text-orange-500" />
							<p className="text-gray-50 font-light text-sm">
								{UserData.phone}
							</p>
						</div>
						<div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-orange-500 p-4">
							<FaEnvelope className="h-4 w-4 text-orange-500" />
							<p className="text-gray-50 font-light text-sm">
								{UserData.email}
							</p>
						</div>
						<div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-orange-500 p-4">
							<FaMapPin className="h-4 w-4 text-orange-500" />
							<p className="text-gray-50 font-light text-sm">
								{UserData.address}
							</p>
						</div>
					</div>
					<div className="social-icons flex flex-row space-x-8 justify-start px-2">
						<a
							href={UserData.socialLinks.facebook}
							className="h-10 w-10 rounded-full hover:bg-orange-500 flex items-center justify-center cursor-pointer"
						>
							<FaFacebookF size={24} />
						</a>
						<a
							href={UserData.socialLinks.twitter}
							className="h-10 w-10 rounded-full hover:bg-orange-500 flex items-center justify-center cursor-pointer"
						>
							<FaTwitter size={24} />
						</a>
						<a
							href={UserData.socialLinks.instagram}
							className="h-10 w-10 rounded-full hover:bg-orange-500 flex items-center justify-center cursor-pointer"
						>
							<FaInstagram size={24} />
						</a>
						<a
							href={UserData.socialLinks.linkedin}
							className="h-10 w-10 rounded-full hover:bg-orange-500 flex items-center justify-center cursor-pointer"
						>
							<FaLinkedin size={24} />
						</a>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ContactDetail;
