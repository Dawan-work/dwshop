import React from "react";
import { ShoppingBag } from "react-feather";

export const DesktopNav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        <li>
          <a className="text-lg hover:text-secondary font-semibold" href="#">
            Nos Produits
          </a>
        </li>

        <li>
          <a className="text-lg hover:text-secondary font-semibold" href="#">
            Contact
          </a>
        </li>
        <li>
          <a className="text-lg hover:text-secondary font-semibold" href="#">
            Se Connecter
          </a>
        </li>
        <li>
          <a className="text-lg hover:text-secondary font-semibold" href="#">
            S'inscrire
          </a>
        </li>
        <li>
          <button className="hover:bg-neutral p-2 rounded-full hover:text-secondary hover:scale-105">
            <ShoppingBag />
          </button>
        </li>
      </ul>
    </nav>
  );
};
