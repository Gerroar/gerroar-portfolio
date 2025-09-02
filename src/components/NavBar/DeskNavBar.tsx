/**
 * DeskNavBar — fixed top navigation for desktop/tablet screens.
 *
 * Purpose:
 *  - Provides a persistent top bar with backdrop blur and a bottom border gradient.
 *
 * Behavior:
 *  - Fixed positioning at the top.
 *  - No internal state; acts as a purely presentational component.
 *
 * Accessibility:
 *  - Wrap in a <nav role="navigation"> at a higher level if links are added here later.
 *
 * Expected result:
 *  - A visually clean, semi-transparent top bar that does not interfere with page scroll.
 */

function DeskNavBar() {

    return(
        <div className="fixed top-0 -left-1 h-14 
        z-10 w-[102vw] webkit-backdrop-blur backdrop-blur-xl border-t-0 
        border-l-0 border-r-0 border-only-bottom 
        border-gradient"></div>
    )
}

export default DeskNavBar;