import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/main.layout";
import Home from "./components/pages/home/home.page";
import AboutMe from "./components/pages/aboutme/aboutme.page.";
import Projects from "./components/pages/projects/project.page";
import Experience from "./components/pages/experience/experience.page";
import Contact from "./components/pages/contact/contact.page";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="aboutMe" element={<AboutMe />} />
					<Route path="projects" element={<Projects />} />
					<Route path="experience" element={<Experience />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
