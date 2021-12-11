const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const defaultAvatar =
  "https://www.primecrime.ru/cache/107-140-100/public/upload/char_images/b37b2db2221e60bd9ca714ac5d7f6c70_1520486879.jpg";

userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};
const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
};
const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};
showUserBtnElem.addEventListener("click", onSearchUser);
