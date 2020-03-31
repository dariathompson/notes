(function(exports){
    class NoteController {
        constructor(noteList) {
            this.noteList = noteList;
            this.noteListView = new NoteListView(noteList);

        }

        showHtml() {
            var app = document.getElementById("app");
            app.innerHTML = this.noteListView.viewNotes();
          }
    }

exports.NoteController = NoteController;

})(this);

var list = new NoteList;
list.addNote("best pairing");
list.addNote("Rafa is the greatest most amazing man");

var controller = new NoteController(list);
controller.showHtml();
