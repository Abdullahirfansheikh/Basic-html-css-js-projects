var istatus= document.querySelector("#name")
var friend= document.querySelector("#add")
function hisname(){
    friend.addEventListener("click",function(){
        istatus.innerHTML="Friends",
        add.innerHTML="Added",
        istatus.style.color="green"
    })
}
var nahi= document.querySelector("#rem")
function ohyes(){
    nahi.addEventListener("click",function(){
        nahi.innerHTML="Removed",
        istatus.innerHTML="Strangers",
        istatus.style.color="red"
    })
}
ohyes();
hisname();