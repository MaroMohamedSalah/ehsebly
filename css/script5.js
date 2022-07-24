// script prime or not
let result = document.getElementById("res");
let check = document.getElementById("whichNum");
let input = document.getElementById("which");
check.onclick = function(){
    let arr = [];
    for(let i = 0 ; i <= input.value ; i++){
        if(input.value % i === 0){
            // console.log(`can with ${i}`)
            arr[arr.length] = i
        }
    }
    result.textContent = `${input.value} Can Divide By: ${arr}`
}