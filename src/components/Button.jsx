import Tooltip from "./Tooltip";
export default function Button({ id, text, position }) {
  return (
    <div style={position} className="button-container">
      <div id={id} className="parent-button">
        {text}
      </div>
      <Tooltip />
    </div>
  );
}
