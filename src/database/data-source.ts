import { DataSource } from "typeorm";
import { loadEntities } from "../utils/load-entities.js";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "your-password-here",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [],
  migrations: [],
  subscribers: []
});

export async function initializeDataSource() {
  await loadEntities();
  await AppDataSource.initialize();
  console.log("Conexão com o banco de dados estabelecida!");
}
