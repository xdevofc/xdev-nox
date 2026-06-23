import { Command } from 'commander';
import { readFile } from '../utils/readFiles.js'
import { writeFile } from '../utils/writeFiles.js'

export async function saveFile(path){
    console.log(`reading file...`);
    const data = await readFile(path);
    console.log(`data retrieved ${data}`);
    console.log(`starting to write file`);
    const isSaved = writeFile(data);
    console.log(`end writing in json file`);
    return isSaved;
}

