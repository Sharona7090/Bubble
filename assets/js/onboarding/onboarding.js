

const tinyArray = []

function tinymce_init_check(editorinput, uniqueid){
    console.log(tinyArray)
  if (tinyArray.includes(uniqueid)==false){
    initialize_tinymce(editorinput, uniqueid)
    tinyArray.push(uniqueid)
  }
  console.log(tinyArray)


  // if (sessionStorage.getItem(uniqueid) ==""){
  //   initialize_tinymce(editorinput, uniqueid)
  //   sessionStorage.setItem(uniqueid, "yes");
  // }

}

function initialize_tinymce(editorinput, uniqueid){
  var bubblefnName = "bubble_fn_tiny" + uniqueid
  console.log("initialize tiny")
  tinymce.init({
    height : 400,
    selector: '.emaileditor',
    setup: function(editor) {editor.on('init', function (e) {
        editor.setContent(editorinput);
        console.log("init fired")
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
}
