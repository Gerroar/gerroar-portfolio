  /**MobNavBar info
   * 
   * Goal: Using backdrop-filter : blur for the navbar I will blur what is 
   * on the background, when it's mobile and tablet the navbar will cover 
   * the whole screen 
   */

import { useToggle } from "../../hooks/useToggle";



  function MobNavBar() {
    const [value, toggle, setValue] = useToggle(true);
    function testButton() {
      toggle();
      alert(window.innerWidth)
    }
    return (
      <button
      onClick={testButton}>Button</button>
    )
  }

  export default MobNavBar