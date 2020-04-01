(function(exports){
    class NoteController {
        constructor(noteList) {
            this.noteList = noteList;
            this.noteListView = new NoteListView(noteList);
            this.noteId = 0;
        }

        showHtml() {
            var app = document.getElementById("app");
            app.innerHTML = this.noteListView.viewNotes();
        }

        showSingleNote(){
          window.addEventListener('hashchange', this.showNoteForCurrentPage());
        };

        showNoteForCurrentPage(){
          this.showNote(this.getNoteIdFromUrl(window.location));
        }

        getNoteIdFromUrl(location) {
          this.noteId = location.hash.split("#notes/")[1];
          return this.noteId;
        };

        showNote(single) {
          var note = document.getElementById("note");
          note.innerHTML = single;
        };
    }

exports.NoteController = NoteController;

})(this);

var list = new NoteList;
list.addNote("best pairing");
list.addNote("Rafa is the greatest most amazing man");
list.addNote("Daria has a beautiful mind");
list.addNote("Beyliss is a good girl");

var controller = new NoteController(list);
controller.showHtml();
controller.showSingleNote()