import { NavLink } from "react-router-dom"
import pointer from '../assets/pointer.png'

export default function SidePanel(){
    return(
        <aside className="flex">
            <div className="about flex">
                <img src={pointer} alt="" className="pointer"/>
            <NavLink to='/about'  className={({isActive})=>isActive ? 'black side-link' : 'side-link'}>ABOUT US</NavLink>
            </div>
            <NavLink to='/programmes'  className={({isActive})=>isActive ? 'black side-link' : 'side-link'}>PROGRAMMES</NavLink>
            <NavLink to='/facilities'  className={({isActive})=>isActive ? 'black side-link' : 'side-link'}>FACILITIES</NavLink>
            <NavLink to='/admission'  className={({isActive})=>isActive ? 'black side-link' : 'side-link'}>ADMISSION</NavLink>
            <NavLink to='/contact'  className={({isActive})=>isActive ? 'black side-link' : 'side-link'}>CONTACT</NavLink>
        </aside>
    )
}