const numbers=document.querySelectorAll(".number")
const clear=document.querySelector(".tool-clear")
const sonuc=document.querySelector(".text")
const o_topla=document.querySelector(".add")
const o_cikarma=document.querySelector(".sub")
const o_carpma=document.querySelector(".mul")
const o_bolme=document.querySelector(".div")
const islem=document.querySelector(".eq")

var operator;
var prev=0;
var next=0;
var answer=0;
var silinecek=false
for(a=0;a<numbers.length;a++){
    numbers[a].addEventListener("click",function(){
        ekle(`${this.attributes["data-value"].value}`)
    })
}
function ekle(number){
    if(silinecek ||sonuc.innerHTML=="0"){
        sonuc.innerHTML=number
        silinecek=false
    }
    else{
        if(sonuc.innerHTML.length<9){
            sonuc.innerHTML+=number
        }
    }
}
function temizle(){
    sonuc.innerHTML="0"
    prev=0
    next=0
    answer=0
    operator=undefined
}
function sondan_sil(){
    if(sonuc.innerHTML.length==1){
        sonuc.innerHTML="0"
    }
    else{
        sonuc.innerHTML=sonuc.innerHTML.slice(0,-1)
    }
}
function toplama(){
    prev=parseInt(sonuc.innerHTML)
    silinecek=true
    operator="+"
}
function cikarma(){
    prev=parseInt(sonuc.innerHTML)
    silinecek=true
    operator="-"
}
function carpma(){
    prev=parseInt(sonuc.innerHTML)
    silinecek=true
    operator="x"
}
function bolme(){
    prev=parseInt(sonuc.innerHTML)
    silinecek=true
    operator="/"
}
function islem_yap(op){
    if(op!=undefined){
        
        next=parseInt(sonuc.innerHTML)
        console.log("prev->",prev,"next->",next)
        switch (op) {
            case "+":
                answer=prev+next
                break
            case "-":
                answer=prev-next
                break
            case "x":
                answer=prev*next
                break
            case "/":
                answer=parseInt(prev/next)
                break
            default:
                break
        }
        prev=answer
        console.log(answer)
        answer=0
        next=0
        sonuc.innerHTML=parseInt(prev)
    }
    
}


window.addEventListener("keydown",function(e){
    switch (e.keyCode) {
        case 13:
            islem_yap(operator)
            break;
        case 27:
            temizle()
            break
        case 8:
            sondan_sil()
            break
        case 48:
            ekle(0)
            break
        case 96:
            ekle(0)
            break
        case 49:
            ekle(1)
            break
        case 97:
            ekle(1)
            break
        case 50:
            ekle(2)
            break
        case 98:
            ekle(2)
            break
        case 51:
            ekle(3)
            break
        case 99:
            ekle(3)
            break
        case 52:
            ekle(4)
            break
        case 100:
            ekle(4)
            break
        case 53:
            ekle(5)
            break
        case 101:
            ekle(5)
            break
        case 54:
            ekle(6)
            break
        case 102:
            ekle(6)
            break
        case 55:
            ekle(7)
            break
        case 103:
            ekle(7)
            break
        case 56:
            ekle(8)
            break
        case 104:
            ekle(8)
            break
        case 57:
            ekle(9)
            break
        case 105:
            ekle(9)
            break
        case 107:
            toplama()
            break
        case 109:
            cikarma()
            break
        case 106:
            carpma()
            break
        case 111:
            bolme()
            break
        default:
            break;
    }
})
clear.addEventListener("click",temizle)
o_topla.addEventListener("click",toplama)
o_cikarma.addEventListener("click",cikarma)
o_carpma.addEventListener("click",carpma)
o_bolme.addEventListener("click",bolme)
islem.addEventListener("click",function(){
    islem_yap(operator)
})