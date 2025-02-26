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
          Hi there! I'm a passionate web developer with a strong foundation in coding, especially in Java. 
          I love building dynamic, user-friendly websites and web applications. My expertise includes designing
          responsive, efficient, and scalable websites using various web technologies, with a particular focus
          on Java development. I enjoy solving complex problems and continually improving my coding skills to 
          stay up to date with the latest industry trends.
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
