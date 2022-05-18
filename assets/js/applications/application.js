depPreambleArray = [
  0,
  `<span class="claimNo">'+newClaimNumber+'. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class = "depNo preambleInclude"> '+parentclaimNumber+',</span>`,
  `<span class="claimNo">'+newClaimNumber+'. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class = "depNo preambleInclude"> '+parentclaimNumber+',</span>`,
  `<span class="claimNo">'+newClaimNumber+'. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class = "depNo preambleInclude"> '+parentclaimNumber+',</span>`,
]
function setPreamble(zone, claim){
var indPreamble = document.querySelectorAll('.indPreamble'+zone)[0]
var allDepPreamble = document.querySelectorAll('.depPreamble'+zone)
var method = document.querySelectorAll('#radioList'+zone+' .method')[0]
var system = document.querySelectorAll('#radioList'+zone+' .system')[0]
var crm = document.querySelectorAll('#radioList'+zone+' .crm')[0]
var custom = document.querySelectorAll('#radioList'+zone+' .custom')[0]

if (method.checked == true){
  // Independent
  indPreamble.innerHTML = `
  <span class="claimNo">`+claim+`. </span>
  <span class="preamble preambleInclude">A computer implemented method, comprising:</span>`
  // Dependent
  depPreambleArray[zone] = `
  <span class="claimNo">`+depclaimNumber+`. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class = "depNo preambleInclude" > `+parentclaimNumber+`, </span>`
  allDepPreamble = document.querySelectorAll('.depPreamble'+zone)
}
if (system.checked == true){
  //Independent
  indPreamble.innerHTML = `
  <span class="claimNo">`+claim+`. </span>
  <span class="preamble preambleInclude">A system, comprising:</span>`
  var p1 = document.createElement("p")
  p1.classList.add('claimBodyLine')
  p1.style.textIndent = ".5in"
  p1.contentEditable = "true"
  p1.innerHTML = "a processor;"
  indPreamble.parentNode.insertBefore(p1, indPreamble.nextSibling);
  var p2 = document.createElement("p")
  p2.classList.add('claimBodyLine')
  p2.style.textIndent = ".5in"
  p2.contentEditable = "true"
  p2.innerHTML = "a memory device;"
  p1.parentNode.insertBefore(p2, p1.nextSibling);
  var p3 = document.createElement("p")
  p3.classList.add('claimBodyLine')
  p3.style.textIndent = ".5in"
  p3.contentEditable = "true"
  p3.innerHTML = "instructions, the instructions when executed by the processor cause the system to:"
  p2.parentNode.insertBefore(p3, p2.nextSibling);
  // Dependent
  depPreambleArray[zone] = `
  <span class="claimNo">`+depclaimNumber+`. </span>
  <span class="preamble preambleInclude">The system of claim </span><span class = "depNo preambleInclude" > `+parentclaimNumber+`, </span>`

  for (i=0; i<allDepPreamble.length; i++){
    var depclaimNumber = allDepPreamble[i].getAttribute("data-claim")
    var parentclaimNumber = allDepPreamble[i].getAttribute("data-parent")
    allDepPreamble[i].innerHTML = depPreambleArray[zone]
    allDepPreamble[i].nextElementSibling.innerHTML = "wherein the instructions when executed further cause the system to:"
  }
}
if (crm.checked == true){
  indPreamble.innerHTML = `
  <span class="claimNo">`+claim+`. </span>
  <span class="preamble preambleInclude">A non-transitory computer-accessible storage medium storing program instructions that when executed on one or more processors cause the processors to:</span>`

  depPreambleArray[zone] = `
  <span class="claimNo">`+depclaimNumber+`. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class = "depNo preambleInclude" > `+parentclaimNumber+`, </span>`

  for (i=0; i<allDepPreamble.length; i++){
    var depclaimNumber = allDepPreamble[i].getAttribute("data-claim")
    var parentclaimNumber = allDepPreamble[i].getAttribute("data-parent")
    allDepPreamble[i].innerHTML = depPreambleArray[zone]
    allDepPreamble[i].nextElementSibling.innerHTML = "wherein the program instructions further cause the processors to:"
  }
}
if (custom.checked == true){
  var customIC = document.querySelectorAll('#radioList'+zone+' .customIC')[0].value +", comprising:"
  var customDC = document.querySelectorAll('#radioList'+zone+' .customDC')[0].value
  indPreamble.innerHTML = `
  <span class="claimNo">`+claim+`. </span>
  <span class="preamble preambleInclude">`+customIC+`</span>`

  depPreambleArray[zone] = `
  <span class="claimNo">`+depclaimNumber+`. </span>
  <span class="preamble preambleInclude">`+customDC+` of claim </span>
  <span class = "depNo preambleInclude" > `+parentclaimNumber+`, </span>`

  for (i=0; i<allDepPreamble.length; i++){
    var depclaimNumber = allDepPreamble[i].getAttribute("data-claim")
    var parentclaimNumber = allDepPreamble[i].getAttribute("data-parent")
    allDepPreamble[i].innerHTML = depPreambleArray[zone]
  }
}


var preambleBoxID = "preambleBox"+zone
document.getElementById(preambleBoxID).classList.remove("show");
updateView()
}



