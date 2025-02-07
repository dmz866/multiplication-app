import fs from 'fs';

export const generateTable = (value: number, limit: number = 10) => {
    let content = `
====================================
        Table ${value}
====================================\n`;

    for (let i = 1; i <= limit; i++) {
        content += `${value} x ${i} = ${value * i}\n`;
    }

    console.log(content);
    const dir = 'outputs';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(`${dir}/table-${value}.txt`, content);
};