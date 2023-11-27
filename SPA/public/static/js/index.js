//||||||||||||||| ROUTAGE FRONT END |||||||||||||||||

import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const router = async () => {
    // 1. Définir les routes
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings},
    ];

    // 2. Utiliser la méthode map pour créer un tableau de correspondances potentielles
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });
    // 3. Trouver la première correspondance dans le tableau `potentialMatches`
    let match = potentialMatches.find(
        (potentialMatches) => potentialMatches.isMatch
    );
    //console.log("Potential matches:", potentialMatches);

    // 4. Si aucune correspondance, on utilise la route par défaut
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    //console.log("Match:", match.route.view);

    // 5. On instancie la classe correspondante
    const view = new match.route.view;
    document.querySelector('#app').innerHTML = await view.getHTML();
};


// Fonction pour naviguer vers une URL spécifiée
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

// Prévient le rechargement de la page et utilise la fonction navigateTo
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router();
});
