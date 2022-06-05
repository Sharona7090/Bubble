function initfiguresui(){
  figuresArray = []
  figText=[];
}

function loadfigures(figures){
 // figures =  [
 //  {
 //  image:"assets/figures/1.PNG",
 //  title:"First Figure Title",
 //  shortdescription: "is/illustrates an electronic device accessing an electronic commerce platform",
 //  figposition: "top: 80%; left:45%",
 //  refpositionkey: [1, 2, 3, 3],
 //  refpositions: ["top:0%; left: 25%", "top:10%; left: 35%","top:20%; left: 35%", "top:40%; left: 65%"],
 //  languagekey:["100", "102", "104"],
 //  language: 'FIG. figref000 illustrates an example ref100 computing device ref102 providing access to an electronic marketplace ref104, in accordance with various embodiments. In this example, a computing device ref102 provides access to an electronic marketplace ref104, in accordance with various embodiments. Although a tablet computing device is shown in this example, it should be understood that various other types of electronic devices that are capable of determining and processing input and providing output can be used in accordance with various embodiments discussed herein.  These devices can include, for example, smart phones, e-book readers, desktop computers, notebook computers, personal data assistants, video gaming consoles or controllers, smart televisions, and portable media players, wearable computers (e.g., glasses, watches, etc.) among others. Further, the elements illustrated can be part of a single device, while at least some elements illustrated and otherwise utilized for such a device can be provided as one or more peripheral devices or accessories within the scope of the various embodiments. As illustrated, the electronic marketplace ref104 provides a plurality of items ref106 available for consumption (e.g., purchase, rent, use, stream). in some embodiments, various descriptors ref108 of an item are provided, such as images, price, name, among others.'
 //  },
 //  {
 //  image:"assets/figures/2.PNG",
 //  title:"Second Figure Title",
 //  shortdescription: "short desciption 2",
 //  figposition: "top: 80%; left:45%",
 //  refpositionkey: [1, 2, 3, 4, 5, 6, 6],
 //  refpositions: ["top:0%; left: 25%", "top:10%; left: 35%","top:20%; left: 35%", "top:40%; left: 65%", "top:40%; left: 75%", "top:17%; left: 25%", "top:50%; left: 85%"],
 //  languagekey:["100", "102", "104", "106", "108", "110"],
 //  language: 'FIG. figref000 illustrates an example ref100 computing device ref102 providing access to an electronic marketplace ref104, in accordance with various embodiments. In this example, a computing device ref102 provides access to an electronic marketplace ref104, in accordance with various embodiments. Although a tablet computing device is shown in this example, it should be understood that various other types of electronic devices that are capable of determining and processing input and providing output can be used in accordance with various embodiments discussed herein.  These devices can include, for example, smart phones, e-book readers, desktop computers, notebook computers, personal data assistants, video gaming consoles or controllers ref110, smart televisions, and portable media players, wearable computers (e.g., glasses, watches, etc.) among others. Further, the elements illustrated can be part of a single device, while at least some elements illustrated and otherwise utilized for such a device can be provided as one or more peripheral devices or accessories within the scope of the various embodiments. As illustrated, the electronic marketplace ref104 provides a plurality of items ref106 available for consumption (e.g., purchase, rent, use, stream). in some embodiments, various descriptors ref108 of an item are provided, such as images, price, name, among others.'
 //  },
// ]
  console.log(figures)
  for (i=0; i<figures.length; i++){
    var figimage = figures[i].image
    var figtitle = figures[i].title
    var figshort = figures[i].shortdescription
    var figposition = figures[i].figposition
    var refpositionkey = figures[i].refpositionkey
    var refpositions = figures[i].refpositions
    var languagekey = figures[i].languagekey
    var figlanguage = figures[i].language
    // use j counter to start cards and modals at 1 instead of 0
    var j = i+1;
    //create a figure card in the figures grid
    var newFigCard = document.createElement("div");
    newFigCard.classList.add("col-3")
    newFigCard.innerHTML = `<div class="card figCard"  data-toggle="modal" data-target="#exampleModal${j}" style="width: 100%;padding-top: 100%;position: relative;" onclick="focusfig(${j})">
                              <div class="d-flex flex-column align-items-center figbg" style="background-image:url(${figimage});">
                              </div>
                              <div id="figoverlay${j}" class="figbg stack-top" style=""></div>
                            </div>`
    document.getElementById("figCardContainer").append(newFigCard);
    //create a target modal
    var newModal = document.createElement("div");
    newModal.innerHTML = `<div class="modal fade" id="exampleModal${j}" tabindex="-1" role="dialog" aria-labelledby="modalLabel${j}" aria-hidden="true">
                          <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel${j}">${figtitle}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <i aria-hidden="true" class="ki ki-close"></i>
                                </button>
                              </div>
                              <div class="modal-body row">
                                <div id="pdfFigure${j}" class="col-6 modalfig">
                                    <img id="image${j}" style="width:100%;" src="${figimage}">
                                    <!-- //append with reference numbers -->
                                    <input id="figno${j}" class="figno figno${j}" style="${figposition}" readonly="">
                                </div>
                                <div class="col-6 figdescription">
                                  <d id="figtitle${j}" style="display:none">FIG. <e class=" figinput${j}">__</e> <e id="shortfig${j}">${figshort}</e></d>
                                  <d id="spec${j}">
                                <!-- insert figure language with mark up -->
                                  </d>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <div class="col-3" style="text-align:left;padding-left: 50px;">
                                  <button id="deselectfigbtn${j}" type="button" class="btn btn-secondary btn-disabled" onclick="deselectfig(${j})" data-dismiss="modal" aria-label="Close" disabled >Deselect Figure</button>
                                </div>
                                <div class="col-3">
                                  <label>Figure number:</label> <input id="figinput${j}" class="figinput" autofocus onkeyup="autoNumber(${j})" ></input>
                                </div>
                                <div class="col-4">
                                  <div class="row">
                                    <label style="margin-right:20px">Reference numbers:</label>
                                    <div class="radio-inline">
                                      <label class="radio">
                                      <input id="autoRef${j}" type="radio" checked="checked" name="radios${j}" onchange="autoNumber(${j})">
                                      <span></span>Auto</label>
                                      <label class="radio">
                                      <input id="manualRef${j}" type="radio" name="radios${j}" onchange="selectManualRef(${j})">
                                      <span></span>Manual</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-2">
                                  <button id="selectfigbtn${j}" type="button" class="btn btn-primary font-weight-bold btn-disabled" data-dismiss="modal" aria-label="Close" onclick="selectfig(${j})">Select Figure</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`
    document.getElementById("modalContainer").append(newModal);
    //insert reference numeral boxes/positions
    console.log(refpositions)
    for (n=0; n<refpositions.length; n++){
      console.log(refpositions.length)
      var key = refpositionkey[n]
      // m=n+1;
      var newinput = document.createElement("input");
      newinput.id = `${j}_${n+1}`
      newinput.classList.add(`${j}_${key}`)
      newinput.classList.add('refno')
      newinput.classList.add(`refno${j}`)
      newinput.style.cssText += refpositions[n]
      newinput.onkeyup = function(){checkNumber()};
      // var functionName = `checkNumber(${j})`
      // newinput.addEventListener("keyup",checkNumber);
      var parentNode = document.getElementById(`pdfFigure${j}`)
      console.log(parentNode)
      var fignumberinput = document.getElementById(`figno${j}`)
      parentNode.insertBefore(newinput, fignumberinput)
    }
    for (p=0; p<languagekey.length; p++){
      q=p+1
      var refnoTag = `<e class="textref${j} ${j}_${q}">__</e>`
      figlanguage=figlanguage.replaceAll(`ref${languagekey[p]}`, refnoTag)
      console.log(figlanguage)
    }
    var figrefTag = `<e class=" figinput${j}">__</e>`
    figlanguage= figlanguage.replaceAll(`figref000`, figrefTag)
    speclanguageholder = document.getElementById(`spec${j}`)
    speclanguageholder.innerHTML = figlanguage
  }
  $('.modal').on('shown.bs.modal', function (event) {
    console.log("prepend modal")
  $('#figDiv').prepend($('.modal-backdrop'))
  })
}


