describe('Note', () => {
  describe('.text', () => {
    it('stores text of the note', () => {
      let note = new Note('This is a note');
      expect(note.text).toEq('This is a note');
    })
  })
  describe('.read', () => {
    it('reads text of the note', () => {
      let note = new Note('This is a note');
      expect(note.read()).toEq('This is a note');
    })
  })
})