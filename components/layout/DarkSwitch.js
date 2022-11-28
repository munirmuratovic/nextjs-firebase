import React from "react";
import useDarkmode from "../../hooks/use-darkmode";
import Button from "../ui/Button";

const DarkSwitch = () => {
  const [colorTheme, switchTheme] = useDarkmode();

  return (
    <div onClick={switchTheme} htmlFor="toogleA">
      
        <Button
          onClick={switchTheme}
          htmlFor="toogleA"
          bsIcon={colorTheme == "dark" ? "bi-lightning" : "bi-lightning-fill"}
        />
    </div>
  );
};

export default DarkSwitch;
