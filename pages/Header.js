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
            <header id="header"><img src="logowhite.png" width="10%"/></header>

            <header>
                <div class="topnav">
                <a class="active" href="HomePage.html">HOME</a>
                <a href="MyClasses.html">CLASSES</a>
                <a href="Tasks.html">TASKS</a>
                <a href="Achievements.html">ACHIEVEMENTS</a>
                    <div class="topnav-right">

                         <! -- EDIT NAME -->
                        <a href="Profile.html">KUYUKOTU</a>
                        <a href="LoginPage.html">LOG OUT</a>
                    </div>
                </div>
            </header>

        `;
    }
}

customElements.define('custom-header', Header);
