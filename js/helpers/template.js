

const template = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">[CARD-TITLE]</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <ul id="opas" class="list-group list-group-flush"></ul>
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
        let needle = obj[val];
        strHTML = strHTML.replace(val,needle);
    });

   return strHTML;

}
const apllyDom = (strHtml) => {
    
    let parser = new DOMParser();
    let domNode = parser.parseFromString(strHtml, 'text/html');
    let child = domNode.documentElement.querySelector('body').firstChild;
    return child;
}

const appendElement = (idEl,elOrigin,doms) => {

    let innerEl = elOrigin.querySelector('#'+idEl);

    if(!innerEl){
     
        return false;
    }

    doms.map((dom)=>{
       
        innerEl.appendChild(dom);
    })
 
}