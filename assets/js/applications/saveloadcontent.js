function savecontent(){
  savedApplication = JSON.stringify(
  {
    savedClaimsArray: claimsArray,
    savedClaimsContainer: document.getElementById('claimsContainer').innerHTML,
    savedBgCategory: bgCategory,
    savedBgText: document.getElementById('bgText').value,
    savedFiguresArray: figuresArray
  }
)
  bubble_fn_savecontent(savedApplication)
}
function loadcontent(loadApplication){
  accessobject = loadApplication
  console.log("loadApplication: ", loadApplication)
  claimsArray = loadApplication.savedClaimsArray;
  figuresArray = loadApplication.savedFiguresArray;
  document.getElementById('categoryfield').innerText = loadApplication.savedBgCategory;
  document.getElementById('bgText').value = loadApplication.savedBgText;
  document.getElementById("claimsContainer").innerHTML = loadApplication.savedClaimsContainer;

for (var i=0; i<loadApplication.savedFiguresArray.length; i++){
  var x = loadApplication.savedFiguresArray[i].$slide
  var figInputID = "figinput"+x; //get figure number input ID
  var figurenumber = loadApplication.savedFiguresArray[i].fig // get figure number value
  document.getElementById(`figno${x}`).value = figurenumber
  document.getElementById(figInputID).value = figurenumber
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

  var refs = document.getElementsByClassName("refno"+x);
  console.log(refs)
  console.log(refs.length)
  console.log(x)
  for (var j=0; j<refs.length; j++){
    var k=j+1
    console.log(j)
    console.log(refs[j])
    var refidproperty = x+"_"+k
    var refnumber = loadApplication.savedFiguresArray[i][refidproperty]
    document.getElementById(`${x}_${k}`).value = refnumber
  }
  globalcurrentfig = x
  
checkNumber()
var figInputID = "figinput"+x; //get figure number input ID
var figurenumber = document.getElementById(figInputID).value
$('.'+figInputID).text(figurenumber);
document.getElementById(`selectfigbtn${x}`).disabled = true;
document.getElementById(`deselectfigbtn${x}`).disabled = false;
  if (loadApplication.savedFiguresArray[i].radio == "auto"){
  document.getElementById('autoRef'+x).checked = true
  document.getElementById('manualRef'+x).checked = false
  }
  if (loadApplication.savedFiguresArray[i].radio == "manual"){
  document.getElementById('manualRef'+x).checked = true
  document.getElementById('autoRef'+x).checked = false
  }
}
}
