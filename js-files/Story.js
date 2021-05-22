class Story extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    get status(){
        return this.getAttribute('status');
    }
    
    get icon(){
        return this.getAttribute('icon');
    }

    get application(){
        return this.getAttribute('application');
    }

  

    render(){
        this.shadow.innerHTML = `

            
            <link rel="stylesheet" href="../css/Story.css">
            <div id="main-container">
                <div id="content-container">
                    <p id="status">${this.status}</p>
                    <p id="application">${this.application}</p>
                </div>
                <img src=${this.icon}>
            </div>
            
        `;
    }
}

customElements.define('custom-story', Story);
