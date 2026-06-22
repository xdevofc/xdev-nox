import fs from 'node:fs/promises'; 

let response = ""; 

export async function readFile(path){

  try {
    const data = await fs.readFile(path, {encoding: 'utf8'});
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }

};
