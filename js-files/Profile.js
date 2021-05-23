class Profile extends HTMLElement{
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

    get bio(){
        return this.getAttribute('bio');
    }

    get univ(){
        return this.getAttribute('univ');
    }

    get degree(){
        return this.getAttribute('degree')
    }

    get year(){
        return this.getAttribute('year')
    }

    get join(){
        return this.getAttribute('join')
    }

    get bday(){
        return this.getAttribute('bday')
    }

    get friend(){
        return this.getAttribute('friend')
    }

    get class(){
        return this.getAttribute('class')
    }
 
    render(){
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="../css/Profile.css">
            <div id="main-container">
                <div id="content-container">
                    <p id="info1">${this.name}</p>
                    <p id="info2">${this.bio}</p>
                    <br/><br/>
                    <p id="info3">${this.univ}</p>
                    <p id="info3">${this.degree}</p>
                    <p id="info3">${this.year}</p>
                    <br/><br/>
                    <p id="info3">Joined ${this.join}</p>
                    <p id="info3">Born ${this.bday}</p>
                    <br/><br/>
                    <p id="info3">Friends ${this.friend}</p>
                    <p id="info3">Classes ${this.class}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('account-profile', Profile);
