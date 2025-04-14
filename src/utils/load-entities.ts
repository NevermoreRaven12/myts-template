import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadEntities() {
  const files = await glob(path.join(__dirname, "../entity/*.js"));
  await Promise.all(files.map((file) => import(file)));
}
