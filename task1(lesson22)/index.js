const elemDiv = document.querySelector(".rect_div");
const elemP = document.querySelector(".rect_p");
const elemSpan = document.querySelector(".rect_span");
const eventsListElem = document.querySelector(".events-list");
const removeBtn = document.querySelector(".remove-handlers-btn");
const clearButton = document.querySelector(".clear-btn");
const addBtn = document.querySelector(".attach-handlers-btn");

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left:8px;">${text}</span>`;
};

const logGreenSpan = logTarget.bind(null, "SPAN", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenDiv = logTarget.bind(null, "DIV", "green");

const logGreySpan = logTarget.bind(null, "SPAN", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreyDiv = logTarget.bind(null, "DIV", "grey");

const attachBtn = () => {
  elemSpan.addEventListener("click", logGreySpan, true);
  elemSpan.addEventListener("click", logGreenSpan);
  elemP.addEventListener("click", logGreyP, true);
  elemP.addEventListener("click", logGreenP);
  elemDiv.addEventListener("click", logGreyDiv, true);
  elemDiv.addEventListener("click", logGreenDiv);
};
const clearList = () => {
  eventsListElem.innerHTML = "";
};
const removeBtnHandlers = () => {
  elemSpan.removeEventListener("click", logGreySpan, true);
  elemSpan.removeEventListener("click", logGreenSpan);

  elemP.removeEventListener("click", logGreyP, true);
  elemP.removeEventListener("click", logGreenP);

  elemDiv.removeEventListener("click", logGreyDiv, true);
  elemDiv.removeEventListener("click", logGreenDiv);
};
removeBtn.addEventListener("click", removeBtnHandlers);
clearButton.addEventListener("click", clearList);
addBtn.addEventListener("click", attachBtn);
document.addEventListener("DOMContentLoaded", () => {
  attachBtn();
});
