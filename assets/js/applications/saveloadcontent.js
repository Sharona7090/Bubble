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




}
