initclaimsui(){
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
}



function claimExpand(){
	document.getElementById('bubbleappsidemenu').style.display= "none"
	document.getElementById('bubbleheader').style.display="none"
  // document.getElementById('container').style.padding="0px 50px 0px"
  document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 50px)"
	document.getElementById('claimsToggle').onclick=function() {claimContract()};
	document.getElementById('claimsToggle').innerHTML='<i class="fas fa-compress" style="font-size:1.75rem"></i>';
}

function claimContract(){
	document.getElementById('bubbleappsidemenu').style.display="grid"
  document.getElementById('bubbleheader').style.display="flex"
	document.getElementById('claimsToggle').onclick=function() {claimExpand()};
	document.getElementById('claimsToggle').innerHTML='<i class="fas fa-expand" style="font-size:1.75rem"></i>';
  document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 130px)"
}


///////// PREAMBLE //////////////

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

////// CLAIMS EDIT BAR /////////////////////////////////////////////////
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
