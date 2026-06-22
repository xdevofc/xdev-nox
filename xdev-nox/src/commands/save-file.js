import { Command } from 'commander';
import { readFile } from '../utils/readFiles.js'
import { writeFile } from '../utils/writeFiles.js'

export const saveFile = new Command('save')
  .description('Saves a file in the context')
  .argument('<string>', 'name of the file to be saved')
  .option('-s, --save <string>', 'file to be saved')
  .action( async (str, options) => {
    console.log(`this is the file ${ str }`);
    console.log(`reading file...`);
    const data = await readFile(str);
    console.log(` end reading file...`);
    console.log(`writing in json file`);
    const isSaved = await writeFile(data);
    if (isSaved){
      console.log(`end writing in json file`);
    }else{
      console.log(`error writing`);
    }

  });

