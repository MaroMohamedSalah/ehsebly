// script even or odd 
let result = document.getElementById("res")
let checkEven = document.getElementById("evenCheck");
let input = document.getElementById("evenOrOddNum")
console.log(checkEven)
checkEven.onclick = function(){
    if(input.value === '0'){
        result.textContent = "Your NUM is ZERO"
    }else if(input.value % 2 != 0){
        result.textContent = "Your NUM is ODD"
    }else{
        result.textContent = "Your NUM is EVEN"
    }
}