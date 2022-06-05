function initappinterface(){
$(function(){
  $('.select2').on('change', function() {
    var data = $(".select2 option:selected")
    if (data.length ==0){
      $('.EC_tag').show();
      $('.ML_tag').show();
      $('.CC_tag').show();
      $('.MD_tag').show();
      $('.G_tag').show();
    }  else{
      $('.EC_tag').hide();
      $('.ML_tag').hide();
      $('.CC_tag').hide();
      $('.MD_tag').hide();
      $('.G_tag').hide();
    }
    for (i = 0; i < data.length; i++) {
    if(data[i].value == "EC"){
      console.log("blah")
      $('.EC_tag').show();
    }
    if(data[i].value == "ML"){
      $('.ML_tag').show();
    }
    if(data[i].value == "CC"){
      $('.CC_tag').show();
    }
    if(data[i].value == "MD"){
      $('.MD_tag').show();
    }
    if(data[i].value == "G"){
      $('.G_tag').show();
    }
    }
  })
});

$('#kt_select2_3').select2({
 placeholder: "Select all that apply",
 allowClear: true
});

$('.modal').on('shown.bs.modal', function (event) {
  console.log("prepend modal")
$('#figDiv').prepend($('.modal-backdrop'))
})

jQuery(document).ready(function() {
 KTSelect2.init();
 setTimeout(addIC, 100);
 setTimeout(addIC, 100);

});

// jQuery(document).ready(function() {
//     setTimeout(addIC, 100);
//     setTimeout(addIC, 100);
// });

console.log("initiated app interface")
}

function show(){
  var thing = document.getElementById('set1').value;
  console.log(thing)
}
