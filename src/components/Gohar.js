import { useState } from 'react'

import './Gohar.css'


function App() {
  const [hrashaliqN, setHrashaliqN] = useState(0)

  const [image, setImage] = useState('')
  const [page, setPage] = useState('body')


  const names = [
    {
      title: "Չինական մեծ պարիսպ",

      hrashaliq: "Չինական մեծ պարիսպ",

      history:


        "Չինական մեծ պարիսպ (長城, 长城, Chángchéng (Երկար պատ) կամ 萬里長城, 万里长城, Wànlǐ Chángchéng (Երկար պատ 10000 լի երկարությամբ), քարից, աղյուսից, հողից, փայտից և այլ նյութերից պատրաստված ամրությունների շարք։ Դրանք կառուցվել են հիմնականում արևելքից արևմուտք Չինաստանի հյուսիսային սահմանների երկայնքով՝ պաշտպանելու չինական պետություններն ու կայսրությունները Եվրասիական տափաստանների տարբեր քոչվոր խմբերի հարձակումներից և նվաճումներից։ Դեռևս մ.թ.ա. 7-րդ դարից սկսվել է պարսպի որոշ մասերի կառուցումը։ Սրանք հետագայում միացվել են մյուս պարիսպներին Ցին Շի Հուանդի՝ Չինաստանի առաջին կայսեր կողմից (մ.թ.ա. 220–206 թվականներ)։ Այս պարսպից, իհարկե, շատ քիչ մասն է պահպանվել։ Ավելի ուշ տարբեր դինաստիայի ներկայացուցիչներ վերակառուցել, նորոգել են հին պարիսպները՝ միևնույն ժամանակ ավելացնելով նոր շարքեր։ Պարիսպների ամենահայտնի հատվածը կառուցվել է Մին դինաստիայի (1368–1644 թվականներ) օրոք։ "





      ,

      photo: [
        {
          src: "https://i2.wp.com/img0.liveinternet.ru/images/attach/c/0/118/114/118114056_5402287_krisha_mira2.jpg",
          imgDescription: "Չինական մեծ պարիսպ"
        },
        {

          src: "https://i2.wp.com/img1.liveinternet.ru/images/attach/c/0/118/114/118114059_5402287_Novyjjrisunok1.jpg",
          imgDescription: "Չինական մեծ պարիսպ"
        },





      ]
    },

    {
      title: "Կոլիզեյ",
      hrashaliq: "Կոլիզեյ",

      history: "Կոլիզեում (լատ.՝ Colosseum կամ Coliseum), հայտնի է նաև որպես Փլավիոսների ամֆիթատրոն (լատ.՝ Amphitheatrum Flavium, իտալերեն.՝ Anfiteatro Flavio կամ Colosseo), Իտալիայում՝ Հռոմ քաղաքի կենտրոնում գտնվող օվալաձև ամֆիթատրոն։ Կառուցված լինելով տրավերտինով, հրաբխային տուֆով և բետոնե աղյուսներով՝ այն երբևէ կառուցված ամենամեծ ամֆիթատրոնն է։ Կոլիզեումը գտնվում է Հռոմի Ֆորումի արևելքում։ Կառուցումը սկսել է Վեսպասիանոս կայսրը մ.թ. 72 թվականին, ավարտել է իր իրավահաջորդ ու ժառանգ Տիտոսը՝ 80 թվականին։ Հետագա ձևափոխությունները կատարվել են Դոմիցիանոս կայսեր օրոք (81–96 թթ.): Այս երեք կայսրերը հայտնի են որպես Փլավիոսների դինաստիա, ամֆիթատրոնը լատիներեն անվանվել է նրանց ազգանունով՝ Փլավիոս (Flavius)։ ",
      photo:
        [

          {
            src:
              "https://archive3.ankakh.com/images/photos/albom56/55703_large.jpg",
            imgDescription: "Կոլիզեյ"
          },
          {
            src:
              "https://i0.wp.com/guruturizma.ru/wp-content/uploads/2015/12/Colosseum5.jpg",
            imgDescription: "Կոլիզեյ"

          }



        ]
    },

    {

      title: "Մաչու Պիկչու",

      hrashaliq: "Մաչու Պիկչու",

      history: "Մաչու Պիկչուն անվանում են «քաղաք ավերակներում» կամ «քաղաք ամպերի մեջ», ինչպես նաև «ինկերի կորուսյալ քաղաք»։ Որոշ հնագետներ ենթադրում են, որ այս քաղաքը ստեղծել է ինկերի մեծն տիրակալ Պաչակուտեկը՝ որպես լեռնային սուրբ ապաստան, իր կայսրության նվաճումից հարյուրամյակ առաջ, այսինքն՝ մոտավորապես 1440 թվականին[16], և գործել է մինչև 1532 թվականը, երբ իսպանացիները ներխուժեցին ինկերի կայսրության տարածք[17]։ Սակայն իսպանացի կոնկիստադորները այդպես էլ չհասան Մաչու Պիկչու։ Քաղաքը չի ավերվել։ ",

      photo:
        [
          {
            src: "https://www.usanogh.am/wp-content/uploads/2020/03/machu-pikchu2-1.png",
            imgDescription: "Մաչու Պիկչու"

          },
          {
            src: "https://cs.pikabu.ru/images/big_size_comm/2011-11_5/13218762778798.jpg",
            imgDescription: "Մաչու Պիկչու"
          }
        ]

    },

    {
      title: "Պետրա",

      hrashaliq: "Պետրա",

      history: "Պետրան ընկած է առևտրական երկու կարևոր ճանապարհների խաչմերուկում, որոնցից մեկը միացնում էր Կարմիր ծովը Դամասկոսին, մյուսը Միջերկրական ծովի մոտ Պարսից ծոցը կապում է Ղազային։ Պարսից ծոցից ուղևորվող քարավանները՝ բարձված թանկարժեք համեմունքներով, ստիպված էին շաբաթներ շարունակ հերոսաբար դիմակայել Արաբական անապատի դաժան պայմաններին, մինչ կհասնեին բավական նեղ Սիկ կանիոնի զովությանը. այնտեղից մոտ էր երկար սպասված Պետրան։ Այնտեղ ճանապարհորդները գտնում էին կերակուր, ծածկ և սառը, կենարար ջուր։ ",
      photo:
        [
          {
            src: "https://i2.wp.com/zhais.ru/photo/iordania/petra/118.jpg",
            imgDescription: "Պետրա"

          },
          {
            src: "https://i0.wp.com/1000mest.ru/foto/petra4.jpg",
            imgDescription: "Պետրա"

          }
        ]
    },

    {
      title: "Թաջ Մահալ",

      hrashaliq: "Թաջ Մահալ",

      history: "Հիմնադրվել է 1632 թվականին Շահ Ջահան մողոլ կայսեր (կառավարել է 1628-1658 թվականներին) կողմից իր սիրելի կնոջ՝ Մումթազ Մահալի համար, որը մահացել էր 14-րդ երեխային լույս աշխարհ բերելիս (հետագայում այստեղ է թաղվել նաև ինքը՝ Շահ Ջահանը)։ Դամբարանը, որը ունի 74 մետր բարձրություն և հինգ գմբեթներ, իսկ չորս անկյունների մոտ տեղակայված են չորս մինարեներ (դրանք փոքր-ինչ թեքված են, որ կործանվելու դեպքում չվնասեն դամբարանը), գտնվում է 17 հա տարածք[8] զբաղեցնող համալիրի կենտրոնում, որ ներառում է նաև մզկիթ և հյուրատուն և տեղակայված է երեք կողմից ատամնավոր պարսպով շրջապատված այգում։ ",
      photo:
        [
          {
            src: "https://blog.168.am/wp-content/uploads/2017/07/taj_maxal_article.jpg",

            imgDescription: "Թաջ Մահալ"
          },
          {
            src: "https://ilonasahakyan.files.wordpress.com/2019/05/india-148045726738o.jpg",
            imgDescription: "Թաջ Մահալ"
          }
        ]
    },

    {
      title: "Հիսուս Քրիստոսի արձան",


      hrashaliq: "Հիսուս Քրիստոսի արձան",

      history: "Հիսուս Ամենափրկիչ արձան (պորտ.՝ Cristo Redentor), Հիսուս Քրիստոսի հայտնի արձաններից, որը գտնվում է Ռիո դե Ժանեյրո քաղաքում՝ Կորկովադու լեռան գագաթին։ Համարվում է Բրազիլիայի և Ռիո դե Ժանեյրոյի խորհրդանիշը։ Ընդգրկվում է «Աշխարհի նոր յոթ հրաշալիքների» կազմում։ Արձանի բարձրությունը 38 մ է (ներառյալ պատվանդանը՝ 8 մ), ձեռքերի բացվածքը՝ 28 մ, ծանրությունը՝ 1145 տոննա։",
      photo:
        [
          {
            src:
              "https://newsarmenia.am/upload/iblock/e31/e31808e8db7499012b5585dbd7cd6127.jpg",
            imgDescription: "Հիսուս Քրիստոսի արձան"
          },
          {
            src: "https://i1.wp.com/cattur.ru/wp-content/uploads/2017/10/Statuya-KHrista-Iskupitelya8.jpg",
            imgDescription: "Հիսուս Քրիստոսի արձան"
          }
        ]
    },
    {
      title: "Չիչեն Իցա",

      hrashaliq: " Չիչեն Իցա",

      history: "Չիչեն Իցա, մինչկոլումբյան մայաների հսկայական քաղաք, որը կառուցվել է մայաների կողմից վերջին դասական ժամանակաշրջանի ընթացքում։ Հնագիտական տարածքը գտնվում է Մեքսիկայի Յուկատան նահանգի Տինում ինքնավար շրջանում ։",
      photo:
        [
          {
            src:
              "https://www.playadelcarmen.com/blog/wp-content/uploads/chichen-4-b.jpg",
            imgDescription: "Չիչեն Իցա"
          },
          {
            src: "https://a.storyblok.com/f/95452/5439x3380/2036c9a84e/mexico-chichen-itza-kukulcan-el-castillo-at-sunset.jpg/m/1600x900",
            imgDescription: "Չիչեն Իցա"
          }
        ]
    },
    {

      title: "Գիզայի բուրգեր",

      hrashaliq: " Գիզայի բուրգեր",

      history: "Հին հուշարձանների այս համալիրն ընդգրկում է երեք բրգային համալիրները, որոնք հայտնի են եգիպտական մեծ բուրգեր անվամբ, Մեծ սֆինքսի հսկայական արձանը, մի քանի գերեզմաններ, աշխատավորների գյուղը և արդյունաբերական համալիրը։ Այն գտնվում է Արևմտյան անապատում՝ Նեղոս գետից մոտավորապես 9 կմ դեպի արևմուտք՝ Գիզայի հին քաղաքում և Կահիրե քաղաքի կենտրոնից մոտավորապես դեպի հարավ-արևմուտք։ ",
      photo:

        [
          {
            src:
              "https://shabat.am/img/artpic/ab19b9f8bdafd2fa81bf5.jpg",
            imgDescription: "Գիզայի բուրգեր"
          },
          {
            src: "https://www.internest.am/wp-content/uploads/2015/10/Egiptos-4.jpg",
            imgDescription: "Գիզայի բուրգեր"
          }
        ]
    },

  ]
  const erevuytner = [{
    head: "Anchrev",

    erevuyt: "anchrev"
  },
  {
    head: "kajcak",
    erevuyt: "kajcak"

  }
  ]
  let body = <div></div>
  console.log(page)
  if (page === 'main') {
    body = <div></div>
  } else if (page === 'names') {
    body = image !== ''
      ? <div style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'black'
      }}><img
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            paddingTop: "100px",
            width: "auto",
            height: "auto"
          }} className='image' onClick={() => setImage('')} src={image} />
      </div>
      : <div> <div
        style={{
          backgroundColor: " rgb(217, 237, 238)",
          height: "80px",
          padding: "40px",
          paddingLeft: "200px",
          width: "1285px",
        }}>
        <p style={{ fontSize: "40px" }}>
          {names[hrashaliqN].title}
        </p>
      </div>

        <div className='box' style={{ display: "flex" }}>

          <div>
            {names.map((x, i) =>
              <div key={i} onClick={() => setHrashaliqN(i)}
                style={{
                  borderRadius: "20px",
                  padding: 20,
                  margin: 20,
                  backgroundColor: i === hrashaliqN ? "rgb(190, 221, 250)" : "azure",
                  width: "250px",
                  cursor: 'pointer'
                }}>
                {x.hrashaliq}
              </div>)}
          </div>


          <div style={{ display: "flex" }}>


            <div style={{
              backgroundColor: "azure",
              padding: 20
            }}>


              <p>{names[hrashaliqN].history}</p>
            </div>

          </div>
          <div>
            <div>



              <div style={{ margin: "20px" }}>



                {names[hrashaliqN].photo.map(x =>

                  <> <img onClick={() => setImage(x.src)} src={x.src}
                    style={{
                      width: 200,
                      borderRadius: 20,
                      cursor: 'pointer'
                    }} />
                    {x.imgDescription}</>
                )}
                {names.history}





              </div>


            </div>
          </div>
        </div>


      </div>

  } else if (page === 'erevuytner') {
    body = <div>
      {erevuytner.map(x => <div>{x}</div>)}
    </div>
  }

  return (

    <div>


      <div style={{ display: "flex" }}>
        <div onClick={() => setPage('names')} style={{ border: "1px solid black", cursor: 'pointer' }}>Աշխարհի նոր յոթ հրաշալիքները</div>
        <div onClick={() => setPage('erevuytner')} style={{ border: "1px solid black", cursor: 'pointer' }}>Բնության երևույթները</div>

      </div>

      {body}



    </div>



  )
}

export default App;

