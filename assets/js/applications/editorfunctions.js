function tab(ed){
  if
  if(ed.selection.getNode().style.textIndent){
    var currentIndent= ed.selection.getNode().style.textIndent
    var indentNumber = Number(currentIndent.replace(/"|in/gi, ""))
    console.log(indentNumber)
    var newIndentNumber = indentNumber + 0.5
    console.log(newIndentNumber)
    var newIndent = newIndentNumber +`in`
    console.log(newIndent)
    ed.selection.getNode().style.textIndent = newIndent
    console.log(ed.selection.getNode().style.textIndent)
  }else{
    ed.selection.getNode().style.textIndent = "0.5in"
    console.log(ed.selection.getNode().style.textIndent)
  }
  event.preventDefault();
  return false;
}

function backspace(ed){
  console.log(ed.selection.getNode())
  console.log(ed.selection.getRng())
  var currentIndent= ed.selection.getNode().style.textIndent
  var indentNumber = Number(currentIndent.replace(/"|in/gi, ""))
  if(ed.selection.getRng().startOffset == 0 && indentNumber!=0){
    event.preventDefault()
    var newIndentNumber= indentNumber - 0.5
    var newIndent = newIndentNumber +`in`
    ed.selection.getNode().style.textIndent = newIndent
  }
  if (ed.selection.getRng().endOffset == 0 && ed.selection.getNode().classList[0] == "preambleBlock"){
    event.preventDefault();
    console.log("hello")
  }
console.log(ed.selection.getNode())
reportCharacterPrecedingCaret(ed.selection.getNode());
}
////////////////////////////////////////////////////////////////////////////////
document.getElementById("preambleBlock2").addEventListener('click', placeCursor, false)
 
function placeCursor(){
  document.getElementById("preambleBody2").focus()
}


////////////////////////////////////////////////////////////////////////////////
function getCharacterPrecedingCaret(containerEl) {
    var precedingChar = "", sel, range, precedingRange;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount > 0) {
            range = sel.getRangeAt(0).cloneRange();
            range.collapse(true);
            range.setStart(containerEl, 0);
            precedingChar = range.toString().slice(-3);
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        range = sel.createRange();
        precedingRange = range.duplicate();
        precedingRange.moveToElementText(containerEl);
        precedingRange.setEndPoint("EndToStart", range);
        precedingChar = precedingRange.slice(-3);
    }
    return precedingChar;
}

var editableEl = document.getElementById("editable");
var precedingCharEl = document.getElementById("precedingChar");

function reportCharacterPrecedingCaret(editableEl) {
    console.log("Character preceding caret: " + getCharacterPrecedingCaret(editableEl));
}
