import emblem from '../assets/emblem.jpeg'
import jti from '../assets/jti.png'
import lgsjti from '../assets/lgsjti.png'
import ib from '../assets/ib.png'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import {BiMenu} from 'react-icons/bi'

export default function Navbar(){
    return(
      <nav className="flex">
        <div className="logo-group flex">
            <div className="school-logo flex">
                <div className="emblem">
                    <img src={emblem} alt="lgs school emblem" className='emblem-img'/>
                </div>
                <div className="jti flex">
                    <img src={jti} alt="jti" />
                    <img src={lgsjti} alt="Lahore Grammer School Johar Town Tnternational" className='lgsjti-img'/>
                </div>
                
            </div>
            <div className="ib">
                    <img src={ib} alt="international baccalaraute logo" />
                </div>
        </div>
        <div className="search-group flex">
            <img src={search} alt="" />
            <p className="search">SEARCH</p>
        </div>
        <div className='menu-group flex'>
            <BiMenu color='#ff4000' size={55}/>
            <p className="menu">MENU</p>
        </div>
      </nav>
    )
}