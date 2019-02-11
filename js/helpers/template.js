

const template = `
    <div class="card" style="width: 24rem;">
        <div class="card-body">
            <h5 class="card-title">[CARD-TITLE-PAIR-0]</h5>
            <h6 class="card-subtitle mb-2 text-muted">[DATE-01-0] a [DATE-02-0]</h6>
            <a href="[CARD-URI-PAIR-0]" class="card-link">Pesquisar Trecho</a>
        </div>
        <div class="card-body">
            <h5 class="card-title">[CARD-TITLE-PAIR-1]</h5>
            <h6 class="card-subtitle mb-2 text-muted">[DATE-01-1] a [DATE-02-1]</h6>
            <a href="[CARD-URI-PAIR-1]" class="card-link">Pesquisar Trecho</a>

        </div>
    </div>
`;

const getTemplate = () => {
    return template;
}

const setTemplate = (obj,strHTML) => {

    Object.keys(obj).map((val,idx)=>{
        let needle = obj[val];
        strHTML = strHTML.replace(val,needle);
    });

   return strHTML;
}

const mapReplace = (obj,content) => {

    if(typeof obj !== 'object') {
        return false;
    }

    Object.keys(obj).map((val,idx)=>{
        content = content.replace(val,obj[val]);
    });
    return content
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

const escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}