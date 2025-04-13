import { FC } from "react";
import styles from "./toggleBtn.module.scss";

const ToggleButton: FC = () => {
  return (
    <div className="toggle-button">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">Toggle</label>
    </div>
  );
};

export default ToggleButton;
