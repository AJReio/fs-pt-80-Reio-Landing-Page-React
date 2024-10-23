import React from "react";
import { NavBarComp } from "./navbar";
import { JumboComp } from "./jumbotron";
import { CardComp } from "./card";
import { FooterComp } from "./footer";
//create your first component
const Home = () => {
	return (
		<div>
			<NavBarComp/>
			<div className="container m-auto">
				<JumboComp/>
				<div className="d-flex justify-content-between container">
					<CardComp/>
					<CardComp/>
					<CardComp/>
					<CardComp/>
				</div>
				
			</div>
			<FooterComp/>
		</div>
	);
};

export default Home;
