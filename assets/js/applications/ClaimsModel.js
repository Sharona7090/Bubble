setupEditor()
zoneCounter = 1

claimsArray=[
  {
    claim:1,
    parent:0,
    zone:1
  },
]
uniqueID = 200

function addClaim(parentclaimNumber, parentID, zone){
  uniqueID++
  console.log(uniqueID)
  // find where to insert new claim objects
  function filterParent(claimObject){
    return (claimObject.parent == parentclaimNumber) // filters for claims having the same parent
  }
    var results = []
    results = claimsArray.filter(filterParent) //results of filer
    if (results.length == 0){
      var newClaimNumber = parentclaimNumber+1
      var highestClaim = parentclaimNumber
    }else{
    var highestIndClaim = results[results.length - 1].claim //highest claim having shared parent
    function filterChild(childObject){
      return (childObject.parent == highestIndClaim) //
      console.log(claimObject.parent)
    }
    var childs = []
    childs=claimsArray.filter(filterChild)
    var childCount = childs.length
    var highestClaim = highestIndClaim+childCount
    var newClaimNumber = highestClaim+1;
  }
//update data Array - increment claim numbers
    claimsArray.forEach(function(claimObject){
      if (claimObject.claim >= newClaimNumber){
        claimObject.claim++
      }
      if (claimObject.parent >= newClaimNumber){
        claimObject.parent++   // increment dependency
      }
    })
//create and insert new object in data Array
    var newClaimObject = {
      claim: newClaimNumber,
      parent: parentclaimNumber,
      zone:zone
    }
    console.log(newClaimObject)
    claimsArray.splice(highestClaim, 0, newClaimObject);
    addclaimCard(newClaimNumber, parentclaimNumber, parentID, zone)
}

function addclaimCard(newClaimNumber, parentclaimNumber, parentID, zone){
  console.log(parentclaimNumber)
  var div = document.createElement(`div`)
  div.classList.add("outerDiv")
  div.classList.add("depouterDiv")
  div.classList.add("draggable-zone"+newClaimNumber)
  div.classList.add("draggable"+parentclaimNumber)
  div.setAttribute("data-claim", newClaimNumber)
  div.setAttribute("data-parent", parentclaimNumber)
  div.setAttribute("data-unique-id", uniqueID)
  div.setAttribute("data-parent-id", parentID)
//
// setDepPreamble()
// var setDepPreamble = `<span class="mceNonEditable" noneditable=true><span class="claimNo">`+newClaimNumber+`. </span><span class="preamble">The computer implemented method of claim </span><span class = "depNo" > `+parentclaimNumber+`, </span><span class="preambleLevelBody" contentEditable=true> </span></span>`
    var setDepPreamble = depPreambleArray[zone]
    console.log(setDepPreamble)
    div.innerHTML = `
    <div id="innerDiv`+newClaimNumber+`"data-claim="`+newClaimNumber+`" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar">
        <button id="deletebtn`+newClaimNumber+`"class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(`+newClaimNumber+`)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle = "`+parentclaimNumber+`" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle`+parentclaimNumber+`" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="addbtn`+newClaimNumber+`"class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(`+newClaimNumber+`,`+uniqueID+`,`+zone+`)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor`+newClaimNumber+`">
        <p  class="preambleBlock" id="preambleBlock`+newClaimNumber+`">
        <span class="setCursor depPreamble`+zone+`">`+setDepPreamble+`</span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none"></button>
      </div>`;


    setTimeout(function(){ document.getElementById("outerDiv"+parentclaimNumber).appendChild(div);
    // KTTinymce.init(newClaimNumber);
    updateView()}, 50);
// document.getElementById("outerDiv"+parentclaimNumber).appendChild(div);

}

