import React from 'react'
import "./Contact.css"
import {contactOptions} from "../../sources"
function Contact() {
  return (
    <section id="contact" data-aos = "fade-zoom-in">
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option,index)=>(
              <div className="flex-center option" data-aos = "fade-right" key ={index}>
                <div className="flex-center icon-wrapper">{option.icon}</div>
                <h4 className="muted">{option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            ))
          }
        </div>
        <div className="contact-form" data-aos = "fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">contact me!</span>
            </h1>
            <p className="muted">
              I build with precision and passion, creating web projects that
              stands out. It's as straightforward as that!
            </p>
          </div>
          <div className="middle">
            <div className="flex row">
              <input type="text" placeholder='First name' name='firstname' className='control'/>
              <input type="text" placeholder='Last name' name='lastname' className='control'/>
            </div>
            <div className="flex row">
              <input type="email" placeholder='Email address' name='email' className='control'/>
              <input type="tel" placeholder='Phone number' name='phone' className='control'/>
            </div>
            <textarea name="message" cols ={30} rows = {10} placeholder='message' className='control'></textarea>
          </div>
          <div className="bottom">
            <div className="flex-center button">
              <button className="btn btn-primary primary">Send Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
