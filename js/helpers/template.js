

const template = `

    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"><CARD-TITLE></h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
    </div>

`;

const getTemplate = () => {
    return template;
}

const setTemplate = (obj) => {

    let strHTML = getTemplate();

    Object.keys(obj).map((val,idx)=>{
        alert(val);
    });

}


const apllyDom = async (strHtml) => {
    
    let parser = new DOMParser();
    let domNode = parser.parseFromString(strHtml, 'text/html');

    return domNode;

}