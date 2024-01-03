class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assests/photo-default.png";
        newsImage.alt = "Foto da notícia";

        
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        
        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 70%;
            display: flex;
            flex-direction: row;
            box-shadow: 18px 21px 23px -1px rgba(0,0,0,0.29);
            -webkit-box-shadow: 18px 21px 23px -1px rgba(0,0,0,0.29);
            -moz-box-shadow: 18px 21px 23px -1px rgba(0,0,0,0.29);
            justify-content: space-between;
        }
        
        .card img{
            width: 100%;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 15px 15px;
        }
        
        .card_left h1{ 
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card_left p{
            color: gray;
        }
        
        .card_left span{
            font-weight: 500;
        }
        `
        return style;
    }
}

customElements.define("card-news", CardNews);