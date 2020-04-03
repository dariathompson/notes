describe('NoteController', () =>{
  describe('.noteList', () => {
    it('stores list of notes', () =>{
      let list = new NoteList;
      list.addNote('Note 1');
      list.addNote('Note 2');
      let noteController = new NoteController(list);
      expect(noteController.noteList.notes.length).toEq(2);
    })
  })
  describe('.noteListView', () => {
    it('stores view for list of notes', () =>{
      let list = new NoteList;
      list.addNote('Note 1');
      list.addNote('Note 2');
      let noteController = new NoteController(list);
      expect(noteController.noteListView.viewNotes()).toInclude('Note 1');
      expect(noteController.noteListView.viewNotes()).toInclude('Note 2');
    })
  })
})