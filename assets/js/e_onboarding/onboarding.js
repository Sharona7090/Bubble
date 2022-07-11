
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
       toolbar: 'undo redo fontfamily fontsize bold italic underline fontcolor backcolor |outdent indent lineheight  bullist numlist table | alignleft aligncenter alignright alignjustify ',
       content_style: 'body { font-family:Arial,sans-serif; font-size:11pt }p{ margin:0}',
       font_size_formats: '8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt'
    });
      console.log("after init code")
}

function initusersearchbar(){
 groups = document.getElementById('eobrepeatinggroup').children
 groupcount = groups.length
document.getElementById("searchbar").addEventListener("input", userfilter);
}

function userfilter(){
  var keyword = document.getElementById('searchbar').value.trim().toLowerCase()
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

function initcasesearchbar(){
 groups = document.getElementById('eobrepeatinggroup').children
 groupcount = groups.length
document.getElementById("searchbar").addEventListener("input", casefilter);
}
function casefilter(){
  var keyword = document.getElementById('searchbar').value.trim().toLowerCase()
  for (var i=0; i<groupcount; i++){
    var currentgroup = groups[i]
    var currentfield = currentgroup.children
    console.log(currentfield[1].innerText.toLowerCase())
    if (currentfield[0].innerText.toLowerCase().includes(keyword) ||currentfield[1].innerText.toLowerCase().includes(keyword) ||currentfield[2].innerText.toLowerCase().includes(keyword) ||currentfield[3].innerText.toLowerCase().includes(keyword) ||
        keyword == ""
    ){
      currentgroup.style.display="flex"
        }
    else{
      currentgroup.style.display="none"
    }
  }
}
