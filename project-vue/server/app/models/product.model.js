// défini le modèle product 
// par defaut, sequelize ajoute les attributs id, createdAt et updatedAt à chaque modèle pour suivre les changements
module.exports = (connex, Sequelize) => {
    const Product = connex.define("product", {
        name:{
            type: Sequelize.STRING
        },
        photo:{
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.REAL
        },
        description:{
            type: Sequelize.REAL
        },
        type:{
            type: Sequelize.STRING
        },
    })
    return Product;
}