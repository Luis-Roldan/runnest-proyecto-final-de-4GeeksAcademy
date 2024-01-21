import React from "react";
import { Link } from "react-router-dom";
import runestLogo.png from "//src/front/img/runestLogo.png";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={runestLogo.png} width="30" height="24" />
          </a>
        </div>
      </nav>
    </div>

    // <nav className="navbar navbar-light bg-light">
    // 	<div className="container">
    // 		<Link to="/">
    // 			<span className="navbar-brand mb-0 h1">React Boilerplate</span>
    // 		</Link>
    // 		<div className="ml-auto">
    // 			<Link to="/demo">
    // 				<button className="btn btn-primary">Check the Context in action</button>
    // 			</Link>
    // 			<div>
    // 				<Link to="/signUp">
    // 					Sign Up
    // 				</Link>
    // 			</div>
    // 		</div>
    // 	</div>
    // </nav>
  );
};
