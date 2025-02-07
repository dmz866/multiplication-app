//npx ts-node src/app -b 6
import { args } from "./plugins/args.plugin";
import { ServerApp } from "./server-app";

const { b: base, l: limit, fn: fileName } = args;

const main = () => {
    ServerApp.run({ base, limit, fileName });
}

main();