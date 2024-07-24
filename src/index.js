import React from 'react';
import ReactDOM from 'react-dom/client';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon-details/:id" element={<PokemonDetails />} />
    </Routes>
  </HashRouter>
);