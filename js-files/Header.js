class Header extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="../css/Header.css">
        <h1>
            <header id="header">instAcads</header>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#classes">Classes</a>
                <a href="#Achievements">Achievements</a>
                <div class="topnav-right">
                    <a href="#profile">John Osias</a>
                    <a href="#logout">Log Out</a>
                </div>
            </div>
        </h1>
        `;
    }
}

customElements.define('custom-header', Header);