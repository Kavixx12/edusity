import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-button.png'
import video_src from '../../assets/sample-video.mp4'

const About = () => {
  
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className='about' id='About'>
        
      
        <div className="about-left">
          <img src={about_img} alt="" className='about-img'/>

          
          {!playVideo && (
             <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayVideo(true)}/>
          )}
          
     
          {playVideo && (
            <video src={video_src} autoPlay controls className='about-video-overlay'></video>
          )}
        </div>

      
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>
            Embark on a transformative educational journey with our university's comprehensive education programs. 
            Our cutting-edge curriculum is designed to empower students with the knowledge, skills, 
            and experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized mentorship, 
            our programs prepare aspiring educators to make a meaningful impact in classrooms, 
            schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or educational leader, 
            our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential 
            in shaping the future of education.
          </p>
        </div>
    </div>
  )
}

export default About