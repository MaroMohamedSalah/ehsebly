// script prime or not
let result = document.getElementById("res")
let check = document.getElementById("primeCheck");
let input = document.getElementById("prime")
check.onclick = function(){
    let flag = 1 ;
    if(input.value === '0' || input.value === '1'){
        flag = 0 ;
    }
    for(let i=2 ; i <= input.value/2 ; i++){
        if(input.value % i === 0){
            flag = 0;
            break;
        }
    }
    if(flag === 1){
        result.textContent = "Your NUM is PRIME"
    }else{
        result.textContent = "Your NUM is NOT PRIME"
    }
}