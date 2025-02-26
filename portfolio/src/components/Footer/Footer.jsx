import React from 'react'
import "./Footer.css"
import Logo from "../../Commons/Logo/Logo"
import Social from '../../Commons/Social/Social'
import {footer} from '../../sources'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer id="footer">
        <div className="wrapper">
            <div className="column" data-aos = "right">
                <Logo />
                <Social />
            </div>
            {
                footer.map((item, index) => (
                    <div className="column" data-aos = "fade-right" key = {index}>
                        <h3 className="muted title">{item.title}</h3>
                        {
                            item.routes.map((route, i) => (
                                <Link to ={route.id||""} smooth={true} className = 'route' key = {index}>
                                {route.name}
                                </Link>
                            ))
                        }
                    </div>
                ))
            }
        </div>
        <div className="copyright flex-center" >
            <h4 >Copyright &copy; All rights reserved -| 2025</h4> 
            <p className="muted">Built with love by Atul Bora</p>
        </div>
    </footer>
  )
}

export default Footer
