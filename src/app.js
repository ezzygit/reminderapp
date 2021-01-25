const yargs = require('yargs');
const { addNote, listNotes} = require("../utils/notes");

const command = process.argv[2];


if (command == "add") {
    console.log("add a note");
    addNote(yargs.argv.note);
} else if (command == "list") {
    console.log("listing");
    listNotes();
} else if (command == "remove") {
    console.log("removing");
} else {
    console.log("command not found");
}







