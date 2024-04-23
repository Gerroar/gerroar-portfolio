import './App.css'
import IntroVideo from './features/IntroVideo'
import MobNavBar from './components/NavBar/MobNavBar'

function App() {

  /**TAILWIND INFO
   * 
   * - The development of the web portfolio will be mobile-first
   *   so the breakpoints will go for desktop/tablets
   */


  return (
    <>
      <IntroVideo />
      <MobNavBar/>
    </>
  )
}

export default App
