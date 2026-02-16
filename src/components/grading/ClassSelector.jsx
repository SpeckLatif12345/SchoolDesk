function ClassSelector({ selectedClass, setSelectedClass }) {
  const classes = ["JSS 1", "JSS 2"];

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6 max-w-xs">
      <label className="block text-sm font-medium mb-2">Select Class</label>

      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        className="w-full border rounded px-3 py-2"
      >
        <option value="">-- Choose class --</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>
    </div>
  );
}
export default ClassSelector;
