import React from "react";
import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ title, href }) => {
    // hook de react router dom 
    const { pathname } = useLocation()
  return (
    <li>
      <Link to={href}
       className={`${pathname === href && "border-b-4 border-secondary"} transition duration-300 pb-1 text-lg hover:text-secondary font-semibold`}
      >
        {title}
      </Link>
    </li>
  );
};
