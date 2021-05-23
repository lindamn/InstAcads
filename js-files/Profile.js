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
 
    update() {
        var name = document.getElementById('name');
        var bio = document.getElementById('bio');
        var univ = document.getElementById('univ');
        var degree = document.getElementById('degree');
        var year = document.getElementById('year');
        var bday = document.getElementById('bday');

        alert(input.value);
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="../css/Profile.css">
            <div id="main-container">
                <div id="content-container">
                    <p id="info1">name.value</p>
                    <p id="info2">bio.value</p>
                    <br/><br/>
                    <p id="info3">${this.univ}</p>
                    <p id="info3">${this.degree}</p>
                    <p id="info3">${this.year} Level</p>
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
                    <p id="info3">${this.year} Level</p>
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
