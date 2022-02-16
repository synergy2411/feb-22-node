const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("./notes.json");
    const notesString = notesBuffer.toString();
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

const saveNote = (notes) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  console.log(chalk.green("Notes saved"));
};

const addNote = (title, body) => {
  const newNote = { title, body };
  const allNotes = loadNotes()
  const foundNote = allNotes.find(note => note.title === title)
  if(foundNote){
      console.log(chalk.red("Note title already exist. Try Again!"))
  }else{
      allNotes.push(newNote)
      saveNote(allNotes);
  }
};

const readNote = (title) => {
  const allNotes = loadNotes()
  const foundNote = allNotes.find(note => note.title === title)
  if(foundNote){
    console.log(chalk.blue("Title : ", foundNote.title))
    console.log(chalk.blue("Body : ", foundNote.body))
  }else{
    console.log(chalk.red("Note does not exist."))
  }
}

module.exports = {
  addNote,
  readNote
};
