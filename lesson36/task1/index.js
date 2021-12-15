// async function func() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(17);
//     }, 1000);
//   });
//   const result = await promise;
//   console.log(result);
//   console.log("Hello");
// }
// const result = func();
// console.log("Hi");
const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error("Failed to fetch user");
  }
};
console.log(fetchUser("facebook"));
