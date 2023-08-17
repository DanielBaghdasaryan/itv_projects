
import { useState } from 'react'

function App() {


  const [hrashaliqN, setHrashaliqN] = useState(0)

  const [image, setImage] = useState('')

  console.log(image)

  const names = [
    {
      hrashaliq: "Չինական մեծ պարիսպ",

      history: "Չինական մեծ պարիսպ (長城, 长城, Chángchéng (Երկար պատ) կամ 萬里長城, 万里长城, Wànlǐ Chángchéng (Երկար պատ 10000 լի երկարությամբ), քարից, աղյուսից, հողից, փայտից և այլ նյութերից պատրաստված ամրությունների շարք։ Դրանք կառուցվել են հիմնականում արևելքից արևմուտք Չինաստանի հյուսիսային սահմանների երկայնքով՝ պաշտպանելու չինական պետություններն ու կայսրությունները Եվրասիական տափաստանների տարբեր քոչվոր խմբերի հարձակումներից և նվաճումներից։ Դեռևս մ.թ.ա. 7-րդ դարից սկսվել է պարսպի որոշ մասերի կառուցումը[3]։ Սրանք հետագայում միացվել են մյուս պարիսպներին Ցին Շի Հուանդի՝ Չինաստանի առաջին կայսեր կողմից (մ.թ.ա. 220–206 թվականներ)։ Այս պարսպից, իհարկե, շատ քիչ մասն է պահպանվել[4]։ Ավելի ուշ տարբեր դինաստիայի ներկայացուցիչներ վերակառուցել, նորոգել են հին պարիսպները՝ միևնույն ժամանակ ավելացնելով նոր շարքեր։ Պարիսպների ամենահայտնի հատվածը կառուցվել է Մին դինաստիայի (1368–1644 թվականներ) օրոք։ ",









      photo: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLd4xH3O5jPF5UsZVPluixTCsaqsTFSMB2A&usqp=CAU",
          imgDescription: "Չինական մեծ պարիսպ"
        },
        {

          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGeyFXfHiSAjkZyNii2GDAcIL4UaVYSiohw&usqp=CAU",
          imgDescription: "Չինական մեծ պարիսպ"
        },





      ]
    },

    {
      hrashaliq: "Կոլիզեյ",

      history: "Կոլիզեում (լատ.՝ Colosseum կամ Coliseum), հայտնի է նաև որպես Փլավիոսների ամֆիթատրոն (լատ.՝ Amphitheatrum Flavium, իտալերեն.՝ Anfiteatro Flavio կամ Colosseo), Իտալիայում՝ Հռոմ քաղաքի կենտրոնում գտնվող օվալաձև ամֆիթատրոն։ Կառուցված լինելով տրավերտինով, հրաբխային տուֆով և բետոնե աղյուսներով՝ այն երբևէ կառուցված ամենամեծ ամֆիթատրոնն է։ Կոլիզեումը գտնվում է Հռոմի Ֆորումի արևելքում։ Կառուցումը սկսել է Վեսպասիանոս կայսրը մ.թ. 72 թվականին, ավարտել է իր իրավահաջորդ ու ժառանգ Տիտոսը՝ 80 թվականին։ Հետագա ձևափոխությունները կատարվել են Դոմիցիանոս կայսեր օրոք (81–96 թթ.): Այս երեք կայսրերը հայտնի են որպես Փլավիոսների դինաստիա, ամֆիթատրոնը լատիներեն անվանվել է նրանց ազգանունով՝ Փլավիոս (Flavius)։ ",
      photo:
        [

          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBt_S_b__17sPffirT2upqk7cMWhAKSQs0A&usqp=CAU",
            imgDescription: "Կոլիզեյ"
          },
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7eadDAn07GsgKcMDrNOEcQsQcYbTmTFJ8g&usqp=CAU",
            imgDescription: "Կոլիզեյ"

          }



        ]
    },

    {
      hrashaliq: "Մաչու Պիկչու",

      history: "Մաչու Պիկչուն անվանում են «քաղաք ավերակներում» կամ «քաղաք ամպերի մեջ», ինչպես նաև «ինկերի կորուսյալ քաղաք»։ Որոշ հնագետներ ենթադրում են, որ այս քաղաքը ստեղծել է ինկերի մեծն տիրակալ Պաչակուտեկը՝ որպես լեռնային սուրբ ապաստան, իր կայսրության նվաճումից հարյուրամյակ առաջ, այսինքն՝ մոտավորապես 1440 թվականին[16], և գործել է մինչև 1532 թվականը, երբ իսպանացիները ներխուժեցին ինկերի կայսրության տարածք[17]։ Սակայն իսպանացի կոնկիստադորները այդպես էլ չհասան Մաչու Պիկչու։ Քաղաքը չի ավերվել։ ",

      photo:
        [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyvSp1Ky6C21Mf9TH4mQjdG-M0hp5278pvw&usqp=CAU",
            imgDescription: "Մաչու Պիկչու"

          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iDmI0kNfy12GXSEAwQ8nTA6_udzZCHnXyg&usqp=CAU",
            imgDescription: "Մաչու Պիկչու"
          }
        ]

    },

    {
      hrashaliq: "Պետրա",

      history: "Պետրան ընկած է առևտրական երկու կարևոր ճանապարհների խաչմերուկում, որոնցից մեկը միացնում էր Կարմիր ծովը Դամասկոսին, մյուսը Միջերկրական ծովի մոտ Պարսից ծոցը կապում է Ղազային։ Պարսից ծոցից ուղևորվող քարավանները՝ բարձված թանկարժեք համեմունքներով, ստիպված էին շաբաթներ շարունակ հերոսաբար դիմակայել Արաբական անապատի դաժան պայմաններին, մինչ կհասնեին բավական նեղ Սիկ կանիոնի զովությանը. այնտեղից մոտ էր երկար սպասված Պետրան։ Այնտեղ ճանապարհորդները գտնում էին կերակուր, ծածկ և սառը, կենարար ջուր։ ",
      photo:
        [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIqgjKSgHLVAJyjSI7KCi-pUtz2iQBBi--52VZuQAnY9YUEq3X6prNQCh_eS-Un1Jbwg&usqp=CAU",
            imgDescription: "Պետրա"

          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2SQcwIGVwvQU7SQ1zncg4Q-UXNsCbXhfDQ&usqp=CAU",
            imgDescription: "Պետրա"

          }
        ]
    },

    {
      hrashaliq: "Թաջ Մահալ",

      history: "Հիմնադրվել է 1632 թվականին Շահ Ջահան մողոլ կայսեր (կառավարել է 1628-1658 թվականներին) կողմից իր սիրելի կնոջ՝ Մումթազ Մահալի համար, որը մահացել էր 14-րդ երեխային լույս աշխարհ բերելիս (հետագայում այստեղ է թաղվել նաև ինքը՝ Շահ Ջահանը)։ Դամբարանը, որը ունի 74 մետր բարձրություն և հինգ գմբեթներ, իսկ չորս անկյունների մոտ տեղակայված են չորս մինարեներ (դրանք փոքր-ինչ թեքված են, որ կործանվելու դեպքում չվնասեն դամբարանը), գտնվում է 17 հա տարածք[8] զբաղեցնող համալիրի կենտրոնում, որ ներառում է նաև մզկիթ և հյուրատուն և տեղակայված է երեք կողմից ատամնավոր պարսպով շրջապատված այգում։ ",
      photo:
        [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNXeWlAkk7jdFJzG8w48oFA4UZwZNZO14aA&usqp=CAU",

            imgDescription: "Թաջ Մահալ"
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pIIlhcXdMKUJdMhZ2n7pquhnAQnco8tXMw&usqp=CAU",
            imgDescription: "Թաջ Մահալ"
          }
        ]
    },

    {
      hrashaliq: "Հիսուս Քրիստոսի արձան",

      history: "Հիսուս Ամենափրկիչ արձան (պորտ.՝ Cristo Redentor), Հիսուս Քրիստոսի հայտնի արձաններից, որը գտնվում է Ռիո դե Ժանեյրո քաղաքում՝ Կորկովադու լեռան գագաթին։ Համարվում է Բրազիլիայի և Ռիո դե Ժանեյրոյի խորհրդանիշը։ Ընդգրկվում է «Աշխարհի նոր յոթ հրաշալիքների» կազմում։ Արձանի բարձրությունը 38 մ է (ներառյալ պատվանդանը՝ 8 մ), ձեռքերի բացվածքը՝ 28 մ, ծանրությունը՝ 1145 տոննա։",
      photo:
        [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kd284ZCy2WkXmkzRRYKmGEJx0vsvmOLEig&usqp=CAU",
            imgDescription: "Հիսուս Քրիստոսի արձան"
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnkwTmP-PUB7NjSHFaL0Gc53csHP9ajghpQ&usqp=CAU",
            imgDescription: "Հիսուս Քրիստոսի արձան"
          }
        ]
    },
    {
      hrashaliq: " Չիչեն Իցա",

      history: "Չիչեն Իցա, մինչկոլումբյան մայաների հսկայական քաղաք, որը կառուցվել է մայաների կողմից վերջին դասական ժամանակաշրջանի ընթացքում։ Հնագիտական տարածքը գտնվում է Մեքսիկայի Յուկատան նահանգի Տինում ինքնավար շրջանում ։",
      photo:
        [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kQzIMVk8X90DcvvoLFRMns5DXBImNj5z2g&usqp=CAU",
            imgDescription: "Չիչեն Իցա"
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf5g0Qj0IPqPyuvJ1uDraLDSmjlDnTAK5kA&usqp=CAU",
            imgDescription: "Չիչեն Իցա"
          }
        ]
    },
    {
      hrashaliq: " Գիզայի բուրգեր",

      history: "Հին հուշարձանների այս համալիրն ընդգրկում է երեք բրգային համալիրները, որոնք հայտնի են եգիպտական մեծ բուրգեր անվամբ, Մեծ սֆինքսի հսկայական արձանը, մի քանի գերեզմաններ, աշխատավորների գյուղը և արդյունաբերական համալիրը։ Այն գտնվում է Արևմտյան անապատում՝ Նեղոս գետից մոտավորապես 9 կմ դեպի արևմուտք՝ Գիզայի հին քաղաքում և Կահիրե քաղաքի կենտրոնից մոտավորապես դեպի հարավ-արևմուտք։ ",
      photo:

        [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHc4XrjMk330lkBLlPX9kC12rw8IakHgqIg&usqp=CAU",
            imgDescription: "Գիզայի բուրգեր"
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxm0eynE6JnMHGQC0LN2VyfoQElaQpmnOPA&usqp=CAU",
            imgDescription: "Գիզայի բուրգեր"
          }
        ]
    },

  ]
  return (
    image !== ''
      ? <div><img className='image' onClick={() => setImage('')} src={image} />
      </div>
      : <div >




        <div style={{ border: "1px solid black", borderRadius: "20px", backgroundColor: "azure", height: "60px", padding: "40px", width: "700px", margin: "40px", paddingLeft: "200px", marginLeft: "200px" }}> <p style={{ fontSize: "30px" }}>Աշխարհի նոր յոթ հրաշալիքները</p></div>

        <div className='box' style={{ display: "flex" }}>

          <div>
            {names.map((x, i) => <div key={i} onClick={() => setHrashaliqN(i)} style={{ border: "1px solid black", borderRadius: "20px", padding: 20, margin: 20, backgroundColor: i === hrashaliqN ? null : "azure", width: "500px", cursor: 'pointer', }}>{x.hrashaliq}</div>)}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ border: "1px solid black", borderRadius: 20, backgroundColor: "azure", padding: 20 }}>
              <p style={{ textAlign: "center" }}>{names[hrashaliqN].history}</p>
            </div>

          </div>
          <div>
            <div>



              <div style={{ margin: "20px" }}>



                {names[hrashaliqN].photo.map(x =>

                  <> <img onClick={() => setImage(x.src)} src={x.src} style={{ width: 200, border: "1px solid black", borderRadius: 20, cursor: 'pointer' }} />
                    {x.imgDescription}</>
                )}
                {names.history}



              </div>




            </div>
          </div>
        </div>
      </div>

  )

}





export default App
