import introwebm from '../assets/videos/gerIntro.webm'
function IntroVideo() {

    return (
        <section className='ml-6'>
            <video autoPlay muted playsInline className=''>
                <source src={introwebm} />
            </video>
        </section>
    )
}

export default IntroVideo