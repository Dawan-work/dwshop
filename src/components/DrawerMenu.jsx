import React from 'react'
import { HeaderItem } from './HeaderItem'
export const DrawerMenu = () => {
    return (
  <div className="bg-neutral z-10 w-full  p-5 rounded-lg absolute top-16">
     <nav>
         <ul className='flex flex-col gap-3'>
          <li><HeaderItem href={"/products"} title="Boutique" /></li>
          <li><HeaderItem href={"/contact"} title="Contact" /></li>
          <li><HeaderItem href={"/login"} title="Se Connecter" /></li>
          <li><HeaderItem href={"/register"} title="S'inscrire" /></li>
         </ul>
     </nav>
  </div>
    )
}
