import React, { useState } from 'react'
import { Menu, ShoppingBag, X } from "react-feather";


export const MenuIcons = ({isOpen, setIsOpen}) => {
  return (
    <div className="flex gap-3">
    {/* Menu burger */}
    <button
     onClick={() => setIsOpen(!isOpen)}
     className="hover:bg-neutral p-2 rounded-full hover:text-secondary hover:scale-105">
     {isOpen ? <X /> : <Menu />}
    </button>
    {/* Panier */}
    <button className="hover:bg-neutral p-2 rounded-full hover:text-secondary hover:scale-105">
      <ShoppingBag />
    </button>
  </div>
  )
}
