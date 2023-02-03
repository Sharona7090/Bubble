function initsearchbar(){
  if(document.getElementById('apprepeatinggroup')){
var groups = document.getElementById('apprepeatinggroup').children
var groupcount = groups.length
document.getElementById("wipsearchbar").addEventListener("keyup", wipfilter);
}
}

function wipfilter(){
  var keyword = document.getElementById('wipsearchbar').value.trim()
  for (var i=0; i<groupcount; i++){ 
    var currentgroup = groups[i]
    var currentfield = currentgroup.children
    if (currentfield[0].innerText.includes(keyword) ||
        currentfield[1].innerText.includes(keyword) ||
        currentfield[2].innerText.includes(keyword) ||
        currentfield[3].innerText.includes(keyword) ||
        keyword == ""
    ){
      currentgroup.style.display="flex"
        }
    else{
      currentgroup.style.display="none"
    }
  }
}
