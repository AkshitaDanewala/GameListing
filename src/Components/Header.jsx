import React, { useEffect, useState } from 'react'
import logo from "./../assets/Images/img2.jpg"
import { FiSearch } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { useContext } from 'react';
import { Themecontext } from '../Usecontext/Themecontext';

const Header = () => {

  const [toggle, settoggle] = useState(true)
const {theme, setTheme} = useContext(Themecontext)


useEffect(()=>{
console.log("theme", theme)
}, [])

  return (
    <div className='flex items-center p-3'>
        <img src={logo} width={50} height={50} className='rounded-full' />

        <div className='searchbar flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <FiSearch />
         <input type="text" placeholder='Search Games' className=' bg-transparent outline-none px-2 ' />
        </div>

<div className="moondiv">
 {theme =='light'?(
 <HiMoon 
 className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' 
 onClick={()=> {setTheme("dark"); localStorage.setItem("theme", "dark")}}/>
 ): (
 <HiSun  
 className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
 onClick={()=> {setTheme("light"); localStorage.setItem("theme", "light")}}/>) } 

</div>

    </div>
  )
}

export default Header