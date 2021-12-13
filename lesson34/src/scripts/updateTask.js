import { renderTasks } from "./renderer.js";
import { getTasksList, updateTask } from "./tasksGateway.js";

// eslint-disable-next-line consistent-return
export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return null;
  }

  const tasksList = getTasksList("tasksList");

  tasksList.then((el) =>
    el.map((task) => {
      if (task.id === e.target.dataset.id) {
        const done = e.target.checked;
        updateTask(task.id, {
          ...task,
          done,
          finishDate: done ? new Date().toISOString() : null,
        }).then(() => renderTasks());

        return {
          // return item updated or not item to array
          ...task,
          done,
          finishDate: done ? new Date().toISOString() : null,
        };
      }
      return task;
    })
  );
};
// 1.Prepare data
// 2. Update data in database
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
