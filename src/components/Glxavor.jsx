import React from 'react'

const Glxavor = () => {

    const kinoner = [
        {
            name: "Ոսկե Ցլիկ",
            link: "Voske Clik",
            image: "https://i.ytimg.com/vi/yO8lGUufKpI/maxresdefault.jpg",
            date: 1955,

        },

        {
            name: "Պեպո",
            link: "Pepo",
            image: "https://tse1.mm.bing.net/th?id=OIP.cJn1YxieIpJ_3YHYSB04dgHaFA&pid=Api&P=0&h=220",
            date: 1935,

        },

        {
            name: "Դավիթ Բեկ",
            link: "David Bek",
            image: "https://tse2.mm.bing.net/th?id=OIP.hJUAJgrASwRifcmxD_KiMgHaEK&pid=Api&P=0&h=220",
            date: 1943,

        },

        {
            name: "Արարատյան Հովիտի Աղջիկը",
            link: "Araratyan Hoviti axjiky",
            image: "https://tse1.mm.bing.net/th?id=OIP.5fauUANHWaauTk16htVfAAHaFj&pid=Api&P=0&h=180",
            date: 1949
        },

        {
            name: "Ամպրոպի Արահետով",
            link: "Ampropi Arahetov",
            image: "https://upload.wikimedia.org/wikipedia/hy/0/00/%D4%B1%D5%B4%D5%BA%D6%80%D5%B8%D5%BA%D5%AB_%D5%A1%D6%80%D5%A1%D5%B0%D5%A5%D5%BF%D5%B8%D5%BE.jpg",
            date: 1956

        },

        {
            name: "Հովազաձորի Գերիները",
            link: "Hovazacori Gerinery",
            image: "https://tse2.mm.bing.net/th?id=OIP.12NJkUpyeIQKfobW4CI23QHaEK&pid=Api&P=0&h=220",
            date: 1956

        },

        {
            name: "Պատվի համար",
            link: "Patvi Hamar",
            image: "https://upload.wikimedia.org/wikipedia/hy/6/6e/%D5%8A%D5%A1%D5%BF%D5%BE%D5%AB_%D5%B0%D5%A1%D5%B4%D5%A1%D6%80.jpg",
            date: 1956
        },

        {
            name: "Ինչու Է Աղմկում Գետը",
            link: "Inchu e Axmkum Gety",
            image: "https://upload.wikimedia.org/wikipedia/hy/8/81/%D4%BB%D5%B6%D5%B9%D5%B8%D6%82_%D5%A7_%D5%A1%D5%B2%D5%B4%D5%AF%D5%B8%D6%82%D5%B4_%D5%A3%D5%A5%D5%BF%D5%A8.jpg",
            date: 1958

        },

        {
            name: "Առաջին ՍԻրո Երգը",
            link: "Arajin Siro Ergy",
            image: "https://upload.wikimedia.org/wikipedia/hy/thumb/c/cb/%D4%B1%D5%BC%D5%A1%D5%BB%D5%AB%D5%B6_%D5%BD%D5%AB%D6%80%D5%B8_%D5%A5%D6%80%D5%A3%D5%A8_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg/411px-%D4%B1%D5%BC%D5%A1%D5%BB%D5%AB%D5%B6_%D5%BD%D5%AB%D6%80%D5%B8_%D5%A5%D6%80%D5%A3%D5%A8_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg",
            date: 1958
        },


        {
            name: "Մեր Թաղի Ձայները",
            link: "Mer Taxi Caynery",
            image: "https://upload.wikimedia.org/wikipedia/hy/7/76/%D5%84%D5%A5%D6%80_%D5%A9%D5%A1%D5%B2%D5%AB_%D5%B1%D5%A1%D5%B5%D5%B6%D5%A5%D6%80%D5%A8.jpg",
            date: 1960
        },


        {
            name: "Տժվժիկ",
            link: "Tghvghik",
            image: "https://upload.wikimedia.org/wikipedia/hy/9/9e/%D5%8F%D5%AA%D5%BE%D5%AA%D5%AB%D5%AF.jpg",
            date: 1961
        },


        {
            name: "Տեին ու Ծառան",
            link: "Tern u Caran",
            image: "https://upload.wikimedia.org/wikipedia/hy/3/37/%D5%8F%D5%A5%D6%80%D5%B6_%D5%B8%D6%82_%D5%AE%D5%A1%D5%BC%D5%A1%D5%B6.jpg",
            date: 1962
        },


        {
            name: "Ճանապարհ Դեպի Կրկես",
            link: "Chanaparh Depi Krkes",
            image: "https://upload.wikimedia.org/wikipedia/hy/3/32/%D5%83%D5%A1%D5%B6%D5%A1%D5%BA%D5%A1%D6%80%D5%B0_%D5%A4%D5%A5%D5%BA%D5%AB_%D5%AF%D6%80%D5%AF%D5%A5%D5%BD.jpg",
            date: 1963
        },


        {
            name: "Շրթներկ համար 4",
            link: "Shrtnerk hamar 4",
            image: "https://upload.wikimedia.org/wikipedia/hy/thumb/0/0a/%D5%87%D5%90%D4%B9%D5%86%D4%B5%D5%90%D4%BF_4.jpg/411px-%D5%87%D5%90%D4%B9%D5%86%D4%B5%D5%90%D4%BF_4.jpg",
            date: 1964
        },


        {
            name: "Մոռացված Նախնիների Ստվերները",
            link: "Moracvac Naxnineri stvernery",
            image: "https://upload.wikimedia.org/wikipedia/hy/thumb/2/2e/%D5%84%D5%B8%D5%BC%D5%A1%D6%81%D5%BE%D5%A1%D5%AE_%D5%B6%D5%A1%D5%AD%D5%B6%D5%AB%D5%B6%D5%A5%D6%80%D5%AB_%D5%BD%D5%BF%D5%BE%D5%A5%D6%80%D5%B6%D5%A5%D6%80%D5%A8.jpg/411px-%D5%84%D5%B8%D5%BC%D5%A1%D6%81%D5%BE%D5%A1%D5%AE_%D5%B6%D5%A1%D5%AD%D5%B6%D5%AB%D5%B6%D5%A5%D6%80%D5%AB_%D5%BD%D5%BF%D5%BE%D5%A5%D6%80%D5%B6%D5%A5%D6%80%D5%A8.jpg",
            date: 1964
        },


        {
            name: "Եռանկյունի",
            link: "Erankyuni",
            image: "https://upload.wikimedia.org/wikipedia/hy/6/6a/%D4%B5%D5%BC%D5%A1%D5%B6%D5%AF%D5%B5%D5%B8%D6%82%D5%B6%D5%AB_%28%D6%86%D5%AB%D5%AC%D5%B4%29.PNG",
            date: 1967
        },


        {
            name: "Մենք Ենք,Մեր Սարերը",
            link: "Menq Enq,Mer Sarery",
            image: "https://upload.wikimedia.org/wikipedia/hy/f/fe/%D5%84%D5%A5%D5%B6%D6%84_%D5%A5%D5%B6%D6%84%2C_%D5%B4%D5%A5%D6%80_%D5%BD%D5%A1%D6%80%D5%A5%D6%80%D5%A8_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg",
            date: 1969
        },


        {
            name: "Նռան Գույնը",
            link: "Nran Guyny",
            image: "https://upload.wikimedia.org/wikipedia/hy/f/f6/%D5%86%D5%BC%D5%A1%D5%B6_%D5%A3%D5%B8%D6%82%D5%B5%D5%B6%D5%A8.jpg",
            date: 1968
        },


        {
            name: "Խաթաբալա",
            link: "Xatabala",
            image: "https://upload.wikimedia.org/wikipedia/hy/thumb/1/1d/%D4%BD%D5%A1%D5%A9%D5%A1%D5%A2%D5%A1%D5%AC%D5%A1_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg/411px-%D4%BD%D5%A1%D5%A9%D5%A1%D5%A2%D5%A1%D5%AC%D5%A1_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg",
            date: 1971
        },

        {
            name: "Տղամարդիկ",
            link: "Txamardik",
            image: "https://upload.wikimedia.org/wikipedia/hy/3/36/%D5%8F%D5%B2%D5%A1%D5%B4%D5%A1%D6%80%D5%A4%D5%AB%D5%AF_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg",
            date: 1972
        },

        {
            name: "Այս Կանաչ,Կարմիր Աշխարհը",
            link: "Ays kanach,karmir ashxarhy",
            image: "https://upload.wikimedia.org/wikipedia/hy/thumb/b/b7/%D4%B1%D5%B5%D5%BD_%D5%AF%D5%A1%D5%B6%D5%A1%D5%B9%2C_%D5%AF%D5%A1%D6%80%D5%B4%D5%AB%D6%80_%D5%A1%D5%B7%D5%AD%D5%A1%D6%80%D5%B0%D5%A8_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg/411px-%D4%B1%D5%B5%D5%BD_%D5%AF%D5%A1%D5%B6%D5%A1%D5%B9%2C_%D5%AF%D5%A1%D6%80%D5%B4%D5%AB%D6%80_%D5%A1%D5%B7%D5%AD%D5%A1%D6%80%D5%B0%D5%A8_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg",
            date: 1975
        },

        {
            name: "Հարսնացուն Հյուսիսից",
            link: "Harsnacun Hjusisic",
            image: "https://upload.wikimedia.org/wikipedia/hy/b/b7/%D5%80%D5%A1%D6%80%D5%BD%D5%B6%D5%A1%D6%81%D5%B8%D6%82_%D5%B0%D5%B5%D5%B8%D6%82%D5%BD%D5%AB%D5%BD%D5%AB%D6%81.jpg",
            date: 1975
        },

        {
            name: "Թթենի",
            link: "Tteni",
            image: "https://upload.wikimedia.org/wikipedia/hy/3/38/%D4%B9%D5%A9%D5%A5%D5%B6%D5%AB_%28%D6%86%D5%AB%D5%AC%D5%B4%29.jpg",
            date: 1979
        },

        {
            name: "Կտոր Մը Երկինք",
            link: "Ktor my Erkinq",
            image: "https://upload.wikimedia.org/wikipedia/hy/d/d7/%D4%BF%D5%BF%D5%B8%D6%80_%D5%B4%D5%A8_%D5%A5%D6%80%D5%AF%D5%AB%D5%B6%D6%84.jpg",
            date: 1980
        },
        {
            name: "Գիքոր",
            link: "Giqor",
            image: "https://upload.wikimedia.org/wikipedia/hy/thumb/9/98/%D4%B3%D5%AB%D6%84%D5%B8%D6%80_%28%D6%86%D5%AB%D5%AC%D5%B4%2C_1982%29.jpg/411px-%D4%B3%D5%AB%D6%84%D5%B8%D6%80_%28%D6%86%D5%AB%D5%AC%D5%B4%2C_1982%29.jpg",
            date: 1982
        },
        {
            name: "Հին Օրերի Երգը",
            link: "Hin Oreri Ergy",
            image: "https://upload.wikimedia.org/wikipedia/hy/5/50/%D5%80%D5%AB%D5%B6_%D6%85%D6%80%D5%A5%D6%80%D5%AB_%D5%A5%D6%80%D5%A3%D5%A8.jpg",
            date: 1982
        },

        {
            name: "Մեր Մանկության Տանգոն",
            link: "Mer Mankutyan Tangon",
            image: "https://upload.wikimedia.org/wikipedia/hy/9/9e/%D5%84%D5%A5%D6%80_%D5%B4%D5%A1%D5%B6%D5%AF%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6_%D5%BF%D5%A1%D5%B6%D5%A3%D5%B8%D5%B6.png",
            date: 1984
        },


    ]

    return (
        <div>

        </div>
    )
}

export default Glxavor
