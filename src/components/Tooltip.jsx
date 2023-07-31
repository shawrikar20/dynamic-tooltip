import { useEffect, useRef } from "react";
import { useRootContext } from "../context/rootContext";

export default function Tooltip() {
  const context = useRootContext();
  const tooltipRef = useRef(null);
  const tooltipTextRef = useRef(null);
  const updateStyle = (elem, name, value) => {
    elem.style.setProperty(name, value);
  };
  const updateTooltipStyles = () => {
    if (tooltipRef && tooltipTextRef) {
      updateStyle(
        tooltipRef.current,
        "--tooltip-background",
        context.tooltipStyle.bgColor
      );
      updateStyle(
        tooltipRef.current,
        "--tooltip-width",
        context.tooltipStyle.tooltipWidth + "px"
      );
      updateStyle(
        tooltipRef.current,
        "--tooltip-border-radius",
        context.tooltipStyle.cornerRadius + "px"
      );
      updateStyle(
        tooltipTextRef.current,
        "--tooltip-color",
        context.tooltipStyle.textColor
      );
      updateStyle(
        tooltipRef.current,
        "--tooltip-border-width",
        context.tooltipStyle.arrowWidth + "px"
      );
      updateStyle(
        tooltipRef.current,
        "--tooltip-border-height",
        context.tooltipStyle.arrowHeight + "px"
      );
      updateStyle(
        tooltipRef.current,
        "--tooltip-padding",
        context.tooltipStyle.padding + "px"
      );
    }
  };

  useEffect(() => {
    updateTooltipStyles();
  }, [context]);
  return (
    <div ref={tooltipRef} className="tooltip">
      <div ref={tooltipTextRef} className="tooltip-text">
        {context.tooltipStyle.tooltipText}
      </div>
    </div>
  );
}
