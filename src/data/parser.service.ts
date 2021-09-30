import csvtojson from "csvtojson";
import fs from "fs";

const csvFilePath = 'population.csv'
const jsonFilePath = __dirname + '/output.json'

function parse(csvFilePath: string, jsonFilePath: string) {

    return new Promise(resolve => {
        csvtojson()
            .fromFile(csvFilePath)
            .then((jsonObject: object) => {
                fs.writeFileSync(__dirname + '/output.json', JSON.stringify(jsonObject), "utf-8")
                resolve(jsonObject);  
            })        
    });
}

export const parseCsv = async (url: string): Promise<any> => {
    const jsonData = await parse(url, jsonFilePath);
    return jsonData;
}
 