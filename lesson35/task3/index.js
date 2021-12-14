import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, clearList } from "./reposithory.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";
const defaultUser = {
  avatar_url: defaultUserAvatar,
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
    .then((repoList) => {
      renderRepos(repoList);
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
