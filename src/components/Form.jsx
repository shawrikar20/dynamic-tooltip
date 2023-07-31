import React from "react";
import Row from "./Row";
import Label from "./Label";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import { BUTTONS } from "../constants";
export default function Form() {
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
          <TextInput />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Text Size"} />
          <NumberInput />
        </div>
        <div className="form-input-parent">
          <Label text={"Padding"} />
          <NumberInput />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Text Colour"} />
          <TextInput />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Background Colour"} />
          <TextInput />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Corner Radius"} />
          <NumberInput />
        </div>
        <div className="form-input-parent">
          <Label text={"Tooltip Width"} />
          <NumberInput />
        </div>
      </Row>
      <Row>
        <div className="form-input-parent">
          <Label text={"Arrow Width"} />
          <NumberInput />
        </div>
        <div className="form-input-parent">
          <Label text={"Arrow Height"} />
          <NumberInput />
        </div>
      </Row>
    </div>
  );
}
