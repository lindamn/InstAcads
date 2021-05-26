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

    get summary(){
        return this.getAttribute('summary')
    }

    render(){
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="Achievement.css">
            <div id="main-container">
                <img src=${this.symbol}>
                <div id="content-container">
                    <p id="date">${this.date}</p>
                    <p id="title">${this.title}</p>
                    <p id="summary">${this.summary}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('achievement-item', Achievement);
