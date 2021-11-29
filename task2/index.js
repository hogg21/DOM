export const getTitleElement = () => {
  const elem = document.querySelector(".title");
  console.dir(elem);
  return elem;
};

export const getInputElem = () => {
  const inputElem = document.querySelector("input");
  inputElem.setAttribute("type", "text");
  console.dir(inputElem);
  return inputElem;
};
