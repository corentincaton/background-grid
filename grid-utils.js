/**
 * Adds a background grid to a target DOM element.
 * @param {String} target - The selector of the target element.
 * @param {Number} numberOfColumns - The number of columns in the grid.
 * @param {Number} rowHeight - The height in pixels of each grid row.
 * @param {String} color - The color of grid lines.
 * @returns {Boolean} Returns true if the grid is created and false otherwise.
 * @example
 * const target = "body";
 * const numberOfColumns = 8;
 * const rowHeight = 20;
 * const color = "#6495ed";
 */
export function createGrid(target, numberOfColumns, rowHeight, color) {
  var targetElement = document.querySelector(target);
  if (typeof targetElement != "undefined" && targetElement != null) {
    targetElement.style.backgroundImage = "linear-gradient(" + color + " 1px, transparent 1px), linear-gradient(90deg, " + color + " 1px, transparent 1px)";
    targetElement.style.backgroundSize = "calc(" + 100/numberOfColumns + "% - " + 1/numberOfColumns + "px) " + rowHeight + "px";
    return true;
  } else {
    return false;
  }
}

/**
 * Removes a background grid from a target DOM element.
 * @param {String} target - The selector of the target element.
 * @returns {Boolean} Returns true if the grid is removed and false otherwise.
 * @example
 * const target = "body";
 */
export function removeGrid(target) {
    var targetElement = document.querySelector(target);
    if (typeof targetElement != "undefined" && targetElement != null) {
      targetElement.style.backgroundImage = "none";
      targetElement.style.backgroundSize = "auto";
      return true;
    } else {
      return false;
    }
}
