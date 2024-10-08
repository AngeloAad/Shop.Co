import { versace, zara, gucci, prada, calvinKlein, image1, img2test,
    image3, image4, image5, image6, image7, img8test, tshirt1, tshirt2, tshirt3, tshirt4,
    tshirt5, tshirt6, tshirt7
 } from "../assets/images";
import { checkMark, options, star3, star3p5, star4, star4p5, star5 } from "../assets/icons";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const navLinks = [
    { href: "/#onSale", label: "On Sale" },
    { href: "/#newArrivals", label: "New Arrivals" },
    { href: "/#brands", label: "Brands" },
];

export const stats = [
    {
      id: "stats-1",
      title: "International Brands",
      value: "200+",
    },
    {
      id: "stats-2",
      title: "High-Quality Products",
      value: "2,000+",
    },
    {
      id: "stats-3",
      title: "Happy Customers",
      value: "30,000+",
    },
  ];

  export const clients = [
    {
      id: "client-1",
      logo: versace,
    },
    {
      id: "client-2",
      logo: zara,
    },
    {
      id: "client-3",
      logo: gucci,
    },
    {
      id: "client-4",
      logo: prada,
    },
    {
      id: "client-5",
      logo: calvinKlein,
    },
  ];

  export const products = [
    {
        key:"img-1",
        imgURL: image1,
        name: "T-shirt With Tape Details",
        rating: star4p5,
        ratingNumber: "4.5/",
        price: "$120",
    },
    {
        key:"img-2",
        imgURL: img2test,
        name: "Skinny Fit Jeans",
        rating: star3p5,
        ratingNumber: "3.5/",
        price: "$240",
        originalPrice: "$260",
        discount: "-20%",
    },
    {
        key:"img-3",
        imgURL: image3,
        name: "Checkered Shirt",
        rating: star4p5,
        ratingNumber: "4.5/",
        price: "$180",
    },
    {
        key:"img-4",
        imgURL: image4,
        name: "Sleeve Stripped T-shirt",
        rating: star4p5,
        ratingNumber: "4.5/",
        price: "$130",
        originalPrice: "$160",
        discount: "-30%",
    },
    {
        key:"img-5",
        imgURL: image5,
        name: "Vertical Stripped Shirt",
        rating: star5,
        ratingNumber: "5.0/",
        price: "$212",
        originalPrice: "$232",
        discount: "-20%",
    },
    {
        key:"img-6",
        imgURL: image6,
        name: "Courage Graphic T-shirt",
        rating: star4,
        ratingNumber: "4.0/",
        price: "$145",
    },
    {
        key:"img-7",
        imgURL: image7,
        name: "Loose Fit Bermuda Shorts",
        rating: star3,
        ratingNumber: "3.0/",
        price: "$80",
    },
    {
        key:"img-8",
        imgURL: img8test,
        name: "Faded Skinny Jeans",
        rating: star4p5,
        ratingNumber: "4.5/",
        price: "$210",
    },
];

export const clothes = [
  {
    key:"img-1",
    imgURL: image1,
    name: "T-shirt With Tape Details",
    rating: star4p5,
    ratingNumber: "4.5/",
    price: "$120",
    description: "This T-shirt with tape details is perfect for adding a stylish touch to your casual wardrobe. Made from a soft and breathable fabric, it ensures all-day comfort and a sleek look.",
},
{
    key:"img-2",
    imgURL: img2test,
    name: "Skinny Fit Jeans",
    rating: star3p5,
    ratingNumber: "3.5/",
    price: "$240",
    originalPrice: "$260",
    discount: "-20%",
    description: "These skinny fit jeans offer a modern, streamlined look that complements any outfit. Crafted from high-quality denim, they provide a comfortable fit and excellent durability for everyday wear.",
},
{
    key:"img-3",
    imgURL: image3,
    name: "Checkered Shirt",
    rating: star4p5,
    ratingNumber: "4.5/",
    price: "$180",
    description: "This checkered shirt is a versatile addition to any wardrobe. Made from a lightweight and breathable fabric, it offers both style and comfort, making it ideal for both casual and semi-formal occasions.",
},
{
    key:"img-4",
    imgURL: image4,
    name: "Sleeve Stripped T-shirt",
    rating: star4p5,
    ratingNumber: "4.5/",
    price: "$130",
    originalPrice: "$160",
    discount: "-30%",
    description: "The sleeve striped T-shirt is perfect for a trendy, laid-back look. Made from a soft and breathable material, it combines style and comfort effortlessly, making it a great choice for any casual outing.",
},
{
    key:"img-5",
    imgURL: image5,
    name: "Vertical Stripped Shirt",
    rating: star5,
    ratingNumber: "5.0/",
    price: "$212",
    originalPrice: "$232",
    discount: "-20%",
    description: "TThis vertical striped shirt brings a touch of sophistication to your wardrobe. Made from premium fabric, it provides a comfortable fit and a polished look, suitable for both casual and formal settings.",
},
{
    key:"img-6",
    imgURL: image6,
    name: "Courage Graphic T-shirt",
    rating: star4,
    ratingNumber: "4.0/",
    price: "$145",
    description: "The Courage graphic T-shirt is designed to make a statement. Crafted from soft and breathable fabric, it offers superior comfort and style, perfect for showcasing your bold personality.",
},
{
    key:"img-7",
    imgURL: image7,
    name: "Loose Fit Bermuda Shorts",
    rating: star3,
    ratingNumber: "3.0/",
    price: "$80",
    description: "These loose fit Bermuda shorts are perfect for a relaxed, comfortable look. Made from lightweight and breathable fabric, they provide all-day comfort, making them ideal for warm weather.",
},
{
    key:"img-8",
    imgURL: img8test,
    name: "Faded Skinny Jeans",
    rating: star4p5,
    ratingNumber: "4.5/",
    price: "$210",
    description: "These faded skinny jeans offer a trendy, worn-in look that adds character to any outfit. Crafted from high-quality denim, they provide a comfortable fit and excellent durability, perfect for everyday wear.",
},
];

