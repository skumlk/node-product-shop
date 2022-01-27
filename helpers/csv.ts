import * as csv from 'fast-csv';
import * as fs from 'fs';

export function readCSV<T>(filePath: string){

    var result : T[] = []

    return new Promise<T[]>((resolve, reject) => { 
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on("error", (error) => {
                reject(error.message);
            })
            .on("data", (row) => {
                result.push(row);
            })
            .on("end", async () => {
                resolve(result)
            });
    });
}