

let si = document.getElementById("si")
let no = document.getElementById("no")
let body = document.getElementById("body")
let movete =  Math.floor(Math.random() * 300);
let movete1 =  Math.floor(Math.random() * 300);
let movete2 =  Math.floor(Math.random() * 500);
let movete3 =   Math.floor(Math.random() * 260);
let izder = Math.floor(Math.random() * 2);
let arabj =  Math.floor(Math.random() * 2);
si.addEventListener("click",sii)

 function sii(){
    body.innerHTML = `<div class="row justify-content-center m-5 ">
    <h2 class="col-5 amo text-center">Yo tambien te amo</h2>
    <img class="col-8 m-5"  src="./img/gato_amor.jpg" alt="">
</div>`
}

function noo(){
    
    if(arabj == 0){
        no.style.top = movete +`px`
        no.style.bottom = null
    }else{
        no.style.bottom = movete3 +`px`
        no.style.top = null
    }
    
    if(izder == 0){
        no.style.left = movete1 +`px`
        no.style.right = null
    }else{
        no.style.right = movete2 +`px`
        no.style.left = null
    }
    
    
    
    movete =  Math.floor(Math.random() * 300);
    movete1 =  Math.floor(Math.random() * 300);
    movete2 =  Math.floor(Math.random() * 500);
    movete3 =   Math.floor(Math.random() * 260);
    izder = Math.floor(Math.random() * 2);
    arabj =  Math.floor(Math.random() * 2);
}
