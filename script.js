let a = [
    {name_eng:"Guinea-Bissau", name_rus:"Гвинея-Биссау", iso_code:"GNB"},
    {name_eng:"Germany", name_rus:"Германия", iso_code:"DEU"},
    {name_eng:"Gibraltar",   name_rus:"Гибралтар", iso_code:"GIB"},
    {name_eng:"Honduras",   name_rus:"Гондурас", iso_code:"HND"},
    {name_eng:"Hong Kong", name_rus:"Гонконг", iso_code:"HKG"},
    {name_eng:"Grenada", name_rus:"Гренада", iso_code:"GRD"},
    {name_eng:"Greenland",   name_rus:"Гренландия", iso_code:"GRL"},
    {name_eng:"Greece",   name_rus:"Греция", iso_code:"GRC"},
    {name_eng:"Guam", name_rus:"Гуам", iso_code:"GUM"},
    {name_eng:"Denmark", name_rus:"Дания", iso_code:"DNK"},
    {name_eng:"Djibouti",   name_rus:"Джибути", iso_code:"DJI"},
    {name_eng:"Diego Garcia",   name_rus:"Диего-Гарсия", iso_code:"DJE"},                        
]

function InsertData() {
  let table = document.getElementById("datas");
  table.innerHTML="";
  let tr="";
  a.forEach(x=>{
     tr+='<tr>';
     tr+='<td>'+x.name_eng+'</td>'+'<td>'+x.name_rus+'</td>'+'<td>'+x.iso_code+'</td>'
     tr+='</tr>'

  })
  table.innerHTML+=tr;
  
}
function InsertOne() {
  const elem = document.querySelector('.insert_info');
  elem.classList.contains("display-none")
    ? elem.classList.remove("display-none")
    : elem.classList.add("display-none");
}

document.getElementById("insert_info").addEventListener("add", function (event) {
  event.preventDefault();
  
  let tr = document.createElement("tr");
  let cols = ["nameRus", "nameEng", "isoCode"];
  
  for (let q=0; q<cols.length; ++q) {
    let td = document.createElement("td");
    td.textContent = document.getElementById(cols[q]).value;
    tr.appendChild(td);
  }

  document.getElementById('datas').appendChild(tr);
});