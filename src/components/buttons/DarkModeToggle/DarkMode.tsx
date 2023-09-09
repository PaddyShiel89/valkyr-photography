import React from "react";
import useDarkMode from "@fisch0920/use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  const onClick = darkMode.value ? darkMode.disable : darkMode.enable;
  const opposite = darkMode.value ? "light" : "dark";

  return (
    <div>
      <button type="button" onClick={onClick}>
        Switch to {opposite} mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
