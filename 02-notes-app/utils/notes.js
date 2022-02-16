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

const saveNote = (notes, flag) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  if(flag){
    console.log(chalk.green("Notes saved"));
  }else{
    console.log(chalk.green("Notes removed"));
  }
};

const addNote = (title, body) => {
  const newNote = { title, body };
  const allNotes = loadNotes()
  const foundNote = allNotes.find(note => note.title === title)
  if(foundNote){
      console.log(chalk.red("Note title already exist. Try Again!"))
  }else{
      allNotes.push(newNote)
      saveNote(allNotes, true);
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

const removeNote = title => {
  const allNotes = loadNotes();
  const foundNote = allNotes.find(note => note.title === title)
  if(foundNote){
    const filteredNote = allNotes.filter(note => note.title !== title)
    saveNote(filteredNote)
  }else{
    console.log(chalk.red('Note does not exist.'))
  }
}

const listNotes = () => {
  const allNotes = loadNotes();
  console.log(chalk.blue("ALL NOTE ITEMS"))
  allNotes.forEach(note => {
    console.log(chalk.grey("____________________"))
    console.log(chalk.grey("Title : ", note.title))
    console.log(chalk.grey("Body : ", note.body))
  })
}

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNotes
};
