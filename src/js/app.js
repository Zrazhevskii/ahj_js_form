import Tooltip from "./tooltip";

const button = document.querySelector(".btn");

const tooltip = new Tooltip();

button.addEventListener("click", () => {
  if (document.querySelector(".tooltip-wrapper") === null) {
    tooltip.addTooltip(button);
  } else {
    tooltip.removeTooltip();
  }
});
