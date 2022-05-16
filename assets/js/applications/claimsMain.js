function addICset(){
  var newClaimNumber = document.getElementsByClassName("outerDiv").length+1
  var indCount = document.getElementsByClassName("icSet").length+1
  var div = document.createElement('div')
  div.classList.add("icSet")
  div.classList.add("col-md-4")
  div.setAttribute("data-IC",indCount)
  div.innerHTML = '';
  document.getElementById("claimsContainer").appendChild(div);
}


function addClaim(parentclaimNumber){
//figure out claim number of new claim - gets the claim number of the last child (Dep claim) of the parent claim and add 1//
var newClaimNumber = Number(document.getElementById("outerDiv"+parentclaimNumber).lastElementChild.getAttribute("data-claim"))+1;
console.log("newClaimNumber = ", newClaimNumber)
//increment other claims//
var allClaims = document.getElementsByClassName("outerDiv"); //gets all the current claim cards using outerDiv class
console.log("allClaims = ", allClaims)
console.log("allClaims Length = ", allClaims.length)
// setTimeout(function(){

for (i = allClaims.length-1; i > -1; i--) { //work from highest claim down
  var claimNumber = Number(allClaims[i].getAttribute("data-claim")); // gets the claim number of an outerDiv using data-claims
  console.log("claimNumber = ", claimNumber)
  if (claimNumber >= newClaimNumber){ // if the claim number is larger or equal to the new Claim number..
    claimNumberInc = claimNumber+1 // ...increment the claim number by 1
    document.getElementById("outerDiv"+claimNumber).setAttribute("data-claim", claimNumberInc) //...set the data-claim to incremented claim number
    allClaims[i].id = "outerDiv"+claimNumberInc //...set the outerDiv id to incremented claim number
    console.log("allClaims[i].id = ", allClaims[i].id)
    document.getElementById("innerDiv"+claimNumber).setAttribute("data-claim", claimNumberInc) //.. sets the data-claim of the innerDiv
    document.getElementById("innerDiv"+claimNumber).id = "innerDiv"+claimNumberInc // sets the id of the innerDiv
    var newaddfunction = "addClaim("+claimNumberInc+")" // variable for new parameter addClaim fxn button
    document.getElementById("addbtn"+claimNumber).setAttribute("onclick",newaddfunction) // sets the onclick to new addClaim fxn
    document.getElementById("addbtn"+claimNumber).id = "addbtn"+claimNumberInc // sets id of addClaim btn
    if (document.getElementById("deletebtn"+claimNumber)) { //if there is a delete button
    document.getElementById("deletebtn"+claimNumber).setAttribute("onclick","deleteClaim("+claimNumberInc+")") //set new parameter for delete fxn
    document.getElementById("deletebtn"+claimNumber).id = "deletebtn"+claimNumberInc // set new id for delete btn
    }
    document.getElementById("claimno"+claimNumber).classList.add('showChange') //add showChange class for highlighting number change
    document.getElementById("claimno"+claimNumber).innerHTML = claimNumberInc // change the displayed claim number
    document.getElementById("claimno"+claimNumber).id = "claimno"+claimNumberInc // change the id of the displayed claim number element

    setTimeout(function(){
      var allClaimNumbers = document.getElementsByClassName("claimNo")
      for (i=0; i< allClaimNumbers.length; i++){
      allClaimNumbers[i].classList.remove('showChange')
      }
},300)

    if (document.getElementById("depno"+claimNumber)) {
    // document.getElementById("depno"+claimNumber).parentElement.getAttribute("data-claim")
    document.getElementById("depno"+claimNumber).setAttribute("data-claim", claimNumberInc)
    document.getElementById("depno"+claimNumber).id = "depno"+claimNumberInc
    }
  }
}
// },100)
//figure out with depencies need to be incremented, and increment//
var allDeps = document.getElementsByClassName("depNo")
console.log(allDeps)
for (i = 0; i< allDeps.length; i++) {
  console.log(allDeps[i])
  var depclaim = allDeps[i].getAttribute("data-claim")
  console.log(depclaim)
  allDeps[i].innerHTML = document.getElementById("outerDiv"+depclaim).parentElement.getAttribute("data-claim")
}
//adds dependent claim block//
// setTimeout(function(){
console.log(newClaimNumber, parentclaimNumber)
var div = document.createElement('div')
div.id = "outerDiv"+newClaimNumber;
div.classList.add("outerDiv")
div.classList.add("depouterDiv")
div.setAttribute("data-claim",newClaimNumber)
div.innerHTML = '<div id="innerDiv'+newClaimNumber+'"data-claim="'+newClaimNumber+'" class="card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div class="lobilist-actions claimsBar" style="height:10%; float:right; display:none"><button id="deletebtn'+newClaimNumber+'"class="btn btn-icon btn-outline-secondary btndel" onclick="deleteClaim('+newClaimNumber+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="addbtn'+newClaimNumber+'"class="btn btn-icon btn-outline-secondary btnadd" onclick="addClaim('+newClaimNumber+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true" text-indent:0px>&emsp;&emsp;<div id="claimno'+newClaimNumber+'" class="claimNo">'+newClaimNumber+'</div>. &emsp; <div class="preamble"  contenteditable="true" style="display: initial">The method of claim <div data-claim = "'+newClaimNumber+'" id = "depno'+newClaimNumber+'"class="depNo" style="display: initial">'+parentclaimNumber+'</div>, further comprising:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div>';
document.getElementById("outerDiv"+parentclaimNumber).appendChild(div);
// }, 100);
}


