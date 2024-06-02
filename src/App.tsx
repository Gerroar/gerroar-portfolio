import './App.css'

import MobNavBar from './components/NavBar/MobNavBar'
import { useEffect, useState } from 'react'
import DeskNavBar from './components/NavBar/DeskNavBar';
import BentoIntro from './components/Bento/BentoIntro';

function App() {

  /**TAILWIND INFO
   * 
   * - The development of the web portfolio will be mobile-first
   *   so the breakpoints will go for desktop/tablets
   */

  //State for store the window width
  const [width, setWidth] = useState(window.innerWidth);

  //Breakpoint for max width on mobile devices
  const breakPoint = 1023;

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
  if (width > breakPoint) {
    return (
      <>
        <DeskNavBar />
        <BentoIntro />

      </>
    )
  }
  return (
    <>
      <MobNavBar />
      <BentoIntro />
      <div className="box-shadow"></div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio a cum nisi odio vitae ipsa eaque est labore vero quidem, suscipit blanditiis fuga enim officiis reiciendis dolorem? Beatae, nisi?
        Asperiores voluptatem mollitia animi voluptate eius iste inventore delectus at doloribus nihil! Autem debitis ad corporis eum sequi, quidem pariatur culpa voluptates, voluptas facilis adipisci amet molestias temporibus. Quidem, eum?
        Iure impedit perspiciatis fuga temporibus hic repudiandae alias enim quisquam voluptatibus tempore labore voluptas cumque aperiam, voluptate dolor, quasi odio. Ipsum dolore, minus fuga magnam animi esse fugiat neque necessitatibus!
        Culpa amet nostrum nihil quam veniam, aliquam delectus iste tenetur nam ipsum. Distinctio, libero ut eum expedita earum porro dignissimos sed odit numquam, velit ipsum officiis nihil eaque vel? Dicta.
        Reprehenderit placeat nihil, quae dolor cumque eveniet, id ipsam voluptatibus libero iusto omnis, corporis inventore neque dolorum porro vero rerum necessitatibus facere odit minus atque amet molestiae? Porro, fugit blanditiis.
        Minima quod aut, dolores accusamus perspiciatis tempore aliquid vel eveniet sunt aliquam numquam beatae placeat eius rerum sapiente consectetur ut ullam autem illum dolore nemo! Accusamus laudantium magni aut voluptas!
        Vitae officiis mollitia quaerat vel dolor voluptatum magni aliquam. Voluptas ad maiores accusamus magni deserunt, quas rerum itaque officiis! Unde repudiandae reiciendis aliquid facilis minima nisi fuga possimus animi officiis!
        Facilis voluptate maiores deserunt sunt quasi ipsa ea quam consequuntur nam ratione, odio reprehenderit, magnam eos. Ullam veritatis ut ipsum voluptates sed vero, obcaecati temporibus eos amet sapiente doloremque neque!
        Fuga optio quas praesentium unde odit quaerat, illo, tempora architecto dolorem excepturi ipsum. Labore, autem vitae at excepturi quam ipsam, sit, expedita culpa porro illo quo sapiente eum officia ut.
        Reiciendis ipsum eum magni aperiam est, nam doloribus sunt delectus itaque facilis quibusdam ea perspiciatis quo nostrum tenetur amet quae ullam esse nemo impedit necessitatibus voluptas? Enim vel repudiandae illum?
        Reiciendis voluptatibus cupiditate quibusdam consectetur ullam odit deserunt, voluptates architecto exercitationem ratione accusantium dolor adipisci iste, nesciunt debitis rerum delectus aut omnis tempora impedit, quasi iure minus? Nobis, iste eius.
        Mollitia facere quo corporis quis quasi veritatis accusantium fugiat voluptatum beatae sed iste iusto, porro exercitationem repudiandae eos, dignissimos quisquam harum debitis et placeat? Voluptatum, soluta! Dignissimos cumque maxime reiciendis?
        Deserunt dignissimos obcaecati debitis ipsam, culpa quod ea nihil cupiditate quae eos aut incidunt odit perferendis illo itaque temporibus officia magni inventore repudiandae rerum harum. Ratione rerum iusto harum porro.
        Nesciunt aperiam blanditiis quae quam, aliquam unde inventore modi animi aspernatur similique, amet hic consequatur ipsum voluptate. Magni quos repellat fugit perspiciatis, dolorem asperiores eveniet? Magni facere mollitia repudiandae blanditiis.
        Commodi culpa neque quaerat beatae! Tenetur eos deleniti quae aspernatur minima laborum aliquid modi earum magni voluptas blanditiis, unde, soluta veniam voluptatem vel sequi omnis illum assumenda error beatae libero.
        Magnam, id perspiciatis similique alias officiis necessitatibus rerum, laborum saepe nisi eius reiciendis dolores incidunt maxime corporis, tempore asperiores? Vitae consequuntur ea reiciendis unde maxime quam impedit nemo provident magni!
        Dolor nemo qui esse vero numquam sint nulla maiores quisquam fugit modi consequatur unde, obcaecati, assumenda expedita iure inventore voluptatibus veniam natus dignissimos ipsum! Ipsam rem beatae quos reiciendis voluptatibus.
        Enim, sit? Illum, libero. Ex, illo fugit incidunt porro doloribus ut. Cum pariatur ducimus vitae nihil iure magni eius reprehenderit in sed veritatis explicabo reiciendis, assumenda cupiditate earum tenetur deserunt.
        Libero autem unde similique error nulla soluta ipsam repudiandae tempora praesentium fugiat, beatae laboriosam a quos, illo ipsum esse quod iste repellat. Impedit quod exercitationem enim quae, facere et ad.
        Maxime, esse in iusto mollitia ducimus dolores vel odit nobis eligendi sapiente nisi asperiores tempora eaque impedit quia. Voluptates vero modi dolores, praesentium at sed in odio molestias aliquam ad.
        Vero libero eum in ratione sed, a animi nihil consectetur quae sit qui porro id velit voluptas incidunt impedit ut perspiciatis ducimus enim culpa doloremque. Ut dicta libero animi similique.
        Beatae necessitatibus libero esse sed est, magni alias fugiat ipsum minima tenetur corporis dolorem ratione adipisci labore eius iure mollitia nobis possimus natus doloribus odio odit placeat eveniet amet. Quae.
        Ducimus labore quibusdam tenetur necessitatibus esse quisquam, perferendis ad nostrum maiores itaque repellendus sequi! Fugiat aliquid sequi suscipit, saepe quasi eligendi, dolorem laboriosam quia, recusandae veniam aut cupiditate? Quam, inventore.
        Rem voluptas voluptates quisquam, necessitatibus voluptate laudantium maiores eligendi magnam hic mollitia quam sequi labore tempora ducimus itaque asperiores. Vel reiciendis accusantium fuga inventore reprehenderit ullam expedita, cumque commodi laudantium.
        Debitis ut facere vero maiores fugit delectus aliquam ex. Officia cum et, quisquam ex vero quia est? Eos, ad rem quam quae necessitatibus, saepe neque id unde quos nesciunt reprehenderit.
        Sapiente sit libero esse exercitationem rerum necessitatibus sed dignissimos commodi veniam et repudiandae tempora facere eos cupiditate quos, modi sunt vitae animi nulla nesciunt? Dolorum odit assumenda nam minima illo!
        Mollitia, tempore architecto, optio porro cumque veniam ad doloremque quibusdam dolorem ab sapiente id! Aperiam necessitatibus quia similique saepe ipsa, omnis natus tempora maxime quis sapiente? Velit non deserunt cum?
        Itaque nemo, voluptate hic voluptates reiciendis in mollitia laboriosam maxime, et labore dolorum asperiores nisi quia, iste necessitatibus nihil perspiciatis sapiente eos possimus. Sequi a, deserunt assumenda non eius distinctio.
        Laborum ut corrupti, blanditiis neque voluptatibus aspernatur illum quasi, nulla quas modi officia adipisci ullam deserunt. Odio molestias corporis consequuntur laborum? Laborum quae corporis commodi iste at quisquam rerum ad.
        Quae a esse laudantium corporis suscipit amet corrupti explicabo officia quisquam fugiat. Perspiciatis molestiae est, assumenda numquam distinctio delectus non libero magnam itaque eligendi blanditiis. Aliquid necessitatibus alias dolores magnam!
        Maxime et debitis excepturi sapiente quibusdam soluta autem pariatur vel, ipsa vero perspiciatis in sequi nihil, voluptatem unde a dolore ipsum, accusamus ex cupiditate? Debitis ducimus nam unde consequatur doloremque.
        Porro aliquid magnam ullam pariatur doloribus sapiente sint facilis dolores, aliquam rem unde, saepe asperiores a omnis consequatur deleniti ea possimus mollitia ducimus natus obcaecati nesciunt vero voluptates nisi. Quis!
        Quas vero magnam facilis delectus voluptates neque tempora reprehenderit! Reprehenderit alias exercitationem nam! Unde animi voluptas dolores aliquam, dolore omnis sed quas atque repudiandae iste quod necessitatibus tenetur cumque adipisci!
        Accusantium pariatur possimus nisi reprehenderit necessitatibus alias. Reiciendis dolorem ipsum aliquam aliquid ex cumque, veritatis maiores rerum neque quaerat qui quidem magnam iure natus ut ab! Recusandae ipsa distinctio repellendus?
        Fuga nihil commodi eos illum veritatis dicta iusto in, eaque eligendi possimus ipsum, pariatur sit perferendis quaerat maiores voluptatem optio quae laboriosam ratione! Labore, eius animi consequuntur illum nihil natus.
        In dolorum adipisci repellat ab aspernatur veniam doloremque ad esse! Possimus id suscipit, magnam modi eaque ex voluptatem placeat natus reiciendis blanditiis corrupti eveniet debitis fugit quasi dolorum consectetur illum.
        Impedit magni consectetur maxime earum laudantium ipsa dolorem minus distinctio, atque labore ea dolores eius doloremque fugit quisquam autem nisi alias ad maiores incidunt quod velit rerum totam nobis. Cumque!
        Ex tenetur adipisci numquam, fugit molestiae eligendi in minima excepturi eos facere. Nobis et facere sequi, explicabo laborum, natus suscipit a vitae maxime in tenetur possimus dolorum eius itaque adipisci?
        Earum omnis quo sapiente assumenda? Ea exercitationem deserunt error harum aliquid rerum provident fugiat in facere optio. Voluptate at sequi illum reiciendis iste. Ratione maxime, quidem id totam corporis rerum.
        Ipsa, quasi delectus laboriosam expedita repellat necessitatibus? Accusantium placeat eum cum asperiores quos libero. Iure velit in quaerat commodi, sint quisquam quam illo, dignissimos quod recusandae fugiat praesentium enim mollitia?</div>
    </>
  )
}

export default App
