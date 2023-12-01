import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor(params){
        super(params);
        this.setTitle("Post View");
    }

    async getHTML(){
        //recuperer la données dans le json
        async function getData(url){
            const response = await fetch(url);
            return response.json();
        }
        const data = await getData("/static/data/posts.json");

        const id = Number(this.params.id); //passe en string donc on doit le convertir en int

        // on cherche dans le tableau data l'objet qui a l'id correspondant
        const post = data.find(item => item.id === id);

        return `
        <h1>${post.title}</h1>
        <p>${post.description}</p>
        <a data-link href= "/posts" >Retour aux posts</a>
        `;
    }
}