function checkPreamble(value, name){
if (value == "custom"){
  document.getElementById("customPreamble"+name).style.display= "block"
}else {
  document.getElementById("customPreamble"+name).style.display= "none"
}
}

// Initialization
jQuery(document).ready(function() {

    setTimeout(addIC, 100);
    setTimeout(addIC, 100);


});




// editableEl.onmouseup = editableEl.onkeyup = reportCharacterPrecedingCaret;

$('#kt_select2_3').select2({
 placeholder: "Select all that apply",
 allowClear: true
});

// Class definition
var KTSelect2 = function() {
 // Private functions
 var demos = function() {
  // basic
  $('#kt_select2_1').select2({
   placeholder: "Select a state"
  });

  // nested
  $('#kt_select2_2').select2({
   placeholder: "Select a state"
  });

  // multi select
  $('#kt_select2_3').select2({
   placeholder: "Select all that apply"
  });

  // basic
  $('#kt_select2_4').select2({
   placeholder: "Select a state",
   allowClear: true
  });

  // loading data from array
  var data = [{
   id: 0,
   text: 'Enhancement'
  }, {
   id: 1,
   text: 'Bug'
  }, {
   id: 2,
   text: 'Duplicate'
  }, {
   id: 3,
   text: 'Invalid'
  }, {
   id: 4,
   text: 'Wontfix'
  }];

  $('#kt_select2_5').select2({
   placeholder: "Select a value",
   data: data
  });

  // loading remote data

  function formatRepo(repo) {
   if (repo.loading) return repo.text;
   var markup = "<div class='select2-result-repository clearfix'>" +
    "<div class='select2-result-repository__meta'>" +
    "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
   if (repo.description) {
    markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
   }
   markup += "<div class='select2-result-repository__statistics'>" +
    "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
    "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
    "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
    "</div>" +
    "</div></div>";
   return markup;
  }

  function formatRepoSelection(repo) {
   return repo.full_name || repo.text;
  }

  $("#kt_select2_6").select2({
   placeholder: "Search for git repositories",
   allowClear: true,
   ajax: {
    url: "https://api.github.com/search/repositories",
    dataType: 'json',
    delay: 250,
    data: function(params) {
     return {
      q: params.term, // search term
      page: params.page
     };
    },
    processResults: function(data, params) {
     // parse the results into the format expected by Select2
     // since we are using custom formatting functions we do not need to
     // alter the remote JSON data, except to indicate that infinite
     // scrolling can be used
     params.page = params.page || 1;

     return {
      results: data.items,
      pagination: {
       more: (params.page * 30) < data.total_count
      }
     };
    },
    cache: true
   },
   escapeMarkup: function(markup) {
    return markup;
   }, // let our custom formatter work
   minimumInputLength: 1,
   templateResult: formatRepo, // omitted for brevity, see the source of this page
   templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
  });

  // custom styles

  // tagging support
  $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({
   placeholder: "Select all the apply",
  });

  // disabled mode
  $('#kt_select2_7').select2({
   placeholder: "Select an option"
  });

  // disabled results
  $('#kt_select2_8').select2({
   placeholder: "Select an option"
  });

  // limiting the number of selections
  $('#kt_select2_9').select2({
   placeholder: "Select an option",
   maximumSelectionLength: 2
  });

  // hiding the search box
  $('#kt_select2_10').select2({
   placeholder: "Select an option",
   minimumResultsForSearch: Infinity
  });

  // tagging support
  $('#kt_select2_11').select2({
   placeholder: "Add a tag",
   tags: true
  });

  // disabled results
  $('.kt-select2-general').select2({
   placeholder: "Select an option"
  });
 }

 var modalDemos = function() {
  $('#kt_select2_modal').on('shown.bs.modal', function () {
   // basic
   $('#kt_select2_1_modal').select2({
    placeholder: "Select a state"
   });

   // nested
   $('#kt_select2_2_modal').select2({
    placeholder: "Select a state"
   });

   // multi select
   $('#kt_select2_3_modal').select2({
    placeholder: "Select a state",
   });

   // basic
   $('#kt_select2_4_modal').select2({
    placeholder: "Select a state",
    allowClear: true
   });
  });
 }

 // Public functions
 return {
  init: function() {
		$('#kt_select2_2').select2({
		 placeholder: "Select a state"
		});
   demos();
   modalDemos();
  }
 };
}();

