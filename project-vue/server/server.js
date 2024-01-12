// Point d'entrée du serveur

// Importation des modules nécessaires -> require()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8081' // Adresse du serveur front (port 8081) -> origine des requêtes
};
app.use(cors(corsOptions)); // Configuration du CORS (Cross-Origin Resource Sharing)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // Configuration pour la réception des requêtes 

//TEST POUR VOIR SI LE SERVEUR MARCHE
// req->ce quon envoie au serveur
// res->ce que le serveur renvoie au client
// app.get('/', (req, res) => {
//     res.json({ message: 'Bienvenue sur le serveur de l\'application Vue.js' });  
// });

const PORT = 8082; // Port d'écoute du serveur
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}.`);
})

// Base de données | Server: MySQL:3306 Database: db_product
const db = require("./app/models"); // Importation de l'index du dossier models
db.connex.sync()