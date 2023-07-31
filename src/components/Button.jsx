import Tooltip from "./Tooltip";
import { useRootContext } from "../context/rootContext";
export default function Button({ id, text, position, tooltipPosition }) {
  const context = useRootContext();
  return (
    <div style={position} className="button-container">
      <div id={id} className="parent-button">
        {text}
      </div>
      {context.tooltipStyle.targetElemId === id && (
        <Tooltip position={tooltipPosition} />
      )}
    </div>
  );
}
