import React from 'react'
import "./Services.css"
import {services} from "../../sources"
import {Link} from 'react-scroll'

function Services() {
  return (
    <section id="services">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">Services</span>
          </h1>
          <h4 className="sub-title muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati
            est, harum quam sed, eum, itaque eos voluptatem sequi velit quidem quisquam. Ut
            alias omnis et blanditiis repellat eligendi porro.
          </h4>
        </div>
        <div className="services-container">
          {
            services.map((service, index) => (
              <div className="service " key = {index}>
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
