// var a = document.querySelector("#bulb");
// var b  =document.querySelector("button");

//selection of an element
//console.log(a)

//changing html
// a.innerHTML = "changed html"

//changing Css
// a.style.color = "red"
// a.style.backgroundColor ="black"

//event listener
// a.addEventListener("click",function(){
    // console.log("hey")
// })


var flag= 0
b.addEventListener("click",function(){
    if(flag==0){
    a.style.backgroundColor = "yellow"
    console.log("clicked")
    flag = 1
    }
    else{
    a.style.backgroundColor = "white"
    console.log("clicked")
    flag = 0
    }
})

// var b  = document.querySelectorAll("H1");

// b.forEach(function(e){
//     console.log(e)
// })

// document.getElementById("box")
// document.getElementsByClassName("box")




