import { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

/**Custom hook that manages a boolean toggle state in React components.
 * https://usehooks-ts.com/react-hook/use-toggle
 */

/**How it works in simple words: With this custom hook you can do three things
 * 1.- Getting the actual value of the "Toggle" without changing anything
 * 2.- Toggle the value 
 * 3.- Using setValue you can decide which will we the value of the "Toggle"
 */

export function useToggle(
    defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
    const [value, setValue] = useState(!!defaultValue);
    const toggle = useCallback(() => {
        setValue(x => !x)
    }, [])

    return [value, toggle, setValue];
}
