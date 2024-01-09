import Select from "../Select";

export const SortControl = ({ sortId, setSortId, className }) => {
  return (
    <Select
      label="Sort"
      value={sortId}
      onChange={(ev) => setSortId(ev.target.value)}
      className={className}
    >
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
    </Select>
  );
};
