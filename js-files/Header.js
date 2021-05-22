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
            <header id="header">instAcads</header>

            <header>
                <div class="topnav">
                <a class="active" href="#home">HOME</a>
                <a href="#classes">CLASSES</a>
                <a href="#Achievements">ACHIEVEMENTS</a>
                    <div class="topnav-right">
                        <a href="#profile">JOHN OSIAS</a>
                        <a href="#logout">LOG OUT</a>
                    </div>
                </div>
            </header>

        `;
    }
}

customElements.define('custom-header', Header);
