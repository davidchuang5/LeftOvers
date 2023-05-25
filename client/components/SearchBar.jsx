import React, { useState, useEffect } from 'react';
import Recipe from './Recipe.jsx'
import PresetContainer from './PresetContainer.jsx';
import {SocialMedia} from './SocialMedia.jsx';
import { useNavigate } from 'react-router-dom';

const app_id = '52e7be0b';
const app_key = '7de187828ceb784576dcf3a5a70fd57a';

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getData = async () => {
  try {
    const req = await fetch(url);
    const result = await req.json();
    setRecipes(result.hits.map(hit => hit.recipe));
    setIsLoaded(false);
  } catch (err) {
    console.log('Error:', err);
  }
}
  useEffect(() => {
    console.log('Recipes:', recipes);
    
  }, [recipes]);

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
    
  }
  //let navigate = useNavigate();
  
  // function handleClick(){
  //   navigate('/', { replace: true });
  // }
    
  // let navigate = useNavigate();
    
  // const routeChange = () => {
  //   let path = '/Recipe';
  //   navigate(path);
  // }
  
  return (
    <div>
      <SocialMedia />
      <h1 className='center hover' id='titlefont'>Leftovers</h1>
      <form className='searchBar' onSubmit={onSubmit}>
        <input className='searchFood' type='text' placeholder='List ingredients here :)' onChange={onChange} />
        <input className='enjoyBtn hover' type='submit' value="Enjoy" onSubmit={onSubmit} />
      </form>
      {isLoaded && <PresetContainer setRecipes={setRecipes} recipes={recipes} app_id={app_id} app_key={app_key}/>}
      <div className='grid'>
        {recipes.map((recipe,i) => (
          <Recipe recipe={recipe} key={i} />
        ))}
      </div>
    </div>
  );
}
        
        


             

         

