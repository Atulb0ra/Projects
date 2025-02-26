import React from 'react'
import "./SkillCard.css"
import { BsPatchCheckFill } from 'react-icons/bs'


function SkillCard({data, title}) {
  return (
    <div className ="skill-card" data-aos = "fade-right">
      <h3 className="title gradient-text">{title}</h3>
      <div className="skill-content" >
        {
            data.map((item, index) => (
                <div className="skill-details" key = {index}>
                    <BsPatchCheckFill className = "skill-icon"/>
                    <div className="details">
                        <h4 className="skill-name">{item.skill}</h4>
                        <div className="muted skill-level">{item.level}</div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default SkillCard
