import React, { useState, useEffect } from 'react';
import {SearchBar} from "./components/SearchBar.jsx";
import {SocialMedia} from "./components/SocialMedia.jsx";
import {PresetRecipes} from "./components/PresetRecipes.jsx";
//import Recipe from "./components/Recipe.jsx";
//import PresetContainer from './components/PresetContainer.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom'//import PresetContainer from './components/PresetContainer.jsx';


const App = () => {
  return (
  
    // <BrowserRouter>
      <Routes>
          <Route index element={<SearchBar />} />
          <Route exact path="/PresetRecipes" element={<PresetRecipes />}/>
      </Routes>  
    // </BrowserRouter>  
    

     );
   }
   
   //{recipes.map(recipe => <h2>{recipes[0].label}</h2>)}
   export default App;

     
         
      
      
      
      

