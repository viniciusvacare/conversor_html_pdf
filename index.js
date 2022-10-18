const Reader = require("./Reader.js");
const Processor = require("./Processor.js");

let leitor = new Reader();

async function main() {
  let dados = await leitor.Read("./dados.csv");
  let dadosProcessados = Processor.Process(dados);
}

main();
// fs.readFile("./usuario.json", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let conteudo = JSON.parse(data);
//     conteudo[1].nome = "Teste";

//     fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err) => {
//       if (err) {
//         console.log("deu erro");
//       }
//     });
//   }
// });

// ler um arquivo
// { encoding: "utf-8" } -> retorna o arquivo em formato  textual
// fs.readFile("./texto.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("ocorreu um erro ao ler o arquivo");
//   } else {
//     console.log(data);
//   }
// });

// reescreve o arquivo
// fs.writeFile("./texto.txt", "novo conteudo do arquivo", (err) => {
//   if (err) console.log("erro ao salvar");
// });
