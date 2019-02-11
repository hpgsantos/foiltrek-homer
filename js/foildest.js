/** Author Henrique Pires Goulart dos Santos  <hpgsantos@gmail.com>*/


const foil = async () => {
    var foils = null;
    foils = JSON.parse('[[["BSB-CGH",0,1,"08/01/2019"],["CGH-BSB",0,-1,"21/02/2019"]],[["CGH-BSB",1,1,"10/01/2019"],["BSB-CGH",1,-1,"19/02/2019"]]]');
    
    return foils;
}


    /*
    let url = 'https://jj64sjzh1m.execute-api.sa-east-1.amazonaws.com/default/foiltrekFaasExpandDestination';
    let data = JSON.parse('{ "type": "flight", "trek": [ { "from": "BSB-CGH", "to": "CGH-BSB", "dates": [ "2019-01-08T00:00:00.000", "2019-01-10T00:00:00.000" ], "ranges": [ 40 ], "round": true } ] }');

    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };        

    foils = await fetch(url, settings)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(e => {
            return e
    });
    */
    //console.log(JSON.stringify(foils))


