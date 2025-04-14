import { Catalog } from "./entity/Catalog.js";
import { AppDataSource, initializeDataSource } from "./database/data-source.js";

async function run() {
  await initializeDataSource();

  const jornal = new Catalog();
  jornal.author = "Jane Austen";
  jornal.edition = "1890";
  jornal.isPublished = true;
  jornal.journal = "Um romance eletrizante por Jane Austen";
  jornal.pubisher = "Thomas Egerton";
  jornal.title = "Orgulho e Preconceito";

  await AppDataSource.manager.save(jornal);
  console.log(`Título salvo! O id para consulta é: ${jornal.id}`);
}

run().catch((err) => {
  console.error("Erro ao executar: ", err);
});
