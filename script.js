

var hexDigits = new Array
("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

var hexnumbers=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const hexbtn=document.querySelector(".hexbtn");
const bodyobj=document.querySelector("body");
const spanobj=document.querySelector(".hex");

hexbtn.addEventListener("click",gethex);

function gethex(e){
  e.preventDefault();
let hexcolor="#";
for(let s=0;s<6;s++){
 let r= hexnumbers[Math.floor(Math.random()*16)];
hexcolor=hexcolor+r;
//console.log(hexcolor);
}
bodyobj.style.backgroundColor=hexcolor;
spanobj.textContent=hexcolor;

console.log(hexcolor);
}