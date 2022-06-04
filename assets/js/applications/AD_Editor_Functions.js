function setupEditor() {
  document.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.parentElement.classList.contains('setCursor')) {
      console.log(clickEvent.target)
      setCaret(clickEvent);
    }
    if (clickEvent.target.classList.contains('innerDiv')) {
      var el = clickEvent.target.querySelectorAll('.preambleInclude')[0]
      el.click()

      // setCaret(el);
    }
  })
  window.addEventListener('keydown', function(keydownEvent) {
    if (keydownEvent.target.classList.contains('preambleBody') || keydownEvent.target.classList.contains('claimBodyLine')) {
      AD_Keydown(keydownEvent);
    }
  })
}

function AD_Keydown(event){ // Any time a key is pressed
  var node = event.target
        if (event.keyCode == 9) { // tab pressed
          event.preventDefault()
          tab_Key(node)
        }
        if (event.keyCode == 13) { // enter pressed
          event.preventDefault()
          enter_Key(node)
        }
        if (event.keyCode == 8) { // backspace pressed
          backspace_Key(node)
        }
        if (event.keyCode == 46) { // delete pressed
          delete_Key(node)
        }
        if (event.keyCode == 38) { // up pressed
          event.preventDefault()
          up_Key(node)
        }
        if (event.keyCode == 40) { // down pressed
          event.preventDefault()
          down_Key(node)
        }
}

function setCaret(event) {
//  When a user click anywhere in the preambleBlock, their cursor is set to the preambleBody span
//  Specific to preamblyBody
  console.log(event)
      var el = event.target.parentElement.nextElementSibling;
      var range = document.createRange();
      var sel = window.getSelection();
      if (el.innerText.length >0){
      range.setStart(el, 1)
      }else{
        range.setStart(el, 0)
      }
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      el.focus();
}
function tab_Key(node){
  if (node.tagName == "P"){   //  only applies for <p>
    if(node.style.textIndent){
      var currentIndent= node.style.textIndent
      var indentNumber = Number(currentIndent.replace(/"|in/gi, ""))
      var newIndentNumber = indentNumber + 0.5
      var newIndent = newIndentNumber +`in`
      node.style.textIndent = newIndent
    }else{
      node.style.textIndent = "0.5in"
    }
  }
}
function enter_Key(node){ // enter pressed
// get any text right of cursor on ENTER so it can be moved to the newly created next line
      var textNode = node.childNodes[0];
      var selection = window.getSelection();
      var start = selection.anchorOffset;
      var end = node.innerText.length;
      var range = document.createRange();
      if(textNode){
      range.setStart(textNode, start);
      range.setEnd(textNode, end);
    }else{
      range.setStart(node, start);
      range.setEnd(node, end);
    }
      var moveText = range.toString()
      range.deleteContents();
//create next line <p>
      var p = document.createElement("p")
      p.classList.add('claimBodyLine')
      p.style.textIndent = ".5in"
      p.contentEditable = "true"
      p.innerHTML=moveText
      if (node.tagName == "SPAN"){ // checks if preambleBody
        var source = node.parentNode
      }else{
        var source = node
      }
      if (source.nextElementSibling){
        source.parentNode.insertBefore(p, source.nextElementSibling);
      }else {
        source.parentNode.append(p)
      }
      var range = document.createRange();
      var sel = window.getSelection();
      range.setStart(p, 0)
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      p.focus();
}
function backspace_Key(node){
    if (node.classList.contains('preambleBody')){
        var selection = window.getSelection();
        var offset = selection.anchorOffset;
        console.log(offset)
        if (offset==1){
          console.log("steop")

          event.preventDefault()
        }
    }



      var currentIndent= node.style.textIndent
      var indentNumber = Number(currentIndent.replace(/"|in/gi, ""))
      var selection = window.getSelection();
      var offset = selection.anchorOffset;
      if(offset == 0 && indentNumber!=0){
        event.preventDefault()
        var newIndentNumber= indentNumber - 0.5
        var newIndent = newIndentNumber +`in`
        node.style.textIndent = newIndent
      }
      if(offset == 0 && indentNumber==0){
        event.preventDefault()
        // get text to right of cursor
        var textNode = node.childNodes[0];
        var selection = window.getSelection();
        var start = selection.anchorOffset;
        var end = node.innerText.length;
        var range = document.createRange();
        if(textNode){
        range.setStart(textNode, start);
        range.setEnd(textNode, end);
      }else{
        range.setStart(node, start);
        range.setEnd(node, end);
      }
        var moveText = range.toString()
        range.deleteContents();
        // moves cursor to previous line
        var el = node.previousElementSibling
        if(el.classList.contains("preambleBlock")){ // check if previous sib is preambleBlock
          el = node.previousElementSibling.children[1];
        }
        if (el.childNodes[0]){
        var textel = el.childNodes[0];
      }else{
        var textel = el
      }
        var index = textel.length
        el.innerHTML += moveText
        var textel = el.childNodes[0];
        console.log(textel, index)
        var range2 = document.createRange();
        var sel = window.getSelection();
        range2.setStart(textel, index)
        range2.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range2);
        el.focus();
        node.remove()
      }
}
function delete_Key(node){
  var textNode = node.childNodes[0];
  var selection = window.getSelection();
  var start = selection.anchorOffset;
  var end = node.innerText.length;
  console.log(start, end)
  if (start == end){
    event.preventDefault()
    if(node.classList.contains('claimBodyLine') && node.nextElementSibling){
      var el = node.nextElementSibling
    }
    if(node.classList.contains('preambleBody') && node.parentElement.nextElementSibling){
      var el = node.parentElement.nextElementSibling
    }
      if(el){
        console.log(el)
        var moveText = el.innerText
        node.innerHTML += " "
        node.innerHTML += moveText
        el.remove()
        if (node.childNodes[0]){
            var textel = node.childNodes[0];
        }else{
            var textel = node
        }
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(textel, end)
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        node.focus();
      }
  }
}
function up_Key(node){
  var selection = window.getSelection();
  var index = selection.anchorOffset;
  var el = node.previousElementSibling
  if (el.childNodes[0]){
  var elNode = el.childNodes[0];
  if(index > el.childNodes[0].length){
    index = el.childNodes[0].length
  }
  }else{
  var elNode = el
  index = 0
  }
   var range = document.createRange();
   var sel = window.getSelection();
   range.setStart(elNode, index);
   range.collapse(true);
   sel.removeAllRanges();
   sel.addRange(range);
}
function down_Key(node){
  var selection = window.getSelection();
  var index = selection.anchorOffset;
  if (node.nextElementSibling){
  var el = node.nextElementSibling
  if (el.childNodes[0]){
  var elNode = el.childNodes[0];
  if(index > el.childNodes[0].length){
    index = el.childNodes[0].length
  }
  }else{
  var elNode = el
  index = 0
  }
   var range = document.createRange();
   var sel = window.getSelection();
   range.setStart(elNode, index);
   range.collapse(true);
   sel.removeAllRanges();
   sel.addRange(range);
 }
}
