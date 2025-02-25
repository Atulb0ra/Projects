import React, {useState, useEffect} from 'react'
import "./Achievements.css"
import Odometer from 'react-odometerjs';
function Achievements() {
    const[experience, setExperience] = useState(0);
    const[question, setQuestion] = useState(0);
    const[project, setProject] = useState(0);

    useEffect(()=>{
        const timeOutId = setTimeout(() =>{
            setExperience(0);
            setQuestion(1000);
            setProject(5);
        },1200)

        return () =>clearTimeout(timeOutId);
    },[])
  return (
    <div className = "achievement-container">
      <div className="card">
        <div className="flex-center">
            <Odometer value = {experience} className = 'title' />
            <h1 className="title">+</h1>
        </div>
        <p className="muted name">Years Of Experience</p>
      </div>

      <div className="card">
        <div className="flex-center">
            <Odometer value = {question} className = 'title' />
            <h1 className="title">+</h1>
        </div>
        <p className="muted name">Question solved on Coding platforms</p>
      </div>

      <div className="card">
        <div className="flex-center">
            <Odometer value = {project} className = 'title' />
            <h1 className="title">+</h1>
        </div>
        <p className="muted name">Completed Projects</p>
      </div>
    </div>
  )
}

export default Achievements
