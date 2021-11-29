export const getTitleElement = () => {
  const elem = document.querySelector(".title");
  console.dir(elem);
  return elem;
};

export const getInputElem = () => {
  const inputElem = document.querySelector("[type="text"]");
  console.dir(inputElem);
  return inputElem;
};
getTitleElement();
getInputElem();
