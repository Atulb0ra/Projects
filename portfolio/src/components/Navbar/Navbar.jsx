import React ,{useState} from 'react'
import "./Navbar.css"
import {tabs} from "../../sources"
import {Link} from "react-scroll"
import Logo from '../../Commons/Logo/Logo'
import {HiMenu} from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import Social from '../../Commons/Social/Social'

function Navbar() {
    const[openSidebar, setOpenSidebar] = useState(false); 
    return (
        <nav className = "navbar flex">
            {openSidebar ? <div className = "overlay" onClick = {() => setOpenSidebar(!openSidebar)}/> : ""}
            <Logo />
            <div className = {`box flex-center tabs-group sidebar ${openSidebar ? 'visible' : ''}`}> 
                <div className="flex-center icon-wrapper cancel-btn"
                onClick={() => setOpenSidebar(!openSidebar)}>
                    <FaTimes />
                </div>
               {
                tabs.map((tab,index) =>(
                    <Link 
                    to = {tab.id} 
                    smooth = {true} 
                    spy = {true}
                    className = 'tab' 
                    activeClass = 'active'
                    onClick = {() => setOpenSidebar(false)}
                    key ={index}
                    >
                        {tab.name}
                    </Link>
                ))
               }
            </div>
            <Social />
            <div className = "box flex-center buttons">
                <Link to = 'contact' smooth ={true} className = 'btn primary contact-btn'>Hire Me</Link>
                <Link to = 'services' smooth ={true} className = 'btn services-btn'>Services</Link>
                <div className="flex-center icon-wrapper menu-btn"
                onClick={() => setOpenSidebar(!openSidebar)}>
                    <HiMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
