import { renderUserData, renderRepos, clearList } from "./render.js";
import { showSpinner, hideSpinner } from "./spinner.js";
import { fetchUserData, fetchRepositories } from "./apiRequest.js";

const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";
const defaultUser = {
  avatar_url: defaultUserAvatar,
  name: "",
  location: "",
};
const userNameInput = document.querySelector(".name-form__input");
const showUserBtnElem = document.querySelector(".name-form__btn");

renderUserData(defaultUser);

const onSearchUser = async () => {
  showSpinner();
  const userName = userNameInput.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
  // fetchUserData(userName)
  //   .then((userData) => {
  //     renderUserData(userData);
  //     return userData.repos_url;
  //   })
  //   .then((url) => fetchRepositories(url))
  //   .then((reposList) => {
  //     renderRepos(reposList);
  //     hideSpinner();
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   })
  //   .finally(() => {
  //     hideSpinner();
  //   });
};

showUserBtnElem.addEventListener("click", onSearchUser);
