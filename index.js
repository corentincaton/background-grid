// Initalise grid buttons after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("showGridButton")
    .addEventListener("click", function () {
      createGrid("#content", 8, 20, "#6495ed");
    });
  document
    .getElementById("showResponsiveGridButton")
    .addEventListener("click", function () {
        createResponsiveGrid("#content", [768, 992, 1200], 2, 16, [3, 4, 8], [20, 24, 30], "#6495ed");
    });
  document
    .getElementById("hideGridButton")
    .addEventListener("click", function () {
      removeGrid("#content");
    });
});
