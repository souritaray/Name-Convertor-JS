
document.querySelector("#convert-btn").addEventListener("click",()=>{
    let str1=document.querySelector("input#text").value.toLowerCase();
    camelcase(str1);
    pascalcase(str1);
    snakecase(str1);
    screaming_snake_case(str1);
    kebabcase(str1);
    screaming_kebab_case(str1);
})
function camelcase(str1){
    let camelarr=[];
for(let i=0;i<str1.length;i++)
{
    if(str1.charAt(i)==" ")
    {
        let c=str1.charAt(i+1).toUpperCase();
        camelarr.push(c);
    }
    else if(str1.charAt(i-1)==" "){
        continue;
    }
    else{
       camelarr.push(str1.charAt(i)) ;
    }
}
document.querySelector("p#camel-case").innerText=camelarr.join("");
}
function pascalcase(str1){
    let pascalarr=[];
    let words=str1.split(" ");
    words.forEach(val => {
        pascalarr.push(val[0].toUpperCase()+val.substring(1,val.length));
    });
    document.querySelector("p#pascal-case").innerText=pascalarr.join("");   
}
function snakecase(str1){
    let snakearr=[];
    let words=str1.split(" ");
    document.querySelector("p#snake-case").innerText=words.join("_");  
}
function screaming_snake_case(str1){
    let words=str1.toUpperCase().split(" ");
    document.querySelector("p#screaming-snake-case").innerText=words.join("_");  
}
function kebabcase(str1){
    let kebabarr=[];
    let words=str1.split(" ");
    document.querySelector("p#kebab-case").innerText=words.join("-");  
}
function screaming_kebab_case(str1){
    let words=str1.toUpperCase().split(" ");
    document.querySelector("p#screaming-kebab-case").innerText=words.join("-");  
}



