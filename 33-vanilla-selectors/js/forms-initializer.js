import { countChars, iterateNodes } from "./utils";
import $ from "jquery";

export const FormInitializer = {
  init: function () {
    if (!document.querySelector("form")) {
      return;
    }
    /**
     * Count character in selected fields
     */
    var contentCounters = document.querySelectorAll(".js-count-content");

    iterateNodes(contentCounters, function (counter) {
      var form_field = counter.parentElement.querySelector(".js-form-control");
      var char_counter_container = counter.querySelector(".js-count-chars");

      char_counter_container.innerHTML = countChars(form_field.value);

      form_field.addEventListener("keyup", function () {
        char_counter_container.innerHTML = countChars(form_field.value);
      });
    });

    /**
     * Load select data
     */
    var dataLoaders = document.querySelectorAll(".js-load-data");

    iterateNodes(dataLoaders, function (select) {
      // eslint-disable-next-line jquery/no-ajax
      $.getJSON(
        "http://" +
          ("localhost" == document.domain
            ? "localhost:8080"
            : document.domain) +
          "/data/" +
          select.getAttribute("data-type") +
          ".json",
        function (json) {
          if (json && json.data) {
            for (var i = 0, len = json.data.length; i < len; i++) {
              var option = document.createElement("option");
              option.textContent = json.data[i].name;
              select.append(option);
            }
          } else {
            console.warn(
              "Could not find" + select.getAttribute("data-type") + ".json"
            );
          }
        }
      );
    });
  },
};
