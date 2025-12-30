import React from 'react'
import './Programs.css'
import program_1 from '../../assets/joecalih-WyBizVgCrDY-unsplash.png'
import program_2 from '../../assets/fotos-05Uj5-S6DJ8-unsplash.png'
import program_3 from '../../assets/steward-masweneng-HStSHE55C5k-unsplash.jpg'
import prgram_icon_1 from '../../assets/study.png'
import prgram_icon_2 from '../../assets/graduation-cap.png'
import prgram_icon_3 from '../../assets/self-directed-learning.png'


const Programs = () => {
  return (
    <div className = 'programs' id = 'Programs'>
      <div className="program">
        <img src = {program_1} alt = ""/>
        <div className="caption">
            <img src={prgram_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src = {program_2} alt = ""/>
        <div className="caption">
            <img src={prgram_icon_2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src = {program_3} alt = ""/>
        <div className="caption">
            <img src={prgram_icon_3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