// Initialization
jQuery(document).ready(function() {

 KTSelect2.init();
});




figText=[];

'use strict';

function updateButtons(history) {
	$('#undo').attr('disabled',!history.canUndo());
	$('#redo').attr('disabled',!history.canRedo());
}

function setEditorContents(contents) {
	$('#editor').val(contents);
}



$(function(){
	var history = new SimpleUndo({
		maxLength: 200,
		provider: function(done) {
			done($('#editor').val());
		},
		onUpdate: function() {
			//onUpdate is called in constructor, making history undefined
			if (!history) return;

			updateButtons(history);
		}
	});

	$('#undo').click(function() {
		history.undo(setEditorContents);
	});
	$('#redo').click(function() {
		history.redo(setEditorContents);
	});
	$('#editor').keypress(function() {
		history.save();
	});

	updateButtons(history);
});


function show(){
  var thing = document.getElementById('set1').value;
  console.log(thing)
}

// var textarea = document.querySelector('textarea');
//
// textarea.addEventListener('keydown', autosize);
//
// function autosize(){
//   var el = this;
//   setTimeout(function(){
//     el.style.cssText = 'height:auto; padding:0';
//     // for box-sizing other than "content-box" use:
//     // el.style.cssText = '-moz-box-sizing:content-box';
//     el.style.cssText = 'height:' + el.scrollHeight + 'px';
//   },0);
// }

//////// TABS //////////////////////////////////
$(document).delegate('.set1textarea', 'keydown', function(e) {
var keyCode = e.keyCode || e.which;
if (keyCode == 9) {
  e.preventDefault();
  var start = $(this).get(0).selectionStart;
  var end = $(this).get(0).selectionEnd;
  // set textarea value to: text before caret + tab + text after caret
  $(this).val($(this).val().substring(0, start)
              + "\t"
              + $(this).val().substring(end));

  // put caret at right position again
  $(this).get(0).selectionStart =
  $(this).get(0).selectionEnd = start + 1;
}
});
$(document).delegate('.set2textarea', 'keydown', function(e) {
var keyCode = e.keyCode || e.which;
if (keyCode == 9) {
  e.preventDefault();
  var start = $(this).get(0).selectionStart;
  var end = $(this).get(0).selectionEnd;
  // set textarea value to: text before caret + tab + text after caret
  $(this).val($(this).val().substring(0, start)
              + "\t"
              + $(this).val().substring(end));
  // put caret at right position again
  $(this).get(0).selectionStart =
  $(this).get(0).selectionEnd = start + 1;
}
});
$(document).delegate('.set3textarea', 'keydown', function(e) {
var keyCode = e.keyCode || e.which;
if (keyCode == 9) {
  e.preventDefault();
  var start = $(this).get(0).selectionStart;
  var end = $(this).get(0).selectionEnd;

  // set textarea value to: text before caret + tab + text after caret
  $(this).val($(this).val().substring(0, start)
              + "\t"
              + $(this).val().substring(end));
  // put caret at right position again
  $(this).get(0).selectionStart =
  $(this).get(0).selectionEnd = start + 1;
}
});

