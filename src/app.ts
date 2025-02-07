//npx ts-node src/app -b 6
import { generateTable } from "./generate-table";
import { args } from "./plugins/args.plugin";

const { b: base, l: limit } = args;

generateTable(base, limit);
