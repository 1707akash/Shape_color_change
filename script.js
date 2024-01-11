
let colorDiv = document.getElementById("colorDiv");
let shapeDiv = document.getElementById("shapeDiv");
// let body = document.querySelector("body");

let colorBtn = document.getElementById("colorBtn");
let shapeBtn = document.getElementById("shapeBtn");
let bgBtn = document.getElementById("bgBtn");

let str= "0123456789abcdef";
console.log(shapeDiv);

// For color change

colorBtn.addEventListener("click",changeDivColor);

function changeDivColor(){
    colorDiv.style.backgroundColor= changeColor();
}

function changeColor(){
    
    let hexCode= "#";
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*str.length);
        hexCode+= str[randomIndex];
    }
    return hexCode;
    // console.log(hexCode);
    // colorDiv.style.backgroundColor= hexCode;
}



// For Shape change 


let shapeArr = ["circle","triangle","rhombus","hexagon","pentagon","parallelogram"];

let j=0;
shapeBtn.addEventListener("click",function(){
    
    // console.log(shapeArr[j]);
    shapeDiv.id = shapeArr[j];
    shapeDiv.style.backgroundColor = changeColor();
    j++;
    if(j>=shapeArr.length-1){
        j=0;
    }
});