function funcBasic(){
  document.getElementById('basicDiv').style.display="block";
  document.getElementById('backgroundDiv').style.display="none";
  document.getElementById('figDiv').style.display="none";
  document.getElementById('claimsDiv').style.display="none";
	document.getElementById('navBasic').className = "navi-link active"
	document.getElementById('navBackground').className = "navi-link"
	document.getElementById('navClaims').className = "navi-link"
	document.getElementById('navFigs').className = "navi-link"
document.getElementById('container').style = "padding-top: 50px;"
  console.log('basic')
  // document.getElementById('claimsDiv').display="none";
}
function funcBackground(){
  document.getElementById('basicDiv').style.display="none";
	document.getElementById('backgroundDiv').style.display="block";
  document.getElementById('figDiv').style.display="none";
  document.getElementById('claimsDiv').style.display="none";
	document.getElementById('navBasic').className = "navi-link"
	document.getElementById('navBackground').className = "navi-link active"
	document.getElementById('navClaims').className = "navi-link"
	document.getElementById('navFigs').className = "navi-link"
document.getElementById('container').style = "padding-top: 50px;"
  console.log('background')
  // document.getElementById('claimsDiv').display="none";
}
function funcFig(){
  document.getElementById('basicDiv').style.display="none";
	document.getElementById('backgroundDiv').style.display="none";
  document.getElementById('figDiv').style.display="block";
  document.getElementById('claimsDiv').style.display="none";
	document.getElementById('navBasic').className = "navi-link"
	document.getElementById('navBackground').className = "navi-link"
	document.getElementById('navClaims').className = "navi-link"
	document.getElementById('navFigs').className = "navi-link active"
	document.getElementById('container').style = "padding-top: 50px;"

  console.log('fig')
  // document.getElementById('claimsDiv').display="none";
}
function funcClaims(){
  document.getElementById('basicDiv').style.display="none";
  document.getElementById('figDiv').style.display="none";
	document.getElementById('backgroundDiv').style.display="none";
  document.getElementById('claimsDiv').style.display="grid";
  document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 130px)"
	document.getElementById('navBasic').className = "navi-link"
	document.getElementById('navBackground').className = "navi-link"
	document.getElementById('navClaims').className = "navi-link active"
	document.getElementById('navFigs').className = "navi-link"
	document.getElementById('container').style = "padding: 0 50px 0px; margin: 0; max-width:100%"
}

function claimExpand(){
	document.getElementById('appaside').style="display: none;"
	document.getElementsByClassName('Group')[0].style.display="none"
  document.getElementById('container').style.padding="0px 50px 0px"
  document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 50px)"
	document.getElementById('claimsToggle').onclick=function() {claimContract()};
	document.getElementById('claimsToggle').innerHTML='<i class="fas fa-compress" style="font-size:1.75rem"></i>';
}

function claimContract(){
	document.getElementById('appaside').style="border-radius:0; background-color:white; padding:50px"
  document.getElementsByClassName('Group')[0].style.display="flex"
	document.getElementById('claimsToggle').onclick=function() {claimExpand()};
	document.getElementById('claimsToggle').innerHTML='<i class="fas fa-expand" style="font-size:1.75rem"></i>';
  document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 130px)"
}

function addIndClaim(){

}
autosize(document.querySelectorAll('textarea'));



//////////////////////////////////////////////////////////////////////////////

function allowDrop(ev) {
  // stopping default behaviour
    ev.preventDefault();
}

