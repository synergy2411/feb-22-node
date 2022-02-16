const yargs = require("yargs");
const { addNote, readNote } = require("./utils/notes");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            description : "title for new note",
            demandOption : true,
            type : "string"
        },
        body: {
            description : "body for new note",
            demandOption : true,
            type : "string"
        }
    },
    handler : (args) => {
        const {title, body} = args;
        addNote(title, body)
    }
})

yargs.command({
    command :"read",
    description : "to read single note",
    builder : {
        title : {
            demandOption : true,
            type :"string",
            description : "title to read single note"
        }
    },
    handler : (args) => {
        readNote(args.title)
    }
})

yargs.parse();

// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list
