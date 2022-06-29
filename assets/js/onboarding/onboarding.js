tinymce.init({
 height : 400,
 selector: '.emaileditor',
setup: function(editor) {
       editor.on('blur', function(e) {
        var content = tinymce.get(e.target.id).getContent();
           alert(content);
       });
   }
plugins: 'table lists',
toolbar: 'undo redo fontfamily fontsize bold italic underline backcolor |outdent indent lineheight  bullist numlist table | alignleft aligncenter alignright alignjustify ',
 content_style: 'body { font-family:Arial,sans-serif; font-size:11pt }p{ margin:0}',
font_size_formats: '8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',

});
