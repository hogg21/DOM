// window.addEventListener("unhandledrejection", function onError(e) {
//   console.log(e.reason.message);
// });

// const successRequest = Promise.resolve({ name: "Tom" });
// successRequest
//   .then((result) => {
//     console.log(result);
//     throw new Error("Unexpended error");
//   })
//   .catch((err) => {
//     console.warn(err.message);
//   });

// const failedRequest = Promise.reject(new Error("Fail"));
// failedRequest
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.warn(err.message);
//     throw err;
//   })
//   .then((data) => {
//     console.log(data);
//   });

const successRequest = Promise.resolve({ name: "Tom" });

successRequest
  .then(function onSuccess1(data) {
    throw new Error("Error with data");
    // (1)
  })
  .catch(function onError1(error) {
    console.error("Error1", error.message);
  });

const failRequest = Promise.reject(new Error("Something went wrong"));

failRequest
  .catch(function onError2(error) {
    console.error("onError2", error.message);
    throw new Error("Server error");
    // (2)
  })
  .then(function onSuccess2(data) {
    console.log("onSuccess2", data);
  })
  .catch(function onError3(error) {
    console.error("Error3", error.message);
  });
