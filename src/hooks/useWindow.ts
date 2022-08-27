import { useState, useEffect } from "react";

function getDimensionWindow() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return { width, height };
}

export function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handlerWindowResize() {
      setWindowDimension(getDimensionWindow());
    }

    setWindowDimension(getDimensionWindow());
    window.addEventListener("resize", handlerWindowResize);

    return () => window.removeEventListener("resize", handlerWindowResize);
  }, []);

  return windowDimension;
}
