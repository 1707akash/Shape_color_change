
let colorDiv = document.getElementById("colorDiv");
let shapeDiv = document.getElementById("shapeDiv");

let colorBtn = document.getElementById("colorBtn");
let shapeBtn = document.getElementById("shapeBtn");
console.log(shapeDiv);

// For color change

colorBtn.addEventListener("click",changeColor);

function changeColor(){
    let str= "0123456789abcdef";
    let hexCode= "#";
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*str.length);
        hexCode+= str[randomIndex];
    }
    // console.log(hexCode);
    colorDiv.style.backgroundColor= hexCode;
}



// For SHape change 


let shapeArr = ["circle","triangle","rhombus","hexagon","pentagon","parallelogram"];

let j=0;
shapeBtn.addEventListener("click",function(){
    
    // console.log(shapeArr[j]);
    shapeDiv.id = shapeArr[j];
    j++;
    if(j>=shapeArr.length-1){
        j=0;
    }
});


