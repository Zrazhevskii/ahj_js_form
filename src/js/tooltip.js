export default class Tooltip {
  constructor(tooltip) {
    this._tooltip = tooltip;
  }

  addTooltip(element) {
    //tooltipWrap
    const tooltipWrap = document.createElement("div");
    tooltipWrap.classList.add("tooltip-wrapper");

    //tooltipTitle
    const tooltipTitle = document.createElement("h3");
    tooltipTitle.classList.add("tooltip-title");
    tooltipTitle.textContent = "Tooltip title";

    //tooltipText
    const tooltipText = document.createElement("div");
    tooltipText.classList.add("tooltip-text");
    tooltipText.textContent =
      "And here iss some amazing content. It is very engaging. Right?";

    tooltipWrap.prepend(tooltipTitle);
    tooltipWrap.append(tooltipText);
    document.body.append(tooltipWrap);

    const { left } = element.getBoundingClientRect();

    console.log(left);

    tooltipWrap.style.bottom =
      tooltipWrap.offsetHeight + element.offsetHeight + 10 + "px";
    tooltipWrap.style.left =
      left + (element.offsetWidth - tooltipWrap.offsetWidth) / 2 - 8 + "px";
  }

  removeTooltip() {
    const currentTooltip = document.querySelector(".tooltip-wrapper");
    currentTooltip.remove();
  }
}
