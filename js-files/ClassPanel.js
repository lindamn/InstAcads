class ClassPanel extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    get awardIcon(){
        return this.getAttribute('awardIcon');
    }
    
    get courseName(){
        return this.getAttribute('courseName');
    }

    get progress(){
        return this.getAttribute('progress');
    }

  

    render(){
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="../css/ClassPanel.css" />
            <div id="main-container">
                <div id="content-container">
                    <p>${this.courseName}</p>
                    <h2>You are ${this.progress} done with this class!</h2>
                </div>
                     <img src=${this.awardIcon} /> 
            </div>
            
        `;
    }
}

customElements.define('class-panel', ClassPanel);
