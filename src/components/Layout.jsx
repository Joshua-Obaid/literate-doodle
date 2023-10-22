import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import Footer from "./Footer";

export default function Layout(){
    return(
        <>
        <Navbar/>
        <div className="flex">
        <SidePanel/>
        <Outlet/>
        </div>
        <Footer/>
             
        </>
    )
}