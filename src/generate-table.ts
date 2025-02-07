import fs from 'fs';

export const generateTable = () => {
    let content = `
====================================
        Table 5
====================================\n`;

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((n) => {
        content += `5 x ${n} = ${5 * n}\n`;
    });

    console.log(content);
    fs.writeFileSync('outputs/table-5.txt', content);
};