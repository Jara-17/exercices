import { products } from "./products.js";

const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

const counter = (num, callback) => {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i);

    if (i === num) {
      clearInterval(interval); // Detiene el intervalo cuando llega al número límite
      callback(); // Llama a la función `reader` después de contar
    }

    i++;
  }, 1000); // Cada iteración tarda 1 segundo
};

counter(3, () =>
  getProducts().then((products) => {
    products.forEach((product) => console.log(product));
  })
);
