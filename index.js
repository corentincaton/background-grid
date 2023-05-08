const fixedGrid = new FixedGrid("body", 80, 80, "#3FA6F2");
const figmaGrid = new FigmaGrid("#content", 4, 20, "#FF901E");

document
  .getElementById("showFixedGridButton")
  .addEventListener("click", function () {
    fixedGrid.showGrid();
  });
document
  .getElementById("showFigmaGridButton")
  .addEventListener("click", function () {
    figmaGrid.showGrid();
  });
document
  .getElementById("hideFixedGridButton")
  .addEventListener("click", function () {
    fixedGrid.hideGrid();
  });
document
  .getElementById("hideFigmaGridButton")
  .addEventListener("click", function () {
    figmaGrid.hideGrid();
  });
