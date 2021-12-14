const spinerElem = document.querySelector(".spinner");
export const hideSpinner = () => {
  spinerElem.classList.remove("spinner_hidden");
};
export const showSpinner = () => {
  spinerElem.classList.add("spinner_hidden");
};
