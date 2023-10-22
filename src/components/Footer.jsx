import {AiOutlineArrowRight} from 'react-icons/ai'
import chatbot from '../assets/chatbot.jpg'

export default function Footer(){
    return(
        <footer className="flex">
            <div className="news flex">
                <p className="news-text">NEWS</p>
            </div>
            <div className="red-text flex">
                <p className="">Lgs Johar Town Announced Holidays On Accout Of Independence Day From 14TH August To 16TH August 2023</p>
                <div className="arrow"><AiOutlineArrowRight size={20}/></div>
            </div>
            <div className="chatbot-cot">
            <img src={chatbot} alt="" className='chat'/>
            </div>
        </footer>
    )
}