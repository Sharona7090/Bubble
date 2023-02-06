// Figure Filter

function genFigures(){
  var clientTracking = document.getElementById('clientTracking').value;
  var firmTracking = document.getElementById('firmTracking').value;

  var figfilename = clientTracking + " / " + firmTracking + " - " + "figures"

  PizZipUtils.getBinaryContent(
            figuresTemplatePpt,
            function (error, content) {
                if (error) {
                    console.error(error);
                    return;
                }
                var slidesModule = new DocxtemplaterSlidesModule();
                var zip = new PizZip(content);
                var doc = new docxtemplater(zip, {
                    modules: [slidesModule],
                });
                doc.setData({
                  slides:
                  // [
                  //   {
                  //     $slide: 1,
                  //   fig: "2",
                  //   a1: "101", b1: "102", c1: "103", d1: "104", e1: "105"
                  // }
                  // ]
                    figuresArray
                });

                doc.render();
                var out = doc.getZip().generate({
                    type: "blob",
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                });
                saveAs(out, figfilename+".pptx");
            }
        );
}

// function setClient(){
//   var passData = document.getElementById("client").value;
//   $.ajax({
//     type: 'POST',
//     url: 'https://uzzpphemz0.execute-api.us-west-2.amazonaws.com/default/QueryClientFigs',
//     data: JSON.stringify({"passData": passData}),
//     contentType: "application/json",
//     success: function(data){
//       console.log(data)
//       boilertext(data)
//     }
//   })
//   $.ajax({
//     type: 'POST',
//     url: 'https://w7sp7ajda9.execute-api.us-west-2.amazonaws.com/default/QueryClientBackground',
//     data: JSON.stringify({"passData": passData}),
//     contentType: "application/json",
//     success: function(data2){
//       console.log(data2)
//       setBackground(data2)
//     }
//   })
// }
// function setBackground(data){
//   bgCategory = []
//   bgBoiler = []
//   var i;
//   for (i = 0; i < data.Items.length; i++) {
//   bgCategory[i] = data.Items[i].Subject
//   bgBoiler[i] = data.Items[i].BoilerText
// console.log(bgBoiler[i])
//   var createoption = document.createElement('option');
//   createoption.innerHTML = bgCategory[i];
//   createoption.value = i
//   document.getElementById("subject").appendChild(createoption);
//   }
//   console.log(data.Items)
// }

