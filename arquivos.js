const path = require("node:path");
const fs = require("node:fs");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.NODE_ENV);

const filePath = path.join(process.cwd(), "texto.txt");
const fileOutPath = path.join(process.cwd(), "texto-com-linhas.txt");
console.log(filePath);

console.time("leitura do arquivo"); // Inicie o temporizador para leitura do arquivo
fs.readFile(filePath, {}, (error, dados) => {
  if (error) {
    console.error(`Erro na leitura do arquivo no caminho ${filePath}`);
    return;
  }

  console.timeEnd("leitura do arquivo"); // Encerre o temporizador para leitura do arquivo

  const texto = dados.toString();
  const linhas = texto.split("\n");

  const linhasAjustadas = linhas.map(
    (linha, index) => `${index + 1} - ${linha}`
  );

  console.time("escrita do arquivo"); // Inicie o temporizador para a escrita do arquivo
  fs.writeFile(fileOutPath, linhasAjustadas.join("\n"), {}, (erro) => {
    if (erro) {
      console.log(`Erro na escrita do arquivo no caminho ${fileOutPath}`);
    } else {
      console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`);
      console.timeEnd("escrita do arquivo"); // Encerre o temporizador para a escrita do arquivo
    }
  });
});
