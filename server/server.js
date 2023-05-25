const express = require('express');
const path = require('path');
const port = 3000;

const app = express();


app.use(express.json());


app.get('/', (req,res) => {
  console.log('hello there');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const getData = async () => {
//   try {
//     const req = await fetch(url);
//     const result = await req.json();
//     setRecipes(result.hits.map(hit => hit.recipe));
//   } catch (err) {
//     console.log('Error:', err);
//   }
// }
module.exports = app;