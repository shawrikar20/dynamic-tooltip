export default function TextInput({ changeFunc, text }) {
  return (
    <input
      type="text"
      onChange={(e) => {
        changeFunc(e.target.value);
      }}
      value={text}
      className="form-input"
    />
  );
}
