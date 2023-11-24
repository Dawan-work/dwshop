import React from "react";
import { ShoppingBag } from "react-feather";
import { HeaderItem } from "./HeaderItem";
import { useSelector } from "react-redux";

export const DesktopNav = () => {

  // useSelector
  const counter = useSelector(state => state.counter.counter)
  return (
    <nav>
      <ul className="flex items-center gap-10">
        <HeaderItem href={"/products"} title="Boutique" />
        <HeaderItem href={"/contact"} title="Contact" />
        <HeaderItem href={"/login"} title="Se Connecter" />
        <HeaderItem href={"/register"} title="S'inscrire" />
        <li>
          <button className="hover:bg-neutral p-2 rounded-full hover:text-secondary hover:scale-105">
            <ShoppingBag />
          </button>
        </li>
        <li>
          {counter}
        </li>
      </ul>
    </nav>
  );
};
