//||||||||||||||| ROUTAGE FRONT END |||||||||||||||||
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";

// 5
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// 6
const getParams = match => {
    const values = match.isMatch.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(isMatch => isMatch[1]);
    //console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

const router = async () => {
    console.log(pathToRegex("/post/:id"));
    // 1. Définir les routes
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/post-view/:id", view: PostView},
        { path: "/settings", view: Settings},
    ];

    // 2. Utiliser la méthode map pour créer un tableau de correspondances potentielles
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname.match(pathToRegex(route.path)),
        };
    });
    // 3. Trouver la première correspondance dans le tableau `potentialMatches`
    let match = potentialMatches.find(
        (potentialMatches) => potentialMatches.isMatch
    );

    // 4. Si aucune correspondance, on utilise la route par défaut
    if (!match) {
        match = {
            route: routes[0],
            isMatch: [location.pathname],
        };
    }
    //console.log("Match:", match.route.view);

    // 5. On instancie la classe correspondante
    const view = new match.route.view(getParams(match));

    document.querySelector('#app').innerHTML = await view.getHTML();
};


// Fonction pour naviguer vers une URL spécifiée
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

//7 Gestion de l'historique du navigateur
window.addEventListener("popstate", router);

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

