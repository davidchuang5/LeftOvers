import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import './styling/styles.scss';
import { createRoot } from 'react-dom/client';
import {PresetRecipes} from "./components/PresetRecipes.jsx";


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
<BrowserRouter>
  <Routes>
    <Route path="*" element={<App />} />
    <Route path="/PresetRecipes" element={<PresetRecipes />} />
  </Routes>
</BrowserRouter>
);

// render(<App />, document.getElementById('root'));
