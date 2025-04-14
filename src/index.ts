import { initializeDataSource } from "./database/data-source.js";

async function start() {
  await initializeDataSource();
}

start().catch((err) => {
  console.error("Erro ao inicializar: ", err);
});
