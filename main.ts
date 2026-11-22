import { mkdirSync, writeFileSync } from "node:fs";

// The fixed 30-day make.fun plan; it must stay within 280 characters.
const PLAN =
  "Day 1: spend $25 on Upwork Connects; bid only on fresh PDF-catalog-to-Shopify-CSV jobs, attaching a free 3-row sample converted from the buyer's own file. $75 fixed, 24h delivery, escrowed. Days 2-30: 2 jobs a day, raise the price weekly, reinvest in Connects. Expected: $2,000+.";

const planLength = [...PLAN].length;

if (planLength === 0 || planLength > 280) {
  throw new Error(`PLAN must be between 1 and 280 characters; received ${planLength}.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, PLAN, "utf8");
