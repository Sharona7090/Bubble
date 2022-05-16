// function fillform_demo(){
//   setTimeout(function(){
//     document.getElementById("clientTracking").value = "P8765-US"
//     document.getElementById("title").value= "Fancy New Something Cool Invention";
//     document.getElementById("inventor").value = "John Smith"
//     document.getElementById("applicationNo").value = "15/324,112"
//     document.getElementById("filingDate").value = "January 1, 2019"
//     document.getElementById("confirmationNo").value = "3324"
//     document.getElementById("examiner").value = "Thomas, Kate"
//     document.getElementById("artunit").value = "5366"
//     document.getElementById("maildate").focus()
//
//   }, 700);
//
// }




function makeProsShell(){
numbers = /^[0-9]+$/;
attyno = document.getElementById("firmmatter").value;
clientno = document.getElementById("clientmatter").value;
title = document.getElementById("title").value.toUpperCase();;
inventor = document.getElementById("inventor").value;
appnumber = document.getElementById("appnumber").value;
filingdate = document.getElementById("filingdate").value;
confirmno = document.getElementById("confirmation").value;
examiner = document.getElementById("examiner").value;
artunit = document.getElementById("artunit").value;
maildate = document.getElementById("maildate").value;
signature = "Pat Lawyerton"
regnumber = "68,244"
// pendingclaims = document.getElementById("pending").value;
filename = clientno+ " / " + attyno + " - draft response to office action";
////////////////////////////////////////////////////////////
amendspec = document.getElementById("amendspec").checked;
amenddraw = document.getElementById("amenddraw").checked;
amendclaims = document.getElementById("amendclaims").checked;
allow = document.getElementById("allow").checked;
double = document.getElementById("double").checked
objections = document.getElementById("objections").checked;
interview = document.getElementById("interview").checked
re112 = document.getElementById("re112").checked;
re101 = document.getElementById("re101").checked;
re102 = document.getElementById("re102").checked;
re103 = document.getElementById("re103").checked;
/////////// 1. Allowable ///////////////////////////////////////////////////////
allowclaims = document.getElementById("allowed").value.trim();
wouldbeclaims = document.getElementById("wouldbe").value.trim();
/////////// 2. eligible ///////////////////////////////////////////////////////////
eligibleclaims = document.getElementById("eligibleC").value.trim();
///////////// 3. Double ////////////////////////////////////////////////////////
doubleCount = document.getElementsByClassName('doublein1').length;
dpinput1=[];
dpinput2=[];
dpinput3=[];
for (i=0; i<doubleCount; i++){
  dpinput1[i] = document.getElementsByClassName('doublein1')[i].value.trim();
  dpinput2[i] = document.getElementsByClassName('doublein2')[i].value.trim();
  dpinput3[i] = document.getElementsByClassName('doublein3')[i].value.trim();
}
///////////// 4. objection  /////////////////////////////////////////////////////////
objCount = document.getElementsByClassName('objection1').length;
  obj1=[];
  obj2=[];
  for (i=0; i<objCount; i++){
    obj1[i] = document.getElementsByClassName('objection1')[i].value.trim();
    obj2[i] = document.getElementsByClassName('objection2')[i].value.trim();
  }
///////////// 5. 112 /////////////////////////////////////////////////////////
    loop_wr=[]
    claims112=[];
    type112=[];
wrCount = document.getElementsByClassName('claims112').length;
    for (i=0; i<wrCount; i++){
      claims112[i] = document.getElementsByClassName('claims112')[i].value.trim();
      type112[i] = document.getElementsByClassName('type112')[i].value;
    }
///////////// 6. 102 ///////////////////////////////////////////////////////////
function six(){
  console.log()
 firstind=[]
 restind=[]
 dep=[]
 anCount = document.getElementsByClassName('claims102').length;
 intro102=[]
 intro102[0] = true;
 claims102=[];
 reftype102=[];
 refno102=[];
 refname102=[];
 claims102In=[];
 claims102end=[];
 claims102Title=[];
 claims102InTitle=[];
 refnameshort102 = [];
 reference102=[]
for (i=0; i<anCount; i++){
  claims102[i] = document.getElementsByClassName('claims102')[i].value.trim();
  reftype102[i] = document.getElementsByClassName('reftype102')[i].value;
  refno102[i] = document.getElementsByClassName('refno102')[i].value.trim();
  refname102[i] = document.getElementsByClassName('refname102')[i].value.trim();
  refnameshort102[i] = refname102[i].replace(/et al.|et al|et. al/gi, "").trim();
  reference102[i] = reftype102[i]+' No. '+refno102[i] + ' to '+refname102[i] +', hereinafter ("'+refnameshort102[i]+'")'
console.log(reference102[i])
  if(claims102[i].match(numbers)){
claims102In[i] = "Claim " + claims102[i] +" is"
     claims102Title[i] = "Claim " + claims102[i]
     claims102end[i] = "claim " + claims102[i] +" is"
  } else{
    claims102In[i] = "Claims "+ claims102[i]  +" are"
    claims102Title[i] = "Claims " + claims102[i]
     claims102end[i] = "claims " + claims102[i] +" are"
  }
/// **************Sort Claims*************************************************
  var ind3=[]
  var ind = "1, 6, and 14"
  /// Extract independent claims numbers ///
  var ind2 = ind.split(",");
  for (n=0; n<ind2.length; n++){
   ind3[n] = Number(ind2[n].match(/\d+/)[0])
  }
    console.log(ind3);
  /// Extract all claims numbers ///
  var dash=[]
  var star=[]
  k=-1
  console.log(claims102[i]);
    var strsub = claims102[i];
     var str = strsub.replace(", and", ",").replace("and", ",");
    var res = str.split(",");
    for (n=0; n<res.length; n++){
       dash = res[n].split("-");
       if (dash.length == 2){
       var big = Number(dash[1].match(/\d+/)[0] )
       var small = Number(dash[0].match(/\d+/)[0] )
        for (j=small; j<=big; j++){
          k=k+1
          star[k] = j;
        }}
       else{
        k=k+1
        star[k] = Number(res[n]);}
      }
    console.log(star);
    /// Filter for independent claims numbers ///
    function checkIndClaims(claim) {
      return claim == ind3[0] || claim == ind3[1] || claim == ind3[2] || claim == ind3[3] ;
    }
    var indClaims = star.filter(checkIndClaims);
        console.log(indClaims)
  /// Filter for dependent claims numbers ///
  function checkDepClaims(claim) {
    return claim !== ind3[0] && claim !== ind3[1] && claim !== ind3[2] && claim !== ind3[3] ;
  }
  var depClaims = star.filter(checkDepClaims);
      console.log(depClaims)


  /// Put dependent claims into ranges ///
    var ranges = [], rstart, rend;
    for (var n = 0; n < depClaims.length; n++) {
      rstart = depClaims[n];
      rend = rstart;
      while (depClaims[n + 1] - depClaims[n] == 1) {
        rend = depClaims[n + 1]; // increment the index if the numbers sequential
        n++;
      }
      ranges.push(rstart == rend ? rstart+'' : rstart + '-' + rend);
    }

  /// add an "and" to last element ///

  if (ranges.length==2){
    var depstring = ranges[0]+ "and " + ranges[1]
}
  if (ranges.length>1){
  ranges[ranges.length-1] = "and " + ranges[ranges.length-1]
}    console.log(ranges);
    var depstring = ranges.join(', ')

    if (depClaims.length == 2){
      var depstring = depClaims[0]+ "and " + depClaims[1]
    }
      console.log(depstring);
  /// find secondary independent claims ///
  secInd=[]
   deploop=[]
  for (n=0; n<indClaims.length-1; n++){
   secInd[n] = indClaims[n+1];
   deploop[n]={
     depclaimsingle:"Similarly, claim "+secInd[n]
   }
}
    deploop[0]={
      depclaimsingle:"For example, claim "+secInd[0]
  }
  if (secInd.length == 1){
    secIndString = "Claim "+secInd[0]
    secIndString2 = "claim "+secInd[0]+ " is"
    secIndString3 = "claim "+secInd[0]
  }
  if (secInd.length == 2){
    secIndString = "Claims " +secInd[0] + "and "+ secInd[1]
    secIndString2 = "claims " +secInd[0] + "and " +secInd[1]+ " are"
    secIndString3 = "claims " +secInd[0] + "and " +secInd[1]
  }
  if (secInd.length > 2){
    secInd[secInd.length-1] = "and " +  secInd[secInd.length-1]
    secIndString = "Claims " +secInd.join(', ')
    secIndString2 = "claims " +secInd.join(', ')+ " are"
    secIndString3 = "claims " +secInd.join(', ')
  }

/// ***************************************************************
 firstind = []
 restind = []
 dep = []
  if (depClaims.length>0){
    dep[i] = true;
    if(depClaims.length>1){
      depstring1 = "Claims " +depstring;
      depstring2 =  "Claims " +depstring+ " each depend";
      depstring3 = "claims " +depstring+ " are"
      depstring4 = "claims " +depstring
    }else{
      depstring1 = "Claim " +depstring;
      depstring2 =  "Claim " +depstring+ " depends";
      depstring3 = "claim " +depstring+ " is"
      depstring4 = "claim " +depstring
    }
    dep[i] = {
      andepno1: depstring1,
      andepno2: depstring2,
      andepno3: depstring3,
      andepno4: depstring4,
      anrefshort: refnameshort102[i]
    }
  }else{

    dep[i] = false;
  }
  if (depClaims.length == star.length){
    firstind[i] = false;
    restind[i] = false;
  }
  if ((star.length - depClaims.length) == 1){
    firstind[i] = {
      anfirstindno: ind3[0]
    }
console.log(ind3[0])
    restind[i] = false;
  }
  if ((star.length - depClaims.length) > 1){

    firstind[i] = {
      anfirstindno: ind3[0]
    }
    console.log(ind3[0]);
    // restind = []
    restind[i] = {
      anrestindno: secIndString,
      anrestindno2: secIndString2,
      anrestindno3: secIndString3,
      anfirstindno: ind3[0],
      deploop:  deploop,
      anrefshort: refnameshort102[i]
    }
  }
console.log(firstind, restind, dep)
console.log(firstind);
}
}
///////////////// 7. 103 ///////////////////////////////////////////////////////
function seven(){
firstind103=[]
restind103=[]
dep103=[]
obCount = document.getElementsByClassName('inner103').length;
intro103=[]
intro103[0] = true;
claims103=[];
claims103In=[];
claims103end=[];
claims103Title=[];
claims103InTitle=[];
refnameshort103 = [];
refList=[]
refListshort = []
refListshort2 = []
refListshort3 = []
refListshort4 = []
reference103=[]
for (i=0; i<obCount; i++){
  // reference103=[]
  claims103[i] = document.getElementsByClassName('claims103')[i].value.trim();
  var reftype103 = document.getElementsByClassName("inner103")[i].getElementsByClassName("reftype103");
  var refno103 = document.getElementsByClassName("inner103")[i].getElementsByClassName('refno103');
  var refname103 = document.getElementsByClassName("inner103")[i].querySelectorAll(".refname103");
// console.log(refname103)
  for (j=0; j< reftype103.length; j++){
    // console.log(refname103[j].value)
    refnameshort103[j] = refname103[j].value.replace(/et al.|et al|et. al/gi, "").trim();
    console.log(refnameshort103)
    if (reftype103[j].value == "saved"){
      reference103[j] = reftype103[j].options[reftype103[j].selectedIndex].text;
      refnameshort103[j] = reference103[j];

console.log(reference103[j])
    } else{
    if (reftype103[j].value == "other"){
      reference103[j] = refno103[j].value + ' to '+refname103[j].value +' (hereinafter "'+refnameshort103[j]+'")'
    } else{
      reference103[j] = reftype103[j].value+' No. '+refno103[j].value + ' to '+refname103[j].value +' (hereinafter "'+refnameshort103[j]+'")'
    }
  }
}
if (reference103.length == 1){
  refList[i] = reference103[0]
  refListshort[i] = refnameshort103[0]
  refListshort2[i] = refnameshort103[0]
  refListshort3[i] = refnameshort103[0]
  refListshort4[i] = refnameshort103[0]
  console.log(refList[i])
  console.log(refListshort[i])
}
if (reference103.length == 2){
  refList[i] = reference103[0]+ " in view of " +reference103[1]
  refListshort[i] = refnameshort103[0]+ " in view of " +refnameshort103[1]
  refListshort2[i] = refnameshort103[0]+ " and " +refnameshort103[1] +", individually or in combination,"
  refListshort3[i] = refnameshort103[0]+ " and " +refnameshort103[1] +", individually or in combination"
  refListshort4[i] = "The combination of " + refnameshort103[0]+ " and " +refnameshort103[1]
  console.log(refList[i])
  console.log(refListshort[i])
}

if (reference103.length == 3){
   // reference103[reference103.length-1] = "and " + reference103[reference103.length-1]
   // var citrus = reference103.slice(1, reference103.length);
   // var citrusString = citrus.join(", ");
  refList[i] = reference103[0]+ " in view of " +reference103[1]+ " and "+ reference103[2];

  // refnameshort103[refnameshort103.length-1] = "and " + refnameshort103[refnameshort103.length-1]
  // var citrus = refnameshort103.slice(1, refnameshort103.length);
  // var citrusString = citrus.join(", ");
 refListshort[i] = refnameshort103[0]+ " in view of " +refnameshort103[1] + " and " +refnameshort103[2]
 refListshort2[i] = refnameshort103[0]+ ", " +refnameshort103[1] + ", and " +refnameshort103[2] +", individually or in combination,"
 refListshort3[i] = refnameshort103[0]+ ", " +refnameshort103[1] + ", and " +refnameshort103[2] +", individually or in combination"
 refListshort4[i] = "The combination of " + refnameshort103[0]+ ", " +refnameshort103[1] + ", and " +refnameshort103[2]
}
if (reference103.length > 3){
   reference103[reference103.length-1] = "and " + reference103[reference103.length-1]
   var citrus = reference103.slice(1, reference103.length);
   var citrusString = citrus.join(", ");
  refList[i] = reference103[0]+ " in view of " +citrusString

  refnameshort103[refnameshort103.length-1] = "and " + refnameshort103[refnameshort103.length-1]
  var citrus = refnameshort103.slice(1, refnameshort103.length);
  var citrusString = citrus.join(", ");
 refListshort[i] = refnameshort103[0]+ " in view of " +citrusString

 refListshort2[i] = refnameshort103[0]+ ", " +citrusString+", individually or in combination,"
 refListshort3[i] = refnameshort103[0]+ ", " +citrusString+", individually or in combination"
 refListshort4[i] = "The combination of " + ", " +citrusString

}
///////////
if(claims103[i].match(numbers)){
claims103In[i] = "Claim " + claims103[i] +" is"
   claims103Title[i] = "Claim " + claims103[i]
   claims103end[i] = "claim " + claims103[i] +" is"
} else{
  claims103In[i] = "Claims "+ claims103[i]  +" are"
  claims103Title[i] = "Claims " + claims103[i]
   claims103end[i] = "claims " + claims103[i] +" are"
}
/// **************Sort Claims*************************************************
var ind3=[]
var ind = "1, 6, and 14"
/// Extract independent claims numbers ///
var ind2 = ind.split(",");
for (n=0; n<ind2.length; n++){
 ind3[n] = Number(ind2[n].match(/\d+/)[0])
}
/// Extract all claims numbers ///
var dash=[]
var star=[]
k=-1
  var strsub = claims103[i];
   var str = strsub.replace(", and", ",").replace("and", ",");
  var res = str.split(",");
  for (n=0; n<res.length; n++){
     dash = res[n].split("-");
     if (dash.length == 2){
     var big = Number(dash[1].match(/\d+/)[0] )
     var small = Number(dash[0].match(/\d+/)[0] )
      for (j=small; j<=big; j++){
        k=k+1
        star[k] = j;
      }}
     else{
      k=k+1
      star[k] = Number(res[n]);}
    }
  /// Filter for independent claims numbers ///
  function checkIndClaims103(claim) {
    return claim == ind3[0] || claim == ind3[1] || claim == ind3[2] || claim == ind3[3] ;
  }
  var indClaims = star.filter(checkIndClaims103);
/// Filter for dependent claims numbers ///
function checkDepClaims103(claim) {
  return claim !== ind3[0] && claim !== ind3[1] && claim !== ind3[2] && claim !== ind3[3] ;
}
var depClaims = star.filter(checkDepClaims103);
/// Put dependent claims into ranges ///
  var ranges = [], rstart, rend;
  for (var n = 0; n < depClaims.length; n++) {
    rstart = depClaims[n];
    rend = rstart;
    while (depClaims[n + 1] - depClaims[n] == 1) {
      rend = depClaims[n + 1]; // increment the index if the numbers sequential
      n++;
    }
    ranges.push(rstart == rend ? rstart+'' : rstart + '-' + rend);
  }
/// add an "and" to last element ///
if (ranges.length>1){
ranges[ranges.length-1] = "and " + ranges[ranges.length-1]
}
  var depstring = ranges.join(', ')

      if (depClaims.length == 2){
        var depstring = depClaims[0]+ "and " + depClaims[1]
      }
/// find secondary independent claims ///
secInd=[]
 deploop=[]
for (n=0; n<indClaims.length-1; n++){
 secInd[n] = indClaims[n+1];
 deploop[n]={
   depclaimsingle:"Similarly, claim "+secInd[n]
 }
}
  deploop[0]={
    depclaimsingle:"For example, claim "+secInd[0]
}
if (secInd.length == 1){
  secIndString = "Claim "+secInd[0]
  secIndString2 = "claim "+secInd[0]+ " is"
  secIndString3 = "claim "+secInd[0]

}
if (secInd.length == 2){
  secIndString = "Claims " +secInd[0] + " and "+ secInd[1]
  secIndString2 = "claims " +secInd[0] + " and " +secInd[1]+ " are"
  secIndString3 = "claims " +secInd[0] + " and " +secInd[1]

}
if (secInd.length > 2){
  secInd[secInd.length-1] = " and " +  secInd[secInd.length-1]
  secIndString = "Claims " +secInd.join(', ')
  secIndString2 = "claims " +secInd.join(', ')+ " are"
  secIndString3 = "claims " +secInd.join(', ')
}
/// ***************************************************************
  if (depClaims.length>0){
    dep103[i] = true;

    if(depClaims.length>1){
      depstring1 = "Claims " +depstring;
      depstring2 =  "Claims " +depstring+ " each depend";
      depstring3 = "claims " +depstring+ " are"
      depstring4 = "claims " +depstring
    }else{
      depstring1 = "Claim " +depstring;
      depstring2 =  "Claim " +depstring+ " depends";
      depstring3 = "claim " +depstring+ " is"
      depstring4 = "claim " +depstring
    }
    dep103[i] = {
      obdepno1: depstring1,
      obdepno2: depstring2,
      obdepno3: depstring3,
      obdepno4: depstring4,
      obrefshort: refnameshort103[i]
    }
  }else{
    dep103[i] = false;
  }
  if (depClaims.length == star.length){
    firstind103[i] = false;
    restind103[i] = false;
  }
  if ((star.length - depClaims.length) == 1){
    firstind103[i] = true;
    // firstind103 = []
    firstind103[i] = {
      obfirstindno: ind3[0]
    }
    restind103[i] = false;
  }
  if ((star.length - depClaims.length) > 1){
    firstind103[i] = true
    // firstind103 = []
    firstind103[i] = {
      obfirstindno: ind3[0]
    }
    restind103[i] = true;
    // restind103 = []
    restind103[i] = {
      obrestindno: secIndString,
      obrestindno2: secIndString2,
      obestindno3: secIndString3,
      obfirstindno: ind3[0],
      deploop:  deploop,
      obnrefshort: refnameshort103[i]
    }
  }


}
}
importClaims()
six()
seven()
getEmailShell()
}
function importClaims(){
  var myContent = tinymce.get("kt-tinymce-1").getContent();
  // var myContent2 = tinymce.get("kt-tinymce-1").getContent({ format: "text" });
   step1 = myContent.replace(/<s>.*?<\/s>/g, "") //removes strikethrough text
   step2 = step1.replace(/\[\[.*?\]\]/g, "") //removes anything inside double brackets
   step3 = step2.replace(/<u>|<\/u>/gi, ""); //removes underlines
   // step3 = step2.replace(/<[^>]*>/g, ''); //removes html
   // step4 = step3.replace(/\&nbsp;/g, ' ') //removes &nbsp
   // step5 = step4.replace(/  +/g, ' ');
   // cleanText = step5.replace(/currently amended/gi, "previously presented")
   cleanHtml = step3.replace(/currently amended/gi, "previously presented")
   console.log(cleanHtml)
}
///////////////////// REQUEST /////////////////////////////////////////////////
function getEmailShell(){
  var passData = {
    amendspec: amendspec,
    amenddraw: amenddraw,
    amendclaims: amendclaims,
    allow: allow,
    double: double,
    objections: objections,
    interview: interview,
    re112: re112,
    re101: re101,
    re102: re102,
    re103: re103,
    allowclaims: allowclaims,
    wouldbeclaims: wouldbeclaims,
    eligibleclaims: eligibleclaims,
    doubleCount: doubleCount,
    dpinput1: dpinput1,
    dpinput2: dpinput2,
    dpinput3: dpinput3,
    objCount: objCount,
    obj1: obj1,
    obj2: obj2,
    wrCount: wrCount,
    claims112: claims112,
    type112: type112,
    anCount: anCount,
    intro102: intro102,
    claims102In: claims102In,
    claims102Title: claims102Title,
    claims102end:claims102end,
    reference102: reference102,
    refnameshort102: refnameshort102,
    firstind: firstind,
    restind: restind,
    dep: dep,
    obCount: obCount,
    intro103: intro103,
    claims103In: claims103In,
    claims103Title: claims103Title,
    claims103end:claims103end,
    refList: refList,
    refListshort: refListshort,
    refListshort2: refListshort2,
    refListshort3: refListshort3,
    refListshort4: refListshort4,
    firstind103: firstind103,
    restind103: restind103,
    dep103: dep103,
    artunit: artunit,
    maildate: maildate,
    signature: signature,
    regnumber: regnumber,
    attyno: attyno,
    clientno: clientno,
    thetitle: title,
    inventor: inventor,
    applicationnumber: appnumber,
    filingdate: filingdate,
    confirmno: confirmno,
    examiner: examiner,
    // html: cleanHtml
  }

  console.log(passData);
    myFunction(passData)
  /// FOR USING LAMBDA
  $.ajax({
    type: 'POST',
    url: 'https://iidya55bn6.execute-api.us-west-2.amazonaws.com/default/CreatePros',
    data: JSON.stringify({"passData": passData}),
    contentType: "application/json",
    success: function(data){
      console.log(data)
      myFunction(data)
    }
  })
}



function myFunction(passData){
  PizZipUtils.getBinaryContent(
           "assets/docs/OAtemplate5.docx",
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
                   passData
               );
               doc.render();
               var out = doc.getZip().generate({
                   type: "blob",
                   mimeType:
                       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
               });
               saveAs(out, filename+".docx");
           }
       );
}
