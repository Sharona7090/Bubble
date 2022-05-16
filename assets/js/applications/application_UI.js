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
	document.getElementById('kt_header').style="display: none;"
	document.getElementById('kt_wrapper').style="padding:0px 15px;"
  document.getElementById('container').style.padding="0px 50px 0px;"
  document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 50px)"
	document.getElementById('claimsToggle').onclick=function() {claimContract()};
	document.getElementById('claimsToggle').innerHTML='<i class="fas fa-compress" style="font-size:1.75rem"></i>';
}

function claimContract(){
	document.getElementById('appaside').style="border-radius:0; background-color:white; padding:50px"
	document.getElementById('kt_header').style="display: inherit;"
	document.getElementById('kt_wrapper').style="padding:"
	document.getElementById('claimsToggle').onclick=function() {claimExpand()};
	document.getElementById('claimsToggle').innerHTML='<i class="fas fa-expand" style="font-size:1.75rem"></i>';
  document.getElementById('claimsDiv').style.gridTemplateRows="50px calc(100vh - 130px)"
}

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

function show(){
  var thing = document.getElementById('set1').value;
  console.log(thing)
}
