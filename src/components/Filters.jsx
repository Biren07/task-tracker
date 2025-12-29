export default function Filters({
  status,
  onStatusChange,
  search,
  onSearch,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <select
        className="border rounded px-2 py-2 w-full sm:w-auto"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>

      <input
        type="text"
        placeholder="Search tasks..."
        className="border rounded px-3 py-2 text-sm w-full"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />

      <select
        className="border rounded px-2 py-2 w-full sm:w-auto"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="date">Date</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}