//// focus fig number input in model //
function focusfig(x){
  var target = "figinput"+x;
  document.getElementById(target).focus()
  globalcurrentfig = x
}

function autoNumber(x){
  w=x-1;
var languagekey = figures[w].languagekey
var figInputID = "figinput"+x; //get figure number input ID
var figurenumber = document.getElementById(figInputID).value // get figure number value
var displayfignumberID = "figno"+x //get display figure number ID
$('.'+figInputID).text(figurenumber);
document.getElementById(displayfignumberID).value = figurenumber //set display figure number to input values
var reinputID = "refno"+x
var refinputs = document.getElementsByClassName(reinputID) //get reference number display elements

autoref = "autoRef"+x;
manualref = "manualRef"+x;
var textref = "textref"+x

if (document.getElementById(autoref).checked == true){
  $('.'+reinputID).css('border-color', "lightgray")
  $('.'+reinputID).prop('readonly', true)
  for (i = 0; i < languagekey.length; i++){
    if (languagekey.length <=5){
      for (i=0; i<languagekey.length; i++){
        var j=i+1
        var number = 2*i
        var inputclass = document.getElementsByClassName(`${x}_${j}`)
        for (counter = 0; counter<inputclass.length; counter++){
          inputclass[counter].value = figurenumber + "0" +number;
          inputclass[counter].textContent = figurenumber + "0" +number;
        }
      }
    }else
    {
      for (i=0; i<languagekey.length; i++){
        var j=i+1
        var number = 2*i
        var inputclass = document.getElementsByClassName(`${x}_${j}`)
        for (counter = 0; counter<inputclass.length; counter++){
          inputclass[counter].value = figurenumber + "0" +number;
          inputclass[counter].textContent = figurenumber + "0" +number;
        }
      }
      for (i=5; i<languagekey.length; i++){
        var number = 2*i
        var j=i+1
        var inputclass = document.getElementsByClassName(`${x}_${j}`)
        for (counter = 0; counter<inputclass.length; counter++){
          inputclass[counter].value = figurenumber+number;
          inputclass[counter].textContent = figurenumber+number;
        }
      }
    }
  }
}

if( figurenumber == ""){
  var figinput = "figinput" +x //get description fig number class
  for (i = 0; i < refinputs.length; i++){
    refinputs[i].value = ""
  }
    $('.'+textref).text("__")
    $('.'+figinput).text("__");
}

if( document.getElementById(manualref).checked == true){
// selectManualRef(x)
}
}

