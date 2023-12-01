import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor(params){
        super(params);
        this.setTitle("Posts");
    }

    async getHTML(){
        
        async function getData(url){
            const response = await fetch(url);
            return response.json();
        }
        const data = await getData("/static/data/posts.json");

        let listPost = "<ul>";
        data.forEach(post => {
            listPost += `<li><a data-link href="/post-view/${post.id}">${post.title}</a></li>`;
        });
        listPost += '</ul>'

        return `<h1>Les derniers posts</h1> <div> ${listPost}</div>`;
    }
}