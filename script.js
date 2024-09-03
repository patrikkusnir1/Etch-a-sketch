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
    div.style.backgroundColor = "#654565";
    div.style.transition = "background-color 0.2s";

    // initialize opacity
    div.dataset.opacity = "0";
    


    // mouseevent for darkening
    div.addEventListener("mouseover", () => {
      // increased opacity by 10%
      let opacity = parseFloat(div.dataset.opacity);
      if (opacity < 1) {
        opacity = Math.min(opacity + 0.1, 1);
        div.dataset.opacity = opacity;
      }
        // calculate darkening color 
      const colorValue = Math.floor(255 * (1 - opacity));
      div.style.backgroundColor = `rgb(${colorValue} ${colorValue} ${colorValue})`
      if (!div.style.opacity) div.style.opacity = "0";
      
      div.style.opacity = opacity + 0.10;
    })
    div.addEventListener("click", () => {
      div.style.backgroundColor = "#125614"
    })
    container.appendChild(div)
  }
}
// initial grid 
createGrid(16);
