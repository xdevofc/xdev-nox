import { Command } from 'commander';


export const saveFile = new Command('save')
  .description('Saves a file in the context')
  .argument('<string>', 'name of the file to be saved')
  .option('-s, --save <string>', 'file to be saved')
  .action( (str, options) => {
    console.log(`this is the file ${ str }`);
  });

