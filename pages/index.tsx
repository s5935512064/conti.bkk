import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const delicacies_menu = [
  { id: 100, title: "Caviar Royal Oscietra 15g", price: "1590", description: "Served with spring onion, shallots , diced eggs, spanish capers, blinis, creme fraiche", recommended: false },
  { id: 150, title: "Jamon Iberico 50g", price: "890", description: "Premium jamon iberico ham", recommended: false },
  { id: 200, title: "Charcuterie Board", price: "420", description: "Speck di parma, chorizo, salami Milano", recommended: false },
]

const appetizers_menu = [
  { id: 100, title: "Beef Tartar", price: "370", description: "diced tenderioin, tartar dressing, crispy, lotus root and quail egg yolk", recommended: true },
  { id: 150, title: "Fried Calamari", price: "240", description: "Served with paprika aioil sauce", recommended: false },
  { id: 200, title: "Maxican Ox Tongue", price: "490", description: "Served with Maxican sauce", recommended: false },
  { id: 250, title: "Fried Potato", price: "200", description: "Served with truffle mayao", recommended: false },
  { id: 300, title: "Escagot", price: "490", description: "Snail garlic butter with garlic bread", recommended: false },
]

const salad_menu = [
  { id: 100, title: "Classic Caesar", price: "290", description: "Romaine lettuce mix with creamy caesar dressing with crouton and cheese", recommended: false },
  { id: 150, title: "Tomato Burrata", price: "390", description: "Arugula heirloom cherry tomatomix fresh basil oil and balsamic dressing", recommended: false },
  { id: 200, title: "Lobster Salad", price: "690", description: "Yuzu cream mix with dill oil, radicchio, asparagus, frisee lettuce and micro herbs", recommended: true },

]

const seafood_menu = [
  { id: 100, title: "Pan-Seared Scallop", price: "590", description: "Pan-seared scallop with beetroot puree, jerusalem artichoke and shimeji mushroom", recommended: false },
  { id: 150, title: "Pan-Seared Lobster (Half / Full)", price: "990/1790", description: "Pan-Seared northern atlantic lobster delicately with grilled slice carrot, zucchini, parmesan foam, on top crispy potato", recommended: true },
  { id: 200, title: "Mussles", price: "390", description: "Breton Mussels with beurre blanc sauce on top with basil", recommended: false },
  { id: 250, title: "Creamy Lobster Risotto", price: "990", description: "Barley risotto mix with lobster stock topped with chopped tarragon", recommended: false },
]

const meat_menu = [
  { id: 100, title: "Rib eye Fried Rice", price: "490", description: "Fried rice with diced rib eye, spring onion and garlic chips", recommended: false },
  { id: 150, title: "Rib eye 350g", price: "1790", description: "Jack's creek farm rib eye", recommended: false },
  { id: 200, title: "Tenderloin 200g", price: "1390", description: "Tenderloin with Mashed potato, garlic confit, sautéed mushroom", recommended: false },
  { id: 250, title: "Steak Flambé", price: "1590", description: "Jack's creek Tenderloin topped with caramelized onion and seared Foie Gras", recommended: true },
  { id: 300, title: "Roast Chiken Spring", price: "490", description: "Free range spring chicken brushed with Chinese chili tomato concasse sauce", recommended: false },
  { id: 350, title: "Crispy Duck lek", price: "490", description: "Served with mashed potato, spinach and tomato confit", recommended: false },
]

const soup_menu = [
  { id: 100, title: "Champignon Truffle Soup", price: "320", description: "Champignon soup with truffle oil", recommended: false },
  { id: 150, title: "Lobster bisque", price: "320", description: "Creamy lobster stock with lobster and fresh dill", recommended: false },
]

