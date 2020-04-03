describe('SingleNoteView', () => {
  describe('.htmlNote()', () => {
    it('returns html for single note', () => {
      let note = new Note('Daria is really good');
      let singleNoteView = new SingleNoteView(note);
      expect(singleNoteView.htmlNote()).toEq('<div>Daria is really good</div>');
    })
  })
})