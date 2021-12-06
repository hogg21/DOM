import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputElem.value = "";
  const tasksList = getItem("tasksList") || [];

  const newtasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: (Math.random().toFixed(4) * 10000).toString(),
  });

  setItem("tasksList", newtasksList);

  renderTasks();
};
