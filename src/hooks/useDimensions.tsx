import { useEffect, useRef } from "react";
export const useDimensions = (ref:any) => {
  const dimensions = useRef({ widthDim: 0, heightDim: 0 });

  useEffect(() => {
    dimensions.current.widthDim = ref.current.offsetWidth;
    dimensions.current.heightDim = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};