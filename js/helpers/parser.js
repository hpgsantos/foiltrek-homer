/** Henrique Pires Goulart dos Santos
 */

const getDomElements   = (id) => {

    const el = document.querySelector('#'+id);

    if (!el || typeof el != 'object') {
        return false
    }

    return el.elements;
}

const resolveDomMapping = (el) => {

    const mapElNames = {
        "iptFrom01":"from",
        "iptTo01":"to",
        "dateDeparture":"dates",
        "dateReturn":"dates",
    }

    var mapped = {"type":"flight","trek":[]};

    var trekObj = {};
    
    Array.from(el).map((el,idx)=>{
        
        let elValue = el.value;
        let elName = el.name;

        if(mapElNames.hasOwnProperty(elName)) {

                let corrName = mapElNames[elName];

                switch(el.type){
                    case 'text':
                        trekObj[corrName] = elValue;
                        break;
                    case 'date':
                        trekObj[corrName] ? trekObj[corrName].push(elValue) : trekObj[corrName] = [elValue];
                }
        }
        trekObj["ranges"] = [36];
        trekObj["round"] = true;

    });

    mapped["trek"].push(trekObj);


    return mapped;

}