function deleteClaim(delClaimNumber){
//move deleted claim to deleted claims listed
//remove claim and outerdiv
document.getElementById("innerDiv"+delClaimNumber).remove();
var depChilds = $("#outerDiv"+delClaimNumber).contents();
$("#outerDiv"+delClaimNumber).replaceWith(depChilds);
//decrement other claims//
  var allClaims = document.getElementsByClassName("outerDiv"); console.log(allClaims)
  for (i = 0; i < allClaims.length; i++) {
    var claimNumber = Number(allClaims[i].getAttribute("data-claim"));
    console.log(delClaimNumber, claimNumber)
    if (claimNumber > delClaimNumber){
      claimNumberDec = claimNumber-1
      document.getElementById("outerDiv"+claimNumber).setAttribute("data-claim", claimNumberDec)
      allClaims[i].id = "outerDiv"+claimNumberDec
      document.getElementById("innerDiv"+claimNumber).setAttribute("data-claim", claimNumberDec)
      document.getElementById("innerDiv"+claimNumber).id = "innerDiv"+claimNumberDec
      var newaddfunction = "addClaim("+claimNumberDec+")"
      document.getElementById("addbtn"+claimNumber).setAttribute("onclick",newaddfunction)
      document.getElementById("addbtn"+claimNumber).id = "addbtn"+claimNumberDec
      if (document.getElementById("deletebtn"+claimNumber)) {
      document.getElementById("deletebtn"+claimNumber).setAttribute("onclick","deleteClaim("+claimNumberDec+")")
      document.getElementById("deletebtn"+claimNumber).id = "deletebtn"+claimNumberDec
      }

      document.getElementById("claimno"+claimNumber).innerHTML = claimNumberDec
      document.getElementById("claimno"+claimNumber).id = "claimno"+claimNumberDec
      if (document.getElementById("depno"+claimNumber)) {
      // document.getElementById("depno"+claimNumber).parentElement.getAttribute("data-claim")
      document.getElementById("depno"+claimNumber).setAttribute("data-claim", claimNumberDec)
      document.getElementById("depno"+claimNumber).id = "depno"+claimNumberDec
      }
    }
  }
  //figure out with depencies need to be decremented, and decrement//
  var allDeps = document.getElementsByClassName("depNo")
  console.log(allDeps)
  for (i = 0; i< allDeps.length; i++) {
    console.log(allDeps[i])
    var depclaim = allDeps[i].getAttribute("data-claim")
    console.log(allDeps[i].innerHTML , document.getElementById("outerDiv"+depclaim).parentElement.getAttribute("data-claim"))
    var oldDependency = allDeps[i].innerHTML
    var newDependency = document.getElementById("outerDiv"+depclaim).parentElement.getAttribute("data-claim")
    if (oldDependency != newDependency){
      var div = document.createElement('div')
      div.className = "alert alert-custom alert-notice alert-light-warning fade show"
      div.role = "alert"
      div.innerHTML = '<div class="alert-icon"><i class="flaticon-warning"></i></div><div class="alert-text">Check claim dependency.</div><div class="alert-close"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i class="ki ki-close"></i></span></button></div>';
      var outerDiv = document.getElementById("outerDiv"+depclaim);    // Get the <ul> element to insert a new node
      outerDiv.insertBefore(div, outerDiv.childNodes[0]);  // Insert <li> before the first child of <ul>
    }
    allDeps[i].innerHTML = document.getElementById("outerDiv"+depclaim).parentElement.getAttribute("data-claim")
  }
}
  //check for antecedent basis - anything that follows the term "the"...
