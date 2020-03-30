class Note {
  constructor(text){
    this.text = text;
  }
  read() {
    return this.text;
  }
};
note = new Note('Hey');
console.log(note);