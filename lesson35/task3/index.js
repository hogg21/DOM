import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, clearList } from "./reposithory.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUser = {
  avatar_url: "https://avatars.githubusercontent.com/u1001",
  name: "",
  location: "",
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  showSpinner();
  clearList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
      hideSpinner();
    })
    .catch((err) => {
      hideSpinner();
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};
showUserBtnElem.addEventListener("click", onSearchUser);
