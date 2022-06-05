
// editableEl.onmouseup = editableEl.onkeyup = reportCharacterPrecedingCaret;


// // Class definition
// var KTSelect2 = function() {
//  // Private functions
//  var demos = function() {
//   // basic
//   $('#kt_select2_1').select2({
//    placeholder: "Select a state"
//   });
//
//   // nested
//   $('#kt_select2_2').select2({
//    placeholder: "Select a state"
//   });
//
//   // multi select
//   $('#kt_select2_3').select2({
//    placeholder: "Select all that apply"
//   });
//
//   // basic
//   $('#kt_select2_4').select2({
//    placeholder: "Select a state",
//    allowClear: true
//   });
//
//   // loading data from array
//   var data = [{
//    id: 0,
//    text: 'Enhancement'
//   }, {
//    id: 1,
//    text: 'Bug'
//   }, {
//    id: 2,
//    text: 'Duplicate'
//   }, {
//    id: 3,
//    text: 'Invalid'
//   }, {
//    id: 4,
//    text: 'Wontfix'
//   }];

//   $('#kt_select2_5').select2({
//    placeholder: "Select a value",
//    data: data
//
// });




  // function formatRepo(repo) {
  //  if (repo.loading) return repo.text;
  //  var markup = "<div class='select2-result-repository clearfix'>" +
  //   "<div class='select2-result-repository__meta'>" +
  //   "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
  //  if (repo.description) {
  //   markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
  //  }
  //  markup += "<div class='select2-result-repository__statistics'>" +
  //   "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
  //   "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
  //   "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
  //   "</div>" +
  //   "</div></div>";
  //  return markup;
  // }

  // function formatRepoSelection(repo) {
  //  return repo.full_name || repo.text;
  // }

  // $("#kt_select2_6").select2({
  //  placeholder: "Search for git repositories",
  //  allowClear: true,
  //  ajax: {
  //   url: "https://api.github.com/search/repositories",
  //   dataType: 'json',
  //   delay: 250,
  //   data: function(params) {
  //    return {
  //     q: params.term, // search term
  //     page: params.page
  //    };
  //   },
  //   processResults: function(data, params) {
  //    // parse the results into the format expected by Select2
  //    // since we are using custom formatting functions we do not need to
  //    // alter the remote JSON data, except to indicate that infinite
  //    // scrolling can be used
  //    params.page = params.page || 1;
  //
  //    return {
  //     results: data.items,
  //     pagination: {
  //      more: (params.page * 30) < data.total_count
  //     }
  //    };
  //   },
  //   cache: true
  //  },
  //  escapeMarkup: function(markup) {
  //   return markup;
  //  }, // let our custom formatter work
  //  minimumInputLength: 1,
  //  templateResult: formatRepo, // omitted for brevity, see the source of this page
  //  templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
  // });

  // custom styles

  // tagging support
 //  $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({
 //   placeholder: "Select all the apply",
 //  });
 //
 //  // disabled mode
 //  $('#kt_select2_7').select2({
 //   placeholder: "Select an option"
 //  });
 //
 //  // disabled results
 //  $('#kt_select2_8').select2({
 //   placeholder: "Select an option"
 //  });
 //
 //  // limiting the number of selections
 //  $('#kt_select2_9').select2({
 //   placeholder: "Select an option",
 //   maximumSelectionLength: 2
 //  });
 //
 //  // hiding the search box
 //  $('#kt_select2_10').select2({
 //   placeholder: "Select an option",
 //   minimumResultsForSearch: Infinity
 //  });
 //
 //  // tagging support
 //  $('#kt_select2_11').select2({
 //   placeholder: "Add a tag",
 //   tags: true
 //  });
 //
 //  // disabled results
 //  $('.kt-select2-general').select2({
 //   placeholder: "Select an option"
 //  });
 // }
 //
 // var modalDemos = function() {
 //  $('#kt_select2_modal').on('shown.bs.modal', function () {
 //   // basic
 //   $('#kt_select2_1_modal').select2({
 //    placeholder: "Select a state"
 //   });
 //
 //   // nested
 //   $('#kt_select2_2_modal').select2({
 //    placeholder: "Select a state"
 //   });
 //
 //   // multi select
 //   $('#kt_select2_3_modal').select2({
 //    placeholder: "Select a state",
 //   });
 //
 //   // basic
 //   $('#kt_select2_4_modal').select2({
 //    placeholder: "Select a state",
 //    allowClear: true
 //   });
 //  });
 // }

 // Public functions
