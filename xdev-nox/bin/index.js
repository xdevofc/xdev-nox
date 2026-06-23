#!/usr/bin/env node

import { Command } from "commander"; 
import { saveFile } from "../src/commands/save-file.js";

const program =  new Command();

program
	.name('nox')
	.description("Creating a tool to make terminal development more easy")
	.version("1.0.0")

program.option('-s, --save <string>', 'file to be saved')
.action( async (options) => {
		if(options.save){
			const saved = await saveFile(options.save);
			console.log(saved ? "file saved" : "cannot save file");
			return;
		}
	});

await program.parseAsync(process.argv);
