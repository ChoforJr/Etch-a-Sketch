const button = document.querySelector("#button");
const container = document.querySelector(".container");
container.style.boxSizing = 'border-box';
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'space-between';
let newDiv;

function squaredGrid (gridNumbers){
  let gridSides = (480/gridNumbers);
  let gridNum = gridNumbers*gridNumbers;
  for(let i=0;i<gridNum;i++){
    newDiv = document.createElement('div'); 
    newDiv.style.border = '1px solid black';
    newDiv.style.width = `${gridSides}px`;
    newDiv.style.height = `${gridSides}px`;
    container.appendChild(newDiv);
  }
 
}
squaredGrid(16);
/*newDiv.addEventListener("mouseover",function(){
  this.style.background = "black";
});*/

button.addEventListener("click", () => {
  let size = prompt("Input grid size");
  if (size > 100) {
    alert("Input a number less than 100");
    return;
  }
  if(isNaN(size)){
    alert("Input Integer Numbers");
    return;
  }
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  } 
  squaredGrid(size);
});
