import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (localStorage.key !== "tasksList") {
    return null;
  }
  return renderTasks();
};

window.addEventListener("storage", onStorageChange);
