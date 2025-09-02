/**
 * useDimensions — reads the current width/height of a referenced element.
 *
 * API:
 *  - Input: React ref (ref.current must be an Element with offsetWidth/offsetHeight).
 *  - Returns: { width: number, height: number } (values captured once on mount).
 *
 * Behavior:
 *  - Measures `offsetWidth` and `offsetHeight` only once after mount.
 *  - Does NOT subscribe to resize/observer events; values do not update on window resize.
 *
 * Caveats:
 *  - Returns {0,0} until the effect runs and the ref is attached.
 *  - If you need live updates on resize/content changes, switch to ResizeObserver.
 *
 * Expected result:
 *  - One-time measurement suitable for static layouts or initial calculations.
 */

import { useEffect, useRef } from "react";
export const useDimensions = (ref:any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};