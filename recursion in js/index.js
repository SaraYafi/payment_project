

function readData(){
    fetch('./data.json')
    .then((response) => response.json()).then(json=>{console.log(json);showData(json)})
}

let createDivOfOneCompany=(item,count)=>
{
    let div=document.createElement("div");
    let name=document.createElement("h1");
    div.appendChild(name);
    div.className="div"+count;
    name.innerHTML=item.name;
    if(item.subData!=null)
        item.subData.map(item=>{div.appendChild(createDivOfOneCompany(item,count+1)) })  
    return div;
}


function showData(data){
    data.map(item=>document.getElementById("showData").appendChild( createDivOfOneCompany(item,0)))
}
readData();