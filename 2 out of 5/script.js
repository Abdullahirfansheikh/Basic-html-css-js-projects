var img= document.querySelector("#box"); 
var like= document.querySelector("i");
var flag = "0"

function hi(){
    if(flag == 0){
    img.addEventListener("dblclick",function(){
        like.style.transform= "translate(-50%,-50%) scale(1)",
        like.style.opacity= "0.9",
        like.style.color-"red"
        setTimeout(function(){
            like.style.transform= "translate(-50%,-50%) scale(0)",
            like.style.opacity= "0"
        },800)
    })  }
}
hi();