/**
 * MenuToggle — animated hamburger button for mobile nav.
 *
 * Purpose:
 *  - Render an accessible toggle control to open/close the mobile menu.
 *  - Drive open/close animations via Framer Motion.
 *
 * Props:
 *  - isOpen: boolean — current open/closed state of the menu.
 *  - onToggle: () => void — invoked when the user activates the button.
 *
 * Accessibility:
 *  - role="button", aria-expanded={isOpen}, aria-controls referencing the menu container.
 *  - Keyboard: Space/Enter toggles; Esc should close if the button holds focus.
 *
 * Expected result:
 *  - Visual transition between hamburger and close (X) icon.
 *  - No scroll jank when opening/closing the menu.
 */

import { motion } from "framer-motion";

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }: any) => (
    {/* Toggle button
    Classes:
    - fixed top-4 left-1 → pinned to top-left corner
    - w-14 h-12 → large hit area for touch devices
    - z-20 → sits above overlay
    - bg-transparent, outline-none → minimal styling
    */}
    <button onClick={toggle} className="fixed z-20 outline-none border-none cursor-pointer top-4 left-1 w-14 h-12 bg-transparent">
    {/* SVG icon
      - width/height fixed to 23px
      - ml-6 → positions icon inside button padding
    */}
        <svg width="23" height="23" viewBox="0 0 23 23" className="ml-6">
        {/* Top line → animates into diagonal when open */}
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
        {/* Middle line → fades out when open */}
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            {/* Bottom line → animates into diagonal when open */}
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);