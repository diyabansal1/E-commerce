const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:'dell laptop',
        img:'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=555&qlt=100,1&resMode=sharp2&size=555,402&chrss=full',
        price:'4000',
        desc:'computer at demand'
    },
    {
        name:'IPhone 15',
        img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692846357018',
        price:'50000',
        desc:'latest mobile'
    },
    {
        name:'Iphone charger',
        img:'https://m.media-amazon.com/images/I/51QLU+bV6vL._AC_UF1000,1000_QL80_.jpg',
        price:4000,
        desc:'only for iphone users'
    },
    {
        name:'boat airpods',
        img:'https://5.imimg.com/data5/SELLER/Default/2022/11/GK/HC/ZL/73982182/boat-121v2-bluetooth-airpods.jpg',
        price:5000,
        desc:'most usable airpods and cost is high'
    }
]


async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;


