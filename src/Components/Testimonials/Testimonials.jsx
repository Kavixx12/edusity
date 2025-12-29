import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../Assets/next.png'
import back from '../../Assets/back.png'
import user_1 from '../../Assets/user_1.png'
import user_2 from '../../Assets/user_2.png'
import user_3 from '../../Assets/user_3.png'
import user_4 from '../../Assets/user_4.png'

const Testimonials = () => {

 
    const slider = useRef();
    
    
    let tx = 0; 
    

    const slideForward = () => {
       
        if(tx > -50){ 
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
       
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                        <img src={user_1} alt="" /> 
                        <div>
                            <h3>Jineth Bosilu</h3>
                            <span>Edulog,Srilanka</span>
                        </div>   
                        </div>    
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions I've ever made. The supportive community, 
                            state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                        <img src={user_2} alt="" /> 
                        <div>
                            <h3>Ishini Shenaya</h3>
                            <span>Edulog,Srilanka</span>
                        </div>   
                        </div>    
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions I've ever made. The supportive community, 
                            state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                        <img src={user_3} alt="" /> 
                        <div>
                            <h3>Rukshan Maduranga</h3>
                            <span>Edulog,Srilanka</span>
                        </div>   
                        </div>    
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions I've ever made. The supportive community, 
                            state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                        <img src={user_4} alt="" /> 
                        <div>
                            <h3>Manumi Methvindi</h3>
                            <span>Edulog,Srilanka</span>
                        </div>   
                        </div>    
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions I've ever made. The supportive community, 
                            state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials