import React, { createContext, useEffect, useState } from 'react'
import Home from "./Pages/Home"
import Header from "./Components/Header"
import { Themecontext } from './Usecontext/Themecontext'


const App = () => {
const [theme, setTheme] =  useState("light")
useEffect(()=>{
  setTheme(localStorage.getItem("theme")? localStorage.getItem("theme"): "dark")
}, [])

  return (
<Themecontext.Provider value={{theme, setTheme}}>

<div className={`${theme} ${theme == "dark" ? 'bg-[#121212]' :null}`} >

    <Header/>
    <Home/>

    </div>
  
</Themecontext.Provider>


    
  )
}

export default App