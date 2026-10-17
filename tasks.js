// tasks.js - reusable task functions (exported so main.js can import them)

// SPREAD OPERATOR: copies the old tasks into a NEW array and adds the new task.
export function addTask(tasks, text) {
  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };
  return [...tasks, newTask];
}

// Flip one task between done and not done.
// SPREAD again: copy the task object, then change only "completed".
export function toggleTask(tasks, id) {
  const newTasks = [];
  for (const task of tasks) {
    if (task.id === id) {
      newTasks.push({ ...task, completed: !task.completed });
    } else {
      newTasks.push(task);
    }
  }
  return newTasks;
}

// Remove the task with this id.
export function deleteTask(tasks, id) {
  const newTasks = [];
  for (const task of tasks) {
    if (task.id !== id) {
      newTasks.push(task);
    }
  }
  return newTasks;
}

// REST PARAMETER: ...numbers collects any number of values into an array.
// addUp(2, 3) works, and so does addUp(1, 2, 3, 4).
export function addUp(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total = total + number;
  }
  return total;
}

// Count completed and pending tasks.
export function getStats(tasks) {
  let completed = 0;
  let pending = 0;
  for (const task of tasks) {
    if (task.completed) {
      completed = completed + 1;
    } else {
      pending = pending + 1;
    }
  }
  const total = addUp(completed, pending);
  return { total, completed, pending };
}