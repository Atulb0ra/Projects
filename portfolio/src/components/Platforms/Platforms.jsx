import React from 'react'
import "./Platforms.css"
import { SiLeetcode } from 'react-icons/si'
import { SiCodingninjas } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
function Platforms() {
  return (
      <section id="platforms">
        <h2>My Coding Platforms</h2>
        <div class="platforms-container">
            <a href="https://leetcode.com/u/code_by_atul/" target="_blank" class="platform">
              <SiLeetcode />
              LeetCode
            </a>
            <a href="https://www.geeksforgeeks.org/user/atulboqnt6/" target="_blank" class="platform">
             <SiGeeksforgeeks />
              GeeksforGeeks
            </a>
            <a href="https://www.naukri.com/code360/profile/70fd109f-6423-4e10-8240-68ed2bca6582" target="_blank" class="platform">
             <SiCodingninjas />
              Coding Ninjas
            </a>
        </div>
      </section>
  )
}

export default Platforms
