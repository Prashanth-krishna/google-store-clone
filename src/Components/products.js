import Card from "./card";

function Products({ selected, products, TextToSearch }) {
  if (selected.includes("home") || selected.includes("phone")) {
    return products.map((item) => {
      if (selected.includes(item.type)) {
        return (
          <Card
            id={item.id}
            src={item.src}
            name={item.name}
            key={item.id}
            type={item.type}
          />
        );
      }
    });
  } else {
    return products.map((item) => {
      return (
        <Card
          src={item.src}
          id={item.id}
          name={item.name}
          key={item.id}
          type={item.type}
        />
      );
    });
  }
}

export default Products;
