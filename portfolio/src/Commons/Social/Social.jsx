import React from 'react'
import {socialHandles} from '../../sources'
import "./Social.css"

function Social() {
  return (
    <div className = "handles-container">
      {
        socialHandles.map((handle, index) => (
            <a href = {handle.link} target = '_blank' className = 'flex-center icon-wrapper' key = {index}>
                {handle.icon}
            </a>
        ))
      }
    </div>
  )
}

export default Social
