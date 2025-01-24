import { LitElement, html } from 'lit';
export class FirstElement extends LitElement {
    static properties = {
        name: {},    
    };

    constructor(){
        super();
        this.name = 'Your name here';
    }

    render() {
        return html`
            <p>Hello ${this.name} From first-element.</p>
            <input @input=${this.changeName} placeholder="Enter your name">
        `;
    }

    changeName(event){
        const input = event.target;
        this.name = input.value;
    }
}

customElements.define('first-element', FirstElement);