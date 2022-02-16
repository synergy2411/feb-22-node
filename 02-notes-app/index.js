const yargs = require("yargs");
const { addNote, readNote, removeNote, listNotes } = require("./utils/notes");

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
yargs.command({
    command :"remove",
    description : "to remove single note",
    builder : {
        title : {
            demandOption : true,
            type :"string",
            description : "title to read single note"
        }
    },
    handler : (args) => {
        removeNote(args.title)
    }
})

yargs.command({
    command : "list",
    description : "to read all notes",
    handler : () => {
        listNotes()
    }
})

yargs.parse();

// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list
