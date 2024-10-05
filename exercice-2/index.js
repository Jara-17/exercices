/**
 *
 *Ejercicio Promesas
 *Tenemos una tienda de pizzas. El sistema de pedidos realiza acciones
 *asíncronas, puede tardar X segundos. Y digamos que como el 20% de
 *las veces puede fallar por problemas de red o de saturación.
 *Simular una función con el 80% de éxito.
 *Crear una Promesa simulando la asincronía con setTimeout de
 *3000ms.
 *En el condicional del setTimeout usa el valor devuelto por la función
 *de simulación de éxito.
 *Define las funciones para manejar si fue bien o mal.
 *Indica por consola si el proceso fue exitoso o falló, asociando las
 *funciones anteriores a la Promesa con el método .then()
 */

let percentage = Math.floor(Math.random() * 80);
console.log(percentage);

const isFailed = () => {
  return percentage < 20;
};

const orderSystem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFailed()) {
        reject("Error en el pedido");
        return;
      }

      resolve("Pedido realizado con éxito");
    }, 3000);
  });
};

orderSystem()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
