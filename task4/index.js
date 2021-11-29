/* eslint-disable no-unused-expressions */
export const getTitle = () => {
  const elemTitle = document.querySelector(".title").textContent;
};
export const getDescription = () => {
  const aboutElem = document.querySelector(".about");
  aboutElem.innerText;
};
export const getPlans = () => {
  const plansElem = document.querySelector(".plans");
  plansElem.innerHTML;
};
export const getGoal = () => {
  const goalsElem = document.querySelector(".goal");
  goalsElem.outerHTML;
};
getTitle();
getDescription();
getPlans();
getGoal();
