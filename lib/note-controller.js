(function(exports){
    class NoteController {
        constructor(noteList) {
            this.noteList = noteList;
            this.noteId = 0;
            this.noteListView = new NoteListView(noteList);
        }

        showHtml() {
            var app = document.getElementById("app");
            app.innerHTML = this.noteListView.viewNotes();
        }

        showSingleNote(){
          var self = this;
          window.addEventListener('hashchange', function(){
            this.noteId = window.location.hash.split('#notes/')[1];
            document.getElementById('note').innerHTML = self.noteList.notes[this.noteId].text;
          }, false);
        };

        createNewNote(){
          var form = document.getElementById('text');
          var noteText = document.getElementById('noteText');
          form.addEventListener('submit', function(event){
          event.preventDefault();
          console.log(noteText.value);
        });
      }

        
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
controller.showSingleNote();
controller.createNewNote();