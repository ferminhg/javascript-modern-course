import { iterateNodes } from "./utils";

export const CategoryFilter = {
  /*******************************************************************************************************************
   * Filter courses by category
   ******************************************************************************************************************/
  init: function () {
    if (!document.getElementById("category")) {
      return;
    }
    var filter = document.getElementById("category");

    filter.addEventListener("change", function () {
      var category = this.value;

      var elementsToFilter = document.querySelectorAll(".js-filtered-item");

      iterateNodes(elementsToFilter, function (element) {
        if (category && category !== element.getAttribute("data-category")) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
      });
    });
  },
};
