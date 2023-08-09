import React, { useState } from "react"


function App() {

  const [arqa, setArqa] = useState("")

  const names = [
    {
      name: "Մայր Աթոռ Սուրբ Էջմիածին",
      construction: " 303թ․",
      description: `Եկեղեցին հիմնադրվել է 303թ․-ին Գրիգոր 
            Լուսավորիչի ու Տրդատ Գ թագավորի կողմից՝
            Հիսուսի իջած վայրում։Այն աշխարհասփյուռ հայության գերագույն
            մասի սրբազան ուխատեղին է և Ամենայն Հարոց Կաթողիկոսության 
            նստավայրը։Եկեղեցու պատմությունն ամփոփող պատմական
             հուշարձանները, թանգարանները, գրադարանները և հենց Մայր
              Տաճարը ներկայացնում են հայոց բազմադարյան պատմությունը, գրականութ
              յան և արվեստի բացառիկ արժեքները, հոգևոր մշակույթի գանձերը։ Մայր Աթոռ
               Սուրբ Էջմիածինը մեծ պատասխանատվություն է կրում թե այստեղ ստեղծված և
                թե Եկեղեցուն նվիրաբերված մշակութային արժեքների պահպանության համար։
            Մայր Աթոռը իրականացնում է սոցիալական, մշակութային և դաստիարակչական 
            ծրագրեր Հայաստանում, ինչպես նաև սփյուռքում։
            1430-ական թվականներին Հերմոնացին և Մեծշոփեցին պարբերաբար հանդիպումներ են
             ունենում Մեծ Հայքի նշանավոր վարդապետների, թեմակալ առաջնորդների, մեծատունների հետ։
              Գնալով շարժումը ձեռք էր բերում լայն ժողովրդականություն։ Կաթողիկոսական աթոռի
               տեղափոխմանը հավանություն են տալիս նաև կիլիկյան հոգևորականներից շատերը։ Քայլեր են 
               ձեռնարկվում նաև Ս. Էջմիածնի վանքը տնտեսապես հզորացնելու և բարվոք վիճակ ստեղծելու
                ուղղությամբ։ 1431 թվականին Սյունյաց իշխան Ռուստամ Օրբելյանը Ս. Էջմիածնին նվիրում է 
                7 խոշոր գյուղեր ։ Վանքում սկսվում են շինարարական վերանորոգուման աշխատանքներ։

            `,
      img: "https://onewaytour.com/wp-content/uploads/2016/04/28-390x295.jpg"
    },

    {
      name: " Սուրբ Գևորգ եկեղեցի,Մուղնի",
      construction: " 13-րդ դար",
      description: `Ըստ 17-րդ դարի պատմագիր Զաքարիա
             Սարկավագի, վանքը հիմնադրել է Հովհաննավանքի
              միաբանությունը՝ այնտեղ տեղափոխելով
               Սուրբ Գևորգի մասունքները։ Հավանաբար դա տեղի է 
               ունեցել 13-րդ դարի առաջին կեսին, որովհետև արդեն
                1278 թ. Մուղնու Սուրբ Գևորգ վանքում ձեռագրեր է 
                ընդօրինակվել։ Սուրբ Գևորգ վանքից Սուրբ Գևորգի
                 մասունքների մի մասը տարվել է Վրաստան՝ վրաց
                  արքայազնի բուժման համար։13-15-րդ դդ. այստեղ
                   ձեռագրեր են գրվել, վանքը դարձել է հռչակավոր
                    ուխտատեղի։ 1580 թվականին վանքի առաջնորդ Ոսկան
                     վարդապետը Մուղնու Սբ. Գևորգ վանքում եպիսկոպոսական
                      աթոռ է հաստատել։ Վանքը ծաղկում է ապրել 17-րդ դարում,
                       երբ համալիրը երկու անգամ հիմնովին վերակառուցվել է։
                        1632-1655 թթ. վանքի առաջնորդ Մարտիրոս եպիսկոպոսը
                         քանդել է արդեն խարխուլ եկեղեցին ու մյուս շինությունները
                          և կառուցել նորը՝ երկու զույգ մույթերով եռանավ բազիլիկը,
                           պարիսպներ, խցեր։ Սակայն 17-րդ դարի երկրորդ կեսին անմշակ
                            քարով շինված այս եկեղեցին չէր համապատասխանում համահայկական
                             ուխտատեղիի պահանջներին, որի պատճառով Հովհաննես վարդապետը, 
                             ստանալով պարսից շահի թույլտվությունը, հիմնովին քանդել է այն
                              և սրբատաշ տուֆ քարերով 1664-1669 թթ. կառուցել նորը։Հովհաննես 
                              վարդապետը 1669 թ., մինչև շինարարության ավարտը, վախճանվել է Ագուլիսում
                               ։ Շինարարությունն ավարտել է Դավիթ վարդապետը։ Վանքի Սբ. Գևորգ եկեղեցու
                                ճարտարապետն էր Սահակ Հիզանեցին, որի մահից հետո  նրան փոխարինել է
                                 իր փեսա և աշակերտ ուստա Մուրադը։ 1734 թ. Մուղնու Սբ. Գևորգ վանք
                                  ուխտի է եկել կաթողիկոս Աբրահամ Բ Խոշաբեցին։ 1811 թ. առևտրական 
                                  Հովհաննեսը և նրա կին Թամարը վանքին վարագույր են նվիրել՝ 
                                  խաչելության և վիշապին նիզակահարող հեծյալ Սբ. Գևորգի պատկերով.
                                   այն այժմ գտնվում է ՀՊՊԹ-ում։ 19-րդ դարում Մուղնու Սբ. Գևորգ 
                                   վանքը ուխտավայր է եղել նաև վրացիների և պարսիկների համար։
                 `,
      img: "https://tse1.mm.bing.net/th?id=OIP.sRFZHCem1ywquCTNimdsZwHaHO&pid=Api&P=0&h=220"
    },


    {
      name: "Սուրբ Սարգիս եկեղեցի ",
      construction: " 1835-1842 ",
      description: `Սուրբ Սարգիս եկեղեցին վանք-անապատի
             հետ միասին ավերվել է 1679 թվականի մեծ երկրաշարժի
              ժամանակ և վերակառուցվել նույն տեղում՝ եդեսացի
               Նահապետ կաթողիկոսի գահակալության տարիներին ։
               Ներկայիս Սուրբ Սարգիս եկեղեցին կառուցվել է 1835-1842 թվականներին։
                Ն.Ս.Օ.Տ.Տ. Վազգեն Ա Ամենայն հայոց կաթողիկոսի օրոք այն հիմնովին 
                նորոգվեց ու բարեկարգվեց։Ճարտարապետ Ռաֆայել Իսրայելյանի՝ 1972
                 թվականի կազմած նախագծով սկսվեց Սբ. Սարգիս եկեղեցու նորոգումը։
                  Եկեղեցու հին շենքը պահպանվել է, ճակատները երեսպատվել են Անիի
                   նարնջագույն տուֆով և ունեն եռանկյունաձև խորշեր։ Ճարտարապետ
                    Ռ. Իսրայելյանի մահից հետո հետագա աշխատանքները շարունակել է
                     ճարտարապետ Ա. Գալիկյանը։ 1971-1976 թվականներին եկեղեցին 
                     հիմնովին բարեկարգվել է, արևմտյան հատվածում երգչախմբի համար 
                     կառուցվել է վերնատուն։ Հին թմբուկի ու գմբեթի փոխարեն
                      կառուցվել է առավել բարձրադիր գմբեթ՝ բազմանիստ թմբուկով և
                       պսակված հովհարաձև վեղարով։ 2000 թվականին ավարտվել է Սուրբ 
                       Սարգիս եկեղեցու զանգակատան կառուցումը։ Քանդակագործ Արտաշես
                        Հովսեփյանի մտահղացումն է արևմտյան շքամուտքը, փայտե դուռը,
                         իսկ շքամուտքից վեր գտնվող հարթաքանդակները Աղթամարի Սուրբ Խաչ
                          տաճարի քանդակների թեմաներով են։ Քանդակագործներ Ս. Դադոյանի և 
                          Մ. Հարությունյանի ջանքերով եկեղեցու ներսում գմբեթի տակ գտնվող 
                          առագաստների քանդակազարդ աշխատանքներն Արենիի Սուրբ Աստվածածին
                           եկեղեցու առագաստների քանդակների նմանությամբ են ստեղծվել:
                           Սուրբ Սարգիս եկեղեցու հիմնական վերակառուցումը կատարվել է
                            լոնդոնաբնակ բարերար Սարգիս Քյուրքճյանի և նրա զավակների
                             նվիրատվությամբ։ Եկեղեցու օծման հանդիսավոր արարողությունը
  կատարվել է 1976 թվականի նոյեմբերի 3-ին։ Վեհափառ հայրապետ Վազգեն Առաջինն
   իր քարոզում նշել է.«Քաղաքամայր Երևանն օժտվեց մի նոր զարդով, 
   հայկական ճարտարապետության մի նոր կոթողով, աղոթքի սքանչելի սրբավայրով»։`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D5%8D%D5%B8%D6%82%D6%80%D5%A2_%D5%8D%D5%A1%D6%80%D5%A3%D5%AB%D5%BD_%D5%A5%D5%AF%D5%A5%D5%B2%D5%A5%D6%81%D5%AB%2C_%D4%B5%D6%80%D6%87%D5%A1%D5%B6_-_Saint_Sarkis_Church%2C_Yerevan_%282019%29_18.jpg/180px-%D5%8D%D5%B8%D6%82%D6%80%D5%A2_%D5%8D%D5%A1%D6%80%D5%A3%D5%AB%D5%BD_%D5%A5%D5%AF%D5%A5%D5%B2%D5%A5%D6%81%D5%AB%2C_%D4%B5%D6%80%D6%87%D5%A1%D5%B6_-_Saint_Sarkis_Church%2C_Yerevan_%282019%29_18.jpg"
    },

    {
      name: " Գանձասարի վանք",
      construction: "1216 ",
      description: `Գանձասարի վանական համալիր
             Արցախի Հանրապետության Մարտակերտի շրջանի Վանք
              գյուղի մոտակայքում է գտնվում՝ պատմական Մեծ Հայքի
               Արցախ նահանգի Մեծ Առանք գավառում, Խաչենագետի ձախ ափին,
                Գանձասար լեռան վրա։ Իր անունն ստացել է Վանք գյուղի դիմաց
                 գտնվող բլրի անունից, որի ընդերքում կան արծաթի և այլ մետաղների
                  հանքեր։Հայ Բագրատունիների թագավորության ժամանակաշրջանում Հայոց
                   կաթողիկոս Անանիա Մոկացին  անհանգստացած լինելով Հայաստանի
                    արևելյան թեմերի եկեղեցական գործերով, գալով Արցախ, Գանձասարի
                     վանքում հրավիրեց հոգևորականության և իշխանների ժողով, որը
                      ազգային ոգով պաշտպանեց Հայ Առաքելական եկեղեցու դավանանքի 
                      ամրությունը և անաղարտությունը։ Գանձասարն առաջնորդարան էր
                       և Խաչենի իշխանների տոհմական տապանատունը։ Հասան-Ջալալյան
                        տոհմի իշխանների հոգածության շնորհիվ Գանձասարը պահպանել է
                         հոգևոր կենտրոնի իր դերը։ Վանքն ունեցել է հարուստ
                          ձեռագրատուն, դպրանոց, որտեղ ստեղծվել են բարձրարժեք
                           ձեռագրեր, կրթվել են հոգևոր գործիչներ, որոնք իրենց
                            նպաստն են բերել Խաչենի և հարակից շրջանների մտավոր և 
                            մշակութային կյանքի զարգացմանը։Մխիթար Գոշը և Կիրակոս 
                            Գանձակեցին վկայում են, որ Գանձասարի վանքի գավիթը եղել
                             է իշխանական տոհմի ներկայացուցիչների գերեզմանատունը։
                              Գավիթը խաչվող կամարներով է ծածկված և իր հատակագծային-ծավալային
                               հորինվածքով նման է Հաղպատի վանքի ժամատանը և Մշկավանքի գավթի ձևերին։
                               17-րդ դարում Գանձասարի կաթողիկոսները սերտ համագործակցել են Արցախի
                                մելիքությունների ազատագրական ոգորումներին։ XVIII դար այն դարձել է
                                 ազատագրական շարժումների կենտրոն։ Դարասկգբին Եսայի Հասան-Ջալալյան
                                  կաթողիկոսի շուրջն էին համախմբվել շարժման ղեկավար գործիչները։ Ազատագրական
                                   շարժման կենտրոնի դերը պահպանել է մինչև 1815 թվականը, երբ ցարական
                                    կառավարության հրահանգով Գանձասարի կաթողիկոսությունը վերացավ, իսկ նրան
                                     փոխարինած միտրոպոլիտության աթոռանիստը դարձավ Շուշին։


                  
                  `,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%D4%B3%D5%A1%D5%B6%D5%B1%D5%A1%D5%BD%D5%A1%D6%80_%D5%8E%D5%A1%D5%B6%D6%84.jpg/450px-%D4%B3%D5%A1%D5%B6%D5%B1%D5%A1%D5%BD%D5%A1%D6%80_%D5%8E%D5%A1%D5%B6%D6%84.jpg"
    },

    {
      name: " Կանաչ Ժամ եկեղեցի,Շուշի",
      construction: "1818",
      description: `Կանաչ Ժամ եկեղեցի կամ Սուրբ Հովհաննես
             Մկրտիչ եկեղեցի, հայկական եկեղեցի Արցախի Հանրապետության
              Շուշիի շրջանի Շուշի քաղաքում։ Անունը ստացել է այն պատճառով, 
              որ ժամանակին եկեղեցու գմբեթը եղել է կանաչ գույնի։ 2020 թվականին
               Ադրբեջանական զինված ուժերի վերահսկողության տակ անցնելուց հետո մասամբ
                ավերվել է։ Վնասված է գմբերթն ու զանգակատունը։
                Եկեղեցին կառուցվել է 1818 թվականին՝ Ղարաբաղցոց նախկին փայտաշեն
                 եկեղեցու փոխարեն։ Այդ մասին վկայում է շինարարական
                  արձանագրության։ Պատերի մեջ ագուցված է նաև նախկին եկեղեցու
                   արձանագրությունները։Եկեղեցին շինված է արևելք-արևմուտք առանցքով,
                    խաչաձև հատակագծով։ Կողային ավանդատները բեմի տակ իջեցնելու հետևանքով, 
                    արտաքին՝ արևելյան ճակատապատը կիսակլոր է։ Եկեղեցին, զանգակատունը աչքի
                     են ընկնում ներքին ինքնատիպ հարդարանքով։ Այս հանգամանքը հուշարձանը
                      առանձնացնում է հայ ճարտարապետական համանման կառույցների շարքում։ Եկեղեցուն
                       արևմուտքից կցված է հետագայում կառուցված գմբեթավոր զանգակատունը,
                        որի մուտքի վերնամասում փորագրված է. «Բաբայն Ստեփանէսն Յովհանէն յի
                         հիշատակ հանգուցիալ եղբայր Մկրտիչ 1847 թ.» արձանագրությունը։
                         Թեև զանգակատունն օրգանապես ձուլված է եկեղեցուն, այնուամենայնիվ, 
                         որմնամույթերով որոշ չափով առանձնացված է նրանից։ Դրանով ավելի է 
                         ընդգծվում դեպի աղոթասրահը տանող շքամուտքի հանդիսավորությունը։
                          Եկեղեցին որմնամույթերով ևս բաժանված է երկու սրահի։ Առաջին սրահն 
                          ունի երդիկավոր գլխատներին հատուկ գոցվող թաղ, իսկ երկրորդ՝ ուղղանկյուն 
                          սրահի շքեղ, սրբատաշ որմնամույթերի վրա բարձրանում է շրջանաձև գմբեթը։
                          Կանաչ ժամի մեջ ուշագրավ են գոցվող թաղերը, հայկական եկեղեցիների
                           գմբեթների համար անսովոր որոշ տարրերը՝ անհամեմատ մեծ բացվածքները,
                           բեմատակն իջեցված ավանդատները, արևելյան կիսակլոր ճակատապատը։
                            Գմբեթների ճարտարապետական նորամուծությունները նույնպես հարստացրել
                             և առավել նշանակալի են դարձրել եկեղեցու գեղարվեստական արժանիքը։ 
                             Եթե դրան ավելացվի բարձր, կանաչապատ տեղանքը, սրբատաշ և կոպտատաշ
                              քարերից խնամքով իրականացված եկեղեցու կաթնագույն տեսքը, ապա դժվար
                               չէ կռահել, որ հուշարձանն ունի քաղաքաշինական տեսակետից որոշակի
                                կազմակերպող դեր։`,
      img: "https://tse2.mm.bing.net/th?id=OIP.0vIQn_Tddg9K6aFyNX32TgHaFj&pid=Api&P=0&h=220"
    },

    {
      name: " Սուրբ Ամենափրկիչ Ղազանչեցոց",
      construction: "19-րդ դար ",
      description: `Սուրբ Ամենափրկիչ Ղազանչեցոց եկեղեցին
             գտնվում է Արցախի Հանրապետության 
            Շուշիի շրջանի Շուշի քաղաքում։ Հայ առաքելական եկեղեցու 
            Արցախի թեմի կենտրոնն է։ Գտնվում է Ադրբեջանի վերահսկողության 
            տակ։ Ընդգրկված է Շուշիի քաղաքի պատմության և մշակույթի անշարժ
             հուշարձանների ցանկում և հանդիսանում է Արցախի խորհրդանիշներից
              մեկը։ Կառուցվել է 1868-1887 թվականներին։Տաճարը հիշատակվում է
               Մեսրոպ Տախիդյանի «Ճամփորդություն դեպի Հայաստան» գրքում ։ Շահեն 
               Մկրտչյանի կարծիքով դա այն պատճառով է, որ զանգակատունը կառուցվել
                է եկեղեցուց ավելի վաղ, և տաճարի տեղում եղել է 18-րդ դարի մի այլ 
                եկեղեցի։Մինչ նոր եկեղեցին կառուցելը ճարտարապետները կանգնել են մի
                 մեծ խնդրի առջև՝ բանն այն էր, որ ամեն պատարագից առաջ հարկավոր էր,
                  որ պատարագիչ քահանան մեղքերի թողություն խնդրեր մեկ այլ քահանայից,
                   և լսեր այս խոսքերը. «Թող քո ականջները լսեն, թե ինչ են բարբառում 
                   քո շուրթերը», սակայն եկեղեցին ուներ միայն մեկ քահանա, այդ իսկ
                    պատճառով ճարտարապետներ որոշեցին կառուցել մի ընդհատակյա սենյակ,
                     որտեղ տեղի կունենար հրաշքը՝ քահանան թողություն էր խնդրում լսելով
                      իր սեփական ձայնը՝ ասելով. «Թող իմ ականջները լսեն, թե ինչ են 
                      բարբառում իմ շուրթերը»։ Այս երևույթը միակն է աշխարհում և այն
                       մինչև հիմա էլ գործում է Շուշիի Ս. Ամենափրկիչ Ղազանչեցոց եկեղեցում։
Զանգակատունը կառուցվել է շուշեցի Աբրահամ Խանդամիրյանցի կողմից։
 Զանգակատան արևելյան պատին կա արձանագրություն, որն ասում է.` ,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ghazanchetsots_Cathedral_%2823794625208%29.jpg/450px-Ghazanchetsots_Cathedral_%2823794625208%29.jpg"
    },

    {
      name: " Եղվարդի Ս․Աստվածածին եկեղեցի",
      construction: "1301",
      description: `Այն կառուցվել է 1301 թվականին՝ Քրիստոնեությունը
             Հայաստանում պետական կրոնի տարածման հազարամյակի առթիվ։
             Կառուցել է Ազիզբեկ Իշխանն իր կնոջ՝ Վախախի երազի հիման վրա։
              Եկեղեցին կոչվում է դամբարան եկեղեցի, որովհետև այդտեղ ամփոփված
               է Ազիզբեկ Իշխանի որդու աճյունը։Եկեղեցին ունի երկու հարկ։ 
               Եկեղեցու չորս կողմը կենդանակերպ քանդակներ են։ Եկեղեցու արևմտյան
                ճակատին քանդակված է խաչ։ Խաչի ձախ կողմում Աստվածամայրն է՝ մանուկ 
                Հիսուսով, իսկ աջ մասում՝ Հովսեփը։ Ներքևի մասում ցլի և առյուծի 
                քանդակներ են։ Եկեղեցու հյուսիսային ճակատին արծիվն է՝ ճանկած ավանակին։
                 Արծվի քանդակի տակ՝ կամարաձև պատի վրա, ճարտարապետի անունն է՝ Շահիկ
                  Վարդապետ։ Արևմտյան ճակատին քանդակված է կյանքի ծառը, վերևում հովազը
                   հեծել է այծ։2008 թվականին եկեղեցու տարածքից ժամանակավոր առանձնացվեց
                    խաչը, որովհետև խոնավությունից քայքայվում էր, և բերվեց իր նախնական 
                    տեսքի։ Եկեղեցու խաչը առանձնացնելիս հայտնաբերվեց 7-րդ դարի եկեղեցի՝
                     իր խլանիստ հիմքերով։ Հայտնաբերվեցին նաև լավաշ թխելու թոնիր, 
                     գերեզմանաքարեր, տապանաքարեր, ջարդված խաչքարեր, քիվեր՝ 13-րդ 
                     և 14-րդ դարերի։ Հյուսիսային մասում հայտնաբերվեց 3 մետր խորությամբ 
                     թոնիր, որտեղ պահել են ժամանակին մթերք և գինի։ Պեղումների ժամանակ
                      եկեղեցու մուտքի դիմաց հայտնաբերվեցին իշխանական տոհմի գերեզմանաքարեր։
                       Եկեղեցին վերանորոգվել է 1960 -ական թվականներին։ Փոխվել են գմբեթի 
                       սյուները և ամրացվել։ 1905 թվականին, երբ Եղվարդ գյուղը մեծացել է, 
                       եկեղեցուն կից կառուցել են սև սրբատաշ քարերով գավիթ։ 1960-ական 
                       թվականներին այն քանդել են և բերել իր նախնական տեսքին։

Եղվարդի Սբ. Աստվածածին եկեղեցին նման է Մոմիկ Վարդապետի կառուցած Նորավանքին։ Եկեղեցու հյուսիսային կողմում՝ պատուհանի վերևում, եղնիկի պատկեր է։ Եկեղեցին իր պատմության ընթացքում ունեցել է չորս անուն՝ Սուրբ Առաքելոց, Սուրբ Խաչ, Սուրբ Նշան և վերջում Սուրբ Աստվածածին։ Ի տարբերություն Նորավանքի՝ Եղվարդի եկեղեցու երկրորդ հարկը բարձրացել են ոչ թե քարե աստիճաններով, ինչպես Նորավանքինը, այլ շարժական փայտե աստիճաններով բարձրացել են II հարկ՝ մասնակցելու Սուրբ պատարագի։`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Saint_Holy_Mother_church_of_Yeghvard%2C_31_August_2019.jpg/450px-Saint_Holy_Mother_church_of_Yeghvard%2C_31_August_2019.jpg"
    },

    {
      name: " Սաղմոսավանք",
      construction: "1215 թ․",
      description: `Սաղմոսավանք բառի հիմքում սաղմոսն է։
             Սաղմոսը հոգևոր երգն է։ Աշխարհում միակ վանքն է, որ 
             այստեղ հնչած սաղմոսների անունով Սաղմոսավանք է կոչվել։ 
             Եվ իսկապես, վանական այս համալիրը հրաշալի ակուստիկա ունի։
             Կառուցվել է 13-րդ դարում Այրարատյան կողմնակալության կողմնակալ
              Վաչե Ա Վաչուտյանի և իր իշխանական ընտանիքի կողմից։ Սաղմոսավանքի 
              վանական համալիրը գտնվում է Հայաստանի Արագածոտնի մարզի Սաղմոսավան
               գյուղում, Քասախ գետի ձախ, բարձրադիր գեղատեսիլ հատվածում, Երևանից
             37 կմ հեռավորության վրա։վանդության համաձայն հայոց առաջին կաթողիկոս
              Գրիգոր Լուսավորիչը 4-րդ դարում Արագածի գագաթից նկատելով այս վայրը՝
               գալիս է այստեղ և եկեղեցի է կառուցում։  Այնուհետև, նույն տեղում 
               հոգևորականներ հավաքելով, նրանց սաղմոսներ է սովորեցրել։
             Գրավոր աղբյուրներում Սաղմոսավանքը հիշատակվում է 12-րդ դարի 
             2-րդ կեսից, երբ Հովհաննես Մունջ վարդապետը վերանորոգել է այն
              և ստեղծել դպրոց, որը դարձել է նշանավոր գրչության կենտրոն։             
             13-րդ դարում Զաքարյան իշխանների կողմից Արևելյան Հայաստանը 
             ազատագրելուց հետո այստեղ հաստատվում է Վաչուտյան իշխանական տոհմը։
              Վաչուտյանները ծագում էին Լոռիից, բայց իրենց ողջ գործունեությունը 
              կապված էր Արագածոտնի հետ, որի տերերն էին նրանք։ Վաչե Վաչուտյան իշխանը
               տոհմի առավել ակնառու ներկայացուցիչներից էր։ Նա աչքի է ընկել բազում 
               հաղթական պատերազմներում և շինարարական գործունեությամբ։ Վաչե Վաչուտյանը
                կառուցել է Սանահինի բաց գավիթը, Կեչառիսի Սուրբ Նշան եկեղեցին,
                 Մակարավանքի գավիթը, Հոռոմոսի գրատունը, իջևանատներ, աշխարհիկ և
                 հոգևոր այլ շինություններ։1215 թվականին Վաչե Վաչուտյանն իր կնոջ՝
                  Մամախաթունի հետ միասին կառուցում են Սաղմոսավանքի գլխավոր՝ Սուրբ
                   Սիոն եկեղեցին, որն արտաքինից ուղղանկյուն, ներսից խաչաձև 
                   կենտրոնագմբեթ եկեղեցի է, բոլոր անկյուններում ունի երկհարկ
                    ավանդատներ։ Սուրբ Սիոն եկեղեցու ճարտարապետի անունը Մոմիկ էր։

                 Սաղմոսավանքի գավիթը կառուցվել է 13-րդ դարի առաջին քառորդում դարձյալ Վաչե Վաչուտյանի կողմից։ Ինքնատիպ են գավիթի հարավային ճակատի զույգ խոշոր լուսամուտները և երդիկի վրա բարձրացող վեց սյունանի ռոտոնդան։`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/DJI_-Saghmosavanq.jpg/450px-DJI_-Saghmosavanq.jpg"
    },

    {
      name: " Սուրբ Յոթ Վերք",
      construction: "1884",
      description: `Կառուցվել է 1874-1886 թթ., և գտնվում է
             քաղաքի Կենտրոնական՝ այժմ Վարդանանց, հրապարակում։ Եկեղեցին
              Շիրակի թեմի առաջնորդանիստն է։Եկեղեցու պաշտոնական անունը Սուրբ
               Աստվածածին է, բայց այն տեղացիների մոտ հայտնի է որպես Յոթ Վերք՝
                ի պատիվ Մարիամ Աստվածածնի նկարի, որը այստեղ է տեղափոխվել Սուրբ
                 Նշան եկեղեցուց։ Սրբապատկերի հեղինակը Ղուկաս Ավետարանիչն է։ 
                 Սրբապատկերը Վերին Բասենի Հասանկալա բերդաքաղաքից 19-րդ դարի
                  երկրորդ կեսին վարդապետ Կարապետ Քոթանջյանի կողմից։ 1832
                   թվականին նկատի ունենալով, որ Մարմաշենի վանքը գտնվում է
                    սահմանի մոտ, որոշվել է սրբապատկերը տեղափոխել Հառիճավանք, 
                    սակայն Գյումրի հասնելով տեղացիները չեն թողել, որ սրբապատկերը
                     տարվի Հառիճ և այն մնացել է Գյումրիում։Սրբապատկերում
                      պատկերված է Սուրբ Մարիամն իր յոթ վերքերով։
                       Եկեղեցին պատրաստված է սև քարից։ 
              
              Եկեղեցու տեղանքում եղել էր Կամսարականների կողմից կառուցված փայտաշեն
               մատուռը, որտեղ և ժամանակին գտնվել էր Մարիամ Աստվածածնի նկարը։
                Այն սկզբում տեղափոխել էին Սուրբ Նշան եկեղեցի, որի սկզբնական անունը եղել
               էր Յոթ Վերք:Եկեղեցին գործել է անգամ Սովետական Միության տարիներին,
                երբ Հայաստանում փակվել էին բոլոր եկեղեցիները, բացի երկուսից։
                 Երկրորդ եկեղեցին Էջմիածնի Մայր Տաճարն էր։ Այդ ժամանակ Սուրբ Յոթ
                  վերք եկեղեցում գործել է միանգամից 3 տարբեր եկեղեցիներ՝ հայ առաքելական,
                   հայ կաթոլիկական որի խորանում և գտնվում է Գյումրու կաթոլիկ եկեղեցուց
                    բերված խաչը՝ Հիսուս Քրիստոսի քանդակով, և ռուս ուղղափառական եկեղեցին։`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2014_Prowincja_Szirak%2C_Giumri%2C_Katedra_Matki_Bo%C5%BCej_%2802%29.jpg/450px-2014_Prowincja_Szirak%2C_Giumri%2C_Katedra_Matki_Bo%C5%BCej_%2802%29.jpg"
    },

    {
      name: " Կարմրավոր Ս․ Աստվածածնի եկեղեցի",
      construction: "	7-րդ դար",
      description: `Կարմրավորը Հայաստանում միակ եկեղեցին է, որի կարմիր
             կղմինդրե տանիքը մինչ օրս պահպանվել է։ Ութանիստ թմբուկը պսակված է
              կղմինդրածածկ կորագիծ վեղարով, որը նույնանյութ և նմանաձև տարրի 
              պահպանված հնագույն օրինակն է։ Կարմրավորը արտաքուստ և ներքուստ խաչաձև
               գմբեթավոր եկեղեցի է։ Եկեղեցու կղմինդրը ամուր սեղմված է կրային շաղախի
                մեջ և լրացուցիչ մեխված է։ Եկեղեցու արտաքին պատերին պահպանվել են 
                արձանագրություններ, որտեղ նշվում է գյուղի այն բնակիչների մասին, ում
                 միջոցներով կառուցվել է եկեղեցին, ինչպես նաև ոռոգման ջրանցքի կառուցման
                  դժվարությունների մասին։Կարմրավորի շուրջը կան շատ հետաքրքիր խաչքարեր, 
                  որոնցից առավել հայտնի է Ծակ-Քարը, որն իր անունը ստացել է պատվանդանում 
                  ծակի պատճառով ։ Հնում Կարմրավորը կուսանաց վանք է եղել։ Այնտեղ մինչ օրս 
                  պահվում են ուշադրությանը արժանի երկու հնություններ։ Դրանցից առաջինը մի
                   հնդկական նկարազարդ վարագույր է, որը բերվել էր 1798-1799 թթ. Կալկաթայից,
                    իսկ մյուսը՝ Շուխոնց ավետարանը, ձեռագիր ավետարան է, որը 1873 թ. նվիրաբերել
                     է աշտարակցի Շուխյանց ընտանիքը։ Եկեղեցու դուռը փայտից է զարդարված 
                     փորագրություններով ու երգող հրեշտակներով և պատրաստվել է ազգային
                      վարպետ Սարգիս Պողոսյանի կողմից 1983 թ ։Ըստ ավանդության, Աշտարակում
                       ապրող երեք քույրերը սիրահարվում են Սարգիս անունով մի երիտասարդի։
                        Ավագ երկու քույրերը որոշում են իրենց զոհաբերել՝ կրտսերին երջանկություն
                         պարգևելու համար և ծիրանագույն ու կարմիր զգեստ հագնելով իրենց նետում են
                          անդնդախոր ձորը։ Այս լուրն իմանալով փոքր քույրը, սպիտակ զգեստ հագնելով,
                           նույնպես իրեն ձորն է նետում, իսկ Սարգիսը այս դառը վշտից դառնում է 
                           ճգնավոր։ Հետագայում ձորի եզրին երեք եկեղեցիներ են հայտնվում՝
                            Կարմրավորը, Ծիրանավորը և Սպիտակավորը։ Կա նաև տարածված մեկ
                             այլ կարծիք՝ կապված եկեղեցիների անվանածագման հետ։ Ասում են՝
                              Սպիտակավոր եկեղեցու որմնանկարներից մեկում Սուրբ Մարիամ
                               Աստվածածնի գլխանոցը սպիտակ է, իսկ Կարմրավորում և Ծիրանավորում՝
                                համապատասխանաբար կարմիր և ծիրանագույն:Կարմրավորի կողքին՝ մի
                                 գողտրիկ անկյունում է գտնվում նաև հայ մեծ բանաստեղծ Գևորգ Էմինի գերեզմանը։`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Karmravor_Church_Ashtarak.JPG/450px-Karmravor_Church_Ashtarak.JPG"
    },



    {
      name: "Տաթևի վանք",
      construction: "9-րդ դար",
      description: `Գտնվում է Սյունիքի մարզի Տաթև գյուղի հարավում՝
             Որոտան գետի վտակի ձորի աջափնյա եզերքին։ Ավանդության համաձայն՝
              վանքը կոչվել է Թադեոս առաքյալի աշակերտ Եվստաթեոսի անունով։Ըստ
               Ստեփանոս Օրբելյանի, ով հեղինակել է «Սիսական նահանգի պատմություն»
                աշխատությունը, Տաթևի վանքի առաջին եկեղեցին կառուցվել է 4-րդ
                 դարում, ունեցել անշուք տեսք, սակավաթիվ ճգնավոր միաբաններ։
                  8-րդ դարի վերջին եղել է Սյունյաց եպիսկոպոսության աթոռանիստը։
                   Այստեղ են բերվել Քրիստոսի խաչափայտի մասունքով արծաթե հսկա 
                   (մարդաչափ) «Բաբկենյան խաչը», Բյուզանդիայից՝ «Աստվածամուխ 
                   սուրբ Նշանը», սուրբ Հովհաննեսի, սուրբ Ստեփանոս Նախավկայի,
                    տասնմեկ առաքյալների, սուրբ Գրիգոր Ա Լուսավորչի, սուրբ Հռիփսիմեի 
                    մասունքները, Աստվածածնի մազերը։Կալվածքներ գնելու և նվիրատվությունների
                     շնորհիվ վանքը դարձել է խոշոր ավատատեր։ 848 թվականին իշխան Փիլիպե
                      Սյունին կառուցել է սուրբ Գրիգոր Լուսավորիչ եկեղեցին։ Սյունյաց գահերեց 
                      իշխան Աշոտ Սյունու պատվերով Հովհաննես եպիսկոպոսը ձեռնարկել է հայկական 
                      ամենախոշոր եկեղեցիներից մեկի՝ սուրբ Պողոս-Պետրոս տաճարի կառուցումը,
                       ինչին օժանդակել է Շուշանիկ տիկինը։ Տաճարի հիմքը դրվել է 895 թվականին,
                        շինարարությունն ավարտվել 906 թվականին։ Օծմանը ներկա են եղել Սմբատ Ա
                         թագավորը, Վասպուրականի Գագիկ Արծրունի իշխանը, կաթողիկոս Հովհաննես Ե
                          Դրասխանակերտցին, Աղվանից Սիմոն Բ կաթողիկոսը, հոգևոր ու ազնվական
                           դասի ներկայացուցիչներ։ Բացվում է Տաթևի մատենադարանը։
                           Սյունիքի թագավորության  անկումից հետո Տաթևի վանքը որոշ ժամանակով ամայացել է,
                            իսկ հոգևորականները տեղափոխվել են Նորավանք։ Կարճ ժամանակ անց Վրաց
                             թագավորության զորքերի գլուխ անցած՝ Զաքարե ամիրսպասալար և Իվանե աթաբեկ
                              Զաքարյանները ազատագրում են հյուսիսարևելյան Հայաստանը։ Սյունիքը, Արցախը,
                               Այրարատը, Ուտիքի ու Գուգարքի մի մասը մտնում են Զաքարյան իշխանապետության 
                               կազմի մեջ։ Սյունիքի իշխաններ Օրբելյանները խթանում են վանքի հետագա
                                զարգացումը։ 14-րդ դարում հիմնադրվում է Տաթևի համալսարանը, որը դառնում է
                                 գիտության խոշոր կենտրոն։ Դրան կից բացվում է Տաթևի մանրանկարչության դպրոցը։`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tatev_Monastery_from_a_distance.jpg/450px-Tatev_Monastery_from_a_distance.jpg"
    },



  ]

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <table>
        <tbody>
          {names.map((king, index) => <tr key={index}>
            <td style={{ border: "1px solid black", padding: "10px", cursor: "pointer" }} onClick={() => { setArqa(arqa.name === king.name ? "" : king) }}>{king.name}</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>{king.construction}</td>
          </tr>
          )}
        </tbody>

      </table>
      {
        arqa !== ""
          ?
          <div style={{ border: "1px solid black", padding: "10px" }}>
            <img src={arqa.img} height={"150px"} alt="" />
            {arqa.description}
          </div>
          :
          <></>
      }
    </div>
  )
}

export default App;





