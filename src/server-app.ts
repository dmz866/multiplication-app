import { CreateTable } from "./domain/use-cases/create-table.use-case";
import { SaveFile } from "./domain/use-cases/save-file.use-case";

interface ServerAppOptions {
    base: number;
    limit: number;
    fileName: string;
}

export class ServerApp {
    static run({ base, limit, fileName }: ServerAppOptions) {
        const fileContent = new CreateTable().execute({ base, limit });
        const fileCreated = new SaveFile().execute({ fileContent, fileName });
    }
}