import { useState } from 'react'


function App() {

  const [regionN, setRegioN] = useState(0)

  const regions = [

    {
      name: "Aragatsotn",
      description: [
        {
          title: "Aragatsotn",
          paragraph: "Aragatsotn Province occupies the northwestern part of Armenia and covers an area of 2,756 km2 (9.3% of the total area of Armenia). It has internal borders with Shirak Province from the north, Lori Province from the northeast, Kotayk Province from the east, Armavir Province from the south and the city of Yerevan from the southwest. The Akhurian River at the west separates Aragatsotn from the Kars Province of Turkey.",
        },
        {
          paragraph: "The northern part of the province is dominated by the Aragats mountain range. At the northeast and the east, it approximates the mountains of Pambak and Tsaghkunyats, respectively. The mountains of Arteni dominate the northeastern and the central eastern parts of the province. The tiny Akhurian valley occupies the eastern edge of Aragatsotn. Aragatsotn occupies the northwestern parts of the Ararat plain in the south and the southeast.The altitude of the province ranges between 950 and 4,090 meters above sea level.Mount Aragats (4,090 m.) is the highest peak of Aragatsotn and Armenia.",
        },
        {
          paragraph: "The northern part of the province is dominated by the Aragats mountain range. At the northeast and the east, it approximates the mountains of Pambak and Tsaghkunyats, respectively. The mountains of Arteni dominate the northeastern and the central eastern parts of the province. The tiny Akhurian valley occupies the eastern edge of Aragatsotn. Aragatsotn occupies the northwestern parts of the Ararat plain in the south and the southeast.",
        },
        {
          paragraph: "The altitude of the province ranges between 950 and 4,090 meters above sea level.",
        },
        {
          paragraph: "Mount Aragats (4,090 m.) is the highest peak of Aragatsotn and Armenia.",
        },
        {
          paragraph: "Besides the Akhurian river, the rivers of Kasagh, Gegharot, and Amberd are the main water resources in the province. Mountainous lakes including Lake Kari, Lessing, Amberd, Tagavor, and Kuraghbyur are found on Mount Aragats. Between 1962 and 1967, the Aparan reservoir was built on the Kasagh river.",
        },

      ],
      img: "https://www.iarmenia.org/wp-content/uploads/2017/12/Aragatsotn_province.jpg"

    },
    {
      name: "Ararat",
      description: [
        {
          title: "Ararat",
          paragraph: "The foundation of the Ararat cement was launched in 1927 within Soviet Armenia, accompanied by the construction of few residential apartments to accommodate the workers. In 1930, the settlement was officially formed as a labour accommodation area, while the cement plant gave its first production in 1933. In 1935, the settlement was enlarged with the inclusion of the surrounding rural areas. In 1947, it was officially named Ararat, after the nearby biblical Mountains of Ararat.",
        },
        {
          paragraph: "With the establishment of several industrial plants, Ararat was developed as a major industrial centre of the Armenian SSR, to become an urban-type settlement. Due to its rapid growth and the gradual increase of the population, Ararat was given the status of a town in 1962. In 1972, it became a city of Republican subordination.",

        },
        {
          paragraph: "Ararat has an area of 2,090 km2 (7% of total area of Armenia). It occupies the east of the central part of modern-day Armenia. From the north, it has borders with Armavir Province, Yerevan and Kotayk Province. From the east, its bordered by Gegharkunik and Vayots Dzor. Iğdır Province of Turkey and Azerbaijan's Nakhchivan Autonomous Republic respectively form the western and southern borders of the province.",
        },
        {
          paragraph: "Historically, the current territory of the province mainly occupies the Vostan Hayots canton of Ayrarat province of Ancient Armenia.",
        },
        {
          paragraph: "The province is located at the southeast of the Ararat plain, surrounded by the Yeranos mountains from the north, the mountains of Gegham, Dahnak and Mzhkatar from the east, Urts mountains from the south and the Araks river from the west. The mountains of Yerakh are located at the centre of the province. Approximately, 30% of the territory is plain, while the rest is dominated by mountains.",
        },
        {
          paragraph: "The highest point of Ararat province is the Spitakasar peak of Gegham mountains with a height of 3560 meters. The lowest point is 801 meters at the Araks valley. Araks, Hrazdan, Azat and Vedi, are the 4 major rivers the flow through the province. The climate within the territory of the province is highly diversified. It ranges between extremely arid climate at the lower plains and cold snowy climate at the heights.",
        },
      ],
      img: "https://c8.alamy.com/comp/WE7JR8/armenia-ararat-region-khor-virap-monastery-and-mount-ararat-WE7JR8.jpg"
    },
    {
      name: "Syunik",
      description: [
        {
          title: "Syunik",
          paragraph: "Syunik was one of the 15 provinces of the Kingdom of Armenia. The early Armenian historian Movses Khorenatsi connected the name of the province with Sisak, a descendant of the legendary Armenian patriarch Hayk and supposed progenitor of the ancient Siunia (or Syunik) dynasty, which ruled Syunik from the first century However, historian Robert Hewsen considered Sisak to be a later eponym. Historian Armen Petrosyan suggested that Syunik is derived from name of the Urartian sun god Shivini/Siwini (itself a borrowing from the Hittites), noting the similarity between the names and the high number of sun-related placenames in the historical Syunik region. At various times, the region of present-day Syunik was also known by other names such as Syunia, Sisakan and Zangezur.",
        },
        {
          paragraph: "The region of Syunik geographically was called Siounia Caucasiana in the 5-6th century by the Ravenna Cosmography.",
        },

        {
          paragraph: "Syunik is located between the Nakhchivan Autonomous Republic of Azerbaijan from the west, and districts of Lachin (except Lachin corridor under surveillance of Russian peacekeepers according to Russian-brokered armistice), Qubadli and Zangilan of Azerbaijan from the east. It was bordered from east Kashatagh Province of Nagorno-Karabakh Republic between 1992 and 2020. The Vayots Dzor Province of Armenia forms its northern borders, while Aras River at the south separates Syunik from Iran. Syunik covers an area of 4,506 km² (1740 sq. mi.) (15% of total area of Armenia), making it the second-largest province in Armenia after Gegharkunik in terms of the total area.",
        },
        {
          paragraph: "Historically, the current territory of the province occupies most of the historic Syunik province of Ancient Armenia.",
        },
        {
          paragraph: "Syunik is a mountainous region, mainly covered with thick green forests. The Zangezur Mountains occupy most of the territory of Syunik. Mount Kaputjugh with a height of 3905 meters (12,812') and Mount Gazanasar with a height of 3829 meters (12,562') are the highest peaks of the province.",
        },
      ],
      img: "https://cdn.getyourguide.com/img/tour/5ddd233f49b4d.jpeg/146.jpg"
    },

    {
      name: "Armavir",
      description: [
        {
          title: "Armavir",
          paragraph: "Armavir  is a province (marz) in the western part of Armenia. Located in the Ararat plain dominated by Mount Ararat from the south and Mount Aragats from the north, the province's capital is the town of Armavir while the largest city is Vagharshapat (Etchmiadzin).",
        },
        {
          paragraph: "The province is home to the spiritual centre of the Armenian nation; the Mother See of Holy Etchmiadzin of the Armenian Apostolic Church. It is the seat of the Catholicos of All Armenians.",
        },

        {
          paragraph: "The province is named after the ancient city of Armavir founded in 331 BC. The province is also the site of the decisive Battle of Sardarabad in 1918 that resulted in the foundation of the Republic of Armenia. The battle is seen as a crucial historical event not only by stopping the Turkish advance into the rest of Armenia but also preventing the complete destruction of the Armenian nation.",
        },
        {
          paragraph: "Armavir has an area of 1,242 km2 (4.2% of total area of Armenia) making it the smallest province of the country in terms of the total area. It is bordered by the Turkish provinces of Kars from the west and Iğdır from the south, with a length of 130.5 km borderline, where Aras River separates Armenia from Turkey. Domestically, it is bordered by Aragatsotn Province from the north, Ararat Province from the east and the capital Yerevan from the northeast.",
        },
        {
          paragraph: "Historically, the current territory of the province mainly occupies the canton of Aragatsotn, along with small parts of Arsharunik and Masyatsotn cantons of the Ayrarat province of Ancient Armenia.",
        },
      ],

      img: "https://www.advantour.com/img/armenia/armavir/armavir.jpg"
    },

    {
      name: "Gegharkunik",
      description: [
        {
          title: "Gegharkunik",
          paragraph: "Gegharkunik Province is located at the eastern part of Armenia, bordering Azerbaijan. It includes the exclave of Artsvashen, which has been under Azerbaijani occupation since the First Nagorno-Karabakh War. With an area of 5,348 km2 (2,065 sq mi), Gegharkunik is the largest province in Armenia. However, approximately 24% or 1,278 km2 (493 sq mi) of its territory is covered by Lake Sevan, the largest lake in the South Caucasus and a major tourist attraction of the region.",
        },
        {
          paragraph: "The early Armenian history Movses Khorenatsi connected the name of Gegharkunik with Gegham, a 5th-generation descendant of the legendary patriarch and founder of the Armenian nation Hayk. Gegham was the father of Sisak (founder of the Siunia dynasty) and Harma (grandfather of Ara the Beautiful). The Gegham Mountains and the Lake of Gegham (currently known as Lake Sevan) were also named after Gegham.",
        },
        {
          paragraph: "Armenian gull is the symbol of the province. It is depicted on the Gegharkunik coat of arms adopted on 4 May 2011, flying over the Lake Sevan and its peninsula, surrounded by the mountains of Sevan. The wheat ears on both sides of the coat of arms represent the agricultural characteristic of the province, while the opened book at the bottom represents the intellectual and cultural heritage of the region.",
        },
        {
          paragraph: "Gegharkunik Province is situated at the east of modern-day Armenia, surrounding the Lake Sevan. Within Armenia, it borders Tavush Province to the north, Kotayk and Ararat provinces to the west and Vayots Dzor Province to the south. The Dashkasan, Gadabay and Kalbajar districts of Azerbaijan form the eastern border of the province. From 1993 to 2020, the province shared a border with the unrecognized Republic of Artsakh, when the Kalbajar District of Azerbaijan was administered as the Shahumyan Province of Artsakh. The Armenian exclave of Artsvashen in Gegharkunik Province is currently occupied and controlled by Azerbaijan.",
        },
        {
          paragraph: "Lake Sevan occupies the central part of the province, lying at a height of 1900 meters above sea level and covering an area of 1260 km2 (around 23.5% of the area of Gegharkunik).[8] The lake is the largest body of fresh water in Armenia and the entire South Caucasus. With a volume of around 32.92 billion m³ of water, Sevan is of a major environmental importance for the entire region. Getik, Gavaraget and Masrik are the main rivers of the province.",
        },

      ],
      img: "https://www.ararattravel.am/uploads/img/Gegharkunik/Hayravank%202%20(1).jpeg"
    },

    {
      name: "Kotayk",
      description: [
        {
          title: "Kotayk",
          paragraph: " It is located at the central part of the country. Its capital is Hrazdan and the largest city is Abovyan. It is named after the Kotayk canton of the historic Ayrarat province of Ancient Armenia.",
        },
        {
          paragraph: "Kotayk is bordered by Lori Province from the northwest, Tavush Province from the north, Gegharkunik Province from the north, Aragatsotn Province from the southwest, and Ararat Province from the southwest and the capital Yerevan from the west. Kotayk is the only province in Armenia that has no borders with foreign countries.",
        },
        {
          paragraph: "The province is home to many ancient landmarks and tourist attractions in Armenia including the 1st-century Temple of Garni, the medieval Bjni Fortress, 11th-century Kecharis Monastery and the 13th-century monastery of Geghard. Kotayk is also home to the popular winter sports resort and the spa-town of Tsaghkadzor and the mountain resort of Aghveran.",
        },
        {
          paragraph: "Kotayk Province is named after the historic Kotayk canton of the historic Ayrarat province of Ancient Armenia, directly ruled by the royal Arsacid dynasty.",
        },

      ],
      img: "https://www.tsarvoyages-caucase.com/images/destinations/1895/dreamstime_c_monastere_1.jpg?width=500"
    },

    {
      name: "Lori",
      description: [
        {
          title: "Lori",
          paragraph: " It is located in the north of the country, bordering Georgia. Vanadzor is the capital and largest city of the province. Other important towns include Stepanavan, Alaverdi, and Spitak. It is home to the UNESCO World Heritage Sites of Haghpat and Sanahin monasteries and the well-preserved Akhtala monastery, where Armenians, Georgians, and Greeks make an annual pilgrimage on September 20–21.",
        },
        {
          paragraph: "The province was heavily damaged during the 1988 Armenian earthquake.",
        },
        {
          paragraph: "The province is served by the Stepanavan Airport.",
        },
        {
          paragraph: "The name Lori (Լոռի) is of Armenian origin, first appeared in the 11th century when King David I Anhoghin founded the fortified city of Lori.The fortress-city became the capital of the Kingdom of Tashir-Dzoraget in 1065. The name Lori later spread through the region and replaced the original name of Tashir.",
        },
        {
          paragraph: "Situated at the north of modern-day Armenia, Lori covers an area of 3,789 square kilometres (1,463 sq mi) (12.7% of total area of Armenia). It is bordered by Tavush Province from the east, Kotayk Province from the southeast, Aragatsotn Province from the southwest and Shirak Province from the west. The province is bordered by the Kvemo Kartli region of Georgia.",
        },
      ],
      img: "https://media-cdn.tripadvisor.com/media/photo-s/19/20/c8/2b/dzoraget-canyon-scenery.jpg"
    },

    {
      name: "Shirak",
      description: [
        {
          title: "Shirak",
          paragraph: " It is located in the north-west of the country, bordering the provinces of Lori to the east and Aragatsotn to the south and southeast, and the countries of Turkey to the west and Georgia to the north. Its capital and largest city is Gyumri, which is the second largest city in Armenia. It is as much semi-desert as it is mountain meadow or high alpine. In the south, the high steppes merge into mountain terrain, being verdant green in the spring, with hues of reddish brown in the summer. The province is served by the Shirak International Airport of Gyumri.",
        },
        {
          paragraph: "Shirak Province is located in the north-west of Armenia and covers an area of 2,680 km2 (1,035 sq mi) (9% of the total area of Armenia). It borders Lori Province to the east, Aragatsotn Province to the south, the Kars and Ardahan provinces of Turkey to the west and the Samtskhe-Javakheti and Kvemo Kartli regions of Georgia to the north.",
        },
        {
          paragraph: "Historically, the current territory of the province mainly occupies the Shirak canton of Ayrarat province of Ancient Armenia.",
        },
        {
          paragraph: "The Akhurian River with its reservoir is the main water resource in the province. Lake Arpi at the northwest of Shirak is the only lake of the province. The area is protected by the government as the Lake Arpi National Park.",
        },
      ],

      img: "https://img.itinari.com/countries-regions/am-shirak-province.jpg?ch=DPR&w=1200&s=28ac44cacc26623966656ff8ccdf5bb2"
    },

    {
      name: "Tavush",
      description: [
        {
          title: "Tavush",
          paragraph: "Tavush has an area of 2,704 km² (9% of total area of Armenia). It occupies the northeastern part of Armenia. It is bordered by Georgia to the north and Azerbaijan to the east. Domestically, it is bordered by the Gegharkunik Province from the south, Kotayk Province from the southwest and Lori Province from west. The territory is mainly mountainous and rocky hillsides covered with a green carpet of Alpine meadows. Tavush is sometimes referred to as a little Armenian Switzerland. The average height of the region is around 900 meters above sea level.",
        },
        {
          paragraph: "Based on the historical divisions of Ancient Armenia, the current territory of the province occupies parts of the Varazhnunik canton of Ayrarat province, the Dzorapor and Koghbapor cantons of Gugark province, and the Aghve and Tuchkatak (Tavush) cantons of Utik province.",
        },
        {
          paragraph: "The province entirely lies among the mountains of the Lesser Caucasus. It is surrounded by the Miapor mountains from the east, the Somkheti mountains from the north, the Gugark mountains from the east and the Kenats mountains from the south. The highest point of Tavush is the Miapor peak with a height of 2993 meters, while the lowest point is located at a height of 380 meters in the Debed river valley near the village of Debedavan.",
        },
        {
          paragraph: "The territories of present-day Lori and Tavush along with the neighboring Georgia, became part of the Russian Empire in 1800–01. The territories became an official region of Russia as per the Treaty of Gulistan signed between Imperial Russia and Qajar Persia in October 1813, following the Russo-Persian War of 1804–13.In 1840, the Elizavetpol uezd was formed and most of the territories of Tavush were included in this new administrative division of the Russian Empire. Later in 1868, the Elisabethpol Governorate was established and Tavush became part of the newly formed Kazakh uezd of the governorate.",
        },
        {
          paragraph: "From 1930 until 1995, modern-day Tavush was divided into 3 districts within the Armenian SSR: Ijevan raion, Noyemberyan raion, and Shamshadin raion. With the territorial administration reform of 1995, the 3 raions were merged to form the Tavush Province.",
        },
        {
          paragraph: "According to the 1989 Soviet census, the Tavush Province (then part of the Shamshadin, Noyemberyan, and Ijevan districts in 1930–1995)[7] had a population of 144,583. 49,114 or 33.97% of which was urban, distributed into the cities of Dilijan (30,433) and Ijevan (18,681), and 95,469 or 66.03% were rural, distributed into the districts of Shamshadin (34,559), Noyemberyan (33,973), and Ijevan (26,937).",
        },
      ],

      img: "https://i.pinimg.com/originals/de/35/dc/de35dc0e2f509380df7729597ccd1cdb.jpg"
    },

    {
      name: "Vayots Dzor",
      description: [
        {
          title: "Vayots Dzor",
          paragraph: "It lies at the southeastern end of the country, bordering the Nakhchivan exclave of Azerbaijan to the west and the Kalbajar District of Azerbaijan to the east. It covers an area of 2,308 km2 (891 sq mi). With a population of only 52,324 (2011 census), it is the most sparsely populated province in the country. The capital and largest city of the province is the town of Yeghegnadzor.",
        },
        {
          paragraph: " The province is home to many ancient landmarks and tourist attractions in Armenia including the Areni-1 cave complex and Areni-1 winery of the Chalcolithic period, the 8th-century Tanahat Monastery, the 10th-century fortress of Smbataberd, and the 13th-century monastery of Noravank. Vayots Dzor is also home to the spa-town of Jermuk.",
        },
        {
          paragraph: "The village of Gladzor in Vayots Dzor was home to the 13th and 14th-century University of Gladzor.",
        },
        {
          paragraph: "Situated at the southeastern end of modern-day Armenia, Vayots Dzor covers an area of 2,308 km2 (7.8% of total area of Armenia). It the most sparsely populated province in the country. It borders the Nakhchivan exclave of Azerbaijan from the west and the Kalbajar District of Azerbaijan from the east (administered as the Shahumyan Region of the Nagorno-Karabakh Republic between 1993 and 2020). Domestically, it is bordered by the Gegharkunik Province from the north, Ararat Province from the northwest and Syunik Province from the southeast.",
        },
        {
          paragraph: "Historically, the current territory of the province occupies most of the Vayots Dzor canton of the historic Syunik province of Ancient Armenia.",
        },
        {
          paragraph: "Vayots Dzor is a mountainous region. It is mainly divided into 3 mountain ranges: the Vardenis mountain range at the north, the Arpa range in the middle and the Vayk range at the south. At a height of 3522 meters, the Vardenis volcano in the north is the highest point in the province, while the Areni valley, at a height of 850 meters, is the lowest point. The 2586 meters-high Vayots Sar volcanic cone is located almost at the centre of the province.",
        },
        {
          paragraph: "Jermuk, Vayk, Yeghegnadzor, and Areni, among others. It originates in Vayots Dzor from the northwest part of the Syunik plateau at a height of 3260 meters, and flows into the Araks river. It has a number of tributaries that form waterfalls such as the Jermuk and the Herher.",
        },
      ],

      img: "http://eltravelclub.am/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.jpg"
    },



  ]

  return (
    <div>
      <div style={{ backgroundColor: 'rgb(2242,242,248)' }}>
        <div style={{ display: 'flex', border: '1px solid black', width: 700, height: 70, justifyContent: 'center', marginLeft: 400, marginBottom: 20, marginTop: 20, fontSize: 30, paddingTop: 20, borderRadius: 10, backgroundColor: 'rgb(193,179,215)', }}>
          Regions of Armenia
        </div>
        <div style={{ display: 'flex', border: '1px solid white', width: 900, justifyContent: 'center', marginLeft: 350, marginBottom: 20, marginTop: 20, fontSize: 20, paddingTop: 20, borderRadius: 10, backgroundColor: 'white' }}>
          Armenia, landlocked country of Transcaucasia, lying just south of the great mountain range of the Caucasus and fronting the northwestern extremity of Asia.
          To the north and east Armenia is bounded by Georgia and Azerbaijan,
          while its neighbours to the southeast and west are, respectively, Iran and Turkey. Naxçıvan, an exclave of Azerbaijan, borders Armenia to the southwest. The capital is Yerevan (Erevan).
          Armenia was converted to Christianity about 300 CE, becoming the first kingdom to adopt the religion after the Arsacid king Tiridates III was converted by St. Gregory the Illuminator. The Armenians have therefore
          maintained an ancient and rich liturgical and Christian literary tradition. Believing Armenians today belong mainly to the Armenian Apostolic (Orthodox) Church or the Armenian Catholic Church, in communion with Rome.
        </div>
        <div style={{ display: 'flex', marginLeft: 400, marginBottom: 20, marginTop: 20, }}>
          <iframe src="https://www.google.com/maps/d/embed?mid=1zz3z34y_GqBmv7j9YWFIvVgHuZw&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
        <div style={{ display: 'flex', marginLeft: 130, }}>
          <div style={{ display: "flex" }}>
            <div>
              {regions.map(
                (x, i) => <div
                  key={i}
                  onClick={() => setRegioN(i)}
                  style={{ border: '1px solid black', width: 250, height: 50, padding: 10, backgroundColor: i === regionN ? 'rgb(193,179,215)' : "white", cursor: "pointer", margin: '10px' }}
                >
                  {x.name} </div>

              )}
            </div>

            <div style={{ border: '1px solid black', width: 800, padding: 10, fontSize: 18, backgroundColor: 'white', margin: '5px' }}>
              {regions[regionN].description.map(
                (x, i) => (
                  <div>
                    <div style={{ margin: ' 10px', color: 'rgb(165,137,193)', fontSize: '25px' }}>{x.title}</div>
                    <div style={{ marginBottom: "10px", fontSize: '17px' }}>{x.paragraph}</div>
                  </div>
                )
              )}
            </div>

            <div >
              <img src={regions[regionN].img} style={{ width: 300 }} />
              <div style={{ margin: 5 }}>
                <div style={{ border: '1px solid rgb(222,41,57)', width: 250, height: 40, backgroundColor: "rgb(222,41,57)" }}></div>
                <div style={{ border: '1px solid rgb(57,69,173)', width: 250, height: 40, backgroundColor: "rgb(57,69,173)" }}></div>
                <div style={{ border: '1px solid rgb(235,146,0)', width: 250, height: 40, backgroundColor: "rgb(235,146,0)" }}></div>
              </div>
              <iframe width="300" height="200" src="https://www.youtube.com/embed/ouQJSNYxjLM" title="The History of Armenia : Every Year" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe width="300" height="200" src="https://www.youtube.com/embed/aT9A_nCuU-Q" title="The history of Armenia Summarized" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>



          </div>
        </div>

      </div>
    </div >



  )


}


export default App