function updateView(){
  var allOuterDiv = document.getElementsByClassName("outerDiv");
  var allInnerDiv = document.getElementsByClassName("innerDiv");
  var allBtnHandle = document.getElementsByClassName("handle");
  var allBtnDel = document.getElementsByClassName("btnDel");
  var allBtnAdd = document.getElementsByClassName("btnAdd");
  var allClaimNo = document.getElementsByClassName("claimNo")
  var allDepNo = document.getElementsByClassName("depNo")
  var allBtnSetPreamble = document.getElementsByClassName("btnSetPreamble")
  var allDepPreamble = document.getElementsByClassName(`depPreamble`)
  var cardCount = allOuterDiv.length
  var modelCount = 0
  claimsArray.forEach(function(claimObject){
    modelCount++
  })
  for (i = 0; i < allOuterDiv.length; i++) { //
    var claimNumber = claimsArray[i].claim
    var dependency = claimsArray[i].parent
    var zone = claimsArray[i].zone
    allOuterDiv[i].id = "outerDiv" +claimNumber

  var last1= $(allOuterDiv[i]).attr(`class`).split(` `).pop();
  allOuterDiv[i].classList.remove(last1)
 var last2= $(allOuterDiv[i]).attr(`class`).split(` `).pop();
  allOuterDiv[i].classList.remove(last2)

  var lasthandle= $(allBtnHandle[i]).attr(`class`).split(` `).pop();
   allBtnHandle[i].classList.remove(lasthandle)
   allBtnHandle[i].classList.add(`draggable-handle`+dependency)
   allBtnHandle[i].setAttribute(`data-handle`, dependency)

    allOuterDiv[i].classList.add(`draggable-zone`+claimNumber)
    if(allOuterDiv[i].classList.contains("depouterDiv")){
    allOuterDiv[i].classList.add(`draggable`+dependency)
  }else{
    allOuterDiv[i].classList.add(`draggable_NA`)
  }

      allOuterDiv[i].setAttribute("data-claim", claimNumber)
      allOuterDiv[i].setAttribute("data-parent", dependency)
      var unique_ID = allOuterDiv[i].getAttribute(`data-unique-id`)
    allInnerDiv[i].id = "innerDiv" +claimNumber
    allInnerDiv[i].setAttribute(`data-claim`, claimNumber)
    allBtnAdd[i].id = "btnAdd" +claimNumber
    allClaimNo[i].id = "claimNo" +claimNumber
    allClaimNo[i].innerHTML = claimNumber+". "

    allDepNo[i].id = "depno"+ claimNumber
    allDepNo[i].innerHTML = dependency+","


    var newaddfunction = "addClaim("+claimNumber+", "+unique_ID+", "+zone+")"
    // console.log("unique_ID: ", unique_ID)
    allBtnAdd[i].setAttribute("onclick", newaddfunction)

  allBtnDel[i].id = "btnDel" +claimNumber
  var newdelfunction = "deleteClaim("+claimNumber+")"
  allBtnDel[i].setAttribute("onclick",newdelfunction)
  var newsetfunction = "setPreamble(this.name, "+claimNumber+")"
allBtnSetPreamble[i].setAttribute("onclick",newsetfunction)
  }

  cleanDraggable(allOuterDiv)
}


function deleteClaim(claimNumber){
//add claim content to deleted list
var deletedContent = document.getElementById(`innerDiv` + claimNumber).innerText
var div = document.createElement('div')
div.innerHTML = deletedContent;
div.classList.add("deletedClaim")
document.getElementById("deletedList").append(div)


  delClaimNumber = Number(claimNumber)
  arrayPosition = delClaimNumber-1
  claimsArray.splice(arrayPosition,1);

//update data Array - increment claim numbers
claimsArray.forEach(function(claimObject){
  if (claimObject.claim > delClaimNumber){
    claimObject.claim--
  }
  if (claimObject.parent >= delClaimNumber){
    claimObject.parent--   // increment dependency
  }
})

document.getElementById("innerDiv"+claimNumber).remove();
var depChilds = $("#outerDiv"+claimNumber).contents();
$("#outerDiv"+claimNumber).replaceWith(depChilds);

updateView()
}



function openDeletedList(){
  document.getElementById("kt_quick_search").classList.add("offcanvas-on");
  document.getElementById("kt_quick_search").style.display = "block"

  document.getElementById("deletedOverlay").style.display = "block"
}
function closeDeletedList(){
  document.getElementById("kt_quick_search").style.display = "none"
  document.getElementById("deletedOverlay").style.display = "none"
}

