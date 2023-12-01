// FICHIER BACKEND
const express = require('express')
const path = require('path') // built-in module
const app = express()


// On doit créer une exeption pour le dossier public (css, js, img, etc)
app.use('/static', express.static(path.resolve(__dirname, 'public', 'static')))

// /* is a wildcard, meaning any route that is not defined will be handled by this route
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html')) // trouve le chemin absolu pour nous
})


app.listen(3000, () => console.log('Server is running on port 3000'))