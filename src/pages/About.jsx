import jti from '../assets/jti.png'
import lgsjti from '../assets/lgsjti.png'
import tube from '../assets/tube.png'
import aboutGirl from '../assets/aboutGirl.png'

export default function About(){
    return(
        <main className="about flex">
            <div className="left">
                <div className="flex img-cont">
                    <img src={jti} alt=""  className='about-img'/>
                    <img src={lgsjti} className='about-img lgsjti'/>
                </div>
                <p className="about-text"> LGS Johar Town International's mission is to develop lifelong learners who are confident, compassionate, and committed to see education, and the process of acquiring both knowledge and understanding, as the ultimate means to a more peaceful, progressive, and sustainable world.</p>
            
                <div className="tube-cont">
                <div className="tubes flex">
                    <img src={tube} alt="" className='tube-img'/>
                    <p className="tube-text">OUR PHILOSOSPHY</p>
                </div>
                <div className="tubes flex">
                    <img src={tube} alt="" className='tube-img'/>
                    <p className="tube-text">LEARNER PROFILE</p>
                </div>
                <div className="tubes flex long">
                    <img src={tube} alt="" className='tube-img'/>
                    <p className="tube-text ">RIGHTS AND RESPONSIBILITIES</p>
                </div>
                <div className="tubes flex">
                    <img src={tube} alt="" className='tube-img'/>
                    <p className="tube-text">PEDAGOGY</p>
                </div>
                </div>
            </div>
                <div className="right">
                    <img src={aboutGirl} alt="brown girl" className='girl'/>
                </div>
            
        </main>
    )
}