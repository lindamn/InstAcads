class MyProgressBar extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="../css/ProgressBar.css">
        <div>
            <div id="progressBar">
                <div id="barStatus"></div>
            </div>
        </div>

        `;
    }
}

customElements.define('progress-bar', MyProgressBar);