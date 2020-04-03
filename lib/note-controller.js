(function(exports){
    class NoteController {
        constructor(noteList = new NoteList) {
            this.noteList = noteList;
            this.noteId = 0;
            this.noteListView = new NoteListView(this.noteList);
        }

        showHtml() {
            var app = document.getElementById("app");
            app.innerHTML = this.noteListView.viewNotes();
        }

        showSingleNote(){
          var self = this;
          window.addEventListener('hashchange', function(){
            this.noteId = window.location.hash.split('#notes/')[1];
            var newNote = self.noteList.notes[this.noteId];
            var singleNoteView = new SingleNoteView(newNote);
            document.getElementById('note').innerHTML = singleNoteView.htmlNote();
          });
        };

        storeText(){
          var form = document.getElementById('text');
          var self = this;
            form.addEventListener('submit', function(event){
            event.preventDefault();
            var text = document.getElementById('noteText').value;
            self.noteList.addNote(text);
            self.showHtml();
          });
      }

        
    }

exports.NoteController = NoteController;

})(this);




var controller = new NoteController;
// list.addNote("best pairing");
// list.addNote("Rafa is the greatest most amazing man");
// list.addNote("Daria has a beautiful mind");
// list.addNote("Beyliss is a good girl");
controller.showHtml();
controller.storeText();
controller.showSingleNote();