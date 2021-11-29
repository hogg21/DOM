export const getTitleElement = () => {
  const elem = document.querySelector(".title");
  console.dir(elem);
  return elem;
};

export function getInputElement() {
  const result = document.querySelector('[type="text"]');
  console.dir(result);
  return result;
}
getTitleElement();
getInputElement();
