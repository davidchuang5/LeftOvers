import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import NutrionalFacts from './NutritionalFacts.jsx';


const app_id = '52e7be0b';
const app_key = '7de187828ceb784576dcf3a5a70fd57a';
// const testArr =[{label:'hi', image:'yo', ingredient: 'lettuce'},
// {label:'hello', image:'yoohoo', ingredient: 'tomato'},
// {label:'hey', image:'howdy', ingredient: 'pigsklin'}]

export const PresetRecipes = (props) => {
  const { genre } = props;
  let navigate = useNavigate();
  const [list, setList] = useState([]);
  const [nutrFactsShow, nutrFactsSetShow] = useState(false);
  const url = `https://api.edamam.com/search?q=${genre}&app_id=${app_id}&app_key=${app_key}`;


  
  const getCall = async () => {
      try {
        const req = await fetch(url) ;
        const result = await req.json();
        setList(result.hits.map(hit => hit.recipe));
      } catch (err) {
        console.log('Error:', err);
      }
    }
  
  useEffect(() => {
    
    getCall();
    console.log('List', list);
  })
 
  

    function handleClick(){
    navigate('/', { replace: true });
  }
    
  
return(
  <>
<div style={{ backgroundColor: 'pink' }}>
 <h1 id='font'>Under maintenance. For now enjoy this cool back button and use your imagination.</h1>
 <button id='font'onClick={handleClick}>Go back</button>
</div>
{
  list !== [] &&
  list.map((ele,i) => (
<div className='recipes hover'>
  <h2 id='font' className='center' key={i}>{ele.label}</h2>
  <div className='center'>
    <img key={i} src={ele.image} className='resultsimg'/>
  </div>
  <p id='font' style= {{ fontSize: '17px', marginLeft: '20px', marginRight: '20px'}}>
    A dish delivered by {ele.source}, containing {ele.ingredients.length} ingredients.
  </p>
  <div className='info'>
    <a className='linkfont' href={ele.url} target='_blank' rel='noopener noreferrer'>Read More</a>
   
    <button id='font'className='buttons' onClick = {() => nutrFactsSetShow(!nutrFactsShow)}>Nutritional Facts</button>
    {nutrFactsShow && <NutrionalFacts calories={calories} />}
  </div>
</div>
))} 
</>

)
}

//recipes =[{label: chicken, image: img, },{},{},{}]

// {testArr.map((ele,i) => (
//   <div>
//     <h1>{ele.label}</h1>
//     <h2>{ele.ingredient}</h2>
//     <h3>{ele.image}</h3>
//   </div>
// ))}

