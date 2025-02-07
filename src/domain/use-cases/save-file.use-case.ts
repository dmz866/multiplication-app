import fs from 'fs';

interface ISaveFile {
    execute(options: IOptions): boolean;
}

interface IOptions {
    fileContent: string;
    destination?: string;
    fileName: string;
}

export class SaveFile implements ISaveFile {
    execute({ fileContent, destination = 'outputs', fileName }: IOptions) {
        try {
            if (!fs.existsSync(destination)) {
                fs.mkdirSync(destination);
            }

            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);

            return true;
        }
        catch (e) {
            return false;
        }
    }
}