document.getElementById("Firstrow").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".BottomIn").style.textDecoration = "line-through";

});
document.querySelector(".closeImg").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".BottomIn").style.textDecoration = "none";

});



document.getElementById("thirdrow").addEventListener("click",function(){
    document.querySelector("#popp").style.display = "flex";
    document.querySelector(".BottomIn").style.textDecoration = "line-through";

});

document.querySelector(".closeIm").addEventListener("click",function(){
    document.querySelector("#popp").style.display = "none";
    document.querySelector(".BottomIn").style.textDecoration = "none";

});



function show(){
    document.getElementById('messageBox').classList.toggle('active');
}