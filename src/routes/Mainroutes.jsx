import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingleRecipes from '../pages/SingleRecipes'
import Pagenotfound from '../pages/Pagenotfound '
import Fav from '../pages/Fav'



function Mainroutes() {
  return (
    <div>
        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/about'  element={<About/>}/>
            <Route  path='/recipes' element={<Recipes/>}/>
            <Route  path='/recipes/details/:id' element={<SingleRecipes/>}/>
            <Route  path='/create-recipies' element={<Create/>}/>
            <Route path='/fav' element={<Fav />} />
            

            <Route path='*' element={<Pagenotfound />} />
        </Routes>
    </div>
  )
}

export default Mainroutes
