(function(exports) {class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }
  
  viewNotes(){
    var html = "<ul>";
    this.noteList.notes.forEach(note => {
      html += `<li><div><a href='#notes/${note.id}'>${note.read().substring(0, 20)}</a></div></li>`;
    });
    html += "</ul>";
    return html;
  }

};
exports.NoteListView = NoteListView;
})(this);
