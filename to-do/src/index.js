/* Point d'entré de l'application */
// Toutes les librairies utilisées sont importées ici Point d'entrée de l'application React. Il initialise le rendu du composant principal dans le DOM.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import du fichier CSS
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'; // Import du fichier CSS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Affichage des composants
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
