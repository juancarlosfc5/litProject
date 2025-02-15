import { LitElement, html } from 'lit';
export class SecondElement extends LitElement {
    static properties = {
        checked: {},    
    };

    constructor(){
        super();
        this.checked = false;
    }

    render() {
        return html`
            <div>
            <!-- TODO: Add expression to input. -->
            <input type="text" value="Hello there." ?disabled=${!this.checked}>
            </div>
            <label><input type="checkbox" @change=${this.setChecked}> Enable editing</label>
        `;
    }

    setChecked(event){
        this.checked = event.target.checked;
        console.log(this.checked);
    }
}

customElements.define('second-element', SecondElement);