function drag(ev) {
  //setting target id
    ev.dataTransfer.setData("text", ev.target.id);
			var data = ev.dataTransfer.getData("text");
setTimeout(()=>document.getElementById(data).className="invisible", 0)
// 		var data = ev.dataTransfer.getData("text");
// 			console.log(data);
// var thenum = data.match(/\d+/)[0]
// 	console.log(thenum);
//
// var targpos = "pos"+thenum;
//
// console.log(targpos)
// document.getElementById(targpos).style.display="none";
}
function dragend(ev){
	// ev.preventDefault();

document.getElementsByClassName('invisible')[0].classList.remove("invisible")
}
function drop(ev) {

    ev.preventDefault();
    //getting target id
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
		console.log(data);
		var thenum = data.match(/\d+/)[0]
			console.log(thenum);
			console.log(ev.target.id)
		var thenum2 = ev.target.id.match(/\d+/)[0]
				console.log(thenum2);
				xx= thenum2;
				// boilertext2();
				// boilertext();
		document.getElementById('figName'+thenum2).innerHTML="<strong>FIG. "+thenum2 +"</strong>"+ bfigs[thenum-1];
		// console.log(bfigs[thenum]);
		// console.log(btext[thenum]);
		figText[thenum2]=btext[thenum-1].replace(/xx/g, xx);
console.log(figText[thenum2])
var checkfiggy = document.getElementsByClassName("figRow");
for (i=1; i<=checkfiggy.length; i++){
	if (document.getElementById('figgy'+i).childNodes.length==0){
		document.getElementById('figName'+i).innerHTML="FIG. "+i;
		figText[i]="";
console.log(i)
console.log(figText[i])
	}
}
}
function drop3(ev){

    ev.preventDefault();
    //getting target id
    var data = ev.dataTransfer.getData("text");

		console.log(data);
		var thenum = data.match(/\d+/)[0]
			console.log(thenum);
					console.log(ev.target);
			console.log(ev.target.id);
		var thenum2 = ev.target.id.match(/\d+/)[0]
				console.log(thenum2);
		  document.getElementById("figgy"+thenum2).appendChild(document.getElementById(data));
				xx= thenum2;
				// boilertext2();
				// boilertext();
		document.getElementById('figName'+thenum2).innerHTML="<strong>FIG. "+thenum2 +"</strong>"+ bfigs[thenum];
		console.log(bfigs[thenum]);
		console.log(btext[thenum]);
		figText[thenum2]=btext[thenum];

var checkfiggy = document.getElementsByClassName("figRow");
for (i=1; i<=checkfiggy.length; i++){
	if (document.getElementById('figgy'+i).childNodes.length==0){
		document.getElementById('figName'+i).innerHTML="FIG. "+i;
		figText[i]="";
console.log(i)
console.log(figText[i])
	}
}
}
function drop2(ev) {
    ev.preventDefault();
    //getting target id
		    var data = ev.dataTransfer.getData("text");
					console.log(data);
		var thenum = data.match(/\d+/)[0]
			console.log(thenum);

var targpos = "pos"+thenum;

		console.log(targpos)
  document.getElementById(targpos).appendChild(document.getElementById(data));
	var checkfiggy = document.getElementsByClassName("figRow");
	for (i=1; i<=checkfiggy.length; i++){
		if (document.getElementById('figgy'+i).childNodes.length==0){
			document.getElementById('figName'+i).innerHTML="FIG. "+i;
			figText[i]="";
		console.log(i)
		console.log(figText[i])

		}
	}


}
///////////////////////////////////////////////////////////////////////////////
function mouseIn(x){
	var y = document.getElementsByClassName("figRow");
	var z = document.getElementsByClassName("figBar");
	var i
	for (i = 0; i < y.length; i++) {
		if (y[i] == x){
			z[i].style.display = 'flex';
		}
	}
}

function mouseOut(x){
	var y = document.getElementsByClassName("figRow");
	var z = document.getElementsByClassName("figBar");
	var i
	for (i = 0; i < y.length; i++) {
		if (y[i] == x){
			z[i].style.display = 'none';
		}
	}
}
///////////////////////////////////////////////////////////////////////////////


