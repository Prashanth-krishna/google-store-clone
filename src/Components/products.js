import Card from "./card";

function Products({ selected, products, TextToSearch }) {
  if (TextToSearch !== "") {
    return products.map((item) => {
      if (item.name.toLowerCase().includes(TextToSearch.toLowerCase())) {
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
}

export default Products;
