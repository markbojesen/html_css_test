function CreateTableFromJSON(){for(var e=[{Number:"1",Device:"Android",IMEI:"xxx-222-xxx","Held by":"Preeti","Serial Num":"xxxx-1111-xxxx",OS:"Android",Version:"7.0.11","Date given":"01-01-18","Given to":"Bob","Date transferred":"02-01-18"},{Number:"2",Device:"",IMEI:"","Held by":"","Serial Num":"",OS:"",Version:"","Date given":"","Given to":"","Date transferred":""},{Number:"3",Device:"",IMEI:"","Held by":"","Serial Num":"",OS:"",Version:"","Date given":"","Given to":"","Date transferred":""},{Number:"4",Device:"",IMEI:"","Held by":"","Serial Num":"",OS:"",Version:"","Date given":"","Given to":"","Date transferred":""},{Number:"5",Device:"",IMEI:"","Held by":"","Serial Num":"",OS:"",Version:"","Date given":"","Given to":"","Date transferred":""},{Number:"6",Device:"",IMEI:"","Held by":"","Serial Num":"",OS:"",Version:"","Date given":"","Given to":"","Date transferred":""}],r=[],n=0;n<e.length;n++)for(var t in e[n])-1===r.indexOf(t)&&r.push(t);var i=document.createElement("table"),a=i.insertRow(-1);for(n=0;n<r.length;n++){var o=document.createElement("th");o.innerHTML=r[n],a.appendChild(o)}for(n=0;n<e.length;n++){a=i.insertRow(-1);for(var d=0;d<r.length;d++){a.insertCell(-1).innerHTML=e[n][r[d]]}}var l=document.getElementById("showData");l.innerHTML="",l.appendChild(i)}