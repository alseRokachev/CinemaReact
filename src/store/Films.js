import {createSlice} from "@reduxjs/toolkit";

const films = createSlice({
    name: 'films', initialState: {
        films: [{
            name: 'Avatar 2',
            length: '02:36',
            director: 'James Cameron',
            releaseDate: 2022,
            img: 'https://images.thedirect.com/media/article_full/avatar-2-streak.jpg'
        }, {
            name: 'Harry Potter : Secret Room',
            length: '02:06',
            director: 'Chris Columbus',
            releaseDate: 2002,
            img: 'https://thumbs.dfs.ivi.ru/storage5/contents/e/0/5637aa1a062ab45f228b359d06b4ce.jpg'
        }, {
            name: 'Mandolorian : 2 season',
            length: 'undefined',
            director: 'undefined',
            releaseDate: 2020,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-season-2-1604051753.jpeg'
        }, {
            name: 'Dune',
            length: '02:13',
            director: 'Denis Villeneuve',
            releaseDate: 2021,
            img: 'https://assets-prd.ignimgs.com/2021/08/09/dune-poster-blogroll-1628522585792.jpg'
        }, {
            name: 'Operation Fortune',
            length: '01:54',
            director: 'Gai Richie',
            releaseDate: 2023,
            img: 'https://i.hurimg.com/i/hdn/75/0x0/61b5c04a4e3fe10ea4c5df9c.jpg'
        }, {
            name: 'The Gentlemen',
            length: 'undefined',
            director: 'Gai Richie',
            releaseDate: 2020,
            img: 'https://xb-static.nm-ovp.nelonenmedia.fi/xb/styles/2560x1440/public/img/659ea2d966cdfc80d4db6f5106449aae34a5f8d6-w_Gentlemen-the_2560x1440.jpg'
        }, {
            name: 'Watch Glass Onion: A Knives Out Mystery',
            length: 'undefined',
            director: 'Ryan Johnson',
            releaseDate: 2022,
            img: 'https://ntvb.tmsimg.com/assets/p20914462_v_h8_ac.jpg?w=1280&h=720'
        }, {
            name: 'John Wick: Chapter 3',
            length: 'undefined',
            director: 'Chad Stahelski',
            releaseDate: 2019,
            img: 'https://www.slashfilm.com/img/gallery/john-wick-3-was-written-around-keanu-reeves-cool-scene-wishlist/l-intro-1677623749.jpg'
        }, {
            name: 'King Arthur sword',
            length: 'undefined',
            director: 'Gai Richie',
            releaseDate: 2017,
            img: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/king_arthur_legend_of_the_sword.jpg'
        }, {
            name: 'Sherlock Holmes',
            length: 'undefined',
            director: 'Gai Richie',
            releaseDate: 2009,
            img: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/2u6wwjwu5c27prxjtznx6ptl8mk.jpeg'
        }, {
            name: 'Wrath of Man',
            length: 'undefined',
            director: 'Gai Richie',
            releaseDate: 2021,
            img: 'https://cdn-st4.rtr-vesti.ru/vh/pictures/hd/316/392/7.jpg'
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


export const {} = films.actions;
export default films.reducer;