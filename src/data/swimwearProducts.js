const swimwearProducts = [
  {
    id: 1,
    name: "머메이드 퀸 더블 크로스백 페일라일락",
    brand: "키치피치",
    category: "여성",
    subCategory: "원피스",
    price: 73000,
    saleRate: 20,
    sizes: [
      { label: "S", stock: 5 },
      { label: "M", stock: 0 },
      { label: "L", stock: 3 }
    ],
    //대표 썸네일
    image: "https://www.swim.co.kr/web/product/big/202506/b6cc451efa4f5e3bb1d0f3cca415aa43.jpg",
    thumbnails: [
      "https://www.swim.co.kr/web/product/extra/big/202505/0ccd5ffcef76572dafdbd2e9c8403b1a.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202505/299586f3e4d5ffbd0cefff203f8983f4.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202505/049e7943fb14ee9b50a5c219d60a4fdf.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202505/4f74f165f4a68ccd10c930cf882e1f8d.jpg"
    ],
    detailImages: [
      "https://www.swim.co.kr/web/product/extra/big/202505/153f11606526aed2c744fa200d91e9d2.jpg",
    ],
  },
  {
    id: 2,
    name: "노티컬 비키니 세트 라이트블루",
    brand: "배럴",
    category: "여성",
    subCategory: "비키니",
    price: 99000,
    saleRate: 0,
    sizes: [
      { label: "085", stock: 4 },
      { label: "090", stock: 3 },
      { label: "095", stock: 2 }
    ],
    image: "https://cafe24img.poxo.com/ganaswim20/web/product/big/202504/1c2b0e01004444b2a04d709c75b7bdff.jpg",
    thumbnails: [
      "https://www.swim.co.kr/web/product/extra/big/202504/a804a76e5c1661b9977afa1beb1724c6.jpg"
    ],
    detailImages: [
      "https://www.swim.co.kr/web/product/extra/big/202504/f195557989eab787166edd107f5c4598.jpg",
    ],
  },
  {
    id: 3,
    name: "쥬시 프룻 집업 래쉬가드 오프화이트",
    brand: "아레나",
    category: "여성",
    subCategory: "래쉬가드",
    price: 79000,
    saleRate: 39,
    sizes: [
      { label: "085", stock: 3 },
      { label: "090", stock: 2 },
      { label: "095", stock: 1 }
    ],
    image: "https://cafe24img.poxo.com/ganaswim20/web/product/big/202505/4ddf8efccf2d7496087d68bf56a5b384.jpg",
    thumbnails: [
      "https://www.swim.co.kr/web/product/extra/big/202505/02c3a3a516c4bacc4192e3e74e4945e1.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202505/c7f7f00a0f2f5d2a51be8d9128e6c2c7.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202505/0d641df616473640c93bef98e3c62d61.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202505/48e991213ff92142fec2e2483c6a8fbb.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202505/8a47d09c0fe2f420ee10aa64a359a2c7.jpg",
    ],
    detailImages: [
      "https://www.swim.co.kr/web/product/extra/big/202505/5e4218c4ac9ebaebb4b3c159a71261bd.jpg",
    ],
  },
  {
    id: 4,
    name: "펀 샤인 미드 크로스타이백 라임락",
    brand: "후그",
    category: "여성",
    subCategory: "원피스",
    price: 94000,
    saleRate: 0,
    sizes: [
      { label: "24", stock: 2 },
      { label: "26", stock: 2 },
      { label: "28", stock: 2 },
      { label: "30", stock: 2 },
      { label: "32", stock: 2 },
      { label: "34", stock: 2 }
    ],
    image: "https://cafe24img.poxo.com/ganaswim20/web/product/big/202504/7625a7bd89d030c5c8b29c88142fd1e7.jpg",
    thumbnails: [
      "https://www.swim.co.kr/web/product/extra/big/202504/e2bda7e4aea4c314dfbc7ac7178fcb7c.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202504/798138b59d36f5e6d7ea39488a9db112.jpg",
      "https://www.swim.co.kr/web/product/extra/big/202504/ccecc83fdea5bfb49f525fbc733ba75e.jpg"
    ],
    detailImages: [
      "https://www.swim.co.kr/web/P_upload/swim/hoog/2025/common/FunShine25SS_TOPBANNER.jpg",
    ],
  },
  {
    id: 5,
    name: "아가일 스퀘어 숏사각 탄탄이 모카",
    brand: "움파",
    category: "남성",
    subCategory: "사각 수영복",
    price: 58000,
    saleRate: 0,
    sizes: [
      { label: "S", stock: 3 },
      { label: "M", stock: 3 },
      { label: "L", stock: 3 },
      { label: "XL", stock: 2 }
    ],
    image: "https://www.swim.co.kr/web/product/big/202503/244b94006c40866497e24a2adb6f2db7.png",
    thumbnails: [
      "https://www.swim.co.kr/web/product/extra/big/202503/a0f65a53695914c18b01257d125c8a11.png",
      "https://www.swim.co.kr/web/product/extra/big/202503/ebf6421a7f7cf973fbde027996efda80.png",
      "https://www.swim.co.kr/web/product/extra/big/202503/fa2dac791d24ff9b6510a7a63b853bf0.png",
      "https://www.swim.co.kr/web/product/extra/big/202503/588a79896cbe31c7e0864fb64bb409b4.png"

    ],
    detailImages: [
      "https://cdn.imweb.me/upload/S20220318cb245a497d71f/186454b27fbe4.png",
    ],
  },
  {
    id: 6,
    name: "어비스 엣지 5부 블루",
    brand: "르망고",
    category: "남성",
    subCategory: "5부 수영복",
    price: 59000,
    saleRate: 0,
    sizes: [
      { label: "S", stock: 4 },
      { label: "M", stock: 3 },
      { label: "L", stock: 3 },
      { label: "XL", stock: 2 },
      { label: "2XL", stock: 2 }
    ],
    image: "https://cafe24img.poxo.com/ganaswim20/web/product/big/202412/519285ddd0bae9aa2990ab6fb2b3374e.jpg",
  },
  {
    id: 7,
    name: "키즈 로지 백오픈 엑스백 레드",
    brand: "랠리",
    category: "아동",
    subCategory: "걸즈",
    price: 51000,
    saleRate: 34,
    sizes: [
      { label: "70", stock: 3 },
      { label: "75", stock: 2 },
      { label: "80", stock: 2 },
      { label: "85", stock: 2 },
      { label: "90", stock: 1 }
    ],
    image: "https://cafe24img.poxo.com/ganaswim20/web/product/big/202503/c833ae74812fe1aec7a3d43441e5f3f6.jpg",
  },
  {
    id: 8,
    name: "키즈 에센셜 베이직 버블 5부 네이비스카이",
    brand: "센티",
    category: "아동",
    subCategory: "보이",
    price: 48000,
    saleRate: 30,
    sizes: [
      { label: "7호", stock: 2 },
      { label: "9호", stock: 2 },
      { label: "11호", stock: 2 },
      { label: "13호", stock: 2 },
      { label: "15호", stock: 1 }
    ],
    image: "https://cafe24img.poxo.com/ganaswim20/web/product/big/202505/2af31c8ea2d2dd236fbe4759e7bfd663.jpg",
  },
  {
    id: 9,
    name: "양각 실리콘수모",
    brand: "스웨이브",
    category: "용품",
    subCategory: "수모",
    price: 10000,
    saleRate: 0,
    sizes: [],
    image: "https://cafe24img.poxo.com/ganaswim20/web/product/big/202303/4229702af615067ff12ad65a6ed612d9.jpg",
    thumbnails: [
      "https://cafe24img.poxo.com/ganaswim20/web/product/extra/big/202303/baf10ffc2df83ac963a9ae5508ed3f05.jpg",
      "https://cafe24img.poxo.com/ganaswim20/web/product/extra/big/202303/69773bc7185e9feff202ef049fe39df9.jpg",
      "https://cafe24img.poxo.com/ganaswim20/web/product/extra/big/202303/cf085dc804cb28dbe040ede4e54a7fbb.jpg",
      "https://cafe24img.poxo.com/ganaswim20/web/product/extra/big/202303/062ce1b4a93564f9012ebac4d807d26d.jpg"
    ],
    detailImages: [
      "https://cafe24img.poxo.com/ganaswim20/web/product/extra/big/202303/062ce1b4a93564f9012ebac4d807d26d.jpg",
    ],
    colors: [
      "블랙", "딥그린", "페일라일락", "페일민트", "페일블루", "페일라벤더", "민트"
    ]
  },
  {
    id: 10,
    name: "하이퍼 엘리트 미러 수경 블루 아시안핏",
    brand: "스피도",
    category: "용품",
    subCategory: "수경",
    price: 108000,
    saleRate: 0,
    sizes: [],
    image: "https://www.swim.co.kr/web/product/big/202505/bcf2ef51a9933212b0aca6a86e04ad3d.jpg",
    colors: ["블루", "블랙", "화이트"]
  }
];


export default swimwearProducts;
