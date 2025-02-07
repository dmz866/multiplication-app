import { CreateTable } from "./domain/use-cases/create-table.use-case";
import { SaveFile } from "./domain/use-cases/save-file.use-case";

interface ServerAppOptions {
    base: number;
    limit: number;
}

export class ServerApp {
    static run({ base, limit }: ServerAppOptions) {
        const fileContent = new CreateTable().execute({ base, limit });
        const fileCreated = new SaveFile().execute({ fileContent, fileName: base.toString() });
    }
}