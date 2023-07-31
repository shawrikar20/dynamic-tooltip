import Button from "./Button";
import { BUTTONS } from "../constants";
export default function MobileScreen() {
  return (
    <div className="mobile-screen">
      {BUTTONS.map((button, ind) => (
        <Button id={button.id} text={button.text} position={button.position} />
      ))}
    </div>
  );
}
