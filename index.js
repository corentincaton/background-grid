const grid = new Grid("#content", 4, 20, "#567743");

document
  .getElementById("showGridButton")
  .addEventListener("click", function () {
    grid.showGrid();
  });
document
  .getElementById("hideGridButton")
  .addEventListener("click", function () {
    grid.hideGrid();
  });
