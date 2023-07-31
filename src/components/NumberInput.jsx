export default function NumberInput({ changeFunc, num }) {
  return (
    <input
      type="number"
      onChange={(e) => {
        changeFunc(e.target.value);
      }}
      value={num}
      className="form-input"
    />
  );
}