$("textarea").keydown(function(e){
	if (e.keyCode == 9) {
		e.preventDefault();
		var start = $(this).get(0).selectionStart;
		var end = $(this).get(0).selectionEnd;

		// set textarea value to: text before caret + tab + text after caret
		$(this).val($(this).val().substring(0, start)
								+ "\t"
								+ $(this).val().substring(end));

		// put caret at right position again
		$(this).get(0).selectionStart =
		$(this).get(0).selectionEnd = start + 1;
	}
    if(e.keyCode == 13){
        var cursorPos = this.selectionStart;
        var curentLine = this.value.substr(0, this.selectionStart).split("\n").pop();
        var indent = curentLine.match(/^\s*/)[0];
        var value = this.value;
        var textBefore = value.substring(0,  cursorPos );
        var textAfter  = value.substring( cursorPos, value.length );

        this.value = textBefore + "\n" + indent + textAfter;
        console.log(textBefore);
        e.preventDefault();
        setCaretPosition(this, cursorPos + indent.length + 1); // +1 is for the \n
    }
});

function setCaretPosition(ctrl, pos)
{

    if(ctrl.setSelectionRange)
    {
        ctrl.focus();
        ctrl.setSelectionRange(pos,pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
////////////////////////////////////////////////////////////////////////////////
function mouseIn2(x){
	var y = document.getElementsByClassName("claimsRow");
	var z = document.getElementsByClassName("claimsBar");
	var i
	for (i = 0; i < y.length; i++) {
		if (y[i] == x){
			z[i].style.visibility = 'visible';
		}
	}
}

function mouseOut2(x){
	var y = document.getElementsByClassName("claimsRow");
	var z = document.getElementsByClassName("claimsBar");
	var i
	for (i = 0; i < y.length; i++) {
		if (y[i] == x){
			z[i].style.visibility  = 'hidden';
		}
	}
}
///////////////////////////////////////////////////////////////////////////////
var selectCount1 = 0;
function select1(){
	selectCount1++
	console.log(selectCount1)
	if (selectCount1 % 2 == 0){
	document.getElementById('preSelector1').style.display = "none";
	var choice1 = document.getElementById("preSelector1").value;
		if (choice1 == "method"){
			document.getElementById("indPreamble1").innerHTML = "<div style='display: contents;'>A computer-implemented method, comprising:</div>";
			var pura = document.getElementsByClassName("depPreamble1a");
					var i;
			for (i=0; i<pura.length; i++){
				document.getElementsByClassName("depPreamble1a")[i].innerHTML="The method of claim ";
			}
			var purb = document.getElementsByClassName("depPreamble1b");
			for (i=0; i<purb.length; i++){
				document.getElementsByClassName("depPreamble1b")[i].innerHTML=", further comprising: ";
			}
		}
		if (choice1 == "system"){
			document.getElementById("indPreamble1").getElementsByTagName('div')[0].innerHTML= "A system, comprising:"
			var div1 = document.createElement('div');
		  div1.innerHTML = "at least one processor; and"
		  document.getElementById("indPreamble1").appendChild(div1);
			var div2 = document.createElement('div');
		  div2.innerHTML = "a memory device including instructions that, when executed by the at least one processor, cause the system to:"
		  document.getElementById("indPreamble1").appendChild(div2);
		var i;
			var pura = document.getElementsByClassName("depPreamble1a");
			for (i=0; i<pura.length; i++){
				document.getElementsByClassName("depPreamble1a")[i].innerHTML="The system of claim ";
			}
			var purb = document.getElementsByClassName("depPreamble1b");
			for (i=0; i<purb.length; i++){
				document.getElementsByClassName("depPreamble1b")[i].innerHTML=", wherein the instructions when executed by the at least one processor further cause the system to: ";
			}
		}
	}
	else{
	document.getElementById('preSelector1').style.display = "initial"
	}
};

var selectCount2 = 0;
function select2(){
	selectCount2++
	if (selectCount2 % 2 == 0){
	document.getElementById('preSelector2').style.display = "none";
	var choice2 = document.getElementById("preSelector2").value;
		if (choice2 == "method"){
			document.getElementById("indPreamble2").innerHTML = "<div style='display: contents;'>A computer-implemented method, comprising:</div>";
			var pura = document.getElementsByClassName("depPreamble2a");
			for (i=0; i<pura.length; i++){
				document.getElementsByClassName("depPreamble2a")[i].innerHTML="The method of claim ";
			}
					var i;
			var purb = document.getElementsByClassName("depPreamble2b");
			for (i=0; i<purb.length; i++){
				document.getElementsByClassName("depPreamble2b")[i].innerHTML=", further comprising: ";
			}
		}
		if (choice2 == "system"){
			document.getElementById("indPreamble2").getElementsByTagName('div')[0].innerHTML= "A system, comprising:"
			var div1 = document.createElement('div');
		  div1.innerHTML = "at least one processor; and"
		  document.getElementById("indPreamble2").appendChild(div1);
			var div2 = document.createElement('div');
		  div2.innerHTML = "a memory device including instructions that, when executed by the at least one processor, cause the system to:"
		  document.getElementById("indPreamble2").appendChild(div2);

			var pura = document.getElementsByClassName("depPreamble2a");
			var i;
			for (i=0; i<pura.length; i++){
				document.getElementsByClassName("depPreamble2a")[i].innerHTML="The system of claim ";
			}
			var purb = document.getElementsByClassName("depPreamble2b");
			for (i=0; i<purb.length; i++){
				document.getElementsByClassName("depPreamble2b")[i].innerHTML=", wherein the instructions when executed by the at least one processor further cause the system to: ";
			}
		}
	}
	else{
	document.getElementById('preSelector2').style.display = "initial"
	}
};

var selectCount3 = 0;
function select3(){
			var i;
	selectCount3++
	if (selectCount3 % 2 == 0){
	document.getElementById('preSelector3').style.display = "none";
	var choice3 = document.getElementById("preSelector3").value;
		if (choice3 == "method"){
			document.getElementById("indPreamble3").innerHTML = "<div style='display: contents;'>A computer-implemented method, comprising:</div>";
			var pura = document.getElementsByClassName("depPreamble3a");
			for (i=0; i<pura.length; i++){
				document.getElementsByClassName("depPreamble3a")[i].innerHTML="The method of claim ";
			}
			var purb = document.getElementsByClassName("depPreamble3b");
			for (i=0; i<purb.length; i++){
				document.getElementsByClassName("depPreamble3b")[i].innerHTML=", further comprising: ";
			}
		}
		if (choice3 == "system"){
			// document.getElementById("indPreamble3").innerHTML="A system, comprising:";
			document.getElementById("indPreamble3").getElementsByTagName('div')[0].innerHTML= "A system, comprising:"
			var div1 = document.createElement('div');
		  div1.innerHTML = "at least one processor; and"
		  document.getElementById("indPreamble3").appendChild(div1);
			var div2 = document.createElement('div');
		  div2.innerHTML = "a memory device including instructions that, when executed by the at least one processor, cause the system to:"
		  document.getElementById("indPreamble3").appendChild(div2);

			var pura = document.getElementsByClassName("depPreamble3a");
			for (i=0; i<pura.length; i++){
				document.getElementsByClassName("depPreamble3a")[i].innerHTML="The system of claim ";
			}
			var purb = document.getElementsByClassName("depPreamble3b");
			for (i=0; i<purb.length; i++){
				document.getElementsByClassName("depPreamble3b")[i].innerHTML=", wherein the instructions when executed by the at least one processor further cause the system to: ";
			}
		}
	}
	else{
	document.getElementById('preSelector3').style.display = "initial"
	}
};

//// focus fig number input in model //
function focusfig(x){
  console.log("hello")
  var target = "figinput"+x;
  console.log(target)
  document.getElementById(target).focus()
}

function autoNumber(x){
var figInputID = "figinput"+x; //get figure number input ID
var figurenumber = document.getElementById(figInputID).value // get figure number value
var displayfignumberID = "figno"+x //get display figure number ID
$('.'+figInputID).text(figurenumber);
document.getElementById(displayfignumberID).value = figurenumber //set display figure number to input values
var reinputID = "refno"+x
var refinputs = document.getElementsByClassName(reinputID) //get reference number display elements
console.log(refinputs)
autoref = "autoRef"+x;
manualref = "manualRef"+x;
var textref = "textref"+x
console.log(autoref)
if (document.getElementById(autoref).checked == true){
  $('.'+reinputID).css('border-color', "lightgray")
  $('.'+reinputID).prop('readonly', true)
  console.log("line 745")
  for (i = 0; i < refinputs.length; i++){
if (refinputs.length <5){
  for (i=0; i<refinputs.length; i++){
    var number = 2*i
    console.log(refinputs[i])
      refinputs[i].value = figurenumber + "0" +number;
      var refID = refinputs[i].id

      $('.'+refID).text(figurenumber + "0" +number);

      console.log(figurenumber + "0" +number)
  }
}else{
    for (i=0; i<5; i++){
      var number = 2*i
      console.log(refinputs[i])
        refinputs[i].value = figurenumber + "0" +number;
        var refID = refinputs[i].id

        $('.'+refID).text(figurenumber + "0" +number);

        console.log(figurenumber + "0" +number)
    }
    for (i=5; i<refinputs.length; i++){
      var number = 2*i
        refinputs[i].value = figurenumber +number;
        var refID = refinputs[i].id
        $('.'+refID).text(figurenumber +number);
        console.log(refID)
        console.log(figurenumber +number)
    }
  }
  }
}

if( figurenumber == ""){
  var figinput = "figinput" +x //get description fig number class
  console.log("761");
  for (i = 0; i < refinputs.length; i++){
    refinputs[i].value = ""
  }
    $('.'+textref).text("___")
    $('.'+figinput).text("___");

}

if( document.getElementById(manualref).checked == true){
  $('.'+reinputID).css('border-color', "#7337EE")
    $('.'+reinputID).prop('readonly', false)
  $('.'+reinputID).val("")
  $('.'+textref).text("___")
}
}

function checkNumber(x){
  var reinputID = "refno"+x
  var refinputs = document.getElementsByClassName(reinputID) //get reference number display elements
var figno = "figno"+x
  for (i = 0; i < refinputs.length; i++){
    var refID = refinputs[i].id
$('.'+refID).text(refinputs[i].value);
 if(refinputs[i].value == ""){
   $('.'+refID).text("___");
 }
  }
}


figuresArray = []
function selectfig(x){
  var figInputID = "figinput"+x; //get figure number input ID
  var figurenumber = document.getElementById(figInputID).value // get figure number value
  var figoverlay = "figoverlay" +x; //get fig selected overlay ID
  var pdfFigure = "pdfFigure" +x;
  $("#"+figoverlay).css( "display", "initial" )
  $("#"+figoverlay).text("FIG. " +figurenumber)

var figtitle = "figtitle" +x;
var spec = "spec"+x;
$("#"+figInputID).addClass("numList");
$("#"+figtitle).addClass("figList");
$("#"+spec).addClass("specList");
$("#"+spec).addClass("specList");

$("#"+pdfFigure).addClass("selectedFig");
$("#"+pdfFigure).attr('data-figid',x);
$("#"+pdfFigure).attr('data-figno',figurenumber);
console.log('fig 6 selected')

var newFigure = {
  $slide: x,
  fig: figurenumber
}
var refs = document.getElementsByClassName("refno"+x);
var refID = []
var refNUM = []
for (i=0; i<refs.length; i++){
  refID[i]= refs[i].id;
  refNUM[i] = refs[i].value;
  newFigure[refID[i]] = refNUM[i]
  console.log(refNUM[i])
}


console.log(newFigure)
figuresArray.push(newFigure);
console.log(figuresArray)
}

function deselectfig(x){
var figInputID = "figinput"+x; //get figure number input ID
var displayfignumberID = "figno"+x //get display figure number ID
var refno = "refno" +x //get display ref number class
var figinput = "figinput" +x //get description fig number class
var textref = "textref" +x //get description ref number class
var figoverlay = "figoverlay" +x; //get fig selected overlay ID
var pdfFigure = "pdfFigure" +x;

$('#'+figInputID).val("");
$('#'+displayfignumberID).val("");
$('.'+refno).val("");
$('.'+figinput).text("___");
$('.'+textref).text("___");
$("#"+figoverlay).css( "display", "none" )

var figtitle = "figtitle" +x;
var spec = "spec"+x;
$("#"+figtitle).removeClass("figList");
$("#"+spec).removeClass("specList");

$("#"+pdfFigure).removeClass("selectedFig");
}

function populateModal(){
$('#exampleModal').html()
}
