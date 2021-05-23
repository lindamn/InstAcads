class OfflineClassmate extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
    
    get name(){
        return this.getAttribute('name');
    }

    get degree(){
        return this.getAttribute('degree')
    }

  

    render(){
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="../css/Classmate.css">
            <div id="main-container">
                <img src="../imgs/defaultpic.png" alt="profile picture"></img>
                <div id="content-container">
                    <p id="name">${this.name}</p>
                    <p id="degree">${this.degree}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('classmate-offline', OfflineClassmate);
