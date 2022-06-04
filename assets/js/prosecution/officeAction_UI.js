function autofocusMail(){

  console.log("mail focus")
  document.getElementById("maildate").focus()
}

function selectDoc(){
// Demo code
document.getElementById("prosCard1").style.display="none"
document.getElementById("prosCard_NFOA").style.display="block"

//  fill in case data
document.getElementById("clientmatter").value = "4723-US"
document.getElementById("firmmatter").value = "14-090241"
document.getElementById("appnumber").value = "17/342,876"
document.getElementById("filingdate").value = "April 2, 2019"
document.getElementById("title").value = "Multi-Modal Haptic Feedback Touch Screen"
document.getElementById("inventor").value = "Todd Everton"
document.getElementById("examiner").value = "Michael Forman"
document.getElementById("artunit").value = "3412"
document.getElementById("confirmation").value = "8719"
// document.getElementById("maildate").value = "August 20, 2021"

autofocusMail()



  // real code
  // var matter = document.getElementById("prosMatter").value;
  // var docType = document.getElementById("docSelectbox").value;
  // console.log(matter, docType)
}
function clickback(){
  document.getElementById("prosCard1").style.display="block"
  document.getElementById("prosCard_NFOA").style.display="none"
}
function handleChange(checkbox) {
    if(checkbox.checked == true){
      var checkid = checkbox.id;
      console.log(checkid)
      document.getElementById(checkid+"Lb").style.fontWeight="900"
      document.getElementById(checkid+"Acc").style.display="block"
      var x = document.getElementById(checkid+"Acc").querySelectorAll("input");
      for (i=0; i<x.length; i++ ){
        // x[i].required = true;
      }
      x[0].focus()
    }else{
        var checkid = checkbox.id;
  console.log(checkid)
  document.getElementById(checkid+"Lb").style.fontWeight="600"
    document.getElementById(checkid+"Acc").style.display="none"
    var x = document.getElementById(checkid+"Acc").querySelectorAll("input");
    for (i=0; i<x.length; i++ ){
      // x[i].required = false;
    }
}
}

function addDouble(){
  var addDouble = document.createElement('p');
addDouble.innerHTML = 'Claim(s) <input Required type="text" class="form-control comments doublein1" placeholder="e.g., 1, 3-4, and 10"> is/are rejected over claim(s) <input type="text" class="form-control comments doublein2" placeholder="e.g., 1, 3-4, and 10" required> of U.S. Patent No. <input style="width:200px; display:inline-block" type="text" class="form-control comments doublein3" placeholder="e.g., 7,325,221" required>'
    document.getElementById("doubleAcc").appendChild(addDouble);
}
function add112(){
  var add112 = document.createElement('p');
add112.innerHTML = 'Claim(s) <input type="text" class="form-control comments claims112" placeholder="e.g., 1, 3-4, and 10" required> is/are rejected under <select style="width:90px; display:inline-block" type="text" class="form-control comments type112" placeholder="">  <option>112(a)</option><option>112(b)</option></select><button type="button" onclick="del112(this)" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #cecece;"><i class="fas fa-minus" style="color:white; display: block;"></i></button>'
    document.getElementById("re112Acc").appendChild(add112);
}
function del112(e){
  e.parentNode.parentNode.removeChild(e.parentNode);
}
function addObjection(){
  var addobj = document.createElement('p');
  addobj.innerHTML = '<input style="width:300px; display:inline-block" type="text" class="form-control comments objection1" placeholder="e.g., The Specification is, Claim 4 is"> objected to for allegedly <input style="width:345px; display:inline-block" type="text" class="form-control comments objection2" placeholder=""><button type="button" onclick="delObjection(this)" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #cecece;"><i class="fas fa-minus" style="color:white; display: block;"></i></button>'
  document.getElementById("objectionsAcc").appendChild(addobj);
}
function delObjection(e){
  e.parentNode.parentNode.removeChild(e.parentNode);
}
function add102(){
  var add102 = document.createElement('div');
  add102.className = "inner102"
  // add102.style = "margin-bottom:10px"
add102.innerHTML = 'Claim(s) <input type="text" class="form-control comments claims102" placeholder="e.g., 1, 3-4, and 10"> is/are rejected over <select onchange="change(this, 102)" type="text" class="form-control comments reftype102 refselect" placeholder="">'+document.getElementById("refselect1").innerHTML+'</select> <input type="text" class="form-control comments refno102" placeholder="e.g., 7,325,221"> <p style="display:inline">to</p> <input type="text" class="form-control comments refname102" placeholder="Smith" onfocusout="refSaver(this)"><button type="button" onclick="del102(this)" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #cecece;"><i class="fas fa-minus" style="color:white; display: block;"></i></button>'
    document.getElementById("re102Acc").appendChild(add102);
}
function del102(e){
e.parentNode.parentNode.removeChild(e.parentNode);
}
function add103(){
  console.log('add103');
  var add103 = document.createElement('div')
  // add103.style = "margin-bottom:10px; display:inline-block"
  // add103.style.display = "inline-block"
  add103.className = "inner103"
  add103.innerHTML = 'Claim(s) <input type="text" class="form-control comments claims103" placeholder="e.g., 1, 3-4, and 10"> is/are rejected over <select id="refselect1" onchange="change(this, 103)" type="text" class="form-control comments reftype103 refselect" placeholder="">'+document.getElementById("refselect1").innerHTML+'</select> <input id="refnum1" type="text" class="form-control comments refno103" placeholder="e.g., 7,325,221"> <p style="display:inline"> to</p> <input id="refname1" type="text" class="form-control comments refname103" placeholder="Smith" onfocusout="refSaver(this)"> <button type="button" class="btn btn-light-info" style="display:inline-block" onclick="addinview(this)">+ in view of</button><button type="button" onclick="del103(this)" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; margin-left:8px; background: #cecece;"><i class="fas fa-minus" style="color:white; display: block;"></i></button>'
      document.getElementById("re103Acc").appendChild(add103);
}
function del103(e){
e.parentNode.parentNode.removeChild(e.parentNode);
}
function addinview(x){
  var nextRef = document.createElement('div')
  nextRef.style.marginLeft = "354px"
  nextRef.style.marginTop = "5px"
  nextRef.innerHTML = '<select onchange="change(this, 103)" type="text" class="form-control comments refselect reftype103" placeholder="">'+document.getElementById("refselect1").innerHTML+'</select> <input type="text" class="form-control comments refno103" placeholder="e.g., 7,325,221"> <p style="display:inline">to</p> <input type="text" class="form-control comments refname103" placeholder="Smith" onfocusout="refSaver(this)"><button type="button" onclick="del103(this)" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; margin-left:8px; background: #cecece;"><i class="fas fa-minus" style="color:white; display: block;"></i></button>'
  x.parentElement.appendChild(nextRef);
}


