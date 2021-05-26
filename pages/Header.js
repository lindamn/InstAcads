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
        <link rel="stylesheet" href="Header.css">
            <header id="header">instAcads</header>

            <header>
                <div class="topnav">
                <a class="active" href="HomePage.html">HOME</a>
                <a href="MyClasses.html">CLASSES</a>
                <a href="Achievements.html">ACHIEVEMENTS</a>
                    <div class="topnav-right">
                        <a href="Profile.html">JOHN OSIAS</a>
                        <a href="LoginPage.html">LOG OUT</a>
                    </div>
                </div>
            </header>

        `;
    }
}

customElements.define('custom-header', Header);
