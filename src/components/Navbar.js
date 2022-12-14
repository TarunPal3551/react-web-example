import React, {useState} from "react";
import LOGO from "../assets/logo.svg"
import {Link} from 'react-router-dom';
import { Reorder } from "@mui/icons-material";

import "../styles/Navbar.css"

function NavBar() {
    const [openLinks,setOpenLinks]=useState(false);
    const toggleNavBar=()=>{
setOpenLinks(!openLinks);
    };
    return (
<div className="navbar" >
<div className="leftSide" id ={openLinks?"open":"close"}>
<img src={LOGO} alt="description" />
<div className="hiddenLinks">
<Link to="/">Home</Link>
<Link to="/menu">Menu</Link>
<Link to="/faq">Faq</Link>
<Link to="/Help">Help</Link>
</div>
</div>
<div className="rightSide">
<Link to="/">Home</Link>
<Link to="/menu">Menu</Link>
<Link to="/FAQ">Faq</Link>
<Link to="/Help">Help</Link>
<button onClick={toggleNavBar}>
    <Reorder/>
</button>
</div>
</div>
);
}
export default NavBar;