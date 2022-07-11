jQuery(document).ready(function() {
    initEobPage()
});
function initEobPage(){
initsearchbar()
}


const tinyArray = []

function tinymce_init_check(editorinput, uniqueid){
    console.log(tinyArray)
  if (tinyArray.includes(uniqueid)==false){
    initialize_tinymce(editorinput, uniqueid)
    tinyArray.push(uniqueid)
  }
  console.log(tinyArray)

}

function initialize_tinymce(editorinput, uniqueid){
  console.log("function", "uniqueid: ", uniqueid, "editorinput: ", editorinput)
  var bubblefnName = "bubble_fn_tiny" + uniqueid

  tinymce.init({
    height : 400,
    selector: `#tiny${uniqueid}`,
    setup: function(editor) {editor.on('init', function (e) {
        editor.setContent(editorinput);
        console.log("init set content: ", uniqueid, editorinput)
        });
        editor.on('blur', function(e) {
           var content = tinymce.get(e.target.id).getContent().replace(/(\r\n|\n|\r)/gm, '');
           console.log(content)
           window[bubblefnName](content)
         });
       },
       plugins: 'table lists',
       toolbar: 'undo redo fontfamily fontsize bold italic underline fontcolor backcolor |outdent indent lineheight  bullist numlist table | alignleft aligncenter alignright alignjustify ',
       content_style: 'body { font-family:Arial,sans-serif; font-size:11pt }p{ margin:0}',
       font_size_formats: '8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt'
    });
      console.log("after init code")
}

function initsearchbar(){
var groups = document.getElementById('eobrepeatinggroup').children
let groupcount = groups.length
document.getElementById("searchbar").addEventListener("keyup", userfilter);
}

function userfilter(){
  var keyword = document.getElementById('searchbar').value.trim()
  for (var i=0; i<groupcount; i++){
    var currentgroup = groups[i]
    var currentfield = currentgroup.children
    if (currentfield[1].innerText.includes(keyword) ||
        keyword == ""
    ){
      currentgroup.style.display="flex"
        }
    else{
      currentgroup.style.display="none"
    }
  }
}

