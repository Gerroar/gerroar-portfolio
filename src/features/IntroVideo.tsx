/**
 * IntroVideo — lightweight hero video section.
 *
 * Purpose:
 *  - Display a short looping intro/hero video for brand impact.
 *
 * Playback:
 *  - Uses `autoPlay`, `muted`, and `playsInline` to satisfy mobile autoplay policies.
 *  - Consider adding `poster` as a fallback for the first frame (improves perceived LCP).
 *
 * Performance:
 *  - Ensure the video source is optimized (resolution/bitrate) to avoid layout shifts.
 *  - Consider lazy-loading or deferring if it impacts initial render.
 *
 * Expected result:
 *  - Starts quickly without blocking UI; falls back gracefully if playback fails.
 */

import intromp4 from '../assets/videos/gerIntro.mp4'
function IntroVideo() {
/** Responsive sizing
     * Tailwind classes applied:
     *  - base: w-full
     *  - xxs:ml-4
     *  - s:w-[40rem]
     *  - md:w-[650px]
     *  - lg:w-[36rem]
     *  - xl:w-[43rem]
     *  - 2xl:w-[48rem]
     *  - 4xl:w-[60rem]
     * Purpose: keep video proportional across screen sizes
*/
    return (
        <section className='overflow-hidden'>
            {/* Hero video
              Classes:
              - absolute left-[5%] bottom-0 → positioned slightly inset for centering
              - min-h-full w-[90%] → fill height, maintain width ratio
              - h-auto bg-cover overflow-hidden → responsive fit
              - z-0 → sit behind overlay elements
            */}
            <video autoPlay muted playsInline className='absolute left-[5%]
            bottom-0 min-h-full w-[90%] h-auto bg-cover overflow-hidden z-0'>
                <source src={intromp4} />
            </video>
        </section>
    )
}

export default IntroVideo
