import React from 'react'
import "./Skills.css"
import {skills} from "../../sources"
import SkillCard from './skillCard/SkillCard'
function Skills() {
  return (
    <section id="skill">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos = "fade-right">
            <span className="gradient-text">My skills</span>
          </h1>
        </div>
        <div className="skills-container">
          {
            skills.map((skill, index) => (
              <SkillCard
                {...skill}
                key ={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
