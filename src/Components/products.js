import Card from "./card";

const All_Products = [
  {
    id: 1,
    name: "C to C Charging Cable",
    price: 1,
    src: "ctoc.png",
    type: "phone",
  },
  {
    id: 2,
    name: "C to 3.5mm Dongle",
    price: 1,
    src: "cto3.5mm.png",
    type: "phone",
  },
  {
    id: 3,
    name: "C to A Adapter ",
    price: 1,
    src: "ctoaadaptor.png",
    type: "phone",
  },
  {
    id: 4,
    name: "C to A Charging Cable",
    price: 1,
    src: "ctoacable.png",
    type: "phone",
  },
  {
    id: 5,
    name: "Nest Audio",
    price: 1,
    src: "nestaudio.png",
    type: "home",
  },
  {
    id: 6,
    name: "Nest Aware",
    price: 1,
    src: "nestaware.png",
    type: "home",
  },
  {
    id: 7,
    name: "Nest Cam",
    price: 1,
    src: "nestcam.png",
    type: "home",
  },
  {
    id: 8,
    name: "Nest Cam Charger Cable",
    price: 1,
    src: "nestcamchargecable.png",
    type: "home",
  },
  {
    id: 9,
    name: "Nest Mini",
    price: 1,
    src: "nestmini.png",
    type: "home",
  },
  {
    id: 10,
    name: "Type C Earbuds",
    price: 1,
    src: "typecearbuds.png",
    type: "phone",
  },
];

function Products({ selected }) {
  if (selected.includes("home") || selected.includes("phone")) {
    return All_Products.map((item) => {
      if (selected.includes(item.type)) {
        return (
          <Card
            src={item.src}
            name={item.name}
            key={item.id}
            type={item.type}
          />
        );
      }
    });
  } else {
    return All_Products.map((item) => {
      return (
        <Card src={item.src} name={item.name} key={item.id} type={item.type} />
      );
    });
  }
}

export default Products;
