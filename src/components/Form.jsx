import React from "react";
import Row from "./Row";
import Label from "./Label";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import { BUTTONS } from "../constants";
import { useRootContext } from "../context/rootContext";
export default function Form() {
  const context = useRootContext();
  return (
    <div className="parent-form">
      <Row>
        <div className="form-input-parent">
          <Label text={"Target Element"} />
          <select
            className="form-input"
            name="button-select"
            id="button-select"
          >
            {BUTTONS.map((button) => (
              <option value={button.id}>{button.text}</option>
            ))}
          </select>
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Tooltip Text"} />
          <TextInput
            changeFunc={context.setFunctions.setTooltipText}
            text={context.tooltipStyle.tooltipText}
          />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Text Size"} />
          <NumberInput
            changeFunc={context.setFunctions.setTextSize}
            num={context.tooltipStyle.textSize}
          />
        </div>
        <div className="form-input-parent">
          <Label text={"Padding"} />
          <NumberInput
            changeFunc={context.setFunctions.setPadding}
            num={context.tooltipStyle.padding}
          />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Text Colour"} />
          <TextInput
            changeFunc={context.setFunctions.setTextColor}
            text={context.tooltipStyle.textColor}
          />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Background Colour"} />
          <TextInput
            changeFunc={context.setFunctions.setBgColor}
            text={context.tooltipStyle.bgColor}
          />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Corner Radius"} />
          <NumberInput
            changeFunc={context.setFunctions.setCornerRadius}
            num={context.tooltipStyle.cornerRadius}
          />
        </div>
        <div className="form-input-parent">
          <Label text={"Tooltip Width"} />
          <NumberInput
            changeFunc={context.setFunctions.setTooltipWidth}
            num={context.tooltipStyle.tooltipWidth}
          />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Arrow Width"} />
          <NumberInput
            changeFunc={context.setFunctions.setArrowWidth}
            num={context.tooltipStyle.arrowWidth}
          />
        </div>
        <div className="form-input-parent">
          <Label text={"Arrow Height"} />
          <NumberInput
            changeFunc={context.setFunctions.setArrowHeight}
            num={context.tooltipStyle.arrowHeight}
          />
        </div>
      </Row>
    </div>
  );
}
