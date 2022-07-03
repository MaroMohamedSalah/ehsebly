let title_magic = document.getElementById("tMagic")
let evenOrOdd = document.getElementById("evenOrOdd");
let prime = document.getElementById("prime");
let which = document.getElementById("which");
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