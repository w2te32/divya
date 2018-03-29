function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status =="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

 getfile("data.json",function(text){
   let data =JSON.parse(text);
   console.log(data);
   details(data.basics);
   career(data.career);
   education(data.education);
 });

 var parent = document.querySelector(".flex-parent");
 var child1 = document.createElement("div");
 child1.classList.add("profile");
 parent.appendChild(child1);

 var child2 = document.createElement("div");
 child2.classList.add("content");
 parent.appendChild(child2);

 function details(basic){
  var img = document.createElement("img");
  img.src = basic.photo;
  child1.appendChild(img);

   var name =document.createElement("h3");
   name.textContent = basic.name;
   child1.appendChild(name);

   var email = document.createElement("a");
   email.href ="mailto:vdivyamrrdc@gmail.com";
   email.textContent = basic.email;
   child1.appendChild(email);

   var phone = document.createElement("h3");
   phone.textContent = basic.phone;
   child1.appendChild(phone);

   var addr = document.creatElement("h1");
   addr.textContent = "address";
   child1.appendChild(addr);

   var hr = document.createElement("h3");
   child1.appendChild(hr);

  var address = document.createElement("p");
  address.textContent = basic.address;
  child1.appendChild(address);


 }

function career(obj){
  var heading = document.createElement("h2");
  child2.appendChild(heading);
  heading.textContent="career objective";
  var hline=document.createElement("hr");
  child2.appendChild(hline);
  var p=document.createElement("p");
  p.textContent=obj.info;
  child2.appendChild(p);
}
function education(edu){
  var heading1=document.createElement("h2");
  child2.appendChild(heading1);
  heading1.textContent="Educational Qualification";
  var hline=document.createElement("hr");
  child2.appendChild(hline);
  var list=document.createElement("ul");
  child2.appendChild(list);
  for(var i=0;i<edu.length;i++){
    var litem=document.createElement("li");
    list.appendChild(litem);
    litem.textContent=edu[i].course;
}
}
