function Filter({
  sortBy,
  setSortBy,
  isShowingOnlyGreased,
  setIsShowingOnlyGreased,
}) {
  return (
    <div style={{ margin: "20px" }}>
      <label>
        Show Only Greased?
        <input
          type="checkbox"
          checked={isShowingOnlyGreased}
          onChange={(e) => setIsShowingOnlyGreased(e.target.checked)}
        />
      </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by name</option>
        <option value="weight">Sort by weight</option>
      </select>
    </div>
  );
}

export default Filter;
