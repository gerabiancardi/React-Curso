const productos = [
  {
    id: '01',
    name: 'random1',
    category: 'focos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 75,
    img: 'https://picsum.photos/200',
    stock: 5,
  },
  {
    id: '02',
    name: 'random2',
    category: 'focos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 70,
    img: 'https://picsum.photos/201',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 15,
  },
  {
    id: '03',
    name: 'random3',
    category: 'focos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 100,
    img: 'https://picsum.photos/202',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 7,
  },
  {
    id: '04',
    name: 'random4',
    category: 'smart',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 75,
    img: 'https://picsum.photos/203',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 3,
  },
  {
    id: '05',
    name: 'random5',
    category: 'smart',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 90,
    img: 'https://picsum.photos/204',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 10,
  },
  {
    id: '06',
    name: 'random6',
    category: 'artefactos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 50,
    img: 'https://picsum.photos/205',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 4,
  },
  {
    id: '07',
    name: 'random6',
    category: 'artefactos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 50,
    img: 'https://picsum.photos/205',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 4,
  },
  {
    id: '08',
    name: 'random8',
    category: 'artefactos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
    price: 50,
    img: 'https://i.postimg.cc/qvwMmrH0/6mhmii.jpg',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 4,
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
