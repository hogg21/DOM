export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
};
console.log(getLocalStorageData());

// localStorage.setItem("name", JSON.stringify("Denis"));
// localStorage.setItem("age", JSON.stringify(18));
