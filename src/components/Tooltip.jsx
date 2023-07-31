import { useEffect, useRef, useState } from "react";
import { useRootContext } from "../context/rootContext";

export default function Tooltip({ position }) {
  const context = useRootContext();
  const [positionStyle, setPositionStyle] = useState({
    tooltip: {},
    tooltipText: {},
  });
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
      updateStyle(
        tooltipRef.current,
        "--tooltip-text-size",
        context.tooltipStyle.textSize + "px"
      );
    }
  };

  useEffect(() => {
    switch (position) {
      case "BOTTOM": {
        setPositionStyle({
          tooltip: {
            top: "100%",
          },
        });
        break;
      }
      case "TOP": {
        setPositionStyle({
          tooltip: {
            bottom: "100%",
            transform: "rotateX(180deg)",
          },
          tooltipText: {
            transform: "rotateX(-180deg)",
          },
        });
        break;
      }
    }
  }, [position]);

  useEffect(() => {
    updateTooltipStyles();
  }, [context]);
  return (
    <div ref={tooltipRef} style={positionStyle.tooltip} className="tooltip">
      <div className="tooltip-arrow"></div>
      <div className="tooltip-container">
        <div
          ref={tooltipTextRef}
          style={positionStyle.tooltipText}
          className="tooltip-text"
        >
          {context.tooltipStyle.tooltipText}
        </div>
      </div>
    </div>
  );
}
