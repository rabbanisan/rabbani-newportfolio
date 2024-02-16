import React from "react";
import SectionTitle from "../../common/section.title";
import ContactDetail from "./contact.detail";

const Contact = () => {
	return (
		<section className="aboutMe md:mt-32">
			<SectionTitle>Contact.</SectionTitle>
			<ContactDetail />
		</section>
	);
};

export default Contact;
