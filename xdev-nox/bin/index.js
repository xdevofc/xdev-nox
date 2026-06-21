#!/usr/bin/env node

import { Command } from "commander"; 
import { saveFile } from "../src/commands/save-file.js";

const program =  new Command();

program
	.name('nox')
	.description("Creating a tool to make terminal development more easy")
	.version("1.0.0")

program.addCommand(saveFile);

program.parse(process.argv);
