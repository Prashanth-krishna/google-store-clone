import Card from "./card";

const All_Products = [
  {
    id: 1,
    name: "C to C Charging Cable",
    price: 1,
    src: "ctoc.png",
  },
  {
    id: 2,
    name: "C to 3.5mm Dongle",
    price: 1,
    src: "cto3.5mm.png",
  },
  {
    id: 3,
    name: "C to A Adapter ",
    price: 1,
    src: "ctoaadaptor.png",
  },
  {
    id: 4,
    name: "C to A Charging Cable",
    price: 1,
    src: "ctoacable.png",
  },
  {
    id: 5,
    name: "Nest Audio",
    price: 1,
    src: "nestaudio.png",
  },
  {
    id: 6,
    name: "Nest Aware",
    price: 1,
    src: "nestaware.png",
  },
  {
    id: 7,
    name: "Nest Cam",
    price: 1,
    src: "nestcam.png",
  },
  {
    id: 8,
    name: "Nest Cam Charger Cable",
    price: 1,
    src: "nestcamchargecable.png",
  },
  {
    id: 9,
    name: "Nest Mini",
    price: 1,
    src: "nestmini.png",
  },
  {
    id: 10,
    name: "Type C Earbuds",
    price: 1,
    src: "typecearbuds.png",
  },
];
// const images = All_Products.map((item) => {
//   return (
//     <>
//       <img
//         key={item.name}
//         src={require(`./../assets/products/${item.src}`)}
//         alt={item.name}
//       />
//       <span>{item.name}</span>
//     </>
//   );
// });
function Products() {
  return All_Products.map((item) => {
    return <Card src={item.src} name={item.name} key={item.id} />;
  });
}
export default Products;
