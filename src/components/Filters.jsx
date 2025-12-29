export default function Filter({
  status,
  onStatusChange,
  search,
  onSearch,
  sortBy,
  onSortChange
}) {
  return (
    <div className="flex gap-2 mb-4">
      <select
        className="border rounded px-2 py-2"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>

      <input
        className="flex-1 border rounded px-3 py-2 text-sm"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />

      <select
        className="border rounded px-2 py-2"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="date">Date</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}
