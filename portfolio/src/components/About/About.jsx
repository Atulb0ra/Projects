import React from 'react'
import "./About.css"
import {whyChooseMe} from '../../sources.jsx'
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos = "fade-left">
            <div className="gradient-text">About Me</div>
          </h1>
          <h4 className="sub-title muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae, 
            aperiam laboriosam consectetur neque quibusdam numquam deserunt 
            reprehenderit possimus nisi. Molestias, asperiores! Quasi voluptatum
             provident cupiditate quibusdam! Nihil, accusamus vel.
          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((item, index) => (
              <div className="flex-center group-item" data-aos="fade-right" key = {index}>
                <div className="flex-center icon-wrapper">
                  {item.icon}
                </div>
                <div className="title">{item.title}</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
