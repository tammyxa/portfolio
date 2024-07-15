import { useState } from "react";
import { Taskbar } from "../Taskbar";

export const Ditto = () => {
  const [value, setValue] = useState(0);

  const handleDittoClick = () => {
    setValue(value + 1);
  };
  return (
    <>
      <img
        src="ditto.png"
        alt="Ditto"
        style={{
          position: "fixed",
          bottom: 50,
          right: 50,
          height: "20vh",
          width: "auto",
        }}
        onClick={handleDittoClick}
      />
      <Taskbar value={value} />
    </>
  );
};