function refSaver(x){
var persistSelected = []
var selecters = document.getElementsByClassName('refselect');
var allRefNames = document.querySelectorAll(".refname102, .refname103")
for (i=0; i<selecters.length; i++){
   persistSelected[i]= selecters[i].value
   console.log(persistSelected[i])
}
console.log(persistSelected)
  var mainSelecter = document.getElementById('refselect1');
  console.log(mainSelecter)
  mainSelecter.options.length = 3
  for (j=0; j<selecters.length; j++ ){
    selecters[j].options.length = 3;

  }


    for (let k=0; k<selecters.length; k++ ){
        for (i=0; i<allRefNames.length; i++){
      var indRefName = allRefNames[i].value.replace(/et al.|et al|et. al/gi, "").trim();

      if (indRefName !== ""){
        var option = document.createElement("option");
        option.text = indRefName;
        option.value = indRefName;
        option.classList.add("saved");
        option.style.backgroundColor = "#ffdd75";
        selecters[k].add(option)
        console.log(selecters[k])
      }
      // selecters[k].innerHTML = options

    }

  }

  var options = mainSelecter.innerHTML
  // for (k=0; k<selecters.length; k++ ){
  //   // selecters[k].innerHTML = options
  //   selecters[k].value = persistSelected[k]
  //   console.log(selecters[k].value)
  // }
  for (i=0; i<selecters.length; i++){
    selecters[i].value = persistSelected[i]
    console.log(selecters[i].value)
  }

}

function change(x, y){
  console.log('change102')
  var value = x.value;
  var classx = x.classList
  console.log(classx)
  if (value == 'other'){
    x.nextElementSibling.placeholder = "e.g., WO2012058306"
    console.log(x.nextElementSibling)
  }
  if (value == 'other' || value == 'U.S. Patent Publication' || value == 'U.S. Patent'){
    x.nextElementSibling.style.display = "inline-block";
    x.nextElementSibling.class = "form-control comments refno"+y;
    x.nextElementSibling.nextElementSibling.style.display = "inline";
    x.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "inline-block";
    x.nextElementSibling.nextElementSibling.nextElementSibling.class = "form-control comments refno"+y;
  } else{
    x.nextElementSibling.style.display = "none";
    x.nextElementSibling.class = "";
    x.nextElementSibling.nextElementSibling.style.display = "none";
    x.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
    x.nextElementSibling.nextElementSibling.nextElementSibling.class = "";
  }

}

//////////////////////
// Class definition

var KTTinymce = function () {
    // Private functions
    var demos = function () {
        tinymce.init({
            selector: '#kt-tinymce-1',
            content_style:
              'p { margin: 0; line-height: 1.6} ' +
              'body { font-family:Times New Roman, Times, serif; font-size:20px }',
            toolbar: false,
            statusbar: false,
            setup: function(ed) {
              ed.on('keydown', function(event) {
                  if (event.keyCode == 9) { // tab pressed
                    if (event.shiftKey) {
                      ed.execCommand('Outdent');
                    }
                    else {
                      ed.execCommand('Indent');
                    }

                    event.preventDefault();
                    return false;
                  }
              });
          }
        });
    }

    return {
        // public functions
        init: function() {
            demos();
        }
    };
}();

// Initialization
jQuery(document).ready(function() {
    KTTinymce.init();
});
