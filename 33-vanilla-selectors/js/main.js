import "../css/custom.css";
import "../css/sakura.css";

import { CategoryFilter } from "./category";
import { CommonFeatures } from "./common";
import { FormInitializer } from "./forms-initializer";
import { UserForm } from "./user-form";

window.addEventListener("DOMContentLoaded", () => {
  CommonFeatures.init();
  CategoryFilter.init();
  FormInitializer.init();
  UserForm.init();
});
