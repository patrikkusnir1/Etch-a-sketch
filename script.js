const container = document.querySelector(".container");
const button = document.querySelector("button");

// attach event listener to the button
button.addEventListener("click", () => {
  const gridValue = parseInt(window.prompt("Choose your grid size, maximum 100 squares"));

  if(isNaN(gridValue) || gridValue < 1 || gridValue > 100) {
    alert("Please enter a valid number between 1 and 100")
  } else {
    createGrid(gridValue);
  }
});




function createGrid(gridValue) {
  // clear existing grid
  container.innerHTML = "";

  // create new grid

  for (let i = 0; i < gridValue * gridValue; i++) {
    const div = document.createElement("div");
    div.style.width = 100 / gridValue + "%";
    div.style.height = 100 / gridValue + "%";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "#333";
    })
    container.appendChild(div)
  }
}
// initial grid 
createGrid(16);
