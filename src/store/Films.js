import { createSlice } from "@reduxjs/toolkit";

const films = createSlice({
    name: 'films',
    initialState: {
        films: [{
            name: 'Avatar 2',
            length: '02:36',
            director: 'James Cameron',
            releaseDate: 2022,
            img: 'https://images.thedirect.com/media/article_full/avatar-2-streak.jpg',
            genre: 'fantasy',
            id: 0
        }, {
            name: 'Harry Potter : Secret Room',
            length: '02:06',
            director: 'Chris Columbus',
            releaseDate: 2002,
            img: 'https://thumbs.dfs.ivi.ru/storage5/contents/e/0/5637aa1a062ab45f228b359d06b4ce.jpg',
            genre: 'fantasy',
            id: 1
        }, {
            name: 'Mandolorian : 2 season',
            length: 'undefined',
            director: 'undefined',
            releaseDate: 2020,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-season-2-1604051753.jpeg',
            genre: 'fantasy',
            id: 2
        }, {
            name: 'Dune',
            length: '02:13',
            director: 'Denis Villeneuve',
            releaseDate: 2021,
            img: 'https://assets-prd.ignimgs.com/2021/08/09/dune-poster-blogroll-1628522585792.jpg',
            genre: 'fantasy',
            id: 3
        }, {
            name: 'Operation Fortune',
            length: '01:54',
            director: 'Gai Richie',
            releaseDate: 2023,
            img: 'https://i.hurimg.com/i/hdn/75/0x0/61b5c04a4e3fe10ea4c5df9c.jpg',
            genre: 'action',
            id: 4
        }, {
            name: 'The Gentlemen',
            length: 'undefined',
            director: 'Gai Richie',
            releaseDate: 2020,
            img: 'https://xb-static.nm-ovp.nelonenmedia.fi/xb/styles/2560x1440/public/img/659ea2d966cdfc80d4db6f5106449aae34a5f8d6-w_Gentlemen-the_2560x1440.jpg',
            genre: 'action',
            id: 5
        }, {
            name: 'Glass Onion: A Knives Out Mystery',
            length: 'undefined',
            director: 'Ryan Johnson',
            releaseDate: 2022,
            img: 'https://ntvb.tmsimg.com/assets/p20914462_v_h8_ac.jpg?w=1280&h=720',
            genre: 'detective',
            id: 6
        }, {
            name: 'John Wick: 3',
            length: 'undefined',
            director: 'Chad Stahelski',
            releaseDate: 2019,
            img: 'https://www.slashfilm.com/img/gallery/john-wick-3-was-written-around-keanu-reeves-cool-scene-wishlist/l-intro-1677623749.jpg',
            genre: 'action',
            id: 7
        }, {
            name: 'King Arthur sword',
            length: '02:17',
            director: 'Gai Richie',
            releaseDate: 2017,
            img: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/king_arthur_legend_of_the_sword.jpg',
            genre: 'fantasy',
            id: 8
        }, {
            name: 'Sherlock Holmes',
            length: 'undefined',
            director: 'Gai Richie',
            releaseDate: 2009,
            img: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/2u6wwjwu5c27prxjtznx6ptl8mk.jpeg',
            genre: 'detective'
        }, {
            name: 'Wrath of Man',
            length: 'undefined',
            director: 'Gai Richie',
            releaseDate: 2021,
            img: 'https://cdn-st4.rtr-vesti.ru/vh/pictures/hd/316/392/7.jpg',
            genre: 'action',
            id: 9
        }, {
            name: 'Puss in Boots: The Last Wish',
            length: 'undefined',
            director: 'Joel Crawford',
            releaseDate: 2022,
            img: 'https://avatars.dzeninfra.ru/get-zen_doc/4080538/pub_63c00e634e7bf2234d98d456_63c00e6a6bb8190dbc47f34d/scale_1200',
            genre: 'adventure',
            id: 10
        }, {
            name: 'Mission Impossible. Deadly Reckoning',
            length: '01:58',
            director: 'Christopher McQuarrie',
            releaseDate: 2023,
            img: 'https://www.kino-teatr.ru/movie/kadr/153127/1333778.jpg',
            genre: 'action',
            id: 11
        }, {
            name: 'Dune 2',
            length: '02:27',
            director: 'Denis Villeneuve',
            releaseDate: 2023,
            img: 'https://cdn.forbes.ru/forbes-static/new/2021/09/duna-z-61332161ae8b6-61332161cbb38.jpg',
            genre: 'fantasy',
            id: 12
        }, {
            name: 'Aquaman 2',
            length: '01:49',
            director: 'James Wan',
            releaseDate: 2023,
            img: 'https://super-ficcion.com/wp-content/uploads/2023/04/aquaman-2-fecha-de-estreno.webp',
            genre: 'fantasy',
            id: 13
        }, {
            name: 'The Hunger Games: The Ballad of Snakes and Songbirds',
            length: '02:17',
            director: 'Francis Lawrence',
            releaseDate: 2023,
            img: 'https://bloody-disgusting.com/wp-content/uploads/2016/09/The-Hunger-Games.jpg',
            genre: 'action',
            id: 14
        }, {
            name: 'John Wick : 4',
            length: '02:27',
            director: 'Chad Stahelski',
            releaseDate: 2023,
            img: 'https://opis-cdn.tinkoffjournal.ru/ip/uWXQJkpDPGe337qb3IlbWewL-D5e9XFvghl8t2FDbaw/w:1200/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/am9obi13aWNrLTQt/aW4uZHMzdXBqLi5q/cGc',
            genre: 'action',
            id: 15
        }, {
            name: 'Harry Potter and the Philosopher\'s Stone',
            length: '02:32',
            director: 'Chris Columbus',
            releaseDate: 2001,
            img: 'https://s3.amazonaws.com/biopage-media/prod/images/post_pic/5551_1535596818hogwarts-castle.jpg',
            genre: 'fantasy',
            id: 16
        }, {
            name: 'Harry Potter and the prisoner of Azkaban',
            length: '02:19',
            director: 'Chris Columbus',
            releaseDate: 2004,
            img: 'https://wallpapers.com/images/featured/gi5aixvd4d26cpij.jpg',
            genre: 'fantasy',
            id: 17
        }, {
            name: 'Harry Potter and the Goblet of Fire',
            length: '02:37',
            director: 'Chris Columbus',
            releaseDate: 2005,
            img: 'https://img2.akspic.ru/crops/7/3/2/1/61237/61237-ron_uizli-germiona_grejndzher-lico-dzh_k_rouling-chelovek-1920x1080.jpg',
            genre: 'fantasy',
            id: 18
        }, {
            name: 'Harry Potter and the Order of the Phoenix',
            length: '02:18',
            director: 'Chris Columbus',
            releaseDate: 2007,
            img: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/f/9ef94b9c7844f9fdbedfda23ad7707.jpg',
            genre: 'fantasy',
            id: 19
        }, {
            name: 'Harry Potter and Half Blood Prince',
            length: '02:33',
            director: 'Chris Columbus',
            releaseDate: 2009,
            img: 'https://thumbs.dfs.ivi.ru/storage8/contents/3/a/430509dc904296e6565d64b0ad317c.jpg',
            genre: 'fantasy',
            id: 20
        }, {
            name: 'Death on the Nile',
            length: '02:07',
            director: 'Kenneth Branagh',
            releaseDate: 2022,
            img: 'https://www.film.ru/sites/default/files/images/22222-10(1).jpg',
            genre: 'detective',
            id: 21
        }, {
            name: 'Top Gun 2: Maverick',
            length: '02:11',
            director: 'Joseph Kosinski',
            releaseDate: 2022,
            img: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/top_gan-_meverik.jpg',
            genre: 'action',
            id: 22
        }, {
            name: 'All Quiet on the Western Front',
            length: '02:28',
            director: 'Edward Berger',
            releaseDate: 2022,
            img: 'https://hochu.ua/uploads/a6/82/5a/a6825afb-5156-4413-96f0-f3ebe3cbb5c5.jpg',
            genre: 'action',
            id: 23
        }, {
            name: 'Knives Out',
            length: '02:10',
            director: 'Ryan Johnson',
            releaseDate: 2019,
            img: 'https://play-lh.googleusercontent.com/proxy/5LE0Q-VHJJb8PYPTZRtZs3tj17x8K2zX_EHOvjXgHCs6jId66GXjnpGoKDNf0RwvEWIkShL140JUTeb-ZDz25kWkuvZarnQiQx2yNU0eeMIMz7f8r-VuApNYP8AHA8AbytNOv6ZPJvBaFLvdBnV4scMoY5vSTqX4R6uFIQ=s3840-w3840-h2160',
            genre: 'detective',
            id: 24
        }, {
            name: 'Avatar',
            length: '02:42',
            director: 'James Cameron',
            releaseDate: 2009,
            img: 'https://inbusiness.kz/uploads/2023-1/SIJWDz51.webp',
            genre: 'fantasy',
            id: 25
        }],
        genre: [{
            name: 'Horror', img: 'icons8-pennywise-100.png'
        }, {
            name: 'Adventure', img: 'icons8-adventures-100.png'
        }, {
            name: 'Action', img: 'icons8-action-100.png'
        }, {
            name: 'Comedy', img: 'icons8-rolling-on-the-floor-laughing-100.png'
        }, {
            name: 'Fantasy', img: 'icons8-witch-100.png'
        }, {
            name: 'Thriller', img: 'icons8-scream-100.png'
        }, {
            name: 'Western', img: 'icons8-cowboy-100.png'
        }, {
            name: 'Detective', img: 'icons8-detective-100.png'
        }],
        channels: [{
            name: 'Match TV', id: 0, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Match_TV_logo.png'
        }, {
            name: 'CTC',
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Logo_%D0%A1%D0%A2%D0%A1_23-10-2017.png'
        }, {
            name: 'THT',
            id: 2,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/TNT_logo.png/800px-TNT_logo.png'
        }, {
            name: 'Friday',
            id: 3,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/%D0%9F%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D0%B0_%28%D1%81_2013%29.svg/2560px-%D0%9F%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D0%B0_%28%D1%81_2013%29.svg.png'
        }, {
            name: 'KinoPremiera',
            id: 4,
            img: 'https://toplogos.ru/images/logo-kinopremera.png'
        }, {
            name: 'KinoHit',
            id: 5,
            img: 'https://toplogos.ru/images/logo-kinohit.png'
        }]
    },
})


export const { } = films.actions;
export default films.reducer;