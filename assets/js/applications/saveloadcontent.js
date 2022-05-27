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
  // for (var j=0; j<refs.length; i++){
    // var k=j+1
    // console.log(j)
    // console.log(refs[j])
    // var refidproperty = x+"_"+k
    // var refnumber = loadApplication.savedFiguresArray[0][refidproperty]
    // document.getElementById(`${x}_${k}`).value = refnumber
  // }

  // if (loadApplication.savedFiguresArray[i].radio == "auto"){
  // document.getElementById('autoRef'+x).checked = true
  // }
  // if (loadApplication.savedFiguresArray[i].radio == "manual"){
  // document.getElementById('manualRef'+x).checked = true
  // }
}


}
