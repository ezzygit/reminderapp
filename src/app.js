const yargs = require('yargs')

const { addNote} = require("./notesc");

const command = process.argv[2];


if (command == "add") {
    console.log("add a note");
    addNote(yargs.argv.note);
} else if (command == "list") {
    console.log("listing");
} else if (command == "remove") {
    console.log("removing");
} else {
    console.log("command not found");
}






