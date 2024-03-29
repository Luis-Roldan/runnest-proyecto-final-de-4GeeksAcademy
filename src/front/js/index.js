//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPersonRunning, faGear, faChartSimple, faComments, faArrowRightFromBracket, faHeart ,faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

library.add(faPersonRunning, faGear, faChartSimple, faComments, faArrowRightFromBracket, faHeart, regularHeart, faBars)

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
