class Grid {
  /**
   * @property {string} target - The selector of the target element
   * @property {number} columns - The number of columns in the grid
   * @property {number} rowHeight -  The height of grid rows in pixels
   * @property {string} color -  The color of grid lines
   */
  constructor(target, columns, rowHeight, color) {
    this.target = target;
    this.columns = columns;
    this.rowHeight = rowHeight;
    this.color = color;
  }

  showGrid() {
    var targetElement = document.querySelector(this.target);
    if (typeof targetElement != "undefined" && targetElement != null) {
      targetElement.style.backgroundImage = "linear-gradient(" + this.color + " 1px, transparent 1px), linear-gradient(90deg, " + this.color + " 1px, transparent 1px)"; targetElement.style.backgroundSize = "calc(" + 100 / this.columns + "% - " + 1 / this.columns + "px) " + this.rowHeight + "px";
    }
  }

  hideGrid() {
    var targetElement = document.querySelector(this.target);
    if (typeof targetElement != "undefined" && targetElement != null) {
      targetElement.style.backgroundImage = "none";
      targetElement.style.backgroundSize = "auto";
    }
  }
}
