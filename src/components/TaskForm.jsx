import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    onAdd({
      id: Date.now(),
      title,
      dueDate,
      status: "Pending",
    });

    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={submit} className="flex gap-2 mb-4">
      <input
        className="flex-1 border rounded px-3 py-2 text-sm"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="border rounded px-3 py-2 text-sm"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-300 hover:text-black">
        Add
      </button>
    </form>
  );
}
