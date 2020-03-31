function testSingleView(){
  var note = new Note('Daria is really good');
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.htmlNote() === '<div>Daria is really good</div>')
} 
testSingleView();