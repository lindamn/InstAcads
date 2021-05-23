class Achievement extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    get symbol(){
        return this.getAttribute('symbol');
    }

    get date(){
        return this.getAttribute('date');
    }

    get title(){
        return this.getAttribute('title');
    }

    get description(){
        return this.getAttribute('description')
    }

    render(){
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="../css/Achievement.css">
            <div id="main-container">
                <img src=${this.symbol}>
                <div id="content-container">
                    <p id="date">${this.date}</p>
                    <p id="title">${this.title}</p>
                    <p id="description">${this.description}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('achievement-item', Achievement);