// function changeBG(){
//   var eye = document.getElementById("subject").value;
//   console.log(eye)
//   var i = Number(eye)
//   console.log(i)
//   document.getElementById('bgText').value = bgBoiler[i]
//   bgCategory = bgX
// }
//figbutton = false;
function getInput(clientTracking, firmTracking, title, client){
  getClaims()
  makeSummaryAbstract()
console.log(clientTracking, firmTracking, title, client)
///////////////  1. Basic Data  ////////////////////////////////
// var clientTracking = document.getElementById('clientTracking').value;
// var firmTracking = document.getElementById('firmTracking').value;
// var title = document.getElementById('Title').value;
if (document.getElementById("typeNP").checked == true){
  var appType = "Non-Provisional Patent Application"
};
if (document.getElementById("typeP").checked == true){
  var appType = "Provisional Patent Application"
};
filename = clientTracking + " / " + firmTracking + " - " + appType
figfilename = clientTracking + " / " + firmTracking + " - " + "figures"
///////////////  2. Background ///////////////////////////
var background = document.getElementById('bgText').value;
///////////////  3. FIGURES  + SPEC  ////////////////////////////////
var boo = document.getElementsByClassName('numList');
var boo2 = document.getElementsByClassName('figList');
var boo3 = document.getElementsByClassName('specList');

  boob = [];
  boob2 = [];
  figEntry = []
  // figure=[];
  // description = [];
for (i=0; i<boo.length; i++ ){

 figEntry[i] = {num: Number(boo[i].value), fig: boo2[i].innerText, spec: boo3[i].innerText};

}

figEntry.sort((a, b) => (a.num > b.num) ? 1 : -1);

for (i=0; i<figEntry.length; i++ ){
boob[i] = figEntry[i].fig;
boob2[i] = figEntry[i].spec;
}
//////////// 4. GET CLAIMS   /////////////////////////////////////////////////

// console.log(number[0], number[1], number[2] )
// console.log(JSON.stringify(claim, null, 2))
var passData = {
  clientTracking: clientTracking,
  firmTracking: firmTracking,
  title: title,
  appType: appType,
  filename: filename,
  background: background,
  figText: "figText",
  boob: boob,
  boob2: boob2,
  claims: claim,
  summary: summary,
  checkAbstract: checkAbstract,
  abstract: abstract
}
console.log(figText)
console.log(boob)
console.log(boob2)

$.ajax({
  type: 'POST',
  url: 'https://3mfymf8ugg.execute-api.us-west-2.amazonaws.com/default/CreateAppShell',
  data: JSON.stringify({"passData": passData}),
  contentType: "application/json",
  success: function(data){
    console.log(data)
    myFunction(data)
  }
})
// myFunction(passData)
}
function getClaims(){
  claim = []
  var claimNumber = []
  var claimPreamble = [];
  var claimBody = [];
  var editor = document.getElementsByClassName('ADeditor')
  var preambleBlock = document.getElementsByClassName('preambleBlock') //<p>
  var preamble = document.getElementsByClassName('preamble') //<span>
  var depno = document.getElementsByClassName('depno') //<span>
  var preambleBody = document.getElementsByClassName('preambleBody') //<span>
console.log(claimsArray)
for (i=0; i<claimsArray.length; i++){
  /// Get claim number
  claimNumber[i] = claimsArray[i].claim;
  /// Get preamble
  claimPreamble[i]=""
  var preambleElements = preambleBlock[i].querySelectorAll('.preambleInclude');
  for (k=0; k< preambleElements.length; k++){
    claimPreamble[i] = claimPreamble[i]+preambleElements[k].innerText
  }
  /// Get claim Body
  var cloneEditor = editor[i].cloneNode(true);
  cloneEditor.removeChild(cloneEditor.children[0]);
// console.log(cloneEditor.innerHTML)
claimBody[i] = cloneEditor.innerHTML

  claim[i] = {
    claimNumber: claimNumber[i] ,
    htmlClaimPreamble: claimPreamble[i],
    htmlClaimBody: claimBody[i]
  }
}
// console.log(claim)
}
function makeSummaryAbstract(){
     summary = []
    var editorInd = document.getElementsByClassName('ADeditorInd')
    for (i=0; i<editorInd.length; i++){
      var cloneEditor = editorInd[i].cloneNode(true);
      // var claimNumberSpan = cloneEditor.children[0]
      cloneEditor.children[0].removeChild(cloneEditor.children[0].children[0]);
      var claimText = cloneEditor.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ')
      claimText = claimText.replace('A', "a")
      claimText = claimText.replace(', comprising', " includes")
      claimText = claimText.replace(/:/g, ' ')
      claimText = claimText.replace(/;/g, ', ')
      claimText = claimText.replace(/comprise/g, 'include')
      claimText = claimText.replace(/comprising/g, 'including')
      claimText = claimText.replace(/  +/g, ' ').trim();
      if (i==0){
        claimText = "In an embodiment of the present disclosure, "+claimText
      }else{
        claimText = "In another embodiment of the present disclosure, "+claimText
      }
      console.log(claimText)
      summary[i] = claimText
    }
      abstract = summary[0].replace('In an embodiment of the present disclosure, a', 'A')
      var wordCount = abstract.split(' ').length;
      if (wordCount>150){
        checkAbstract = true
      }else{
        checkAbstract = false
      }
}
function myFunction(data){
  PizZipUtils.getBinaryContent(
           patentTemplateDoc,
           function (error, content) {
               if (error) {
                   console.error(error);
                   return;
               }

               var htmlModule = new DocxtemplaterHtmlModule({});
               var zip = new PizZip(content);
               var doc = new docxtemplater(zip, {
                   modules: [htmlModule],
               });

               doc.setData(
                   data
               );
               doc.render();
               var out = doc.getZip().generate({
                   type: "blob",
                   mimeType:
                       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
               });
               saveAs(out, filename+".docx");
           }
       );};
