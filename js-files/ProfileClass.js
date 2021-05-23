class ProfileClass extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
    
    get class(){
        return this.getAttribute('class');
    }

    get section(){
        return this.getAttribute('section')
    }

    render(){
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="../css/ProfileClass.css">
            <div id="main-container">
                <img src="../imgs/book.png"></img>
                <div id="content-container">
                    <p id="class">${this.class}</p>
                    <p id="section">${this.section}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('enrolled-class', ProfileClass);
