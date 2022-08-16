// magic
let title_magic = document.getElementById("tMagic")
let evenOrOdd = document.getElementById("evenOrOdd");
let prime = document.getElementById("prime");
let which = document.getElementById("which");
console.log(evenOrOdd)
evenOrOdd.onclick = function(){
    window.open("../more bages/evenOrOdd.html", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
prime.onclick = function(){
    window.open("../more bages/primeOrNot.html", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
which.onclick = function(){
    window.open("../more bages/which.html", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
// circle code 
let done = document.getElementById("done");
let circleInput = document.getElementById("cInput");
let circleArea = document.getElementById("area");
let circlePer = document.getElementById("per");
done.onclick = function(){
    if(circleInput.value < 0){
        window.alert("Your r must be postive")
    }else{
        circleArea.textContent = `${(Math.PI*Math.pow(circleInput.value,2)).toFixed(2)} CM^2`
        circlePer.textContent = `${(2*Math.PI*circleInput.value).toFixed(2)} CM`
    }
}
// square code 
let done2 = document.getElementById("done2");
let rectanglew = document.getElementById("rInput");
let rectangleh = document.getElementById("rInput2");
let rectangleArea = document.getElementById("area2");
let rectanglePer = document.getElementById("per2");
done2.onclick = function(){
    if(rectangleh.value < 0 || rectanglew.value < 0){
        window.alert("Your Width and Height must be postive")
    }else{
        rectangleArea.textContent = `${(rectangleh.value*rectanglew.value).toFixed(2)} CM^2`
        rectanglePer.textContent = `${((+rectangleh.value + +rectanglew.value)*2).toFixed(2)} CM`
    }
}
// Square code 
let done3 = document.getElementById("done3");
let squareInput = document.getElementById("sInput");
let squareArea = document.getElementById("area3");
let squarePer = document.getElementById("per3");
done3.onclick = function(){
    if(squareInput.value < 0){
        window.alert("Your Square Side must be postive")
    }else{
        squareArea.textContent = `${(squareInput.value*squareInput.value).toFixed(2)} CM^2`
        squarePer.textContent = `${(squareInput.value*4).toFixed(2)} CM`
    }
}
// square code 
let done4 = document.getElementById("done4");
let rightTriangleb = document.getElementById("rtInput");
let rightTriangleh = document.getElementById("rtInput2");
let rightTriangleArea = document.getElementById("area4");
let rightTrianglePer = document.getElementById("per4");
done4.onclick = function(){
    if(rightTriangleh.value < 0 || rightTriangleb.value < 0){
        window.alert("Your Width and Height must be postive")
    }else{
        rightTriangleArea.textContent = `${(0.5*rightTriangleb.value*rightTriangleh.value).toFixed(2)} CM^2`
    }
}
// Trapezoid code 
let done5 = document.getElementById("done5");
let Trapezoidb1 = document.getElementById("tInput");
let Trapezoidb2 = document.getElementById("tInput2");
let Trapezoidh = document.getElementById("tInput3");
let TrapezoidArea = document.getElementById("area5");
let TrapezoidPer = document.getElementById("per5");
done5.onclick = function(){
    if(Trapezoidh.value < 0 || Trapezoidb1.value < 0 || Trapezoidb2.value < 0){
        window.alert("Your Bases and Height must be postive")
    }else{
        TrapezoidArea.textContent = `${(0.5*(+Trapezoidb1.value + +Trapezoidb2.value)*Trapezoidh.value).toFixed(2)} CM^2`
    }
}
// Parallelogram code 
let done6 = document.getElementById("done6");
let Parallelogramb = document.getElementById("pInput");
let Parallelogramh = document.getElementById("pInput2");
let ParallelogramArea = document.getElementById("area6");
let ParallelogramPer = document.getElementById("per6");
done6.onclick = function(){
    if(Parallelogramh.value < 0 || Parallelogramb.value < 0){
        window.alert("Your Base and Height must be postive")
    }else{
        ParallelogramArea.textContent = `${(Parallelogramb.value * Parallelogramh.value).toFixed(2)} CM^2`
    }
}
// part 3
// pythagoras
let pythagoras = document.getElementById("pythagoras")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let A = document.getElementById("A")
let B = document.getElementById("B")
let C = document.getElementById("C")
let re = document.getElementById("re");
let calc = document.getElementById("calc")

a.onclick = function(){
    B.style.width = "200px"
    B.placeholder = "Enter b in CM"
    b.style.opacity = "0"
    c.style.opacity = "0"

    re.style.opacity = "1"
    
    C.style.width = "200px"
    C.placeholder = "Enter c in CM"
    calc.onclick = function(){
        console.log("done")
        A.style.fontSize = "15px"
        A.style.color = "var(--main)"
        A.value = `a = ${(Math.sqrt(Math.pow(C.value , 2) - Math.pow(B.value , 2))).toFixed(1)} CM`
    }
}
b.onclick = function(){
    A.style.width = "200px"
    A.placeholder = "Enter a in CM"
    a.style.opacity = "0"
    c.style.opacity = "0"

    re.style.opacity = "1"
    
    C.style.width = "200px"
    C.placeholder = "Enter c in CM"

    calc.onclick = function(){
        console.log("done")
        B.style.fontSize = "15px"
        B.style.color = "var(--main)"
        B.value = `b = ${(Math.sqrt(Math.pow(C.value , 2) - Math.pow(A.value , 2))).toFixed(1)} CM`
    }
}
c.onclick = function(){
    B.style.width = "200px"
    B.placeholder = "Enter b in CM"
    b.style.opacity = "0"
    a.style.opacity = "0"

    re.style.opacity = "1"
    
    A.style.width = "200px"
    A.placeholder = "Enter a in CM"

    calc.onclick = function(){
        console.log("done")
        C.style.fontSize = "15px"
        C.style.color = "var(--main)"
        C.value = `c = ${(Math.sqrt(Math.pow(A.value , 2) + Math.pow(B.value , 2))).toFixed(1)} CM`
    }
}
re.onclick = function(){
    A.style.width = "95px"
    A.placeholder = "a"
    B.style.width = "95px"
    B.placeholder = "b"
    C.style.width = "95px"
    C.placeholder = "c"

    a.style.opacity = "1"
    b.style.opacity = "1"
    c.style.opacity = "1"

    A.value = "";
    B.value = "";
    C.value = "";

    a.checked = false
    b.checked = false
    c.checked = false

    A.style.color = "var(--font-color)"
    B.style.color = "var(--font-color)"
    C.style.color = "var(--font-color)"

    re.style.opacity = "0"
}
// part 4
// Unit Conversions
let calc2 = document.getElementById("calc2");
let km = document.getElementById("km");
let G = document.getElementById("G");
let ci = document.getElementById("ci");
let cm = document.getElementById("cm");
let first_ch = document.getElementById("f")
let s_ch = document.getElementById("s")
let th_ch = document.getElementById("th")
let selectArrow = document.getElementById("selectArrow");
let selectArrow2 = document.getElementById("selectArrow2");
let part4Input = document.getElementById("part4In")
let part4Out = document.getElementById("part4Res")
let exit = document.getElementById("exit")
let unit = document.getElementById("unit")
let unit2 = document.getElementById("unit2")
let def1 = document.querySelector("#def1")
let beforDef1 = document.getElementById("beforeD1")
let beforDef2 = document.getElementById("beforeD2")
    
console.log(beforDef1)
let count = 0;
let count2 = 0;
km.onclick = function(){
    unit.textContent = "KM";
    beforDef1.style.left = "6px"
    beforDef2.style.left = "6px"
    unit2.textContent = "M"
    first_ch.textContent = "M"
    s_ch.textContent = "feet"
    th_ch.textContent = "cm"
}
G.onclick = function(){
    unit.textContent = "G";
    beforDef1.style.left = "68px"
    beforDef2.style.left = "6px"
    first_ch.textContent = "Byte"
    s_ch.textContent = "Tera"
    th_ch.textContent = "Miga"
    unit2.textContent = "Byte"
}
ci.onclick = function(){
    console.log("click")
    unit.textContent = "celsius";
    beforDef1.style.left = "130px"
    beforDef2.style.left = "6px"
    first_ch.textContent = "K"
    s_ch.textContent = "f"
    th_ch.textContent = ""
    unit2.textContent = "k"
}
first_ch.onclick = function(){
    unit2.textContent = `${first_ch.textContent}`
    beforDef2.style.left = "6px"
}
s_ch.onclick = function(){
    unit2.textContent = `${s_ch.textContent}`
    beforDef2.style.left = "68px"
}
th_ch.onclick = function(){
    unit2.textContent = `${th_ch.textContent}`
    beforDef2.style.left = "130px"
}
let ch1 = document.getElementById("ch1")
let ch2 = document.getElementById("ch2")
selectArrow.onclick = function(){
    if(count === 0){
        selectArrow.style.transform = "rotate(180deg)"
        count++
        ch1.style.height = "200px"
    }else{
        selectArrow.style.transform = "rotate(360deg)"
        count=0
        ch1.style.height = "0px"
    }
}
selectArrow2.onclick = function(){
    if(count2 === 0){
        selectArrow2.style.transform = "rotate(180deg)"
        count2++
        ch2.style.height = "200px"
    }else{
        selectArrow2.style.transform = "rotate(360deg)"
        count2=0
        ch2.style.height = "0px"
    }
}
calc2.onclick = function(){
    if((unit.textContent==="KM") && (unit2.textContent === "M")){        
        part4Out.style.fontSize = "40px"
        part4Out.textContent = `${part4Input.value * Math.pow(10,3)}`
    }
    if((unit.textContent==="KM") && (unit2.textContent === "cm")){       
        part4Out.style.fontSize = "40px"
        part4Out.textContent = `${part4Input.value * 100000}`
    }
    if((unit.textContent==="KM") && (unit2.textContent === "feet")){        
        part4Out.style.fontSize = "40px"
        part4Out.textContent = `${(part4Input.value * 3280.8399).toFixed(2)}`
    }
    if((unit.textContent==="G") && (unit2.textContent === "Tera")){        
        part4Out.style.fontSize = "26px"
        part4Out.textContent = `${part4Input.value * 0.001}`
    }
    if((unit.textContent==="G") && (unit2.textContent === "Byte")){        
        part4Out.style.fontSize = "26px"
        part4Out.textContent = `${part4Input.value * 1073741824}`
    }
    if((unit.textContent==="G") && (unit2.textContent === "Miga")){        
        part4Out.style.fontSize = "26px"
        part4Out.textContent = `${part4Input.value * 1000}`
    }
    if((unit.textContent==="celsius") && (unit2.textContent === "k")){        
        part4Out.style.fontSize = "26px"
        part4Out.textContent = `${part4Input.value * 274.15}`
    }
    if((unit.textContent==="celsius") && (unit2.textContent === "f")){        
        part4Out.style.fontSize = "26px"
        part4Out.textContent = `${part4Input.value * 33.8}`
    }
}
exit.onclick = function(){
    part4Input.value = ''
    part4Out.textContent = "YOUR RESULT HERE"
    part4Out.style.fontSize = "12px"
}
// part 5
let part5 = document.getElementById("part5");
let group = document.getElementById("group");
let checkDone = document.getElementById("checkDone");
let birthDone = document.getElementById("birthDone");
let birthInput = document.getElementById("birthday");
let first = document.getElementById("first");
let mid = document.getElementById("mid");
let last = document.getElementById("last");
let firstp = document.getElementById("firstP");
let midp = document.getElementById("midP");
let more = document.getElementById("more");
let lastp = document.getElementById("lastP");
let return1 = document.getElementById("return");
console.log(birthDone)
console.log(birthInput)
let dateNow = Date.now();
let d = new Date();
birthDone.onclick = function() {
    if(birthInput.value === ""){
        window.alert("You Should Enter Your BirthDay")
    }
    else{
        const BirthDay = new Date(birthInput.value);
        const BirthDay2 = new Date(birthInput.value);
        const yearsOld = Math.round((Date.now() - BirthDay)/1000/60/60/24/365)
        console.log(BirthDay)
        const next = new Date(BirthDay.setFullYear(BirthDay.getFullYear()+ yearsOld + 1))
        group.style.cssText = `
        position: absolute;
        top: 100px;
        `
        birthDone.style.cssText = `
        right: 25px;
        `
        setTimeout(() => {
            birthDone.style.opacity = '0';
        }, 1000);
        setTimeout(() => {
            checkDone.style.opacity = '1'
        }, 3000);
        first.style.opacity = "1"
        mid.style.opacity = "1"
        midp.innerHTML = `
        You Have <span>${Math.round((Date.now() - BirthDay2)/1000/60/60/24/365)}</span> Years, <span>${Math.round((Date.now() - BirthDay2)/1000/60/60/24)}</span> Days <span><i id="selectArrow3" class="fa-solid fa-angle-down"></i></span>
        `
        more.innerHTML = `
        <span>${Math.round((Date.now() - BirthDay2)/1000/60/60)}</span> Hours, <span>${Math.round((Date.now() - BirthDay2)/1000/60)}</span> Minutes and <span>${Math.round((Date.now() - BirthDay2)/1000)}</span> Second
        `
        firstp.innerHTML = `
        Your next birthday after: <span>${Math.round((next - Date.now())/1000/60/60/24/30)}</span> Months
        `
        lastp.innerHTML = `
        Your Hijri Year is <span>${Math.floor(((BirthDay2.getFullYear())-622)/(354/365.25))}</span>h 
        `
        let selectArrow3 = document.getElementById("selectArrow3");
        let count3 = 0;
        selectArrow3.onclick = function(){
            if(count3 === 0){
                selectArrow3.style.transform = "rotate(180deg)"
                count3++
                more.style.height = 'fit-content' 
            }else{
                selectArrow3.style.transform = "rotate(360deg)"
                count3=0
                more.style.height = '0' 
            }
        }
        last.style.opacity = "1"
        return1.onclick = () =>{
            birthInput.value = ""
            group.style.cssText = `
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            `
            birthDone.style.cssText = `
            right: -50px;
            `
            setTimeout(() => {
                birthDone.style.opacity = '1';
            }, 500);
            setTimeout(() => {
                checkDone.style.opacity = '0'
            }, 2000);
            first.style.opacity = "0"
            mid.style.opacity = "0"
            last.style.opacity = "0"
        }
    }
}
// footer
let myPic = document.getElementById("myPic");
let face = document.getElementById("face");
let insta = document.getElementById("insta");
let linkedIn = document.getElementById("linkedIn");
let git = document.getElementById("git");
let feedback = document.getElementById("feedback");
window.onscroll = function(){
    if(window.scrollY > 3640){        
        myPic.style.left = "81%";
        face.style.opacity = "1";
        insta.style.opacity = "1";
        git.style.opacity = "1";
        linkedIn.style.opacity = "1";
    }
}
if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("I'm in phone")
    window.onscroll = () =>{
        console.log(window.scrollY)
        if(window.scrollY > 6300){        
            myPic.style.left = "81%";
            face.style.opacity = "1";
            insta.style.opacity = "1";
            git.style.opacity = "1";
            linkedIn.style.opacity = "1";
            console.log("done")
        }
    }
}