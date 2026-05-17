import { useState, useMemo } from "react";

let baseZIndex = 0;
const INITIAL_ZINDEX = 2000;

export const nextZIndex = () => {
    baseZIndex++;
    return baseZIndex + INITIAL_ZINDEX;
};

const useZIndex = (initialValue = INITIAL_ZINDEX) => {
  const [initialZIndex] = useState(initialValue);

  const currentZIndex = useMemo(() => {
    return baseZIndex + initialZIndex;
  }, [baseZIndex, initialZIndex]);

  return {
    currentZIndex,
    nextZIndex,
    initialZIndex,
  };
};

export default useZIndex;