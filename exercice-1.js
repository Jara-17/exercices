import colors from 'colors';

const mostrarTema = (tema) => {
  setTimeout(() => console.log(colors.bold.blue(tema)), 3000);
};

const suma = (a, b) =>
  setTimeout(
    () => console.log(colors.bold.magenta(`${a} + ${b} = ${a + b}`)),
    5000
  );

const ciclo = async (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      setTimeout(() => {
        console.log(colors.bold.blue(`TEMA - ITERACIÓN ${n}`));
        mostrarTema('Tema');
      }, 2000);

      setTimeout(() => {
        console.log(colors.bold.magenta(`SUMA - ITERACIÓN ${n}`));
        suma(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
      }, 3000);

      resolve();
    }, 1000);
  });
};

const ejecucionCiclo = async (n) => {
  while (true) {
    await ciclo(n);
    n++;
  }
};

console.log('Antes');
mostrarTema('Hola Mundo');
console.log('Despues');

let iterator = 0;
ejecucionCiclo(iterator);
