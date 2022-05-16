// Figure Filter
$(function(){
  $('.select2').on('change', function() {
    var data = $(".select2 option:selected")
    if (data.length ==0){
      $('.EC_tag').show();
      $('.ML_tag').show();
      $('.CC_tag').show();
      $('.MD_tag').show();
      $('.G_tag').show();
    }  else{
      $('.EC_tag').hide();
      $('.ML_tag').hide();
      $('.CC_tag').hide();
      $('.MD_tag').hide();
      $('.G_tag').hide();
    }
    for (i = 0; i < data.length; i++) {
    if(data[i].value == "EC"){
      console.log("blah")
      $('.EC_tag').show();
    }
    if(data[i].value == "ML"){
      $('.ML_tag').show();
    }
    if(data[i].value == "CC"){
      $('.CC_tag').show();
    }
    if(data[i].value == "MD"){
      $('.MD_tag').show();
    }
    if(data[i].value == "G"){
      $('.G_tag').show();
    }
    }
  })
});


function pptxFigures(){
    let pptx = new PptxGenJS();
    pptx.defineLayout({ name:'Letter', width:8.5, height:11 });
    pptx.layout = 'Letter'

  var selectedfigs = document.getElementsByClassName("selectedFig");
  var slide = []
  var figObject = []
  for (i = 0; i < selectedfigs.length; i++) {
    var get_figid = selectedfigs[i].getAttribute('data-figid')
    var get_figno = selectedfigs[i].getAttribute('data-figno')
    var get_refno = selectedfigs[i].getElementsByClassName("refno");
    var get_refno2 = []
    for (j = 0; j < get_refno.length; j++) {
       get_refno2[j] = get_refno[j].value
    }
    console.log(get_figid, get_figno, get_refno2)

    var get_figno_num = parseInt(get_figno.replace(/\D/g,''), 10);
    var get_figno_alpha = get_figno.replace(/[0-9]/g, '');
    figObject[i] = {
        fig_id: get_figid,
        fig_no: get_figno,
        fig_no_num: get_figno_num,
        fig_no_alpha: get_figno_alpha,
        ref_no: get_refno2
      }

  }
console.log(figObject)
figObject.sort((a, b) => ((a.fig_no_num > b.fig_no_num) ? 1 : -1) || ((a.fig_no_alph > b.fig_no_alph) ? 1 : -1))
console.log(figObject)

  for (i = 0; i < figObject.length; i++) {
    var y = Number(figObject[i].fig_id)
    var z = "FIG. "+figObject[i].fig_no
    getOpts(y)
    console.log(figure_opts)
    slide[i] = pptx.addSlide();
    // adds figure image
    slide[i].addImage(
      figure_opts
    );
    // adds figure number
    slide[i].addText(
      z,
      figno_opts
    )
    for (j = 0; j < figObject[i].ref_no.length; j++) {
      var x = figObject[i].ref_no[j];
// adds reference numberals
    slide[i].addText(
      x,
      refno_opts[j]
    )
    }
  }
  console.log('writefile')
   pptx.writeFile();
}
function setClient(){
  var passData = document.getElementById("client").value;
  $.ajax({
    type: 'POST',
    url: 'https://uzzpphemz0.execute-api.us-west-2.amazonaws.com/default/QueryClientFigs',
    data: JSON.stringify({"passData": passData}),
    contentType: "application/json",
    success: function(data){
      console.log(data)
      boilertext(data)
    }
  })
  $.ajax({
    type: 'POST',
    url: 'https://w7sp7ajda9.execute-api.us-west-2.amazonaws.com/default/QueryClientBackground',
    data: JSON.stringify({"passData": passData}),
    contentType: "application/json",
    success: function(data2){
      console.log(data2)
      setBackground(data2)
    }
  })
}
function setBackground(data){
  bgCategory = []
  bgBoiler = []
  var i;
  for (i = 0; i < data.Items.length; i++) {
  bgCategory[i] = data.Items[i].Subject
  bgBoiler[i] = data.Items[i].BoilerText
console.log(bgBoiler[i])
  var createoption = document.createElement('option');
  createoption.innerHTML = bgCategory[i];
  createoption.value = i
  document.getElementById("subject").appendChild(createoption);
  }
  console.log(data.Items)
}

function changeBG(){
  var eye = document.getElementById("subject").value;
  console.log(eye)
  var i = Number(eye)
  console.log(i)
  document.getElementById('bgText').value = bgBoiler[i]
}
//figbutton = false;
function getInput(){
console.log('there')
///////////////  1. Basic Data  ////////////////////////////////
var clientTracking = document.getElementById('clientTracking').value;
var firmTracking = document.getElementById('firmTracking').value;
var title = document.getElementById('Title').value;
if (document.getElementById("typeNP").checked == true){
  var appType = "Non-Provisional Patent Application"
};
if (document.getElementById("typeP").checked == true){
  var appType = "Provisional Patent Application"
};
filename = clientTracking + " / " + firmTracking + " - " + appType
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

 figEntry[i] = {num: boo[i].value, fig: boo2[i].innerText, spec: boo3[i].innerText};

}
figEntry.sort((a, b) => (a.num > b.num) ? 1 : -1);

for (i=0; i<figEntry.length; i++ ){
boob[i] = figEntry[i].fig;
boob2[i] = figEntry[i].spec;
}
//////////// 4. GET CLAIMS   /////////////////////////////////////////////////
var things = document.getElementsByClassName('claimsRow');
var thingnumber = document.getElementsByClassName('claimNo');
var thingpreamble = document.getElementsByClassName('preamble')
var thingclaim = document.getElementsByClassName('claimtext')
  number = [];
  preamble = [];
  preamblesteps = [];
  claim = [];
  claimsteps = [];
for (i=0; i<thingnumber.length; i++ ){
  number[i] = thingnumber[i].innerHTML;
  var pop = thingpreamble[i].innerText;
  var pre = pop.split("\n");
  preamble[i] = pre[0];
  preamblesteps[i]=[];
  var k;
for (k=1; k < pre.length; k++){
  preamblesteps[i][k-1]= {psteps: pre[k].replace(/^\s+|\s+$/g, '')};
}
  var str = thingclaim[i].value;
  var res = str.split("\n");
  claimsteps[i] = [];
for (var j=0; j < res.length; j++){
    claimsteps[i][j] = {steps: res[j].replace(/^\s+|\s+$/g, '')};
    console.log(claimsteps)
}
    // claim[i] = {
    //   number:number[i],
    //   preamble: preamble[i],
    //   preamblesteps: preamblesteps[i],
    //   claimsteps: claimsteps[i]
    // }
}
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
  number:number,
  preamble: preamble,
  preamblesteps: preamblesteps,
  claimsteps: claimsteps
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
}

function myFunction(data){
    function loadFile(url,callback){
        JSZipUtils.getBinaryContent(url,callback);
    }
    loadFile("assets/docs/demoapptemplate.docx",function(error,content){
        if (error) { throw error };
        var zip = new JSZip(content);
        var doc=new Docxtemplater().loadZip(zip)
        doc.setData(data);
        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(JSON.stringify({error: e}));
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
            throw error;
        }
        var out=doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) //Output the document using Data-URI
        saveAs(out, filename+".docx")
    })};
