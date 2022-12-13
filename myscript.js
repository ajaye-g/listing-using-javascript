fetch("https://fakestoreapi.com/products").then((datas)=>{

//console.log(datas);
    return datas.json(); //converted to object
}).then((objectDatas)=>{
    //console.log(objectDatas[0].title);
    let tableData="";
    objectDatas.map((values)=>{
        tableData+=`<tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.price}</td>
        <td>${values.description}</td>
        <td>${values.category}</td>
        <td><img src="${values.image}"/></td>
        <td>${values.rating.rate}</td>
    </tr>`;
    });
    document.getElementById("tableContend").innerHTML=tableData;
}).catch((err)=>{
    console.log(error);
});