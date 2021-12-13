import { renderTasks } from "./renderer.js";

import { createTask } from "./tasksGateway.js";

// eslint-disable-next-line consistent-return
export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask).then(() => {
    renderTasks();
  });
};
// 1.Prepare data
// 2. Write data to database
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
