import intromp4 from '../assets/videos/gerIntro.mp4'
function IntroVideo() {

    return (
        <section className='div1 absolute -z-10 top-2 left-[14vw] 
        s:left-[14vw] 
        sm:left-[26vw] 
        md:left-[12vw]
        lg:z-0 lg:top-32 lg:left-8
        xl:left-20'>
            <video autoPlay muted playsInline className=' w-[21rem] 
            s:w-[22rem] 
            md:w-[650px] 
            lg:w-[36rem]
            xl:w-[43rem]
            2xl:w-[48rem]
            4xl:w-[60rem]'>
                <source src={intromp4} />
            </video>
        </section>
    )
}

export default IntroVideo