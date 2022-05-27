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
  console.log("loadApplication: ", loadApplication)
  console.log(loadApplication.savedFiguresArray[0].radio)
  claimsArray = loadApplication.savedClaimsArray;
  figuresArray = loadApplication.savedFiguresArray;
  document.getElementById('categoryfield').innerText = loadApplication.savedBgCategory;
  document.getElementById('bgText').value = loadApplication.savedBgText;
  document.getElementById("claimsContainer").innerHTML = loadApplication.savedClaimsContainer;
  loadApplication.savedFiguresArray[0].radio.checked = true

for (i=0; i<loadApplication.savedFiguresArray.length; i++){
  var x = loadApplication.savedFiguresArray[i].$slide
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

}


}