function addIC(){
  zoneCounter++
  uniqueID++
  var newICnumber = claimsArray[claimsArray.length-1].claim +1
  var newICObject = {
    claim: newICnumber,
    parent: 0,
    zone: zoneCounter
  }
  claimsArray.push(newICObject)
  depPreambleArray.push(`<span class="mceNonEditable" noneditable=true><span class="claimNo">'+newClaimNumber+'. </span><span class="preamble">The computer implemented method of claim </span><span class = "depNo" > '+parentclaimNumber+', </span><span class="preambleLevelBody" contentEditable=true> </span></span>`)
  console.log(claimsArray)
  console.log(zoneCounter)
// `+newICnumber+`
  var div = document.createElement(`div`)
  div.classList.add("icSet")
  div.classList.add("col-md-4")
  div.classList.add("draggable0")
  div.innerHTML = `<div id="outerDiv`+newICnumber+`" data-claim= "`+newICnumber+`" data-unique-id="`+uniqueID+`" data-parent-id="000" class="draggable-zone card my-3 card-block d-flex no-b ClaimSet outerDiv draggable-zone1 draggable_NA" style=""><div id= "innerDiv`+newICnumber+`" data-claim= "`+newICnumber+`"  class="card-body claimsRow claimGroup1 innerDiv"><div class="lobilist-actions claimsBar" style="visibility:visible"><span class="depNo" style="display:none"></span>
  <div class="dropdown preambleBtn "> <button type="button" class="btn btn-icon btn-outline-secondary btnPreamble" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="-200, 0">
     <i class="fas fa-cog"></i>
   </button>				<form id="preambleBox`+zoneCounter+`" class="dropdown-menu preambleBox  p-0">
  											<div class="card card-custom example example-compact">
  												<div class="card-header preamble-header-card" style="">
  													<h3 class="card-title">
  														Preamble
  													</h3>
  												</div>
  										<div class="card-body preamble-body-card">
  										<div class="form-group">
  										    <div id="radioList`+zoneCounter+`" class="radio-list">
  										        <label class="radio">
  										            <input type="radio" class="method" checked="true" name="`+zoneCounter+`" value="method" onclick="checkPreamble(this.value, this.name)"/>
  										            <span></span>
  										            Method - Software
  										        </label>
  										        <label class="radio">
  										            <input type="radio" class="system" name="`+zoneCounter+`" value="system" onclick="checkPreamble(this.value, this.name)"/>
  										            <span></span>
  										            System - Software
  										        </label>
  										        <label class="radio">
  										            <input type="radio" class="crm" name="`+zoneCounter+`" value="crm" onclick="checkPreamble(this.value, this.name)"/>
  										            <span></span>
  										            CRM - Software
  										        </label>
  														<label class="radio">
  										            <input type="radio" class="custom" name="`+zoneCounter+`" value="custom" onclick="checkPreamble(this.value, this.name)"/>
  										            <span></span>
  										            Custom
  																<div id="customPreamble`+zoneCounter+`" style="display:none">
  																<div class="preambleCustomDiv">IC:	<input id="" style="" type="text" class="form-control comments preambleCustomInput customIC" placeholder="E.g., A system..." required="">, comprising...</div>
  																<div class="preambleCustomDiv">DC:	<input id="customDC" style="" type="text" class="form-control comments preambleCustomInput customDC" placeholder="E.g., The system..." required=""> of claim...</div>
  															</div>
  										        </label>

  										    </div>

  										</div>
  									</div>
  									<div class="card-footer preamble-footer-card">
  										<button id="" type="button" class="btn btn-primary mr-2 btnSetPreamble" name= "`+zoneCounter+`" onclick="setPreamble(this.name,`+newICnumber+` )">Set</button>
  									</div>
  </div>
  </form></div><button id="" data-handle = "" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle0"><i class="fas fa-arrows-alt-h"></i></button><button id="addbtn`+newICnumber+`" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(`+newICnumber+`, `+uniqueID+`, `+zoneCounter+`)"><i class="fas fa-plus"></i></button><button class="btnDel" style="display:none"></button></div>

  <div class="ADeditor ADeditorInd" id="ADeditor`+newICnumber+`">
    <p class="preambleBlock indPreambleBlock indPreamble`+zoneCounter+`">
      <span class="claimNo">`+newICnumber+`. </span>
      <span class="preamble preambleInclude">A computer implemented method, comprising:</span>
    </p>
    <p class="claimBodyLine" style="text-indent:.5in" contenteditable="true"></p>
  </div>
    </div>	</div>`

  document.getElementById("claimsContainer").appendChild(div);
document.getElementById("claimsContainer").scrollTo({
  top: 0,
  left: 100000,
  behavior: `smooth`
})
// KTTinymce.init(newICnumber);
// setTimeout(defaultPreamble(newICnumber), 300);

}
