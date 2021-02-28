const data = [
  {
    id: 1,
    avatar:
      "https://media.gettyimages.com/photos/mercedes-sprinter-bus-picture-id1145065289?k=6&m=1145065289&s=612x612&w=0&h=XEDxYG2iHR1RPEKkIEqhkngfY_5fflAfedQM88d_yIw=",
    make: "Acura",
    model: "RL",
    noOfTrips: 1,
    trips: [
      {
        from: "Kobiernice",
        to: "Ladoang",
        noOfPerson: 5,
      },
    ],
    capacity: 10,
    type: "Van",
    regNo: "578-74-0276",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwY2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.jpg",
    make: "TATA",
    model: "Z4",
    noOfTrips: 3,
    trips: [
      {
        from: "Hadapu Zhen",
        to: "Krajan",
        noOfPerson: 3,
      },
      {
        from: "Raejeru",
        to: "Makungu",
        noOfPerson: 2,
      },
      {
        from: "Beauharnois",
        to: "Burunday",
        noOfPerson: 4,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "340-17-3347",
  },
  {
    id: 3,
    avatar:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260.jpg",
    make: "BMW",
    model: "Intrepid",
    noOfTrips: 2,
    trips: [
      {
        from: "Chengbei",
        to: "Xiayang",
        noOfPerson: 3,
      },
      {
        from: "Shuanggang",
        to: "Taubaté",
        noOfPerson: 1,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "331-63-2410",
  },
  {
    id: 4,
    avatar:
      "https://media.gettyimages.com/photos/mercedes-future-bus-citypilot-on-the-exhibition-picture-id613030826?k=6&m=613030826&s=612x612&w=0&h=bRn6ifRQjCdOEwAvb1dcj1Xx2Ay1Qkb_QgtgYHpZfsg=",
    make: "Pontiac",
    model: "G5",
    noOfTrips: 5,
    trips: [
      {
        from: "Kildare",
        to: "Xiahan",
        noOfPerson: 19,
      },
      {
        from: "Phetchaburi",
        to: "Carcavelos",
        noOfPerson: 20,
      },
      {
        from: "Baton Rouge",
        to: "Uppsala",
        noOfPerson: 26,
      },
      {
        from: "San José",
        to: "Noen Maprang",
        noOfPerson: 4,
      },
      {
        from: "Sydney",
        to: "Bandar-e Torkaman",
        noOfPerson: 30,
      },
    ],
    capacity: 40,
    type: "Bus",
    regNo: "292-35-8892",
  },
  {
    id: 5,
    make: "Ferrari",
    avatar:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260.jpg",
    model: "Clubman",
    noOfTrips: 2,
    trips: [
      {
        from: "Jingzhuang",
        to: "Thị Trấn Cao Phong",
        noOfPerson: 3,
      },
      {
        from: "Curuzú Cuatiá",
        to: "Skópelos",
        noOfPerson: 2,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "856-18-3957",
  },
  {
    id: 6,
    avatar:
      "https://media.gettyimages.com/photos/mercedesbenz-sprinter-tourer-on-the-street-picture-id1063479272?k=6&m=1063479272&s=612x612&w=0&h=9IlTqIZfieqq5kO_jEYDpUVw2S2X2UitcWVqSl6EYRg=",
    make: "Mitsubishi",
    model: "Mighty Max",
    noOfTrips: 3,
    trips: [
      {
        from: "Amparafaravola",
        to: "Thị Trấn Thanh Lưu",
        noOfPerson: 7,
      },
      {
        from: "Brumado",
        to: "Malasila",
        noOfPerson: 3,
      },
      {
        from: "Daohe",
        to: "Gan Yavne",
        noOfPerson: 6,
      },
    ],
    capacity: 10,
    type: "Van",
    regNo: "406-37-8779",
  },
  {
    id: 7,
    avatar:
      "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260.jpg",
    make: "Mereces",
    model: "Express 2500",
    noOfTrips: 4,
    trips: [
      {
        from: "Itauguá",
        to: "Wonocoyo Utara",
        noOfPerson: 1,
      },
      {
        from: "Bellavista",
        to: "Arroio Grande",
        noOfPerson: 3,
      },
      {
        from: "Isakly",
        to: "Santa Teresa First",
        noOfPerson: 1,
      },
      {
        from: "Mogok",
        to: "Cairima",
        noOfPerson: 4,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "428-55-9656",
  },
  {
    id: 8,
    avatar:
      "https://images.unsplash.com/photo-1610942968373-51b6b89b954f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60.jpg",
    make: "Saab",
    model: "9-3",
    noOfTrips: 4,
    trips: [
      {
        from: "Kobiernice",
        to: "Ladoang",
        noOfPerson: 4,
      },

      {
        from: "Jingzhuang",
        to: "Thị Trấn Cao Phong",
        noOfPerson: 3,
      },
      {
        from: "Isakly",
        to: "Santa Teresa First",
        noOfPerson: 1,
      },
      {
        from: "Mogok",
        to: "Cairima",
        noOfPerson: 4,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "737-43-4911",
  },
  {
    id: 9,
    avatar:
      "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260.jpg",
    make: "Audi",
    model: "Laser",
    noOfTrips: 3,
    trips: [
      {
        from: "Libas",
        to: "Hitachi-Naka",
        noOfPerson: 3,
      },
      {
        from: "Korsun’-Shevchenkivs’kyy",
        to: "Krasnoye",
        noOfPerson: 4,
      },
      {
        from: "Trubchevsk",
        to: "Terpsithéa",
        noOfPerson: 2,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "311-91-0176",
  },
  {
    id: 10,
    avatar:
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260.jpg",
    make: "Toyota",
    model: "SJ",
    noOfTrips: 2,
    trips: [
      {
        from: "Coruña, A",
        to: "Ijuí",
        noOfPerson: 2,
      },
      {
        from: "Sabon Gari-Nangere",
        to: "Shah Alam",
        noOfPerson: 4,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "416-06-8750",
  },
  {
    id: 11,
    avatar:
      "https://5.imimg.com/data5/FF/NE/GLADMIN-68147198/jaguar-xjl-3-point-0-diesal-used-car-500x500.jpg",
    make: "Jaguar",
    model: "by Tata",
    noOfTrips: 1,
    trips: [
      {
        from: "Picoto",
        to: "Nijmegen",
        noOfPerson: 2,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "147-11-2050",
  },
  {
    id: 12,
    avatar:
      "https://media.gettyimages.com/photos/public-service-vehicle-of-eswe-wiesbaden-picture-id458416243?k=6&m=458416243&s=612x612&w=0&h=mwSO66Ka-aKVMZqWiKqjynAv30ex9-u1uJs9-8i34lM=",
    make: "Nissan",
    model: "Titan",
    noOfTrips: 5,
    trips: [
      {
        from: "Clarin",
        to: "Knin",
        noOfPerson: 18,
      },
      {
        from: "Zhenzhushan",
        to: "Sholokhove",
        noOfPerson: 40,
      },
      {
        from: "Smilavichy",
        to: "Tala",
        noOfPerson: 22,
      },
      {
        from: "Zhudian",
        to: "Lille",
        noOfPerson: 31,
      },
      {
        from: "Sakerta Timur",
        to: "Dajie",
        noOfPerson: 38,
      },
    ],
    capacity: 40,
    type: "Bus",
    regNo: "820-74-9123",
  },
  {
    id: 13,
    avatar:
      "https://images.unsplash.com/photo-1549632891-a0bea6d0355b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60.jpg",
    make: "Range-Rover",
    model: "F-Series",
    noOfTrips: 2,
    trips: [
      {
        from: "Pyin Oo Lwin",
        to: "Yuanmen",
        noOfPerson: 3,
      },
      {
        from: "Czerniewice",
        to: "Sangmu",
        noOfPerson: 4,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "101-77-3671",
  },
  {
    id: 14,
    avatar:
      "https://media.gettyimages.com/photos/sunsundegui-sc7-luxury-coach-on-the-parking-picture-id943521876?k=6&m=943521876&s=612x612&w=0&h=eBYMNbc6lKemVDlzWQyaiEDY4tGQyI0_jSJEVD82gOM=",
    make: "Chrysler",
    model: "Sebring",
    noOfTrips: 5,
    trips: [
      {
        from: "Sortavala",
        to: "Soeng Sang",
        noOfPerson: 25,
      },
      {
        from: "Amangarh",
        to: "Khrystynivka",
        noOfPerson: 34,
      },
      {
        from: "Tangnan",
        to: "Kedungbulu",
        noOfPerson: 33,
      },
      {
        from: "Shchëkino",
        to: "Plataran",
        noOfPerson: 28,
      },
      {
        from: "Karangsumber",
        to: "Guadalupe",
        noOfPerson: 39,
      },
    ],
    capacity: 40,
    type: "Bus",
    regNo: "359-65-6437",
  },
  {
    id: 15,
    avatar:
      "https://images.pexels.com/photos/5288699/pexels-photo-5288699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg",
    make: "Lambo",
    model: "Skyhawk",
    noOfTrips: 2,
    trips: [
      {
        from: "Thành Phố Lạng Sơn",
        to: "Hakha",
        noOfPerson: 4,
      },
      {
        from: "Trubchevsk",
        to: "Terpsithéa",
        noOfPerson: 2,
      },
    ],
    capacity: 4,
    type: "Car",
    regNo: "686-52-2024",
  },
  {
    id: 16,
    avatar:
      "https://media.gettyimages.com/photos/mercedesbenz-l-319-picture-id476483840?k=6&m=476483840&s=612x612&w=0&h=5SxaZgEvFXA1sjhG7kYmGcCRLEX1x4Qj-Q-ZEsCtw9s=",
    make: "Nissan",
    model: "Quest",
    noOfTrips: 5,
    trips: [
      {
        from: "Sanjiazi",
        to: "Milwaukee",
        noOfPerson: 6,
      },
      {
        from: "Obigarm",
        to: "Wilkowice",
        noOfPerson: 5,
      },
      {
        from: "Hushan",
        to: "La Plata",
        noOfPerson: 7,
      },
      {
        from: "Zungeru",
        to: "Banggel",
        noOfPerson: 3,
      },
      {
        from: "Ljungby",
        to: "Maloyaroslavets",
        noOfPerson: 7,
      },
    ],
    capacity: 10,
    type: "Van",
    regNo: "756-88-5556",
  },
  // {
  //   id: 17,
  //   make: "Isuzu",
  //   model: "Rodeo Sport",
  //   noOfTrips: 5,
  //   trips: [
  //     {
  //       from: "Remiremont",
  //       to: "Moose Jaw",
  //       noOfPerson: 4
  //     },
  //     {
  //       from: "Makale",
  //       to: "Pensacola",
  //       noOfPerson: 2
  //     },
  //     {
  //       from: "Chishtiān Mandi",
  //       to: "Kitchener",
  //       noOfPerson: 1
  //     },
  //     {
  //       from: "Roliça",
  //       to: "Arrap’i",
  //       noOfPerson: 3
  //     },
  //     {
  //       from: "Septfontaines",
  //       to: "Azurva",
  //       noOfPerson: 1
  //     }
  //   ],
  //   capacity: 4,
  //   type: "Car",
  //   regNo: "295-39-9186"
  // },
  // {
  //   id: 18,
  //   make: "BMW",
  //   model: "M5",
  //   noOfTrips: 5,
  //   trips: [
  //     {
  //       from: "Dobra",
  //       to: "Hakodate",
  //       noOfPerson: 1
  //     },
  //     {
  //       from: "Pagatan",
  //       to: "Daloa",
  //       noOfPerson: 4
  //     },
  //     {
  //       from: "Profítis Ilías",
  //       to: "Madison",
  //       noOfPerson: 4
  //     },
  //     {
  //       from: "Santiago",
  //       to: "Puyung",
  //       noOfPerson: 2
  //     },
  //     {
  //       from: "Tamansari",
  //       to: "Umuquena",
  //       noOfPerson: 3
  //     }
  //   ],
  //   capacity: 4,
  //   type: "Car",
  //   regNo: "477-33-3907"
  // },
  // {
  //   id: 19,
  //   make: "Volvo",
  //   model: "XC70",
  //   noOfTrips: 3,
  //   trips: [
  //     {
  //       from: "Strömsund",
  //       to: "Panevėžys",
  //       noOfPerson: 4
  //     },
  //     {
  //       from: "Felgueiras",
  //       to: "Rudy",
  //       noOfPerson: 5
  //     },
  //     {
  //       from: "Kimry",
  //       to: "Gorbatov",
  //       noOfPerson: 6
  //     }
  //   ],
  //   capacity: 7,
  //   type: "Van",
  //   regNo: "391-95-1095"
  // },
  // {
  //   id: 20,
  //   make: "Mercedes-Benz",
  //   model: "S-Class",
  //   noOfTrips: 3,
  //   trips: [
  //     {
  //       from: "Zhangping",
  //       to: "Tāngāil",
  //       noOfPerson: 1
  //     },
  //     {
  //       from: "Longkali",
  //       to: "Ballymahon",
  //       noOfPerson: 5
  //     },
  //     {
  //       from: "Obigarm",
  //       to: "Wilkowice",
  //       noOfPerson: 9
  //     }
  //   ],
  //   capacity: 10,
  //   type: "Bus",
  //   regNo: "305-98-6806"
  // }
];

module.exports = data;
