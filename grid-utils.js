var gridProperties = {
  target: "body",
  breakpoints: [768, 992, 1200],
  defaultColumns: 2,
  defaultRowHeight: 20,
  columns: [3, 4, 8],
  rowHeights: [20, 24, 30],
  color: "#6495ed"
};

/**
 * Adds a background grid to a target DOM element.
 * @param {String} target - The selector of the target element.
 * @param {Number} columns - The number of columns in the grid.
 * @param {Number} rowHeight - The height of grid rows in pixels.
 * @param {String} color - The color of grid lines.
 * @returns {Boolean} Returns true if the grid is created and false otherwise.
 * @example
 * const target = "body";
 * const columns = 8;
 * const rowHeight = 20;
 * const color = "#6495ed";
 */
function createGrid(target, columns, rowHeight, color) {
  var targetElement = document.querySelector(target);
  if (typeof targetElement != "undefined" && targetElement != null) {
    targetElement.style.backgroundImage = "linear-gradient(" + color + " 1px, transparent 1px), linear-gradient(90deg, " + color + " 1px, transparent 1px)";
    targetElement.style.backgroundSize = "calc(" + 100/columns + "% - " + 1/columns + "px) " + rowHeight + "px";
    return true;
  } else {
    return false;
  }
}

/**
 * Adds a responsive background grid to a target DOM element.
 * @param {String} target - The selector of the target element.
 * @param {Number} defaultColumns - The default number of columns in the grid.
 * @param {Array} defaultRowHeights - The default height of grid rows in pixels.
 * @param {Array} breakpoints - The media query breakpoints in pixels in ascending order.
 * @param {Array} columns - The number of columns in the grid after each breakpoint.
 * @param {Array} rowHeights - The height of grid rows after each breakpoint in pixels.
 * @param {String} color - The color of grid lines.
 * @returns {Boolean} Returns true if the grid is created and false otherwise.
 * @example
 * const target = "body";
 * const breakpoints = [768, 992, 1200];
 * const defaultColumns = 2;
 * const defaultRowHeight = 16;
 * const columns = [3, 4, 8];
 * const rowHeights = [20, 24, 30];
 * const color = "#6495ed";
 */
function createResponsiveGrid(target, breakpoints, defaultColumns, defaultRowHeight, columns, rowHeights, color) {
  breakpoints.forEach((breakpoint, index) => {
    if (window.matchMedia("(min-width: " + breakpoint + "px)").matches) {
      createGrid(target, columns[index], rowHeights[index], color);
    } else {
      createGrid(target, defaultColumns, defaultRowHeight, color);
    }
  });
}



/**
 * Removes a background grid from a target DOM element.
 * @param {String} target - The selector of the target element.
 * @returns {Boolean} Returns true if the grid is removed and false otherwise.
 * @example
 * const target = "body";
 */
function removeGrid(target) {
    var targetElement = document.querySelector(target);
    if (typeof targetElement != "undefined" && targetElement != null) {
      targetElement.style.backgroundImage = "none";
      targetElement.style.backgroundSize = "auto";
      return true;
    } else {
      return false;
    }
}
