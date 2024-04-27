import './App.css'
import IntroVideo from './features/IntroVideo'
import MobNavBar from './components/NavBar/MobNavBar'
import { useCallback, useEffect, useState } from 'react'
import DeskNavBar from './components/NavBar/DeskNavBar';

function App() {

  /**TAILWIND INFO
   * 
   * - The development of the web portfolio will be mobile-first
   *   so the breakpoints will go for desktop/tablets
   */

  //State for store the window width
  const [width, setWidth] = useState(window.innerWidth);

  //Breakpoint for max width on mobile devices
  const breakPoint = 800;

  //Updates for every re-size event
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    //Subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => (
      //Unsuscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow)
    )
  }, [])
  if(width > breakPoint) {
    return (
      <>
        <DeskNavBar />
        <IntroVideo />
      </>
    )
  }
  return (
    <>
      <MobNavBar />
      <IntroVideo />
    </>
  )
}

export default App
