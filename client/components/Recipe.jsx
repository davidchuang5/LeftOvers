import React, {useState, useEffect} from 'react';
import NutrionalFacts from './NutritionalFacts.jsx';

const Recipe = ({recipe}, {key}) =>{
  const [recipeDetailsShow, recipeSetShow] = useState(false);
  const [nutrFactsShow, nutrFactsSetShow] = useState(false);
  const { label, image, url, ingredients, calories, source,  } = recipe
  



  return(
      <div className='recipes hover'>
        <h2 id='font' className='center' key={`label${key}`}>{label}</h2>
        <div className='center'>
          <img key={`img${key}`} src={image} className='resultsimg'/>
        </div>
        <p id='font' style= {{ fontSize: '17px', marginLeft: '20px', marginRight: '20px'}}>
          A dish delivered by {source}, containing {ingredients.length} ingredients.
        </p>
        <div className='info'>
          <a className='linkfont' href={url} target='_blank' rel='noopener noreferrer'>Read More</a>
         
          <button id='font'className='buttons' onClick = {() => nutrFactsSetShow(!nutrFactsShow)}>Nutritional Facts</button>
          {nutrFactsShow && <NutrionalFacts calories={calories} />}
        </div>
      </div>

  ) 

}

export default Recipe;
        
        
        