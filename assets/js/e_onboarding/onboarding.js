jQuery(document).ready(function() {
   initsearchbar()

console.log('load')
});
// function initEobPage(){
// initsearchbar()
// }


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
       menubar: 'edit format',
       toolbar: 'undo redo fontfamily fontsize bold italic underline fontcolor backcolor table |outdent indent lineheight  bullist numlist  | alignleft aligncenter alignright alignjustify ',
       content_style: 'body { font-family:Arial,sans-serif; font-size:11pt }p{ margin:0}',
       font_size_formats: '8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
       table_default_attributes: {
         cellpadding:'1px',
       },
       table_default_styles: {
         width: '50%'},
    });
      console.log("after init code")
}

function initsearchbar(){
 // groups = document.getElementById('eobrepeatinggroup').children
 // groupcount = groups.length
 if (document.getElementById("usersearchbar")){
   document.getElementById("usersearchbar").addEventListener("input", userfilter)
   console.log("user")
 };
 if (document.getElementById("casesearchbar")){
   document.getElementById("casesearchbar").addEventListener("input", casefilter)
   console.log("case")

 };
}

function userfilter(){
  console.log("user filter fires")

  var groups = document.getElementById('eobrepeatinggroup').children
  var groupcount = groups.length
  var keyword = document.getElementById('usersearchbar').value.trim().toLowerCase()
  for (var i=0; i<groupcount; i++){
    var currentgroup = groups[i]
    var currentfield = currentgroup.children
    console.log(currentfield[1].innerText.toLowerCase())
    if (currentfield[1].innerText.toLowerCase().includes(keyword) ||
        keyword == ""
    ){
      currentgroup.style.display="flex"
        }
    else{
      currentgroup.style.display="none"
    }
  }
}

function casefilter(){
  console.log("case filter fires")

  var groups = document.getElementById('eobrepeatinggroup').children
  var groupcount = groups.length
  var keyword = document.getElementById('casesearchbar').value.trim().toLowerCase()
  for (var i=0; i<groupcount; i++){
    var currentgroup = groups[i]
    var currentfield = currentgroup.children
    console.log(currentfield[2].innerText.toLowerCase())
    if (currentfield[1].innerText.toLowerCase().includes(keyword) ||
        currentfield[2].innerText.toLowerCase().includes(keyword) ||
        currentfield[3].innerText.toLowerCase().includes(keyword) ||
        currentfield[4].innerText.toLowerCase().includes(keyword) ||
        keyword == ""
    ){
      currentgroup.style.display="flex"
        }
    else{
      currentgroup.style.display="none"
    }
  }
}
