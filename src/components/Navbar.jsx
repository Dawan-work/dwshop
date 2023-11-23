import { DesktopNav } from "./DesktopNav";
import { MenuIcons } from "./MenuIcons";
import { useWindowSize } from "../hooks/useWindowSize";
import { DrawerMenu } from "./DrawerMenu";
import { useState } from "react";
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";

export const Navbar = () => {
    // custom hook 
    const {desktop, mobile} = useWindowSize() 
    const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="shadow shadow-neutral py-5 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} title="Allez sur la page d'accueil">
         <img src={logo} alt="dwshop" className="w-29 h-16" />
        </Link>
        {/* Menu desktop */}
        { desktop && <DesktopNav />}
        { mobile  && <MenuIcons isOpen={isOpen} setIsOpen={setIsOpen} />}
        {/* Menu Mobile */}
        {(mobile && isOpen) && <DrawerMenu />}
      </div>
    </header>
  );
};
