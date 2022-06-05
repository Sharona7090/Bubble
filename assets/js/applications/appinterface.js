function initappinterface(){
  console.log("initiated app interface")
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

// KTSelect2.init();
setTimeout(addIC, 100);
setTimeout(addIC, 100);

// jQuery(document).ready(function() {
//     setTimeout(addIC, 100);
//     setTimeout(addIC, 100);
// });
var newDiv = document.createElement("div")
newDiv.innerHTML = `<div id="kt_quick_search" class="offcanvas offcanvas-right p-10 offcanvas-on" style="display:none">
	<div class="offcanvas-header d-flex align-items-center justify-content-between mb-5" kt-hidden-height="24" style="">
		<h3 class="font-weight-bold m-0 ">Deleted Claims</h3>
		<button class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_search_close" onclick="closeDeletedList()">
			<i class="ki ki-close icon-xs text-muted"></i>
		</button>
	</div>
	<div class="offcanvas-content">
		<div class="quick-search quick-search-offcanvas quick-search-has-result" id="kt_quick_search_offcanvas">
			<div class="quick-search-wrapper pt-5 scroll ps ps--active-y" style="height: 784px; overflow: hidden;">
				<div id="deletedList" class="quick-search-result">
				</div>
			</div>
		</div>
	</div>
</div>
<div id = "deletedOverlay" class="offcanvas-overlay" style="display:none" onclick="closeDeletedList()"></div>`
document.body.append(newDiv)

}

function show(){
  var thing = document.getElementById('set1').value;
  console.log(thing)
}