//  return {
//   init: function() {
// 		$('#kt_select2_2').select2({
// 		 placeholder: "Select a state"
// 		});
//    demos();
//    modalDemos();
//   }
//  };
// }();

// Initialization









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


// function funcBasic(){
//   document.getElementById('basicDiv').style.display="block";
//   document.getElementById('backgroundDiv').style.display="none";
//   document.getElementById('figDiv').style.display="none";
//   document.getElementById('claimsDiv').style.display="none";
// 	document.getElementById('navBasic').className = "navi-link active"
// 	document.getElementById('navBackground').className = "navi-link"
// 	document.getElementById('navClaims').className = "navi-link"
// 	document.getElementById('navFigs').className = "navi-link"
// document.getElementById('container').style = "padding-top: 50px;"
//   console.log('basic')
// }
// function funcBackground(){
//   document.getElementById('basicDiv').style.display="none";
// 	document.getElementById('backgroundDiv').style.display="block";
//   document.getElementById('figDiv').style.display="none";
//   document.getElementById('claimsDiv').style.display="none";
// 	document.getElementById('navBasic').className = "navi-link"
// 	document.getElementById('navBackground').className = "navi-link active"
// 	document.getElementById('navClaims').className = "navi-link"
// 	document.getElementById('navFigs').className = "navi-link"
// document.getElementById('container').style = "padding-top: 50px;"
//   console.log('background')
//
// }
// function funcFig(){
//   document.getElementById('basicDiv').style.display="none";
// 	document.getElementById('backgroundDiv').style.display="none";
//   document.getElementById('figDiv').style.display="block";
//   document.getElementById('claimsDiv').style.display="none";
// 	document.getElementById('navBasic').className = "navi-link"
// 	document.getElementById('navBackground').className = "navi-link"
// 	document.getElementById('navClaims').className = "navi-link"
// 	document.getElementById('navFigs').className = "navi-link active"
// 	document.getElementById('container').style = "padding-top: 50px;"
//   console.log('fig')
//
// }
// function funcClaims(){
//   document.getElementById('basicDiv').style.display="none";
//   document.getElementById('figDiv').style.display="none";
// 	document.getElementById('backgroundDiv').style.display="none";
//   document.getElementById('claimsDiv').style.display="grid";
//   document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 130px)"
// 	document.getElementById('navBasic').className = "navi-link"
// 	document.getElementById('navBackground').className = "navi-link"
// 	document.getElementById('navClaims').className = "navi-link active"
// 	document.getElementById('navFigs').className = "navi-link"
// 	document.getElementById('container').style = "padding: 0 50px 0px; margin: 0; max-width:100%"
// }





//////////////////////////////////////////////////////////////////////////////

