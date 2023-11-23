import { DesktopNav } from "./DesktopNav";
import { MenuIcons } from "./MenuIcons";
import { useWindowSize } from "../hooks/useWindowSize";
import { DrawerMenu } from "./DrawerMenu";
import { useState } from "react";

export const Navbar = () => {
    // custom hook 
    const {desktop, mobile} = useWindowSize() 
    const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="shadow shadow-neutral py-5 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <p>Dwshop </p>
        {/* Menu desktop */}
        { desktop && <DesktopNav />}
        { mobile  && <MenuIcons isOpen={isOpen} setIsOpen={setIsOpen} />}
        {/* Menu Mobile */}
        {(mobile && isOpen) && <DrawerMenu />}
      </div>
    </header>
  );
};
