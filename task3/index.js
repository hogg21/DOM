const getItemsList = () => {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
};
const getItemsArray = () => {
  const elem = document.querySelectorAll(".tool");
  const NodeList = Array.from(elem);
  console.dir(NodeList);
  return NodeList;
};
getItemsList();
getItemsArray();
