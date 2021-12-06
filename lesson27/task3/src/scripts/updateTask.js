import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";

// eslint-disable-next-line consistent-return
export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return null;
  }

  const tasksList = getItem("tasksList");

  const newTasksList = tasksList.map((task) => {
    if (task.id === e.target.dataset.id) {
      console.log(e.target.checked);
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem("tasksList", newTasksList);

  renderTasks();
};
