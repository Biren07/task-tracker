export default function TaskItem({ task, onUpdate, onDelete }) {
  return (
    <li
      className={`flex justify-between items-center border rounded p-3 ${
        task.status === "Done" ? "bg-green-300" : "bg-white"
      }`}
    >
      <div>
        <p className="font-medium text-sm">{task.title}</p>
        <p className="text-xs text-gray-500">{task.dueDate}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="text-xs px-2 py-1 border rounded"
          onClick={() =>
            onUpdate({
              ...task,
              status: task.status === "Pending" ? "Done" : "Pending"
            })
          }
        >
         👍
        </button>
        <button
          className="text-xs px-2 py-1 border rounded text-red-600"
          onClick={() => onDelete(task.id)}
        >
         ❌
        </button>
      </div>
    </li>
  );
}
