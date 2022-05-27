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


  // var application = JSON.parse(loadApplication)
  // console.log("parsed: ", application)
  claimsArray = loadApplication.savedClaimsArray;
  figuresArray = loadApplication.savedFiguresArray;
  document.getElementById('categoryfield').innerText = loadApplication.savedBgCategory;
  document.getElementById('bgText').value = loadApplication.savedBgText;
  document.getElementById("claimsContainer").innerHTML = loadApplication.savedClaimsContainer;
  loadApplication.savedFiguresArray.radio.checked = true

}
