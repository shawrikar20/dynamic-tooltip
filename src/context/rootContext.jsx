import { createContext, useContext, useState } from "react";

export const RootContext = createContext(null);
RootContext.displayName = "RootContext";

function RootContextProvider({ children }) {
  const [tooltipText, setTooltipText] = useState("Tooltip text goes here");
  const [textSize, setTextSize] = useState(12);
  const [padding, setPadding] = useState(3.5);
  const [textColor, setTextColor] = useState("#fff");
  const [bgColor, setBgColor] = useState("#212121");
  const [cornerRadius, setCornerRadius] = useState(3.35);
  const [tooltipWidth, setTooltipWidth] = useState(200);
  const [arrowWidth, setArrowWidth] = useState(5);
  const [arrowHeight, setArrowHeight] = useState(5);

  const props = {
    tooltipStyle: {
      textColor,
      textSize,
      padding,
      bgColor,
      cornerRadius,
      tooltipText,
      tooltipWidth,
      arrowHeight,
      arrowWidth,
    },
    setFunctions: {
      setTooltipText,
      setArrowHeight,
      setArrowWidth,
      setBgColor,
      setCornerRadius,
      setPadding,
      setTextColor,
      setTextSize,
      setTooltipWidth,
    },
  };

  return <RootContext.Provider value={props}>{children}</RootContext.Provider>;
}

function useRootContext() {
  const context = useContext(RootContext);
  if (context === undefined) {
    throw new Error("useRootContext must be used within RootContextProvider");
  }
  return context;
}

export { RootContextProvider, useRootContext };
