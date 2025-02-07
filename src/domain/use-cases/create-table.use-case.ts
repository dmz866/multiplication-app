interface ICreateTableOptions {
    base: number;
    limit: number;
}

interface ICreateTable {
    execute: (options: ICreateTableOptions) => string;
}

export class CreateTable implements ICreateTable {
    constructor() { }

    execute({ base, limit }: ICreateTableOptions): string {
        let content = `
====================================
        Table ${base}
====================================\n`;

        for (let i = 1; i <= limit; i++) {
            content += `${base} x ${i} = ${base * i}\n`;
        }

        return content;
    }

}