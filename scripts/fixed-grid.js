/**
 * Class to create and display a fixed background grid in a target element. 
 */
class FixedGrid {
  /**
   * @property {string} target - The selector of the target element
   * @property {number} columnWidth - The width of grid columns in pixels
   * @property {number} rowHeight -  The height of grid rows in pixels
   * @property {string} color -  The color of grid lines
   */
  constructor(target, columnWidth, rowHeight, color) {
    this.target = target;
    this.columnWidth = columnWidth;
    this.rowHeight = rowHeight;
    this.color = color;
  }

  /**
   * Method to add a CSS background grid style to the target element
   */
  showGrid() {
    var targetElement = document.querySelector(this.target);
    if (typeof targetElement != "undefined" && targetElement != null) {
      targetElement.style.backgroundImage = "linear-gradient(" + this.color + " 1px, transparent 1px), linear-gradient(90deg, " + this.color + " 1px, transparent 1px)"; 
      targetElement.style.backgroundSize = this.columnWidth + "px " + this.rowHeight + "px";
    }
  }

  /**
   * Method to reset the CSS background style of the target element
   */
  hideGrid() {
    var targetElement = document.querySelector(this.target);
    if (typeof targetElement != "undefined" && targetElement != null) {
      targetElement.style.backgroundImage = "none";
      targetElement.style.backgroundSize = "auto";
    }
  }
}
