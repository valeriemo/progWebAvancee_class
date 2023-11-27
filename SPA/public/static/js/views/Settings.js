import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHTML(){
        return `
        <h1>Settings</h1>
        <p>Vous pouvez modifier vos paramètres ici</p>        
        `;
    }
}