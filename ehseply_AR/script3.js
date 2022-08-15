// script even or odd 
let result = document.getElementById("res")
let checkEven = document.getElementById("evenCheck");
let input = document.getElementById("evenOrOddNum")
console.log(checkEven)
checkEven.onclick = function(){
    if(input.value === '0'){
        result.textContent = "الرقم اللي دخلته هو صفر"
    }else if(input.value % 2 != 0){
        result.textContent = "الرقم اللي دخلته فردي"
    }else{
        result.textContent = "الرقم اللي دخلته زوجي"
    }
}