const path = require("node:path");
const fs = require("node:fs");

const filePath = path.join(process.cwd(), "texto.txt");
const fileOutPath = path.join(process.cwd(), "texto-com-linhas.txt");
console.log(filePath);


fs.readFile(filePath, {}, (error, dados) => {
  if (error) {
    console.error(`Erro na leitura do arquivo no caminho ${filePath}`);
    return;
  }

  const texto = dados.toString();
  const linhas = texto.split("\n");

  const linhasAjustadas = linhas.map(
    (linha, index) => `${index + 1} - ${linha}`
  );

  fs.writeFile(fileOutPath, linhasAjustadas.join("\n"), {}, (erro) => {
    if (erro) {
      console.log(`Erro na escrita do arquivo no caminho ${fileOutPath}`);
    } else {
      console.log(`Arquivo escrito com sucesso em ${fileOutPath}`);
    }
  });
});
