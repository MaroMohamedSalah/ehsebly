// dark mood 
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let moodBox = document.getElementById("mood");
let r = document.querySelector(':root');
dark.onclick = () =>{
    dark.style.left = '45px'
    light.style.left = '45px'
    setTimeout(() => {
        light.style.opacity = '1'
        dark.style.opacity = '0'
        dark.style.zIndex = '-1'
        light.style.zIndex = '1'
        moodBox.style.borderColor = '#F4FFFDFF'
        r.style.setProperty('--background', '#202124')
        r.style.setProperty('--font-color', '#F4FFFDFF')
    }, 500);
}
light.onclick = () =>{
    light.style.left = '3px'
    dark.style.left = '3px'
    setTimeout(() => {
        light.style.opacity = '0'
        dark.style.opacity = '1'
        light.style.zIndex = '-1'
        dark.style.zIndex = '1'
        moodBox.style.borderColor = '#011936FF'
        r.style.setProperty('--background', '#F4FFFDFF')
        r.style.setProperty('--font-color', '#011936FF')
    }, 500);
}
let stn = document.getElementById("standard");
let calculator = document.getElementById("calculator");
let back = document.getElementById("back");
if (window.matchMedia("(max-width: 768px)").matches) {
    stn.onclick = function(){
        stn.style.opacity = "0";
        calculator.style.cssText = `
        width: 100%;
        height: 391px;
        `
    }
  } else {
    stn.onclick = function(){
        stn.style.opacity = "0";
        calculator.style.cssText = `
        width: 391px;
        height: 391px;
        `
    }
  }
console.log(stn);
back.onclick = function(){
    stn.style.opacity = "1"
    calculator.style.cssText = `
    width: 0;
    height: 0;
    `
}
// change color 
let colorCount = 0;
let changeColor = document.getElementById("changeColor");
let colorIcon = document.getElementById("colorIcon");
let fontColor  = document.getElementById('fontColor');
let backColor  = document.getElementById('backColor');
let secondColor  = document.getElementById('secondColor');
let mainColor  = document.getElementById('mainColor');

colorIcon.onclick = () =>{
    if(colorCount ===0){
        colorCount++;
        changeColor.style.right = '0';
    }else{
        colorCount=0;
        changeColor.style.right = '-157px';
    }
}

fontColor.value = "#011936"
backColor.value = '#ED254E'
secondColor.value = '#F9DC5C'
mainColor.value = '#F4FFFD'

fontColor.onchange = () =>{
    r.style.setProperty('--font-color', fontColor.value)
}
backColor.onchange = () =>{
    r.style.setProperty('--main', backColor.value)
}
secondColor.onchange = () =>{
    r.style.setProperty('--two', secondColor.value)
}
mainColor.onchange = () =>{
    r.style.setProperty('--background', mainColor.value)
}
// setting 
let count = 0;
let gear = document.getElementById("gear");
let settingBox = document.getElementById("setting");
let settingIcon = document.getElementById("setIcon");
settingIcon.onclick = () =>{
    if(count===0){
        count++;
        gear.style.animation = "none"
        settingBox.style.right = '0';
    }else{
        count=0;
        if(window.matchMedia("(max-width: 768px)").matches){
            settingBox.style.right = '-106px';
            console.log("phone")
        }else{
            settingBox.style.right = '-138px';
        }
        gear.style.animation = "alwaysRound 2s infinite forwards ease-in-out"
    }
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
// del.onclick = function(){
//     let newValue = [...screen.value];
//     newValue.pop()
//     for(let i = 0 ; i < newValue.length ; i++ ){
//         screen.value = screen.value + +newValue[i];
//         console.log(screen.value)
//     }
//     console.log(screen.value);
// }
clear.onclick = function(){
    screen.value = "";
}
//go to magic 
let magic = document.getElementById("magic");
magic.onclick = function(){
    location.href = "more bages/magic.html"
}
// footer
let myPic = document.getElementById("myPic");
let face = document.getElementById("face");
let insta = document.getElementById("insta");
let linkedIn = document.getElementById("linkedIn");
let git = document.getElementById("git");
let feedback = document.getElementById("feedback");
window.onscroll = function(){
    myPic.style.left = "81%";
    face.style.opacity = "1";
    insta.style.opacity = "1";
    git.style.opacity = "1";
    linkedIn.style.opacity = "1";
    // feedback.style.opacity = "1";
}