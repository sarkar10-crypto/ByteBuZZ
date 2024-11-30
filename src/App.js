import React from 'react'
 import "./App.css"
import Search from './Components/Search'
import Pageinition from './Components/Pageinition'
import Stories from './Components/Stories'
import Logo from './Components/logo'


const App = () => {
  
   return (
     <>    
       <Logo /> 
       
       <Search />
       <Pageinition />
       <Stories/>
     </>
   )
 }
 
 export default App
 