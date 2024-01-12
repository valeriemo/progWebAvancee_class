// Point d'entrée du dossier models

const dbConfig = require("../config/db.config.js"); // Importation de la configuration de la base de données
const Sequelize = require("sequelize"); // Importation du module Sequelize

// utilise la classe Sequelize pour créer une connexion à la bd (constructeur demande un objet de configuration)
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    PORT: 3306, // port par défaut de MySQL (pas nécessaire de le spécifier)
    operatorsAliases: false, // désactive les alias de requêtes
}) 

// Création d'un objet pour stocker les modèles Sequelize
const db = {}; // objet vide pour stocker les modèles Sequelize
db.Sequelize = Sequelize; // stocke la classe Sequelize dans l'objet db qui comprend les méthodes signature Sequelize
db.connex = connex; // stocke la connexion à la bd dans l'objet db
// import du model (table) dans la db:
db.products = require("./product.model.js")(connex, Sequelize); // stocke le modèle product dans l'objet db (j'envoi la connexion et la classe Sequelize)
module.exports = db; // exporte l'objet db