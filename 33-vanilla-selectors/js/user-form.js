import { iterateNodes } from "./utils";

export const UserForm = {
  init: function () {
    if (!document.getElementById("user_form")) {
      return;
    }

    function validateRequiredField(field) {
      var isValid = !!field.value;

      if (!isValid) {
        field.classList.add("error");
      }
      return isValid;
    }

    function validateEmail() {
      var field = document.getElementById("email");
      var isValid = new RegExp(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      ).test(field.value);

      if (!isValid) {
        field.classList.add("error");
      }
      return isValid;
    }

    function validateDob() {
      var field = document.getElementById("dob");
      var date = +new Date(field.value);
      var now = +new Date();
      var isValid = Math.abs(new Date(now - date).getUTCFullYear() - 1970) > 18;

      if (!isValid) {
        field.classList.add("error");
      }
      return isValid;
    }

    function validateBio() {
      var field = document.getElementById("bio");
      var fieldLength = field.value.length;
      var isValid = fieldLength > 0 && field.value.length <= 200;

      if (!isValid) {
        field.classList.add("error");
      }
      return isValid;
    }

    function isFormValid() {
      document.getElementById("user_form_error").classList.add("hidden");

      var formControls = document.querySelectorAll(".js-form-control");

      iterateNodes(formControls, function (control) {
        control.classList.remove("error");
      });

      var isValid =
        validateRequiredField(document.getElementById("first_name")) &&
        validateRequiredField(document.getElementById("last_name")) &&
        validateEmail() &&
        validateDob() &&
        validateRequiredField(document.getElementById("country")) &&
        validateBio();

      if (!isValid) {
        document.getElementById("user_form_error").classList.remove("hidden");
      }

      return isValid;
    }

    document
      .getElementById("user_form")
      .addEventListener("submit", function (ev) {
        ev.preventDefault();

        if (isFormValid()) {
          this.classList.add("hidden");
          document.getElementById("thanks").classList.remove("hidden");
        }
      });
  },
};