const pasta_menu = [
  { id: 100, title: "Pasta De Conti", price: "690", description: "Spaghetti aglio e oilo with seared Hokkaido scallop, prawn, mussel and ikura", recommended: true },
  { id: 150, title: "Spaghetti Truffle cream", price: "990", description: "Spaghetti truffle cream with hokkaido scallop and ikura ", recommended: false },
  { id: 200, title: "Gnocchi", price: "260", description: "Delicate italian style potato dumplings topped with diced smoked ham and creamy Parmesan cheese, with lemon zest and kaiware Sprouts", recommended: false },
  { id: 250, title: "Foie Gras Ravioli", price: "320", description: "Hungarian foie gras, green peas and sunflower seed filling served with parmesan foam", recommended: true },
]

const sidedish_menu = [
  { id: 100, title: "Mashed potato", price: "260", description: "", recommended: true },
  { id: 150, title: "Scallop Risotto", price: "990", description: "Barley risotto with Hokido scallop", recommended: false },
]

const dessert_menu = [
  { id: 100, title: "Raspberry Panna Cotta", price: "275", description: "Panna cotta served with raspberry sauce and fresh raspberry", recommended: false },
  { id: 150, title: "Cream brulee", price: "285", description: "Cream, Vanilla, York eggs served with cape goose berry and burnt brown sugar", recommended: false },
  { id: 200, title: "Brownie Opera", price: "295", description: "Two kind crumbles, apple compote, vanilla ice cream on top with a rice crispy", recommended: false },
  { id: 250, title: "Vanilla Ice Cream (one scoope)", price: "120", description: "", recommended: false },
  { id: 300, title: "Blackcurrant Ice Cream (one scoope)", price: "110", description: "", recommended: false },
  { id: 350, title: "Yogurt Ice Cream (one scoope)", price: "110", description: "", recommended: false },

]

export default function Home() {
  return (
    <>
      <Head>
        <title>CONTI BKK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <div className='min-h-screen w-full flex justify-center px-4 md:px-10 py-10 bg-[#1b2b19]'>

        <div className='max-w-screen-lg w-full h-full flex flex-col items-center gap-7 p-5 md:p-10 mt-10 '>


          <div className='w-56 h-20 relative bg-[#1b2b19] -mt-16'>

            <Image data-aos="zoom-in" src="/assets/CONTI.png" fill alt="logo" style={{ objectFit: "contain", objectPosition: "center" }} />

          </div>

          <p data-aos="zoom-in" className='text-sm text-white text-center'>All prices are subject to 7% vat and 10% service charge.</p>

          <div data-aos="fade-up" data-aos-delay="200" className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>


            <div className='flex flex-col gap-2 '>


              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>delicacies</p>

              <ul className='flex flex-col gap-4'>

                {delicacies_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>

            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>appetizers</p>

              <ul className='flex flex-col gap-4'>

                {appetizers_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>

            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>salads</p>

              <ul className='flex flex-col gap-4'>

                {salad_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>

            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>seafood</p>

              <ul className='flex flex-col gap-4'>

                {seafood_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>

            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>meat</p>

              <ul className='flex flex-col gap-4'>

                {meat_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>


            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>soup</p>

              <ul className='flex flex-col gap-4'>

                {soup_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>

            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>pasta</p>

              <ul className='flex flex-col gap-4'>

                {pasta_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>


            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>side dish</p>

              <ul className='flex flex-col gap-4'>

                {sidedish_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>

            <div className='flex flex-col gap-2'>

              <p className='a7883e text-2xl md:text-4xl uppercase text-[#a7883e]'>dessert</p>

              <ul className='flex flex-col gap-4'>

                {dessert_menu.map((item, index) => (
                  <li key={index} className="text-white">
                    <div className='w-full flex justify-between text-base md:text-lg'>
                      <div className='inline-flex items-center'>{item.recommended ? (<div className='w-5 h-5 relative mr-2'><Image src="/assets/star.svg" alt="recomented" fill /></div>) : null}{item.title}</div>
                      <span className='flex-1 border-b border-white/20 mx-1 -translate-y-1'></span>

                      <span className='font-bold'>{item.price}</span>

                    </div>
                    <p className=' text-white/60 font-sans font-light text-sm md:text-base'>{item.description}</p>
                  </li>
                ))}

              </ul>
            </div>





          </div>

        </div>

      </div>


    </>
  )
}
