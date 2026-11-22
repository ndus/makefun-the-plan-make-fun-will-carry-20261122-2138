import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Day 1: spend $25 on Upwork Connects; bid only on fresh PDF-catalog-to-Shopify-CSV jobs, attaching a free 3-row sample converted from the buyer's own file. $75 fixed, 24h delivery, escrowed. Days 2-30: 2 jobs a day, raise the price weekly, reinvest in Connects. Expected: $2,000+.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, plan, "utf8");
