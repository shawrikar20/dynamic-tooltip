import Button from "./Button";
import { BUTTONS } from "../constants";
export default function MobileScreen() {
  return (
    <div className="mobile-screen">
      {BUTTONS.map((button, ind) => (
        <Button
          tooltipPosition={button.tooltipPosition}
          id={button.id}
          text={button.text}
          position={button.position}
        />
      ))}
    </div>
  );
}
