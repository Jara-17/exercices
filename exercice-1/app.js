import { readFile } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Obtén la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);

const file = `${dirname(__filename)}/index.html`;

const reader = (file) => {
  readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:\n", err);
      return;
    }
    console.log("Contenido del archivo:\n", data);
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

// Inicia el contador y luego llama a `reader` cuando termine
counter(10, () => reader(file));
