const productos = [
  {
    id: "01",
    name: "Foco 9W",
    category: "focos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 75,
    img: "https://http2.mlstatic.com/D_NQ_NP_670127-MLA41982075038_052020-O.webp",
    stock: 5,
  },
  {
    id: "02",
    name: "Foco 10W",
    category: "focos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 70,
    img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/800/550/products/iluminato_etheos_foco-bulbo-a6011-7a506473117d04164316275830305883-640-0.jpg",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 15,
  },
  {
    id: "03",
    name: "Foco decorativo",
    category: "focos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 100,
    img: "https://http2.mlstatic.com/D_NQ_NP_900013-MLA40315974267_012020-O.webp",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 7,
  },
  {
    id: "04",
    name: "Smart Wifi",
    category: "smart",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 75,
    img: "https://droppymart.com/wp-content/uploads/2020/10/foco-smart2.jpg",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 3,
  },
  {
    id: "05",
    name: "Smart 100 lumenes con BT",
    category: "smart",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 90,
    img: "https://venbo.shop/wp-content/uploads/2020/11/foco_ohlux_2011_1.jpg",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 10,
  },
  {
    id: "06",
    name: "Plafon Led ciruclar blanco",
    category: "artefactos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 50,
    img: "https://arcencohogar.vtexassets.com/arquivos/ids/304357-800-800?v=637665770813270000&width=800&height=800&aspect=true",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 4,
  },
  {
    id: "07",
    name: "Plafon cuadrado ciruclar negro",
    category: "artefactos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 50,
    img: "https://http2.mlstatic.com/D_Q_NP_733395-MLA40486425870_012020-B.jpg",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 4,
  },
  {
    id: "08",
    name: "Plafon Led ciruclar negro",
    category: "artefactos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 50,
    img: "https://http2.mlstatic.com/D_Q_NP_655100-MLA42425155075_062020-B.jpg",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 4,
  },
  {
    id: "09",
    name: "Smart comando por voz",
    category: "smart",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: 90,
    img: "https://http2.mlstatic.com/D_NQ_NP_767465-MLA47010524266_082021-O.webp",
    hashtags: ["#compraya", "#ultimoprod", "#random"],
    stock: 10,
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(productos);
      } else {
        reject("Hubo un error intente mas tarde");
      }
    }, 2000);
  });
};
