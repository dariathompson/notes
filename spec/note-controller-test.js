// function viewNotesInHtml() {
//   class NoteDouble {
//     constructor(text){
//       this.text = text;
//     }
//     read() {
//       return this.text;
//     }
//   };
//   class NoteListDouble {
//     constructor() {
//       this.notes = [];
//     }
//     addNote(text) {
//       this.notes.push(new NoteDouble(text));
//     }
//   //   displayNotes() {
//   //     return this.notes;
//   // }
//   };

//   var list = new NoteListDouble;
//   list.addNote('Rafa is amazing');
//   list.addNote('And beautiful');
  
//   var controller = new NoteController(list);
//   controller.showHtml()
//   assert.isTrue(app.innerHTML === "<ul><li><div>Rafa is amazing</div></li><li><div>And beautiful</div></li></ul>");
  
// };

// viewNotesInHtml()