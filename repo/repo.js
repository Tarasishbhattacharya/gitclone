async function getrepo(url){
    let res=await fetch(url);
    let data=await res.json();
    return data;
   }


   function appendrepo(data,location,location2){
    const{owner:{login,avatar_url}}=data[0];
    let img=document.createElement("img");
    img.setAttribute("src",avatar_url);
    let name=document.createElement("p");
    name.textContent=login
    location.append(img,name);
    data.forEach((el)=>{
        const{name,description,language,visibility}=el;
        let container=document.createElement("div");
       let project_name=document.createElement("span");
       project_name.textContent=name;
       let visible=document.createElement("button");
       visible.textContent=visibility;
       let project_desc=document.createElement("p");
       project_desc.textContent=description
       let project_lang=document.createElement("p");
    project_lang.textContent=language;
       container.append(project_name,visible,project_desc,project_lang);
       location2.append(container)
    })
   }
export {getrepo,appendrepo};