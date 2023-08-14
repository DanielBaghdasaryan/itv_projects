import { useState } from 'react'


function App() {

  const [regionN, setRegioN] = useState(0)

  const regions = [
    {
      name: "Aragatsotn",
      description: "Aragatsotn Province occupies the northwestern part of Armenia and covers an area of 2,756 km2 (9.3% of the total area of Armenia). It has internal borders with Shirak Province from the north, Lori Province from the northeast, Kotayk Province from the east, Armavir Province from the south and the city of Yerevan from the southwest. The Akhurian River at the west separates Aragatsotn from the Kars Province of Turkey.The northern part of the province is dominated by the Aragats mountain range. At the northeast and the east, it approximates the mountains of Pambak and Tsaghkunyats, respectively. The mountains of Arteni dominate the northeastern and the central eastern parts of the province. The tiny Akhurian valley occupies the eastern edge of Aragatsotn. Aragatsotn occupies the northwestern parts of the Ararat plain in the south and the southeast.The altitude of the province ranges between 950 and 4,090 meters above sea level.Mount Aragats (4,090 m.) is the highest peak of Aragatsotn and Armenia.",
      img: "https://www.iarmenia.org/wp-content/uploads/2017/12/Aragatsotn_province.jpg"
    },
    {
      name: "Ararat",
      description: "The foundation of the Ararat cement was launched in 1927 within Soviet Armenia, accompanied by the construction of few residential apartments to accommodate the workers. In 1930, the settlement was officially formed as a labour accommodation area, while the cement plant gave its first production in 1933. In 1935, the settlement was enlarged with the inclusion of the surrounding rural areas. In 1947, it was officially named Ararat, after the nearby biblical Mountains of Ararat. With the establishment of several industrial plants, Ararat was developed as a major industrial centre of the Armenian SSR, to become an urban-type settlement. Due to its rapid growth and the gradual increase of the population, Ararat was given the status of a town in 1962. In 1972, it became a city of Republican subordination.",
      img: "https://c8.alamy.com/comp/WE7JR8/armenia-ararat-region-khor-virap-monastery-and-mount-ararat-WE7JR8.jpg"
    },
    {
      name: "Syunik",
      description: "Syunik was one of the 15 provinces of the Kingdom of Armenia. The early Armenian historian Movses Khorenatsi connected the name of the province with Sisak, a descendant of the legendary Armenian patriarch Hayk and supposed progenitor of the ancient Siunia (or Syunik) dynasty, which ruled Syunik from the first century However, historian Robert Hewsen considered Sisak to be a later eponym.[7] Historian Armen Petrosyan suggested that Syunik is derived from name of the Urartian sun god Shivini/Siwini (itself a borrowing from the Hittites), noting the similarity between the names and the high number of sun-related placenames in the historical Syunik region.[8] At various times, the region of present-day Syunik was also known by other names such as Syunia, Sisakan and Zangezur. The region of Syunik geographically was called Siounia Caucasiana in the 5-6th century by the Ravenna Cosmography.",
      img: "https://cdn.getyourguide.com/img/tour/5ddd233f49b4d.jpeg/146.jpg"
    },

    {
      name: "Armavir",
      description: "Armavir  is a province (marz) in the western part of Armenia. Located in the Ararat plain dominated by Mount Ararat from the south and Mount Aragats from the north, the province's capital is the town of Armavir while the largest city is Vagharshapat (Etchmiadzin). The province shares a 72 km (45 mi)-long border with Turkey to the south and west.The province is home to the spiritual centre of the Armenian nation; the Mother See of Holy Etchmiadzin of the Armenian Apostolic Church. It is the seat of the Catholicos of All Armenians.The province is named after the ancient city of Armavir founded in 331 BC. The province is also the site of the decisive Battle of Sardarabad in 1918 that resulted in the foundation of the Republic of Armenia. The battle is seen as a crucial historical event not only by stopping the Turkish advance into the rest of Armenia but also preventing the complete destruction of the Armenian nation.The Metsamor Nuclear Power Plant is also located in Armavir Province near the town of Metsamor.",
      img: "https://www.advantour.com/img/armenia/armavir/armavir.jpg"
    },

    {
      name: "Gegharkunik",
      description: "Gegharkunik Province is located at the eastern part of Armenia, bordering Azerbaijan. It includes the exclave of Artsvashen, which has been under Azerbaijani occupation since the First Nagorno-Karabakh War. With an area of 5,348 km2 (2,065 sq mi), Gegharkunik is the largest province in Armenia. However, approximately 24% or 1,278 km2 (493 sq mi) of its territory is covered by Lake Sevan, the largest lake in the South Caucasus and a major tourist attraction of the region.The early Armenian history Movses Khorenatsi connected the name of Gegharkunik with Gegham, a 5th-generation descendant of the legendary patriarch and founder of the Armenian nation Hayk. Gegham was the father of Sisak (founder of the Siunia dynasty) and Harma (grandfather of Ara the Beautiful). The Gegham Mountains and the Lake of Gegham (currently known as Lake Sevan) were also named after Gegham.",
      img: "https://www.ararattravel.am/uploads/img/Gegharkunik/Hayravank%202%20(1).jpeg"
    },

    {
      name: "Kotayk",
      description: " It is located at the central part of the country. Its capital is Hrazdan and the largest city is Abovyan. It is named after the Kotayk canton of the historic Ayrarat province of Ancient Armenia.Kotayk is bordered by Lori Province from the northwest, Tavush Province from the north, Gegharkunik Province from the north, Aragatsotn Province from the southwest, and Ararat Province from the southwest and the capital Yerevan from the west. Kotayk is the only province in Armenia that has no borders with foreign countries.The province is home to many ancient landmarks and tourist attractions in Armenia including the 1st-century Temple of Garni, the medieval Bjni Fortress, 11th-century Kecharis Monastery and the 13th-century monastery of Geghard. Kotayk is also home to the popular winter sports resort and the spa-town of Tsaghkadzor and the mountain resort of Aghveran.",
      img: "https://www.tsarvoyages-caucase.com/images/destinations/1895/dreamstime_c_monastere_1.jpg?width=500"
    },

    {
      name: "Lori",
      description: " It is located in the north of the country, bordering Georgia. Vanadzor is the capital and largest city of the province. Other important towns include Stepanavan, Alaverdi, and Spitak. It is home to the UNESCO World Heritage Sites of Haghpat and Sanahin monasteries and the well-preserved Akhtala monastery, where Armenians, Georgians, and Greeks make an annual pilgrimage on September 20–21.",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/19/20/c8/2b/dzoraget-canyon-scenery.jpg"
    },

    {
      name: "Shirak",
      description: " It is located in the north-west of the country, bordering the provinces of Lori to the east and Aragatsotn to the south and southeast, and the countries of Turkey to the west and Georgia to the north. Its capital and largest city is Gyumri, which is the second largest city in Armenia. It is as much semi-desert as it is mountain meadow or high alpine. In the south, the high steppes merge into mountain terrain, being verdant green in the spring, with hues of reddish brown in the summer. The province is served by the Shirak International Airport of Gyumri.",
      img: "https://img.itinari.com/countries-regions/am-shirak-province.jpg?ch=DPR&w=1200&s=28ac44cacc26623966656ff8ccdf5bb2"
    },

    {
      name: "Tavush",
      description: "Tavush has an area of 2,704 km² (9% of total area of Armenia). It occupies the northeastern part of Armenia. It is bordered by Georgia to the north and Azerbaijan to the east. Domestically, it is bordered by the Gegharkunik Province from the south, Kotayk Province from the southwest and Lori Province from west. The territory is mainly mountainous and rocky hillsides covered with a green carpet of Alpine meadows. Tavush is sometimes referred to as a little Armenian Switzerland. The average height of the region is around 900 meters above sea level. Based on the historical divisions of Ancient Armenia, the current territory of the province occupies parts of the Varazhnunik canton of Ayrarat province, the Dzorapor and Koghbapor cantons of Gugark province, and the Aghve and Tuchkatak (Tavush) cantons of Utik province.",
      img: "https://i.pinimg.com/originals/de/35/dc/de35dc0e2f509380df7729597ccd1cdb.jpg"
    },

    {
      name: "Vayots Dzor",
      description: "It lies at the southeastern end of the country, bordering the Nakhchivan exclave of Azerbaijan to the west and the Kalbajar District of Azerbaijan to the east. It covers an area of 2,308 km2 (891 sq mi). With a population of only 52,324 (2011 census), it is the most sparsely populated province in the country. The capital and largest city of the province is the town of Yeghegnadzor. The province is home to many ancient landmarks and tourist attractions in Armenia including the Areni-1 cave complex and Areni-1 winery of the Chalcolithic period, the 8th-century Tanahat Monastery, the 10th-century fortress of Smbataberd, and the 13th-century monastery of Noravank. Vayots Dzor is also home to the spa-town of Jermuk.The village of Gladzor in Vayots Dzor was home to the 13th and 14th-century University of Gladzor.",
      img: "http://eltravelclub.am/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.jpg"
    },



  ]

  return (
    <div>

      <div style={{ display: 'flex', marginLeft: 400, }}>
        <div>
          <div>
            {regions.map(
              (x, i) => <div
                key={i}
                onClick={() => setRegioN(i)}
                style={{ border: '1px solid black', width: 250, height: 50, padding: 10 }}
              >
                {x.name} </div>

            )}
          </div>





          <div style={{ border: '1px solid black', width: 700, padding: 10 }}>
            {regions[regionN].description} </div>
          <div>
            <img src={regions[regionN].img} style={{ width: 200 }} />
          </div>
        </div>
      </div>
    </div>



  )


}


export default App
