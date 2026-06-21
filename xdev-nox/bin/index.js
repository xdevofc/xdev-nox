#!/usr/bin/env node

import { program } from "commander"; 

program
	.version("1.0.0")
	.description("Creating a tool to make terminal development more easy")
	.option("-g, --grab <type>", "add the file name")
	.action((options) => {
		console.log(`Hey , ${options.grab}!`);
	})

program.parse(process.argv);