// function allowDrop(ev) {
//   // stopping default behaviour
//     ev.preventDefault();
// }
//
// function drag(ev) {
//   //setting target id
//     ev.dataTransfer.setData("text", ev.target.id);
// 			var data = ev.dataTransfer.getData("text");
// setTimeout(()=>document.getElementById(data).className="invisible", 0)
// // 		var data = ev.dataTransfer.getData("text");
// // 			console.log(data);
// // var thenum = data.match(/\d+/)[0]
// // 	console.log(thenum);
// //
// // var targpos = "pos"+thenum;
// //
// // console.log(targpos)
// // document.getElementById(targpos).style.display="none";
// }
// function dragend(ev){
// 	// ev.preventDefault();
//
// document.getElementsByClassName('invisible')[0].classList.remove("invisible")
// }
// function drop(ev) {
//
//     ev.preventDefault();
//     //getting target id
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// 		console.log(data);
// 		var thenum = data.match(/\d+/)[0]
// 			console.log(thenum);
// 			console.log(ev.target.id)
// 		var thenum2 = ev.target.id.match(/\d+/)[0]
// 				console.log(thenum2);
// 				xx= thenum2;
// 				// boilertext2();
// 				// boilertext();
// 		document.getElementById('figName'+thenum2).innerHTML="<strong>FIG. "+thenum2 +"</strong>"+ bfigs[thenum-1];
// 		// console.log(bfigs[thenum]);
// 		// console.log(btext[thenum]);
// 		figText[thenum2]=btext[thenum-1].replace(/xx/g, xx);
// console.log(figText[thenum2])
// var checkfiggy = document.getElementsByClassName("figRow");
// for (i=1; i<=checkfiggy.length; i++){
// 	if (document.getElementById('figgy'+i).childNodes.length==0){
// 		document.getElementById('figName'+i).innerHTML="FIG. "+i;
// 		figText[i]="";
// console.log(i)
// console.log(figText[i])
// 	}
// }
// }
// function drop3(ev){
//
//     ev.preventDefault();
//     //getting target id
//     var data = ev.dataTransfer.getData("text");
//
// 		console.log(data);
// 		var thenum = data.match(/\d+/)[0]
// 			console.log(thenum);
// 					console.log(ev.target);
// 			console.log(ev.target.id);
// 		var thenum2 = ev.target.id.match(/\d+/)[0]
// 				console.log(thenum2);
// 		  document.getElementById("figgy"+thenum2).appendChild(document.getElementById(data));
// 				xx= thenum2;
// 				// boilertext2();
// 				// boilertext();
// 		document.getElementById('figName'+thenum2).innerHTML="<strong>FIG. "+thenum2 +"</strong>"+ bfigs[thenum];
// 		console.log(bfigs[thenum]);
// 		console.log(btext[thenum]);
// 		figText[thenum2]=btext[thenum];
//
// var checkfiggy = document.getElementsByClassName("figRow");
// for (i=1; i<=checkfiggy.length; i++){
// 	if (document.getElementById('figgy'+i).childNodes.length==0){
// 		document.getElementById('figName'+i).innerHTML="FIG. "+i;
// 		figText[i]="";
// console.log(i)
// console.log(figText[i])
// 	}
// }
// }
// function drop2(ev) {
//     ev.preventDefault();
//     //getting target id
// 		    var data = ev.dataTransfer.getData("text");
// 					console.log(data);
// 		var thenum = data.match(/\d+/)[0]
// 			console.log(thenum);
//
// var targpos = "pos"+thenum;
//
// 		console.log(targpos)
//   document.getElementById(targpos).appendChild(document.getElementById(data));
// 	var checkfiggy = document.getElementsByClassName("figRow");
// 	for (i=1; i<=checkfiggy.length; i++){
// 		if (document.getElementById('figgy'+i).childNodes.length==0){
// 			document.getElementById('figName'+i).innerHTML="FIG. "+i;
// 			figText[i]="";
// 		console.log(i)
// 		console.log(figText[i])
//
// 		}
// 	}
//
//
// }
///////////////////////////////////////////////////////////////////////////////
// function mouseIn(x){
// 	var y = document.getElementsByClassName("figRow");
// 	var z = document.getElementsByClassName("figBar");
// 	var i
// 	for (i = 0; i < y.length; i++) {
// 		if (y[i] == x){
// 			z[i].style.display = 'flex';
// 		}
// 	}
// }

// function mouseOut(x){
// 	var y = document.getElementsByClassName("figRow");
// 	var z = document.getElementsByClassName("figBar");
// 	var i
// 	for (i = 0; i < y.length; i++) {
// 		if (y[i] == x){
// 			z[i].style.display = 'none';
// 		}
// 	}
// }
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
// var selectCount1 = 0;
// function select1(){
// 	selectCount1++
// 	console.log(selectCount1)
// 	if (selectCount1 % 2 == 0){
// 	document.getElementById('preSelector1').style.display = "none";
// 	var choice1 = document.getElementById("preSelector1").value;
// 		if (choice1 == "method"){
// 			document.getElementById("indPreamble1").innerHTML = "<div style='display: contents;'>A computer-implemented method, comprising:</div>";
// 			var pura = document.getElementsByClassName("depPreamble1a");
// 					var i;
// 			for (i=0; i<pura.length; i++){
// 				document.getElementsByClassName("depPreamble1a")[i].innerHTML="The method of claim ";
// 			}
// 			var purb = document.getElementsByClassName("depPreamble1b");
// 			for (i=0; i<purb.length; i++){
// 				document.getElementsByClassName("depPreamble1b")[i].innerHTML=", further comprising: ";
// 			}
// 		}
// 		if (choice1 == "system"){
// 			document.getElementById("indPreamble1").getElementsByTagName('div')[0].innerHTML= "A system, comprising:"
// 			var div1 = document.createElement('div');
// 		  div1.innerHTML = "at least one processor; and"
// 		  document.getElementById("indPreamble1").appendChild(div1);
// 			var div2 = document.createElement('div');
// 		  div2.innerHTML = "a memory device including instructions that, when executed by the at least one processor, cause the system to:"
// 		  document.getElementById("indPreamble1").appendChild(div2);
// 		var i;
// 			var pura = document.getElementsByClassName("depPreamble1a");
// 			for (i=0; i<pura.length; i++){
// 				document.getElementsByClassName("depPreamble1a")[i].innerHTML="The system of claim ";
// 			}
// 			var purb = document.getElementsByClassName("depPreamble1b");
// 			for (i=0; i<purb.length; i++){
// 				document.getElementsByClassName("depPreamble1b")[i].innerHTML=", wherein the instructions when executed by the at least one processor further cause the system to: ";
// 			}
// 		}
// 	}
// 	else{
// 	document.getElementById('preSelector1').style.display = "initial"
// 	}
// };

