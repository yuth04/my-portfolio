import { useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = new fairyDustCursor({
      colors: ["#7c5cfc", "#a78bfa", "#e0e0f0"],
    });
    return () => cursor.destroy();
  }, []);
  return null;
};

export default CustomCursor;