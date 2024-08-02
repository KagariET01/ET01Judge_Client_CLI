import minimist from "minimist";
import { join } from "path";
const args=minimist(process.argv.slice(2));



// console.log(args);
const help_less=`
usage: [command]
commands:
	          -h : show this help
	        help : show help(more detailed)
	       login : login to the server
	version , -v : show the version of the client
`;
const help_more=`no`;

let i=0;

const oplist={
	"unknow":()=>{
		if(args["h"]){
			console.log(help_less);
			return 0;
		}
		if(args["help"]){
			console.log(help_more);
			return 0;
		}
		;

		console.log(`argent error: ${args._[0]}`);
		console.log(`try argent "--help" or "-h" for help.`); 
	},
	"login":()=>{

	}
}
const run=()=>{
	if(!args["_"].length){
		console.log(help_less);
		return 0;
	}
	if(i>=args["_"].length){
		return 0;
	}else{
		if(oplist[args["_"][i]]){
			oplist[args["_"][i]]();
		}else{
			oplist["unknow"]();
		}
	}
};


run();






