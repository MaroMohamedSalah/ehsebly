let stn = document.getElementById("standard");
let calculator = document.getElementById("calculator");
let back = document.getElementById("back");
console.log(stn);
stn.onclick = function(){
    stn.style.opacity = "0";
    calculator.style.cssText = `
<<<<<<< HEAD
    width: 371px;
=======
    width: 100%;
>>>>>>> 2ef6c093fcb6527119c0aafafdf93765b2d8611d
    height: 391px;
    `
}
back.onclick = function(){
    stn.style.opacity = "1"
    calculator.style.cssText = `
    width: 0;
    height: 0;
    `
}
// standard calculator code :
// numbers 
let screen = document.getElementById("screen");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
one.onclick = function(){
    screen.value = screen.value + "1";
}
two.onclick = function(){
    screen.value = screen.value + "2";
}
three.onclick = function(){
    screen.value = screen.value + "3";
}
four.onclick = function(){
    screen.value = screen.value + "4";
}
five.onclick = function(){
    screen.value = screen.value + "5";
}
six.onclick = function(){
    screen.value = screen.value + "6";
}
seven.onclick = function(){
    screen.value = screen.value + "7";
}
eight.onclick = function(){
    screen.value = screen.value + "8";
}
nine.onclick = function(){
    screen.value = screen.value + "9";
}
zero.onclick = function(){
    screen.value = screen.value + "0";
}
dot.onclick = function(){
    screen.value = screen.value + ".";
}
// oprators 
let plus = document.getElementById("add");
let sub = document.getElementById("sub");
let div = document.getElementById("div");
let mod = document.getElementById("mod");
let pow = document.getElementById("pow");
let squ = document.getElementById("squ");
let power = document.getElementById("power");
let eq = document.getElementById("eq");
let del = document.getElementById("del");
let clear = document.getElementById("clear");
plus.onclick = function(){
    screen.value = screen.value + "+";
}
power.onclick = function(){
    screen.value = screen.value + "*";
}
sub.onclick = function(){
    screen.value = screen.value + "-";
}
mod.onclick = function(){
    screen.value = screen.value + "%";
}
div.onclick = function(){
    screen.value = screen.value + "/";
}
pow.onclick = function(){
    screen.value = Math.pow(+screen.value , 2);
}
squ.onclick = function(){
    screen.value = Math.sqrt(+screen.value);
}
eq.onclick = function(){
    screen.value = eval(screen.value) ;
}
del.onclick = function(){
    let newValue = [...screen.value];
    newValue.pop()
    for(let i = 0 ; i < newValue.length ; i++ ){
        screen.value = screen.value + +newValue[i];
        console.log(screen.value)
    }
    console.log(screen.value);
}
clear.onclick = function(){
    screen.value = "";
}
//go to magic 
let magic = document.getElementById("magic");
magic.onclick = function(){
    location.href = "../ehsebly/more bages/magic.html"
}
