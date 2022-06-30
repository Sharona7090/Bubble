
$('link[rel=stylesheet][href~="https://sharona7090.github.io/Bubble/assets/css/style.bundle.css?v=7.0.4"]').remove();
$('link[rel=stylesheet][href~="https://sharona7090.github.io/Bubble/assets/css/custom.css"]').remove();
$('link[rel=stylesheet][href~="https://sharona7090.github.io/Bubble/assets/css/bubblecustom.css"]').remove();

const tinyArray = []

function tinymce_init_check(editorinput, uniqueid){
    console.log(tinyArray)
  if (tinyArray.includes(uniqueid)==false){
    initialize_tinymce(editorinput, uniqueid)
    tinyArray.push(uniqueid)
  }


  // if (sessionStorage.getItem(uniqueid) ==""){
  //   initialize_tinymce(editorinput, uniqueid)
  //   sessionStorage.setItem(uniqueid, "yes");
  // }

}

function initialize_tinymce(editorinput, uniqueid){
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

           bubble_fn_tiny(content)
         });
       },
 plugins: 'table lists',
 toolbar: 'undo redo fontfamily fontsize bold italic underline fontcolor backcolor |outdent indent lineheight  bullist numlist table | alignleft aligncenter alignright alignjustify ',
 content_style: 'body { font-family:Arial,sans-serif; font-size:11pt }p{ margin:0}',
 font_size_formats: '8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt'

});
}