function selectManualRef(x){
  w=x-1;
  var languagekey = figures[w].languagekey
  for (i=0; i<languagekey.length; i++){
    var j=i+1
    var allinputs = Array.from(document.getElementsByClassName(`${x}_${j} refno`))
    allinputs.forEach(thing =>{
      thing.value = ""
    })
    var testarray = [1, 2, 3, 4]
    var firstone = allinputs[0];
    firstone.style.cssText += "border-color: #7337EE"
    firstone.readOnly = false
  allinputs.shift()
    console.log(allinputs)
    allinputs.forEach(thing =>{
      thing.disabled = true
      thing.onkeyup = function(){}
    })
  }
    var textref = "textref"+x
    $('.textref'+x).text("__")
}

function checkNumber(){
h=globalcurrentfig-1;
  languagekey = figures[h].languagekey
  console.log(h)
  console.log(languagekey)

  for (var i=0; i<languagekey.length; i++){
    var counter=i+1
    var allinputs = document.getElementsByClassName(`${globalcurrentfig}_${counter} refno`)
    var firstone = document.getElementsByClassName(`${globalcurrentfig}_${counter} refno`)[0];
    for (var k=1; k<allinputs.length; k++){
      allinputs[k].value = allinputs[0].value
    }
var boxes = Array.from(
            document.getElementsByClassName(`${globalcurrentfig}_${counter} textref${globalcurrentfig}`)
          )
boxes.forEach(box => {
  if(firstone.value == ""){

  }else{
    box.textContent = firstone.value}
});
  }

}


function selectfig(x){
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


//manual or auto number
var autoradio = document.getElementById('autoRef'+x)
var manualradio = document.getElementById('manualRef'+x)
if (autoradio.checked == true){
  var radiochoice = "auto"
}
if (manualradio.checked == true){
  var radiochoice = "manual"
}
var newFigure = {
  $slide: x,
  fig: figurenumber,
  radio: radiochoice
}
var refs = document.getElementsByClassName("refno"+x);
var refID = []
var refNUM = []
for (i=0; i<refs.length; i++){
  refID[i]= refs[i].id;
  refNUM[i] = refs[i].value;
  newFigure[refID[i]] = refNUM[i]
  console.log(refNUM[i])
}



console.log(newFigure)
figuresArray.push(newFigure);
console.log(figuresArray)

document.getElementById(`selectfigbtn${x}`).disabled = true;
document.getElementById(`deselectfigbtn${x}`).disabled = false;

}

function deselectfig(x){
var figInputID = "figinput"+x; //get figure number input ID
var displayfignumberID = "figno"+x //get display figure number ID
var refno = "refno" +x //get display ref number class
var figinput = "figinput" +x //get description fig number class
var textref = "textref" +x //get description ref number class
var figoverlay = "figoverlay" +x; //get fig selected overlay ID
var pdfFigure = "pdfFigure" +x;

$('#'+figInputID).val("");
$('#'+displayfignumberID).val("");
$('.'+refno).val("");
$('.'+figinput).text("___");
$('.'+textref).text("___");
$("#"+figoverlay).css( "display", "none" )

var figtitle = "figtitle" +x;
var spec = "spec"+x;
$("#"+figtitle).removeClass("figList");
$("#"+spec).removeClass("specList");

$("#"+pdfFigure).removeClass("selectedFig");

//remove from figuresArray
const indexOfObject = figuresArray.findIndex(object => {
  return object.$slide === x;
});
figuresArray.splice(indexOfObject, 1);


document.getElementById(`selectfigbtn${x}`).disabled = false;
document.getElementById(`deselectfigbtn${x}`).disabled = true;
}

function populateModal(){
$('#exampleModal').html()
}
