(function(exports) {class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }
  
  viewNotes(){
    var html = "<ul>";
    for(let i = 0; i < this.noteList.notes.length; i++ ){
      html += `<li><div>${this.noteList.notes[i].read().substring(0, 20)}</div></li>`;
    }
    html += "</ul>";
    return html;
  }

};
exports.NoteListView = NoteListView;
})(this);
