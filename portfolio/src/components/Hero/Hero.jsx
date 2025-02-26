import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import Achievements from '../../Commons/Achievements/Achievements'
function Hero() {
  return (
    <section id = 'hero'>
      <div className="wrapper info-container">
        <div className="column">
          <h3 className = "sub-title" data-aos = "fade-right">
            Hi, I'm <span className="primary"> Atul Bora</span>
          </h3>
          <h1 className = "heading-1" data-aos ="fade-up">
             A <span className="gradient-text">Java Fullstack</span> Developer
          </h1>
          <p className = "muted" data-aos ="fade-up" data-aos-delay = "300">
          A passionate Web Developer with a focus on Java. I specialize in creating clean, efficient, and user-friendly web applications that solve real-world problems. With a deep understanding of Java and web technologies.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to = 'services' smooth = {true} className = 'btn primary button' data-aos = "fade-left" data-aos-delay = "1200" data-aos-offset = "50">Learn more</Link>
            <Link to = 'contact' smooth = {true} className = 'btn button' data-aos = "fade-left" data-aos-delay = "1500" data-aos-offset = "50">get Started</Link>
          </div>
        </div>
        <div className = "column hero-image" data-aos = "fade-left" data-aos-delay = "300">
          {/* <img src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97f8c592-d092-4f7f-8c2c-81ef6a8cca0e/dfrx5e0-89e454a5-3ab2-42d3-8491-92c5056ff68e.jpg/v1/fill/w_730,h_1095,q_70,strp/anime_kid_programming_by_eranium1_dfrx5e0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzA3MiIsInBhdGgiOiJcL2ZcLzk3ZjhjNTkyLWQwOTItNGY3Zi04YzJjLTgxZWY2YThjY2EwZVwvZGZyeDVlMC04OWU0NTRhNS0zYWIyLTQyZDMtODQ5MS05MmM1MDU2ZmY2OGUuanBnIiwid2lkdGgiOiI8PTIwNDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mmmjpv-fJa7Qmr00p-nZU3R9laMF5O6FQ3Dn6rHgXv0" alt =""/> */}
          <img src = "https://static.vecteezy.com/system/resources/previews/029/364/941/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg" alt = ""/>
        </div>
      </div>
      <div className="achievement-cluster">
          <div className="wrapper">
            <Achievements />
          </div>
      </div>
    </section>
  )
}

export default Hero
