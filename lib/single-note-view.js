(function(exports){
  class SingleNoteView {
    constructor(note){
      this.note = note;
    }

    htmlNote(){
      var html = `<div>${this.note.read()}</div>`
      return html;
    }
  }
  exports.SingleNoteView = SingleNoteView;
})(this)