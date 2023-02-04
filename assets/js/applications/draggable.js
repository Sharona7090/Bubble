
function initdraggable(){
var KTCardDraggable = function () {
 var swappables = []
 return {
  //main function to initiate the module
  init: function (index) {
   var containers = document.querySelectorAll('.draggable-zone' + index);
   if (containers.length === 0) {
    console.log('.draggable-zone' + index, ' does not exist')
    return false;
   }
   var swappable = new Sortable.default(containers, {
    draggable: '.draggable' + index,
    handle: '.draggable' + index + ' .draggable-handle' + index,
    mirror: {
     appendTo: 'body',
     constrainDimensions: true
    }
   });
 swappable.on('mirror:destroy', function() {
     console.log('swabble on stop:')
     var allClaimNo = document.getElementsByClassName("claimNo");
     console.log(allClaimNo)
     var currentCount = allClaimNo.length
     var actualCount = claimsArray.length
     console.log("currentCount:", currentCount, ", actualCount:", actualCount)
     setTimeout(handlemouseup, 100)
   })
   swappables[index] = swappable
   return swappable
  },
  destroyAll: function() {
    swappables.forEach(function(swappable, index) {
       if (swappable.destroy) {
         swappable.destroy()
       }
    })
  },
 };
}();


KTCardDraggable.init(0)
var x = document.getElementsByClassName("outerDiv");
for (i=0; i<x.length; i++){
  var num = x[i].getAttribute("data-claim");
  console.log(num)
   KTCardDraggable.init(num)
}
}

function handlemouseup(){
console.log("hello")
    var allOuterDiv= document.getElementsByClassName("outerDiv");
    var allClaimNo = document.getElementsByClassName("claimNo");
    var allDepNo = document.getElementsByClassName("depNo")
    var currentCount = allClaimNo.length
    var actualCount = claimsArray.length
    console.log("currentCount:", currentCount, ", actualCount:", actualCount)
    console.log(allOuterDiv.length)
    console.log(allClaimNo.length)
    console.log(allDepNo.length)
        for (i=0; i<allOuterDiv.length; i++){
            allOuterDiv[i].setAttribute("data-claim", i+1)
            var parentIdentifier = allOuterDiv[i].getAttribute("data-parent-id")
            console.log("parentIdentifier: ", parentIdentifier)
            var parentElement = document.querySelector("[data-unique-id='"+parentIdentifier+"']");
            allClaimNo[i].innerHTML = i+1
            if(parentElement){
            allDepNo[i].innerHTML = parentElement.getAttribute("data-claim")
            allOuterDiv[i].setAttribute("data-parent", parentElement.getAttribute("data-claim"))
            console.log("parent: ", parentElement.getAttribute("data-claim"))
            console.log("parent: ", allOuterDiv[i].getAttribute("data-parent"))
          }
        }
  for (i=0; i<claimsArray.length; i++){
    claimsArray[i].claim = Number(allOuterDiv[i].getAttribute("data-claim"))
    claimsArray[i].parent = Number(allOuterDiv[i].getAttribute("data-parent"))
}
console.log("new array: ", claimsArray)
updateView()
}

function cleanDraggable(x){
    KTCardDraggable.destroyAll();
    KTCardDraggable.init(0)
    for (i=0; i<x.length; i++){
   var num = x[i].getAttribute("data-claim");
    KTCardDraggable.init(num)
}
}
