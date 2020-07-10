import { Exhibit } from "./exhibit.model";

const exhibits: Exhibit[] = [
    {
        item: {
            img: 'penny-black.jpg',
            name: 'Penny Black',
            year: 1840,
            country: 'UK',
        },
        id: '1',
        catPrice: 3000,
        currentBid: 2000,
        isSold: false,
        isOnSale: true,
    },
    {
        item: {
            img: 'British Guiana Magenta 9M.jpg',
            name: 'British Guiana Magenta',
            year: 1856,
            country: 'British Guiana',
        },
        id: '2',
        catPrice: 8000000,
        currentBid: 7500000,
        isSold: false,
        isOnSale: false,
    }, {
        item: {
            img: 'Baden 9 Keuzer 1M .jpg',
            name: 'Baden 9 Kreuzer',
            year: 1870,
            country: 'Baden',
        },
        id: '3',
        catPrice: 1000000,
        currentBid: 700000,
        isSold: false,
        isOnSale: false,
    },
    {
        item: {
            img: 'Doar Ivry 1000 8K.jpg',
            name: 'Doar Ivry 1000mil',
            year: 1948,
            country: 'Israel',
        },
        id: '4',
        catPrice: 8000,
        currentBid: 5000,
        isSold: false,
        isOnSale: false,
    },
    {
        item: {
            img: 'inverted_Jenny 750K.jpg',
            name: 'Inverted Jenny',
            year: 1935,
            country: 'USA',
        },
        id: '5',
        catPrice: 750000,
        currentBid: 500000,
        isSold: false,
        isOnSale: false,
    }, {
        item: {
            img: 'Mauritius 2p blue 1847 .jpg',
            name: 'Mauritius 2p Blue',
            year: 1875,
            country: 'Mauritius',
        },
        id: '6',
        catPrice: 4000000,
        currentBid: 3000000,
        isSold: false,
        isOnSale: false,
    }, {
        item: {
            img: 'st lucia red mercury 1949 37T.jpg',
            name: 'Red Mercury',
            year: 1948,
            country: 'St. Lucia',
        },
        id: '7',
        catPrice: 37000,
        currentBid: 25000,
        isSold: false,
        isOnSale: false,
    }, {
        item: {
            img: 'Treskilling Yellow 2.1M.jpg',
            name: 'Treskilling Yellow',
            year: 1890,
            country: 'Sweden',
        },
        id: '8',
        catPrice: 2100000,
        currentBid: 1600000,
        isSold: false,
        isOnSale: false,
    }
]

export default exhibits;
