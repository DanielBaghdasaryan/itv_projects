import { useState } from 'react'

import './Gohar.css'


function App() {
  const [hrashaliqN, setHrashaliqN] = useState(0)

  const [image, setImage] = useState('')
  const [page, setPage] = useState('main')


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
    head: "Անձրև",

    erevuyt: "Անձրև",
    information: `Անձրև, մթնոլորտային տեղումների տեսակ, որը դրսևորվում է ամպերից թափվող հեղուկի՝ 0,5 - 7 միլիմետր միջին տրամագիծ ունեցող կաթիլների տեսքով [1]։ Ավելի փոքր տրամագիծ ունեցող կաթիլներով արտահայտվող հեղուկ տեղումները անվանվում են շաղ[2]։ Իսկ 6—7 միլիմետրից մեծ տրամագիծ ունեցող կաթիլները ամպերից ընկնելու ընթացքում տրոհվում են ավելի մանր կաթիլների, այնպես, որ նույնիսկ ամենաուժգին տեղատարափի ժամանակ երկրի մակերևույթին հասնելիս դրանց տրամագիծը 6—7 միլիմետրը չի գերազանցում։ Անձրևի ուժգնությունը տատանվում է ժամում 0,25 միլիմետրից (շաղի ժամանակ) մինչև 100 միլիմետրի (ուժգին տեղատարափի ժամանակ) սահմաններում։ Եվրոպայում ամենաուժգին տեղատարափը՝ րոպեում 15,5 միլիմետր ինտենսիվությամբ, արձանագրվել է 1920 թվականին, Գերմանիայում`,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAtGMzmSUy2uSqov0tACS0-8UCic87O1Wkg&usqp=CAU",
  },
  {
    head: "Կարկուտ",
    erevuyt: "Կարկուտ",
    information: "Կարկուտ, պինդ մթնոլորտային տեղում՝ սառցե գնդաձև հատիկների տեսքով։ Տեղում է տարվա տաք եղանակին (Հայաստանում՝ մարտ-հոկտեմբերին)՝ կույտաանձրևային ամպերից՝ օդի վերընթաց շարժումների պայմաններում՝ ամպրոպի, տեղատարափ անձրևների, երբեմն՝ փոթորկային քամու ուղեկցությամբ։ Կարկուտի երակն ունենում է 200 մ-ից մինչև 2 կմ լայնություն և երբեմն՝ մինչև 100 կմ երկարություն։ Տևողությունը, որպես կանոն, 5-10 րոպե է, բացառիկ դեպքում՝ 1 ժամ։",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgC2z-l-42gCKnhEHkAuOdqx1McU4F80bSQ&usqp=CAU"
  },
  {
    head: "Հրաբուխ ",
    erevuyt: "Հրաբուխ ",
    information: "Հրաբուխները ժայթքում են Երկրի ընդերքից, երբ ապարներն այնտեղ խիստ տաքանում են և փոխակերպվում գազերով հագեցած մեծ ճնշման հրահեղուկ զանգվածի՝ մագմայի։ Մագման երկրի խորքից մեծ ուժով ճնշում է գործադրում երկրակեղևի վրա և, համեմատաբար անկայուն տեղամասերում ճեղքելով այն, արտահոսում է մակերևույթ։ Դուրս ժայթքած մագման սառչում է, գազազրկվում և վերածվում լավայի։ Այն ուղին, որով բարձրանում է մագման, կոչվում է հրաբխի մղանցք, որն ավարտվում է ձագարաձև տեղամասով՝ խառնարանով։ Հրաբխի խառնարանից դուրս են մղվում նաև հրաբխային փոշի, մոխիր, քարեր, գազեր, որոնց կուտակումից էլ ձևավորվում է հրաբխային լեռը։Եթե հրաբխալեռը նախքան ժայթքելը պատված է լինում ձյունով ու սառույցով, ապա շիկացած լավան հալեցնում է դրանք և ջուրը խառնվելով մոխրին, առաջացնում է հզոր ցեխահոսքեր, որոնք մեծ արագությամբ տարածվում են լանջն ի վար։ Կոլումբիայում 1985 թ. ժայթքման հետևանքով ցեխահոսքը հաշված րոպեներում ոչնչացրել է մի քանի բնակավայրեր, զոհվել է ավելի քան 25 հազար մարդ։ 79 թ. Վեզուվ հրաբխի ժայթքման հետևանքով կործանվել են հին հռոմեական երեք քաղաքներ՝ Պոմպեյը, Հերկուլյանումը և Ստաբիանը, ինչպես նաև բազմաթիվ գյուղեր։ 1883 թ. Ինդոնեզիայում Կրակատաու հրաբխի ժայթքման հետևանքով կղզին հանկարծ պայթել է:",
    img: "https://3.bp.blogspot.com/-WtR8DyvRa0A/WtxDlBasoyI/AAAAAAAABi8/pZLt0c17o1kttPERi6TDb9TsgLWRfm_yACLcBGAs/s1600/volcano.jpg",
  },
  {
    head: "Ջրհեղեղ",
    erevuyt: "Ջրհեղեղ",
    information: "Ջրային տարերքի վտանգավոր երևույթներից են հեղեղները։ Սրանք վարարման մեծ տեսակն են, երբ գետերն ափերից դուրս են գալիս և ծածկում են հովտի ցածրադիր մասերը։ Դա կարող է տեղի ունենալ ուժեղ ձնհալքից կամ տևական անձրևներից։ Հեղեղների դեմ պայքարի լավագույն միջոցը ջրամբարների կառուցումն է։ Հեղեղումների պատճառը շատ դեպքերում անտառահատումն է։ Հարյուր հազարավոր հեկտարների վրա բուսականությունը մասսայաբար ոչնչանում է, թուղթ ու ցելյուլոզա են արտադրում, որի հետևանքով էլ հողը չորանալով աղետալի չափերով էրոզիայի է ենթարկվում։Ջրհեղեղը ցամաքի զգալի տարածքների ժամանակավոր ջրածածկումն է որն առաջանում է գետերում, լճերում, ծովերում, ջրի մակարդակի բարձրացման հետևանքով։ Ջրհեղեղի հիմնական պատճառներն են տեղատարափ անձրևները, փլուզումները եւ այլն։ Ջրհեղեղի կանխարգելման, դրանց ազդեցության նվազեցման հիմնական միջոցառումները կրում են ինժեներական և ագրոտեխնիկական բնույթ։ Երբեմն ջրհեղեղների առաջացմանը նպաստող պայմաններ են ստեղծում իրենք՝ բնակիչները կատարելով օրինազանց գործողություններ՝ ծառահատում, սելավների վրա շինություների տեղադրում և այլն։ ",
    img: "data:image/jpeg;base64,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"
  },
  {
    head: "Երկրաշարժ",
    erevuyt: "Երկրաշարժ",
    information: "Երկրաշարժ (անգլերեն՝ earthquake) ստորգետնյա ցնցում, որ տեղի է ունենում երկրակեղևի որոշակի զանգվածում կուտակված էներգիայի կտրուկ լիցքաթափման արդյունքում։Տարբեր ժամանակաշրջաններում երկրաշարժերի առաջացումը բացատրվել է տվյալ ժամանակներում ընդունված պատկերացումների համաձայն և հիմնականում կապվել է տարատեսակ կենդանիների շարժումների հետ։ Այսպես օրինակ, հին Չինաստանում երկրաշարժերի «մեղավորը» ցուլն էր, Ճապոնիայում՝ ձուկը, Հնդկաստանում՝ խլուրդը և այլն։ Ճապոնական առասպելի համաձայն, ճապոնական կղզիները տեղակայված են մեծ լոքո ձկան մեջքին, և ձկան շարժումներից Երկիրը ցնցվում է։ Հյուսիսային Ամերիկայի հնդկացիներն ասում էին, որ Երկիրն իր վրա կրում է հսկայական կրիան և ամեն անգամ ցնցվում է, երբ կրիան անցնում է մեկ ոտքից մյուսի վրա։ Երկրաշարժերը հաճախ դիտվել են որպես զայրացած Աստծո պատիժ՝ ի պատասխան մարդկանց մեղքերի։ Առաջին անգամ երկրաշարժերի բացատրությունը երկրի ընդերքում որոնելու վարկածն արտահայտել է հին հույն փիլիսոփա Արիստոտելը։ Նա համարում էր, որ Երկրի վրա առաջացող քամիները ճեղքերի և քարանձավների միջոցով մտնելով Երկրի ընդերք, այնտեղ առկա կրակի պատճառով ուժեղանում են և սկսում ճանապարհ որոնել դեպի Երկրի մակերևույթ, հենց դրա ժամանակ էլ տեղի են ունենում երկրաշարժերը։ Այս վարկածը թեև իր մեջ չի պարունակում ոչ մի լուրջ գիտական բացատրություն, սակայն երկար ժամանակ ընդունվել է որպես երկրաշարժերի առաջացման հիմնական վարկած։ Դրա շնորհիվ մինչև այժմ էլ մնացել է «սեյսմավտանգ եղանակ» հասկացությունը։Երկրաշարժերը ըստ առաջացման բնույթի կարելի է դասակարգել երկու խմբերի. Բնական երկրաշարժեր Տեխնածին երկրաշարժերԲնական երկրաշարժերը կապված են տարբեր պրոցեսների հետ։ Հայտնի են տեկտոնական շարժումներով պայմանավորված երկրաշարժեր, հրաբուխների հետ կապված երկրաշարժեր, երկրակեղևում կորստային խոռոչների փլուզման հետևանքով առաջացող երկրաշարժեր և այլն։Տեխնածին երկրաշարժեր ասելով պետք է հասկանալ այնպիսի երկրաշարժ, որը կապված է մարդկային գործունեության հետ։ Օրինակ ռազմական կամ արդյունաբերական պայթյունների հետևանքով առաջացող ցնցումները կարող են «տրրիգեր» (շարժիչ ուժ) հանդիսանալ ուժեղ երկրաշարժի համար։ Կամ օրինակ մեծ ջրամբարի կառուցումը կարող է հանգեցնել տվյալ տարածքում սեյսմիկ ակտիվության բարձրացման։Նշված բոլոր տիպի երկրաշարժերից Հայաստանի տարածքում առավել ուժեղ և առավել տարածված են տեկտոնական երկրաշարժերը։ ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFOOA2ZrHVzSkNd-ikSmL-RD1pfQtNgcXKw&usqp=CAU",


  },
  {
    head: "Ցունամի",
    erevuyt: "Ցունամի",
    information: "Ցունամի (Ճապոներեն՝津波 նշանակում է՝ ծովախորշի ալիք), հսկայական չափերի հասնող ջրային ալիքներ։ Ցունամիները հաճախակի երևույթ են Ճապոնիայում։ Դրանք կարող են պատճառել մեծ ավերածություններ, ինչպես նաև մարդկային զոհեր (ցունամիի ալիքները տարածվում են ավելի մեծ արագությամբ, քան մարդու վազելու արագությունն է)։ Ցունամիները հիմնականում առաջանում են ստորջրյա ուժեղ երկրաշարժերի հետևանքով։ Ցունամի կարող է առաջանալ նաև հրաբուխների ժայթքումից, գետնի սողանքից և ստորջրյա պայթյուններից։ Ցունամիի ալիքների բարձրությունն իրենց ճանապարհին ցամաքի հանդիպելիս կտրուկ աճում է։2009 թվականի Սեպտեմբերի Սամոայի ցունամինՑունամիի տարածումը Հնդկական օվկիանոսով Երկրաշարժի կենտրոնից բոլոր կողմերի վրա, ջրի մեջ նետած քարից հեռացող շրջանագծերի նման, տարածվում են ցունամիի ալիքները։ Բաց ծովում ցունամիի ալիքները նավերի համար գրեթե աննկատելի են։ Բայց երբ ցունամիի ալիքներն իրենց ճանապարհին հանդիպում են մայրցամաքի կամ կղզու, ապա հասնում են 10 մ-ի, իսկ երբեմն էլ՝ ավելի մեծ բարձրության, իսկ ծովախորշ մտնելիս հասնում են 20 մ բարձրության։Ցունամին տարածվում է հսկայական արագությամբ՝ մեկ ժամում 800 կմ։ Չիլիի Վալդիվյան երկրաշարժի (եղել է 1960 թվականին, առ այսօր համարվում է աշխարհի ամենաուժգին երկրաշարժը) ժամանակ այդ ալիքները Հարավային Ամերիկայի ափերից ամբողջ Խաղաղ օվկիանոսի վրայով կտրեցին-անցան 15 հազար կմ ճանապարհ և փլվեցին Հավայան կղզիների, Նոր Զելանդիայի, Ավստրալիայի, Ճապոնիայի ափերի վրա ու հասան Կուրիլյան կղզիներ։ ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsLUeR3wxKlSeGldngyJ8AZ6OW3roNiiYpw&usqp=CAU",

  },
  {
    head: "Ամպրոպ",
    erevuyt: "Ամպրոպ",
    information: "Ամպրոպ, մթնոլորտային երևույթ, արտահայտվում է ամպերի կամ ամպի և երկրի միջև տեղի ունեցող էլեկտրական պարպումների (կայծակի) ձևով, որոնք ուղեկցվում են որոտով։ Ամպրոպի առաջացումը կապված է հզոր կույտաանձրևային ամպերի զարգացման հետ և պայմանավորված է մթնոլորտի անկայուն հավասարակշռության վիճակով։ Ուղեկցվում է ուժեղ քամիներով և հորդառատ անձրևներով, որոշ դեպքերում՝ կարկուտով։ Ամպրոպը կարճատև երևույթ է (մինչև 2 ժ)։ Տարբերում են ամպրոպի ներզանգվածային (պայմանավորված են օդային զանգվածների ներսում ջերմափոխանցման զարգացմամբ) և ճակատային (ձևավորվումեն մթնոլորտային տաք ու ցուրտ ճակատների կույտաանձրևային և շերտաանձրևային ամպերում) տեսակներ, որոնք առանձնահատուկ Երանգ են ստանում լեռնային ռելիեֆի պայմաններում։ Հայաստանում ամպրոպներով օրերի թիվը տարվա ընթացքում 20-70 (երբեմն՝ մինչև 100) է, հիմնականում՝ ապրիլ-հոկտեմբերին, առավելագույնը՝ մայիս-հունիսին։ Ամպրոպների 60-70 %-ը դիտվում է հետկեսօրյա ժամերին։ ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJm0YGySYB6bQkLBf1mTdlJVEMcJpgFqykg&usqp=CAU",
  },
  {
    head: "Բևեռափայլ",
    erevuyt: "Բևեռափայլ",
    information: "Բևեռափայլ, երկրի մթնոլորտի վերին նոսր շերտերի՝ (80-1000 կմ) լուսարձակումը։ Այն դիտվում է Երկրի բևեռային շրջաններում, հազվադեպ՝ նաև միջին լայնություններում (Հայաստանում 1098-1100 թվականներին դիտվել է չորս բևեռափայլ)։[փա՞ստ] Երկնքի ամբողջ հյուսիսային կողմը լուսավորված է կարմիր ու կանաչ երկու հսկայական, վետվետուն կամարներով։ Անընդհատ ձևափոխվելով ու երփներանգվելով՝ կամարները մեկ անհետանում են, մեկ նորից հայտնվում։ Հանկարծակի մութ երկինքը ասես նետահարում են պայծառ ճառագայթները, իսկ ժամանակ առ ժամանակ օդում կախվում են կարմիր ծոպերով զմրուխտե «վարագույրներ»։ Պայծառ, հիասքանչ բևեռափայլը (հյուսիսում անվանում են հյուսիսափայլ) երկնքում փողփողում է մի քանի ժամ անընդհատ։ Բևեռափայլերը Արեգակի ակտիվության հետևանք են։ Արեգակի հսկայական շիկացած գունդը տիեզերական տարածություն է ճառագայթում վիթխարի քանակությամբ ջերմություն և արտանետում էլեկտրականությամբ լիցքավորված նյութի մանրագույն մասնիկների հոսքեր (արեգակնային քամի)։ Հասնելով երկրի մթնոլորտի վերին շերտերը, այդ մասնիկները բախվում են օդի ատոմներին ու մոլեկուլներին, և սրանք սկսում են փայլփլել տարբեր գույներով՝ դեղին, կանաչ, կապույտ, կարմիր, մանուշակագույն, նարնջագույն։ Այս գեղեցիկ տեսարանը երկնքում հայտնվում սովորաբար երկրի բևեռներում, որովհետև ամբողջ երկրագունդը մի վիթխարի մագնիս է և, ինչպես յուրաքանչյուր մագնիս, ունի երկու բևեռ։ Եվ երբ Արեգակի՝ էլեկտրականությամբ լիցքավորված մասնիկների հոսքերը մոտենում են մեր մոլորակին, Երկրի մագնիսական ուժերի ազդեցությամբ շեղվում են դեպի հյուսիսային և հարավային մագնիսական բևեռները, և հիմնականում հենց այդ շրջաններում էլ առաջանում են բևեռափայլերը։Բևեռափայլերն ավելի ուժեղ են լինում և ավելի հաճախ են կրկնվում, երբ Արեգակի վրա մեծանում է արևաբծերի քանակը։ Հենց արևաբծերի տիրույթներից են տիեզերական տարածություն արտանետվում այն մասնիկների առանձնապես հզոր հոսքերը, որոնք երկրի վրա բևեռափայլեր են առաջացնում։ Բևեռափայլի աղեղները սովորաբար ձգվում են արևելքից արևմուտք և երբեմն անցնում 5000 կմ-ից։ Բևեռափայլերը հաճախ ուղեկցվում են երկրի մագնիսական դաշտի խանգարումներով՝ մագնիսական փոթորիկներով։ Այդ դեպքում խախտվում է հեռահար ռադիոկապը։ ",
    img: "https://irinagyurjinyan.files.wordpress.com/2023/04/image-5.png?w=613",
  },
  ]
  const mard = [
    `    Մարդու մարմնի միակ մասը, որտեղ արյուն չի մատակարարվում, աչքի եղջերաթաղանթն է․ այն թթվածին է ստանում անմիջապես օդից։
    Մարդու ուղեղի նյարդային ազդակը շարժվում է 274 կմ/ժ արագությամբ։
    Մեր արյունատար անոթների ընդհանուր երկարությունը կազմում է մոտ 100 հազար կմ։
    Ծարավի զգացողությունն առաջանում է, երբ օրգանիզմը կորցնում է իր քաշի 1%-ի չափ ջուր։ 5%-ի կորուստը կարող է հանգեցնել գլխապտույտի, իսկ 10%-ինը՝ մահվան։
    Խնձորի և բանանի հոտն օգնում է նիհարելու։
    Մարդու օրգանիզմում ապրող մանրէների ընդհանուր քաշը կազմում է 2 կգ։
    Գոյություն ունի շուրջ 100 վիրուս, որոնք հարբուխ են առաջացնում։
    Ձեռքերի եղունգներն աճում են 4 անգամ ավելի արագ, քան ոտքերինը։
    Մեր օրգանիզմն ունի շուրջ 2 000 համային ռեցեպտոր։
    Մեր աչքը ունակ է տարբերելու մոտ 10 միլիոն գունային նրբերանգ։
    Մարդու սիրտն այնպիսի ճնշմամբ է արյունը մղում օրգանիզմի մյուս հատվածներ, որ այն կարող էր հասնել քառահարկ շենքի բարձրության։
    Երեխաներն ամենաարագը մեծանում են գարնանը։
    Երբ մարդը ժպտում է, նա օգտագործում է 17 մկան, մինչդեռ երբ զայրացկոտ տեսք է ընդունում, գործածում է 43-ը։
    Օդանավով թռիչքի ընթացքում մազերի աճի արագությունը կրկնապատկվում է։
    Մարդու ողջ կյանքի ընթացքում նրա սիրտը բաբախում է մոտավորապես 3 միլիարդ 300 միլիոն անգամ։`
  ]




  let body = <div ></div>

  if (page === 'main') {
    body = <div style={{ backgroundColor: "rgb(217, 237, 238)" }}></div>
  } else if (page === 'erevuytner') {
    body = <div style={{ backgroundColor: "rgb(236, 199, 225)" }}>

      <div style={{ marginLeft: "500px" }}>
        <p style={{ fontSize: "40px" }}>{erevuytner[hrashaliqN].head}</p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ justifyContent: "column" }}>
          {erevuytner.map((x, i) =>
            <div key={i} onClick={() => setHrashaliqN(i)}
              style={{
                borderRadius: "30px",
                width: "300px",
                margin: "20px",
                backgroundColor: i === hrashaliqN ? "rgb(250, 209, 236)" : "rgb(253, 228, 245)",
                padding: "20px",
                cursor: 'pointer'
              }} >
              {x.erevuyt}
            </div>)}


        </div>


        <div>
          <div style={{ backgroundColor: "rgb(250, 209, 236)", margin: "20px", padding: "30px" }}>
            {erevuytner[hrashaliqN].information}

          </div>
          <img src={erevuytner[hrashaliqN].img} style={{ width: "800px", margin: "20px" }} />

        </div>
      </div>
    </div>
























  } else if (page === 'names') {



    body = image !== ''
      ? <div style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        display: 'flex',
        justifyContent: "center",

        backgroundColor: 'black'
      }}><img
          style={{
            maxWidth: "70%",
            maxHeight: "70%",

            width: "auto",
            height: "auto"
          }} className='image' onClick={() => setImage('')} src={image} />
      </div>
      :



      <div> <div
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
  }

  return (

    <div>

      <div style={{ backgroundColor: "rgb(185, 222, 231)", padding: "20px" }}> <p style={{ color: "black", fontSize: "40px", paddingLeft: "200px" }}>Դպրոցական հանրագիտարան</p></div>


      <div style={{ margin: "20px", }}>




        <div onClick={() => setPage('main')}
          style={{

            cursor: 'pointer',
            backgroundColor: "rgb(236, 199, 225)",
            padding: "20px",
            width: "100px",
            height: "50px"
          }}>
          Գլխավոր էջ


        </div>

        {page === "main" ? <div> <h1>Հանրագիտարանի մասին</h1>
          <div>Հանրագիտարան, գիտական կամ գիտահանրամատչելի տեղեկատու, որը առավել էական տեղեկություն է պարունակում գիտելիքների կամ պրակտիկ գործունեության բոլոր (համապարփակ) կամ առանձին (ճյուղային) բնագավառների վերաբերյալ[1]։

            Հայերեն Հանրագիտարան (հանր (հանրային, ընդհանուր) + ա (հոդակապ) + գիտ (գիտելիք, գիտություն) + արան (տեղ բնորոշող գոյականակերտ վերջածանց)) բառը (Տեղեկատու ձեռնարկ գիտության բոլոր կամ առանձին ճյուղերի մասին[2]) աշխարհի շատ լեզուներով հնչում է «էնցիկլոպեդիա» կամ «էնսայքլոփիդիա» և տառադարձված է հին հունարեն «ἐγκυκλοπαιδεία»[3] բառից, որը սերում է «ἐγκύκλιος παιδεία»[4] «էնկյուկլիոս պայդեա» արտահայտությունից («էնկյուկլիոս»(ἐγκύκλιος)[5] և նշանակում է «համապարփակ» կամ «շրջանառված», իսկ «պայդեա» (παιδεία) նշանակում է «մանկավարժություն»[6])։ Արտահայտությունը տառացիորեն կարելի է թարգմանել «համապարփակ կրթություն» կամ «ուսուցում գիտելիքների ընդհանուր շրջանում»։ </div>


          <h1>Բաժիններ</h1>
          <div style={{ display: "flex" }}>
            <div


              onClick={() => setPage('names')}
              style={{

                cursor: 'pointer',
                margin: "20px",
                backgroundColor: "rgb(236, 244, 245)",
                padding: "30px",
                width: "300px",
                height: "200px"
              }}>


              Աշխարհի նոր յոթ հրաշալիքները
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUlir8qdQOSh3j9AM3UJH0e_HEKeFM9K-8Q&usqp=CAU" />
            </div>



            <div onClick={() => setPage('erevuytner')}
              style={{

                cursor: 'pointer',
                margin: "20px",
                backgroundColor: "rgb(236, 244, 245)",
                padding: "30px",
                width: "300px",
                height: "200px"
              }}>
              Բնության երևույթները   {names[hrashaliqN].photo.map(x =>

                <> <img onClick={() => setHrashaliqN(x.hgum)} src={x.hgum}
                  style={{
                    width: 200,
                    borderRadius: 20,
                    cursor: 'pointer'
                  }} />
                  {x.photoDescr}</>
              )}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUGcpA6fndfOznzMNfUJyuhxTVD9Ij5WcuQ&usqp=CAU" />

            </div>


            <a href="https://krtaditak.am/15-%D5%B0%D5%A5%D5%BF%D5%A1%D6%84%D6%80%D6%84%D5%AB%D6%80-%D6%83%D5%A1%D5%BD%D5%BF-%D5%B4%D5%A1%D6%80%D5%A4%D5%B8%D6%82-%D6%85%D6%80%D5%A3%D5%A1%D5%B6%D5%AB%D5%A6%D5%B4%D5%AB-%D5%B4%D5%A1%D5%BD%D5%AB/" target='_blank'>
              <div


                onClick={() => setPage('mard')}
                style={{

                  cursor: 'pointer',
                  margin: "20px",
                  backgroundColor: "rgb(236, 244, 245)",
                  padding: "30px",
                  width: "300px",
                  height: "200px"
                }}>


                15 հետաքրքիր փաստ մարդու օրգանիզմի մասին
                <img src="data:image/jpeg;base64,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" />
              </div>
            </a>

          </div>

        </div> : null}





      </div>

      {body}



    </div>



  )
}

export default App;

