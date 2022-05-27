function savecontent(){


  saveApplication = JSON.stringify(
  {
    saveClaimsArray: claimsArray,
    saveClaimsContainer: document.getElementById('claimsContainer').innerHTML,
    saveBgCategory: bgCategory,
    saveBgText: document.getElementById('bgText').value,
    saveFigures: figuresArray
  }
)

  bubble_fn_savecontent(saveApplication)
}
function loadcontent(){

}
