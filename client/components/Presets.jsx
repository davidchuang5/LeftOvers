import React, { useState, useEffect } from 'react';
import Genre from './GenrePage.jsx';
import { PresetRecipes } from './PresetRecipes.jsx';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';

const Preset = ({ app_id, app_key, genre, image, key }) => {
  const [recipes, setRecipes] = useState([]);
  //const [showGenre, setShowGenre] = useState(false);
  const url = `https://api.edamam.com/search?q=${image}&app_id=${app_id}&app_key=${app_key}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(url);
        const result = await req.json();
        setRecipes(result.hits.map((hit) => hit.recipe));
      } catch (err) {
        console.log('Error:', err);
      }
    }
    fetchData();
  }, [url]);

  return (
    <>
      <div id="Genres">
        <Link image={image} genre={genre} style={{ textDecoration: 'none' }} to="/PresetRecipes">
          <div className="hover">
            <h1 id="font" className="presetNames" style={{ color: 'black' }}>
              {genre}
            </h1>

            {recipes.length > 0 && <img src={recipes[0].image} className="roundedimg" />}
          </div>
        </Link>
      </div>
      <Routes>
        <Route path="/PresetRecipes" element={<PresetRecipes genre={genre} />} />
      </Routes>
    </>
  );
};

export default Preset;

// const renderGenre =  () => {
//   //Make another fetch request to generate the recipes list
//   setShowGenre(true);
// }

// let navigate = useNavigate();
// const onClick = () => {
//  let path = '/Korean';
//  navigate(path);
// }
//   <Routes>
//   <Route path="/Korean" element={<Korean />}/>
// </Routes>

//{recipes.length > 0 && <img src={recipes[0].image} className="roundedimg" />}
