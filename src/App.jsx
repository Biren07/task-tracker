import { useEffect, useState } from "react";
import { taskApi } from "./services/taskApi";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    setTasks(taskApi.getTasks());
  }, []);

  useEffect(() => {
    taskApi.saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = tasks
    .filter((t) => statusFilter === "All" || t.status === statusFilter)
    .filter((t) =>
      t.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) =>
      sortBy === "name"
        ? a.title.localeCompare(b.title)
        : new Date(a.dueDate) - new Date(b.dueDate)
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400 p-6">
      <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-10 text-center underline">
          Task Tracker
        </h1>

        <TaskForm onAdd={(task) => setTasks([...tasks, task])} />

        <Filters
          status={statusFilter}
          onStatusChange={setStatusFilter}
          search={search}
          onSearch={setSearch}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <TaskList
          tasks={filteredTasks}
          onUpdate={(updated) =>
            setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)))
          }
          onDelete={(id) => setTasks(tasks.filter((t) => t.id !== id))}
        />
      </div>
    </div>
  );
}
