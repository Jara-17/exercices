import colors from 'colors';

// const randomPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let number = Math.floor(Math.random() * 10);

//     if (number > 5) {
//       resolve(
//         colors.bold.green(`[OK] The number is greater than 5: ${number}`)
//       );
//       return;
//     }

//     reject(colors.bold.red(`[ERROR] The number is lower than 5: ${number}`));
//   }, 1000);
// });

// const handlerResolvePromise = (message) => {
//   console.log(`The request is resolved: ${message}`);
// };

// const handlerRejectPromise = (message) => {
//   console.log(`The request is rejected: ${message}`);
// };

// // randomPromise.then(handlerResolvePromise, handlerRejectPromise);
// randomPromise.then(handlerResolvePromise).catch(handlerRejectPromise);

async function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(colors.bold.magenta('Timeout async 1'));
      resolve();
    }, 3000);
  });
}

const asyncFunction2 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(colors.bold.blue('Timeout async 2'));
      resolve();
    }, 1000);
  });
};

const myFunction = async () => {
  await asyncFunction1();
  asyncFunction2();
};

myFunction();
