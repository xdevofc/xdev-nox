import fs from 'node:fs/promises';


const storeFolder = "/Users/x4mv/workflow/personal/xdev-nox/db.txt";

export async function writeFile(data){

  console.log("CAALING" + data);
  try {
    if (data == null ) {
      console.log("no data");
      return false;
    }

    await fs.writeFile(storeFolder, data);
    return true;

  } catch (err) {
    console.log(err);
  }

  return false;

};