export const tshirts = [
  {
    key:"img-1-",
    imgURL: tshirt4,
    name: "Polo with Contrast Trims",
    rating: star4,
    ratingNumber: "4/",
    price: "$212",
    originalPrice: "$242",
    discount: "-20%",
    description: "This polo with contrast trims is perfect for adding a touch of sophistication to your casual wardrobe. Crafted from high-quality fabric, it offers a comfortable fit and a polished look for any occasion.",
},
{
    key:"img-2-",
    imgURL: tshirt5,
    name: "Gradient Graphic T-shirt",
    rating: star3p5,
    ratingNumber: "3.5/",
    price: "$145",
    description: "The gradient graphic T-shirt is designed to stand out with its unique color fade effect. Made from soft and breathable fabric, it provides superior comfort and style, perfect for a modern, trendy look.",
},
{
    key:"img-3-",
    imgURL: tshirt6,
    name: "Polo with Tipping Details",
    rating: star4p5,
    ratingNumber: "4.5/",
    price: "$180",
    description: "This polo with tipping details combines classic style with a modern twist. Made from premium materials, it ensures a comfortable fit and a refined appearance, making it suitable for both casual and smart-casual occasions.",
},
{
    key:"img-4-",
    imgURL: tshirt7,
    name: "Black Striped T-shirt",
    rating: star5,
    ratingNumber: "5/",
    price: "$120",
    originalPrice: "$150",
    discount: "-30%",
    description: "The black striped T-shirt is a versatile piece that adds a stylish edge to any outfit. Crafted from soft and breathable fabric, it offers a comfortable fit and a sleek look, perfect for everyday wear.",
},
];

export const testimonials = [
  {
    key: "card-1",
    imgURL: star5,
    options: options,
    nameOf: "Sarah M.",
    check: checkMark,
    message: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "Posted on August 11, 2023",
  },
  {
    key: "card-2",
    imgURL: star5,
    options: options,
    nameOf: "Alex K.",
    check: checkMark,
    message: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    date: "Posted on August 12, 2023",
  },
  {
    key: "card-3",
    imgURL: star5,
    options: options,
    nameOf: "James L.",
    check: checkMark,
    message: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    date: "Posted on August 13, 2023",
  },
  {
    key: "card-4",
    imgURL: star4p5,
    options: options,
    nameOf: "Samantha D.",
    check: checkMark,
    message: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "Posted on August 14, 2023",
  },
  {
    key: "card-5",
    imgURL: star4,
    options: options,
    nameOf: "Alex M.",
    check: checkMark,
    message: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "Posted on August 15, 2023",
  },
  {
    key: "card-6",
    imgURL: star3p5,
    options: options,
    nameOf: "Ethans R.",
    check: checkMark,
    message: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "Posted on August 16, 2023",
  },
  {
    key: "card-7",
    imgURL: star4,
    options: options,
    nameOf: "Olivia P.",
    check: checkMark,
    message: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "Posted on August 17, 2023",
  },
  {
    key: "card-8",
    imgURL: star4,
    options: options,
    nameOf: "Liam K.",
    check: checkMark,
    message: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "Posted on August 18, 2023",
  },
  {
    key: "card-9",
    imgURL: star4p5,
    options: options,
    nameOf: "Ava H.",
    check: checkMark,
    message: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "Posted on August 19, 2023",
  },
];

export const footerLinks = [
  {
      title: "COMPANY",
      links: [
          { name: "About", link: "/" },
          { name: "Features", link: "/" },
          { name: "Works", link: "/" },
          { name: "Career", link: "/" },
      ],
  },
  {
      title: "HELP",
      links: [
          { name: "Customer Support", link: "/" },
          { name: "Delivery Details", link: "/" },
          { name: "Terms & Conditions", link: "/" },
          { name: "Privacy policy", link: "/" },
      ],
  },
  {
      title: "FAQ",
      links: [
          { name: "Account", link: "/" },
          { name: "Manage Deliveries", link: "/" },
          { name: "Orders", link: "/" },
          { name: "Payments", link: "/" },
      ],
  },
  {
    title: "RESOURCES",
    links: [
        { name: "Free eBooks", link: "/" },
        { name: "Development Tutrial", link: "/" },
        { name: "How to - Blog", link: "/" },
        { name: "Youtube Playlist", link: "/" },
    ],
},
];
