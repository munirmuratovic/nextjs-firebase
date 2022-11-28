import { useEffect, useState } from "react";

export default function useDarkmode() {
  const [dark, setDark] = useState(false);

  let colorTheme = dark ? "dark" : "";

  const switchTheme = () => {
    localStorage.setItem("dark", !dark);
    setDark(!dark);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("dark") == "true") {
        colorTheme = "dark";
        document.documentElement.className = colorTheme;
        setDark(true);
      } else {
        colorTheme = "";
        document.documentElement.className = colorTheme;
        setDark(false);
      }
    }
  }, []);
  

  useEffect(() => {
    document.documentElement.className = colorTheme;
  }, [dark, colorTheme]);

  return [colorTheme, switchTheme];
}
