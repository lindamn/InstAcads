class MyProgressBar extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadow.innerHTML = `
        
        <link rel="stylesheet" href="../css/ProgressBar.css">
        <div>
            <div id="progress-bar">
                <div id="bar-status"></div>
                
            </div>
        </div>

        `;
    }
}

function randomizeProgress(){
    console.log('hi this is so random');
}

customElements.define('progress-bar', MyProgressBar);