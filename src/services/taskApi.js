import { dummyTasks } from "../Data/dummyTasks";

const STORAGE_KEY = "tasks";

export const taskApi = {
  getTasks() {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyTasks));
      return dummyTasks;
    }

    return JSON.parse(stored);
  },

  saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
};
