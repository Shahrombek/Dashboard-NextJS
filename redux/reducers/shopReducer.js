import * as t from "../types";

const initialState = {
  categoriy: [
    { name: "Shoes", select: true, num: 8 },
    { name: "Furniture", select: false, num: 9 },
    { name: "Clothes", select: false, num: 6 },
    { name: "Accessories", select: false, num: 8 },
    { name: "Others", select: false, num: 7 },
  ],
  sort: [
    { name: "Newest", select: true },
    { name: "Popular", select: false },
    { name: "Default", select: false },
    { name: "Price: high to low", select: false },
    { name: "Price: low to high", select: false },
  ],
  categories: {
    Shoes: [
      {
        img: "https://uko-react.vercel.app/static/products/shoe-8.png",
        title: "Nike airmax 170",
        info: "Rave BD",
        incard: false,
        price: 215,
      },
      {
        img: "https://uko-react.vercel.app/static/products/shoe-5.png",
        title: "Nike Off white",
        info: "Sneaker Pimps",
        incard: false,
        price: 170,
      },
      {
        img: "https://uko-react.vercel.app/static/products/shoe-6.png",
        title: "Nike Flyknit",
        info: "Fight Club",
        incard: false,
        price: 340,
      },
      {
        img: "https://uko-react.vercel.app/static/products/shoe-7.png",
        title: "Nike Airmax 270",
        info: "Rave BD",
        incard: false,
        price: 150,
      },
      {
        img: "https://uko-react.vercel.app/static/products/shoe-9.png",
        title: "Nike Roshe",
        info: "Rave BD",
        incard: false,
        price: 150,
      },
      {
        img: "https://uko-react.vercel.app/static/products/shoe-8.png",
        title: "Nike airmax 170",
        info: "Sneaker Pimps",
        incard: false,
        price: 215,
      },
      {
        img: "https://uko-react.vercel.app/static/products/shoe-6.png",
        title: "Nike Flyknit",
        info: "Fight Club",
        incard: false,
        price: 360,
      },
      {
        img: "https://uko-react.vercel.app/static/products/shoe-7.png",
        title: "Nike Airmax 270",
        info: "Rave BD",
        incard: false,
        price: 265,
      },
    ],

    Furniture: [
      {
        img: "http://mintl.rencdn.com/product/ashley/thumbnails/79604-38-SW-P1-KO.jpg",
        title: "Sofas and Couches",
        info: "Homestore Kenya",
        incard: false,
        price: 450,
      },
      {
        img: "https://i.insider.com/61a9152f0ed48c0019e566d3?width=1000&format=jpeg&auto=webp",
        title: "British GQ",
        info: "Ikea to Made",
        incard: false,
        price: 370,
      },
      {
        img: "https://www.livingspaces.com/globalassets/images/blog/2020/05/0527_wood_furniture_buying_guide_acacia_244128.jpg",
        title: "Wood Guide",
        info: "Living Spaces",
        incard: false,
        price: 350,
      },
      {
        img: "https://i0.wp.com/f1-styx.imgix.net/article/2019/07/03113809/furniture-minimalis-berupa-kabinet-dan-meja-makan-dari-kayu-768x767.jpg?resize=768%2C767&ssl=1",
        title: "Ingin Furniture",
        info: "Perhatikan 7 Hal Ini",
        incard: false,
        price: 420,
      },
      {
        img: "https://image.made-in-china.com/2f0j00dhaGVJPBEQcA/Modern-Furniture-Leisure-U-Shape-7-Seater-Sectional-Corner-Fabric-Home-Sofa.jpg",
        title: "Leisure U Shape 7 ",
        info: "Corner Fabric Sofa",
        incard: false,
        price: 645,
      },
      {
        img: "https://cdn-eu.dynamicyield.com/api/9877105/images/1f8ea28dfd4ef__W21sp23_TransitionalRugs_01x.jpg",
        title: "Pottery Barn",
        info: "Shop Furniture Online",
        incard: false,
        price: 870,
      },
      {
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg",
        title: "Wooden Furniture",
        info: "Appliance and Furniture",
        incard: false,
        price: 715,
      },
      {
        img: "https://expatliving.sg/wp-content/uploads/2017/05/1.-Originals-Furniture-Oak_-Marble-Dining-Table.jpg",
        title: "Best Furniture Shops",
        info: "Stores & Malls Review",
        incard: false,
        price: 515,
      },
      {
        img: "https://www.furnitureinfashion.net/home-imgs/livingroom-f.jpg",
        title: "Home & Garden Furniture",
        info: "Dining, Living & Bedroom",
        incard: false,
        price: 830,
      },
    ],
    Clothes: [
      {
        img: "https://cdn.shopclues.com/images1/thumbnails/104223/280/1/148695185-104223914-1603182895.jpg",
        title: "Pause India",
        info: "Best Prices from",
        incard: false,
        price: 115,
      },
      {
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/clothes-sale-men-1609866408.jpg?crop=0.489xw:0.978xh;0.511xw,0&resize=640:*",
        title: "Clothe Co. T-Shirt",
        info: "Sport Training T-Shirt",
        incard: false,
        price: 75,
      },
      {
        img: "https://i5.walmartimages.com/asr/281ba972-e311-4400-96cb-e79bfd7ab77a.248c55fc2d70c8e697c507240159a222.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        title: "Children Sweater ",
        info: "Toddler Kids Clothe",
        incard: false,
        price: 60,
      },
      {
        img: "https://m.media-amazon.com/images/I/61tUuNR-oCL._AC_UL1430_.jpg",
        title: "Womens Fitted V-Neck",
        info: "Sleeve Daily T-shirts",
        incard: false,
        price: 90,
      },
      {
        img: "https://ae01.alicdn.com/kf/HTB15PEsXcnrK1RkHFrdq6xCoFXa9/Hot-Brand-New-Fashion-Men-Shirt-Long-Sleeve-3d-Splash-Ink-Print-Mens-Shirts-Casual-Plus.jpg_Q90.jpg_.webp",
        title: "Brand New Fashion Men Shirt ",
        info: "Dress Man Shirt",
        incard: false,
        price: 85,
      },
      {
        img: "https://5.imimg.com/data5/FW/EM/MY-49716967/nemo-baby-boy-clothe-500x500.png",
        title: "MultiColour Popees Nemo ",
        info: "Baby Boy Clothe",
        incard: false,
        price: 70,
      },
    ],
    Accessories: [
      {
        img: "https://secure.img1-fg.wfcdn.com/im/72110334/resize-h600-w600%5Ecompr-r85/1621/162127574/Bathroom+Accessory+Set.jpg",
        title: "Rose Gold Bathroom",
        info: " Accessories | Wayfair",
        incard: false,
        price: 120,
      },
      {
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HP5Y2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1595893671000",
        title: "Native Union Stow ",
        info: "Accessory Organizer",
        incard: false,
        price: 350,
      },
      {
        img: "https://images.ctfassets.net/2d5q1td6cyxq/5owjGMyqdRKB1ExcBTrqWa/63cf574a68cab8b397ca9b5098fb3700/SHOP_Accessories_Replacement_Accessory_Kit_for_Square_Stand_Gallery.png?w=1600&h=1000&q=90&fm=jpg",
        title: "Replacement Accessory Kit ",
        info: "Square Shop",
        incard: false,
        price: 155,
      },
      {
        img: "https://t4.ftcdn.net/jpg/02/69/84/19/360_F_269841954_IidwZ0kwyu0UruUWUZ3fRUHt9bmxQqrZ.jpg",
        title: "Phone Accessories",
        info: " Adobe Stock",
        incard: false,
        price: 230,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRCMxo9onNhrz2oi9-5T5F4aY5iMtRd8pDrOUmCZhZLAfW6-rL2QWYWXlPbcANunvul4&usqp=CAU",
        title: "Mobile Testing Accessory",
        info: "Perfect for usability tests",
        incard: false,
        price: 160,
      },
      {
        img: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/bands/inspire2-clip/herostatic/inspire2-clip-black-3qt.png",
        title: "Accessory Clip | Shop ",
        info: "Fitbit Inspire 2 Accessories",
        incard: false,
        price: 245,
      },
      {
        img: "https://cdn10.bigcommerce.com/s-lep5ap8xbn/product_images/uploaded_images/x4-black-gallery.jpg",
        title: "Jaybird To Comply™",
        info: "Ultra Foam Tips",
        incard: false,
        price: 310,
      },
      {
        img: "https://i5.walmartimages.com/asr/5f18a046-a71f-439f-9a6c-7063ef86d680.7067b7c81224ebb4552a2da435bef17e.jpeg",
        title: "Sony PlayStation 5",
        info: " PS5 Disc Console",
        incard: false,
        price: 450,
      },
    ],
    Others: [
        {
          img: "https://img.jakpost.net/c/2017/03/15/2017_03_15_23480_1489559147._large.jpg",
          title: "Lifestyle - The Jakarta Post",
          info: "Jakarta Post",
          incard: false,
          price: 100,
        },
        {
          img: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg",
          title: "Contemporary Modern House",
          info: "Interior Design | Archello",
          incard: false,
          price: 70000,
        },
        {
          img: "https://purepng.com/public/uploads/large/purepng.com-red-nanoflowcell-quant-f-modern-carcarvehicletransportnanoflowcellelectric-car-961524643572gazq0.png",
          title: "Red NanoFlowcell ",
          info: "Quant F Modern Car",
          incard: false,
          price: 8400,
        },
        {
          img: "https://useoftechnology.com/wp-content/uploads/2012/11/Ultra-thin-Quad-band-Watch-Mobile-Phone.jpg",
          title: "Modern Technology ",
          info: "Advantages And Disadvantages",
          incard: false,
          price: 550,
        },
        {
          img: "https://th-thumbnailer.cdn-si-edu.com/xa2JOuH_S4eOdw6C-ZZ0lADMflo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/29/44/2944be0e-529b-48c4-8b7d-02724b0cb563/manta5.jpg",
          title: "Eight Remarkable Invention",
          info: "Innovation| Smithsonian Magazine",
          incard: false,
          price: 870,
        },
        {
          img: "https://www.mensjournal.com/wp-content/uploads/2020/01/CES-main.jpg?quality=86&strip=all",
          title: "Coolest Gadgets",
          info: " This Year's Show",
          incard: false,
          price: 235,
        },
        {
          img: "https://api.time.com/wp-content/uploads/2019/11/best-inventions-2019-086-smarthalo2.jpg?quality=85&w=600&h=600&crop=1",
          title: "SmartHalo launches 2nd-generation",
          info: "smart bicycle accessory on Kickstarter",
          incard: false,
          price: 875,
        },
    ],
  },
  card: [],
};

const shopReducer = (state = initialState, action) => {
  console.log("keldi", action);
  switch (action.type) {
    case t.SELECT_CATEGORY:
      state.categoriy.map((e) =>
        e.name === action.payload.name ? (e.select = true) : (e.select = false)
      );
      console.log(state);
      return { ...state };
    case t.SELECT_SORT:
      state.sort.map((e) =>
        e.name === action.payload.name ? (e.select = true) : (e.select = false)
      );
      console.log(state);
      return { ...state };
    case t.ADD_PRODUCT:
      return { ...state, card: [...state.card, action.payload] };
    case t.CHANGE_PRODUCT_NUM:
      state.card.map((item) => {
        if (item.img === action.payload.img && item.info === action.payload.info && item.title === action.payload.title && item.price === action.payload.price) {
          item.num = action.payload.num;
        }
      });
      return { ...state, card: [...state.card] };
    default:
      return state;
  }
};

export default shopReducer;