// var selectCount2 = 0;
// function select2(){
// 	selectCount2++
// 	if (selectCount2 % 2 == 0){
// 	document.getElementById('preSelector2').style.display = "none";
// 	var choice2 = document.getElementById("preSelector2").value;
// 		if (choice2 == "method"){
// 			document.getElementById("indPreamble2").innerHTML = "<div style='display: contents;'>A computer-implemented method, comprising:</div>";
// 			var pura = document.getElementsByClassName("depPreamble2a");
// 			for (i=0; i<pura.length; i++){
// 				document.getElementsByClassName("depPreamble2a")[i].innerHTML="The method of claim ";
// 			}
// 					var i;
// 			var purb = document.getElementsByClassName("depPreamble2b");
// 			for (i=0; i<purb.length; i++){
// 				document.getElementsByClassName("depPreamble2b")[i].innerHTML=", further comprising: ";
// 			}
// 		}
// 		if (choice2 == "system"){
// 			document.getElementById("indPreamble2").getElementsByTagName('div')[0].innerHTML= "A system, comprising:"
// 			var div1 = document.createElement('div');
// 		  div1.innerHTML = "at least one processor; and"
// 		  document.getElementById("indPreamble2").appendChild(div1);
// 			var div2 = document.createElement('div');
// 		  div2.innerHTML = "a memory device including instructions that, when executed by the at least one processor, cause the system to:"
// 		  document.getElementById("indPreamble2").appendChild(div2);
//
// 			var pura = document.getElementsByClassName("depPreamble2a");
// 			var i;
// 			for (i=0; i<pura.length; i++){
// 				document.getElementsByClassName("depPreamble2a")[i].innerHTML="The system of claim ";
// 			}
// 			var purb = document.getElementsByClassName("depPreamble2b");
// 			for (i=0; i<purb.length; i++){
// 				document.getElementsByClassName("depPreamble2b")[i].innerHTML=", wherein the instructions when executed by the at least one processor further cause the system to: ";
// 			}
// 		}
// 	}
// 	else{
// 	document.getElementById('preSelector2').style.display = "initial"
// 	}
// };
//
// var selectCount3 = 0;
// function select3(){
// 			var i;
// 	selectCount3++
// 	if (selectCount3 % 2 == 0){
// 	document.getElementById('preSelector3').style.display = "none";
// 	var choice3 = document.getElementById("preSelector3").value;
// 		if (choice3 == "method"){
// 			document.getElementById("indPreamble3").innerHTML = "<div style='display: contents;'>A computer-implemented method, comprising:</div>";
// 			var pura = document.getElementsByClassName("depPreamble3a");
// 			for (i=0; i<pura.length; i++){
// 				document.getElementsByClassName("depPreamble3a")[i].innerHTML="The method of claim ";
// 			}
// 			var purb = document.getElementsByClassName("depPreamble3b");
// 			for (i=0; i<purb.length; i++){
// 				document.getElementsByClassName("depPreamble3b")[i].innerHTML=", further comprising: ";
// 			}
// 		}
// 		if (choice3 == "system"){
// 			// document.getElementById("indPreamble3").innerHTML="A system, comprising:";
// 			document.getElementById("indPreamble3").getElementsByTagName('div')[0].innerHTML= "A system, comprising:"
// 			var div1 = document.createElement('div');
// 		  div1.innerHTML = "at least one processor; and"
// 		  document.getElementById("indPreamble3").appendChild(div1);
// 			var div2 = document.createElement('div');
// 		  div2.innerHTML = "a memory device including instructions that, when executed by the at least one processor, cause the system to:"
// 		  document.getElementById("indPreamble3").appendChild(div2);
//
// 			var pura = document.getElementsByClassName("depPreamble3a");
// 			for (i=0; i<pura.length; i++){
// 				document.getElementsByClassName("depPreamble3a")[i].innerHTML="The system of claim ";
// 			}
// 			var purb = document.getElementsByClassName("depPreamble3b");
// 			for (i=0; i<purb.length; i++){
// 				document.getElementsByClassName("depPreamble3b")[i].innerHTML=", wherein the instructions when executed by the at least one processor further cause the system to: ";
// 			}
// 		}
// 	}
// 	else{
// 	document.getElementById('preSelector3').style.display = "initial"
// 	}
// };
