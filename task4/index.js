/* eslint-disable no-unused-expressions */
export const getTitle = () => {
  const elemTitle = document.querySelector(".title").textContent;
  console.log(elemTitle);
  return elemTitle;
};
export const getDescription = () => {
  const aboutElem = document.querySelector(".about").innerText;
  console.log(aboutElem);
  return aboutElem;
};
export const getPlans = () => {
  const plansElem = document.querySelector(".plans").innerHTML;
  console.log(plansElem);
  return plansElem;
};
export const getGoal = () => {
  const goalsElem = document.querySelector(".goal").outerHTML;
  console.log(goalsElem);
  return goalsElem;
};
getTitle();
getDescription();
getPlans();
getGoal();
