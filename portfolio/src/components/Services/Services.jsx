import React from 'react'
import "./Services.css"
import {services} from "../../sources"
import {Link} from 'react-scroll'

function Services() {
  return (
    <section id="services">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1"  data-aos = "fade-right">
            <span className="gradient-text">Services</span>
          </h1>
          <h4 className="sub-title muted" data-aos = "fade-left">
          I create custom websites, intuitive UI/UX designs, and powerful web applications using Java and Spring Boot. My goal is to bring your vision to life with clean, efficient, and user-focused solutions.
          </h4>
        </div>
        <div className="services-container">
          {
            services.map((service, index) => (
              <div className="service" data-aos = "fade-left" key = {index}>
                <div className="flex-center icon-wrapper">
                  {service.icon}
                </div>
                <div className="details">
                  <h3 className="name gradient-text">{service.name}</h3>
                  <p className="muted">{service.description}</p>
                </div>
                <div className="flex buttons-wrapper">
                  <button className="btn read">Read More</button>
                  <Link to = "contact" smooth = {true} className="btn read">Get Started</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services
