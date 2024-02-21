import React, { useState } from 'react'
import logo from "./../assets/Images/img2.jpg"
import { FiSearch } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";

const Header = () => {

    const [toggle, settoggle] = useState(true)


  return (
    <div className='flex items-center p-3'>
        <img src={logo} width={50} height={50} className='rounded-full' />

        <div className='searchbar flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <FiSearch />
         <input type="text" placeholder='Search Games' className=' bg-transparent outline-none px-2' />
        </div>

<div className="moondiv">
 {toggle?<HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' 
 onClick={()=> settoggle(!toggle)}/>
 : <HiSun  className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
 onClick={()=> settoggle(!toggle)}/> } 

</div>

    </div>
  )
}

export default Header