/* eslint-disable no-console */
import { blue } from "chalk";
import * as dotenv from "dotenv";
import { exec } from "egzek";
import { promises as fs } from "fs";
import { relative, resolve } from "path";
import { assert } from "ts-essentials";

dotenv.config();

const { NEXT_PUBLIC_ZAGRAJMY_REST_API_URL: API_URL } = process.env;
assert(API_URL, "REST API URL must be defined in process.env");

async function main(apiUrl: string) {
  const outFile = resolve(__dirname, "../data/rest-api.ts");

  try {
    fs.unlink(outFile);
  } catch {
    // discard error if file doesn't exist
  }

  const url = new URL(apiUrl);
  url.pathname = "/v1/openapi";
  url.searchParams.set("format", "openapi-json");

  /**
   * @see https://github.com/horiuchi/dtsgenerator#usage
   */
  exec(`dtsgen -o ${outFile} -t ESNEXT --url ${url.toString()}`, {
    stdio: "pipe",
  });

  const namespaceName = "ZagrajmyRestApi";

  console.log(`\nSchema downloaded from ${blue(url.toString())}.`);

  const generated = await fs.readFile(outFile, { encoding: "utf-8" });
  const result = generated
    .replace(
      /declare namespace (Components|Paths)/g,
      `export declare namespace ${namespaceName}`
    )
    .replace(/Components\./g, `${namespaceName}.`);

  await fs.writeFile(outFile, result, { encoding: "utf-8" });

  console.log(`${blue(namespaceName)} namespace generated successfully 👌`);
  console.log(`${blue(outFile)} written.\n`);
}

main(API_URL);
