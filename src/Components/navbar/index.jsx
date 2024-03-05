// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { HiX } from "react-icons/hi";
// import "./styles.scss";
// function Navbar() {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <>
//       <div className="navbar">
//         <div className="navbar_container">
//           <Link to="" className="navbar_container_logo">
//             Portfolio
//           </Link>
//         </div>
//         <div className={`navbar_menu ${toggle ? "active":""}`}>
//           <Link className="navbar_menu_item" to="">Home</Link>
//           <Link className="navbar_menu_item" to="/about">About</Link>
//           <Link className="navbar_menu_item" to="/contact">Contact</Link>
//         </div>
//         <div className="navbar_menu_icons" onClick={() => setToggle(!toggle)}>
//           {toggle ? <HiX size={30} /> : <FaBars size={30} />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from 'react'

import "./styles.css";
import { Link, NavLink } from 'react-router-dom'

import {FaBars} from "react-icons/fa"
import {HiX} from "react-icons/hi"

function Navbar() {
  const[toggle, setToggle] = useState(false)
const[logo,setLogo] = useState(false)
  return (
    <div id='header'>

      <Link id='logo'>{logo?"Sudhir Yadav":"Portfolio"}</Link>

      <div  id='menu-icons' onClick={()=> setToggle(!toggle)}>
        {toggle ? <HiX/> : <FaBars/>}
        
      </div>

    <div className= {`Navbar ${toggle ? "actives":""}`}>    
    <NavLink className={ ({isActive})=> `link  ${isActive ? "Active":""}`} to = "" onClick={()=>setLogo(false)}>Home</NavLink>
   {/* <Link className='link' to="/about">About</Link>  */}
   <NavLink  className={ ({isActive})=> `link  ${isActive ? "Active":""}`} to = "/about" onClick={()=>setLogo(true)}>About</NavLink>
   <NavLink className={ ({isActive})=> `link  ${isActive ? "Active":""}`} to="/Education" onClick={()=>setLogo(true)}>Education</NavLink> 
   <NavLink className={ ({isActive})=> `link  ${isActive ? "Active":""}`} to="/projects" onClick={()=>setLogo(true)}>Projects</NavLink> 
   <NavLink className={ ({isActive})=> `link  ${isActive ? "Active":""}`} to="/Skills" onClick={()=>setLogo(true)}>Skills</NavLink> 
   {/* <NavLink className={ ({isActive})=> `link  ${isActive ? "Active":""}`} to="/Resume">Resume</NavLink>  */}
   <NavLink className={ ({isActive})=> `link  ${isActive ? "Active":""}`} to="/contact" onClick={()=>setLogo(true)}>Contact</NavLink> 
  

    </div>
    </div>
  )
}

export default Navbar
