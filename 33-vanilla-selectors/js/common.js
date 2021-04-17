export const CommonFeatures = {
  init: function () {
    /**
     * Show/hide an element based on a change in another field.
     */
    var trigger = document.querySelector(".js-trigger-container");

    trigger.addEventListener("click", function () {
      document
        .getElementById(trigger.getAttribute("rel"))
        .classList.toggle("hidden");
    });
  },
};
