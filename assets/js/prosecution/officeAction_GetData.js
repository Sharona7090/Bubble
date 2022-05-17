function populatecasedata(caseno, clientno, title, inventor, appnumber, filingdate, confirmation, examiner, artunit){
  document.getElementById("firmmatter").value = caseno;
  document.getElementById("clientmatter").value = clientno;
  document.getElementById("title").value = title.toUpperCase();;
  document.getElementById("inventor").value = inventor;
  document.getElementById("appnumber").value = appnumber;
  document.getElementById("filingdate").value = filingdate;
  document.getElementById("confirmation").value = confirmation;
  document.getElementById("examiner").value = examiner;
  document.getElementById("artunit").value = artunit;
  document.getElementById("maildate").value = maildate;
  "Pat Lawyerton"
  "68,244"
  document.getElementById('pendClaims').value
  document.getElementById('indClaims').value
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

}

function getBasicData(){
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
  pending = document.getElementById('pendClaims').value
  indInput = document.getElementById('indClaims').value
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
  //////////// get Independent claims /////////////////////////////////////////
  ind3=[]
pen3=[]

  /// Extract independent claims numbers ///

    indInput = indInput.replace(/[^0-9]/g, ' ')
     indInput = indInput.replace(/  +/g, ' ');
    var ind2 = indInput.split(" ");
    for (n=0; n<ind2.length; n++){
     ind3[n] = Number(ind2[n].match(/\d+/)[0])
    }
    console.log(ind3);
    introInd = Array.from(ind3);
    console.log(introInd);

    if (introInd.length==1){
       ind = introInd[0]
       ind = "claim " + ind
    }
    if (introInd.length == 2){
      ind = introInd[0] + " and " +introInd[1]
      ind = "claims " + ind

    }
    if (introInd.length >2){
      introInd[introInd.length-1] = "and " + introInd[introInd.length-1]
      ind = introInd.join(', ')
      ind = "claims " + ind

    }

    ///////////// clean pending claims /////////////////////////////////////
    pending = pending.replace(/[a-zA-Z]+/g, ",")
    pending = pending.replace(/  /g, " ")
    pending = pending.replace(/ /g, "")

    for (s = 0; s<10; s++){
      pending = pending.replace(/,,/g, ",")
    }

    pending = pending.replace(/, ,/g, ",")

    console.log(pending);

     // pending = pending.replace(/  +/g, ' ');
    // var pen2 = pending.split(",");
    // for (n=0; n<pen2.length; n++){
    //  pen3[n] = Number(pen2[n].match(/\d+/)[0])
    // }
    // console.log(pen3);
    // introPen = Array.from(pen3);
    // console.log(introPen);
    penRanges = pending.split(',')
    if (penRanges.length==1){
       pen = penRanges[0]
       pen = "Claim " + pen + " was"
    }
    if (penRanges.length == 2){
      pen = penRanges[0] + " and " +penRanges[1]
      pen = "Claims " + pen + " were"

    }
    if (penRanges.length >2){
      penRanges[penRanges.length-1] = "and " + penRanges[penRanges.length-1]
      pen = penRanges.join(', ')
      pen = "Claims " + pen + " were"
    }

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
}
  ///////////// 6. 102 /////////////////////////////////////////////////////////

function get102Data(){
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
//   if(claims102[i].match(numbers)){
// claims102In[i] = "Claim " + claims102[i] +" is"
//      claims102Title[i] = "Claim " + claims102[i]
//      claims102end[i] = "claim " + claims102[i] +" is"
//   } else{
//     claims102In[i] = "Claims "+ claims102[i]  +" are"
//     claims102Title[i] = "Claims " + claims102[i]
//      claims102end[i] = "claims " + claims102[i] +" are"
//   }
/// **************Sort Claims*************************************************

  /// Extract all claims numbers ///
  var dash=[]
  var star=[]
  k=-1
    var strsub = claims102[i];
    var str = strsub.replace(/[a-zA-Z]+/g, ",")
    var str = str.replace(/ /g, ",")

    for (r = 0; r<10; r++){
      var str = str.replace(/,,/g, ",")
    }
    console.log(str)

     // var str = strsub.replace(", and", ",").replace("and", ",");
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
      console.log(star)
////// put rejected claims back into ranges string /////////////////////////////
var rejranges = [], rejrstart, rejrend;
for (var n = 0; n < star.length; n++) {
  rejrstart = star[n];
  rejrend = rejrstart;
  while (star[n + 1] - star[n] == 1) {
    rejrend = star[n + 1]; // increment the index if the numbers sequential
    n++;
  }
  rejranges.push(rejrstart == rejrend ? rejrstart+'' : rejrstart + '-' + rejrend);
}
/// add an "and" to last element ///
if (rejranges.length>1){
rejranges[rejranges.length-1] = "and " + rejranges[rejranges.length-1]
}
if (rejranges.length == 2){
var rejstring = rejranges[0]+ " " + rejranges[1]
}
if (rejranges.length > 2){
var rejstring = rejranges.join(', ')
}
if (rejranges.length ==1){
rejstring = rejranges[0]
}
      if(star.length ==1){
    claims102In[i] = "Claim " + rejstring +" is";
         claims102Title[i] = "Claim " + rejstring +" stands";
         claims102end[i] = "claim " + rejstring +" is";
      } else{
        claims102In[i] = "Claims "+ rejstring  +" are";
        claims102Title[i] = "Claims " + rejstring +" stand";
         claims102end[i] = "claims " + rejstring +" are";
      }
      ///////////////////////////////////////////////////////////////////////////////

      /// Filter for independent claims numbers in rejection///
      var rejInd = star.filter(x => ind3.indexOf(x) !== -1)

    console.log(rejInd)
    /// Filter for dependent claims numbers ///
    let indClaims = star.filter(x => ind3.includes(x));
  const filterArray = (star, indClaims) => {
   const filtered = star.filter(el => {
      return indClaims.indexOf(el) === -1;
   });
   return filtered;
};
  var depClaims = filterArray(star, indClaims)
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
  if (ranges.length>1){
    ranges[ranges.length-1] = "and " + ranges[ranges.length-1]
  }
  if (ranges.length == 2){
    var depstring = ranges[0]+ " " + ranges[1]
  }
  if (ranges.length > 2){
    var depstring = ranges.join(', ')
  }
  if (ranges.length ==1){
    depstring = ranges[0]
  }
  /// find secondary independent claims ///
  secInd=[]
   deploop=[]
   secInd = Array.from(rejInd);
   secInd.shift()
  for (n=1; n<secInd.length-1; n++){
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
    secInd[secInd.length-1] = "and " +  secInd[secInd.length-1]
    secIndString = "Claims " +secInd.join(', ')
    secIndString2 = "claims " +secInd.join(', ')+ " are"
    secIndString3 = "claims " +secInd.join(', ')
  }

/// ***************************************************************
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
      anfirstindno: rejInd[0]
    }
    restind[i] = false;
  }
  if ((star.length - depClaims.length) > 1){
    firstind[i] = {
      anfirstindno: rejInd[0]
    }
    restind[i] = {
      anrestindno: secIndString,
      anrestindno2: secIndString2,
      anrestindno3: secIndString3,
      anfirstindno: rejInd[0],
      deploop:  deploop,
      anrefshort: refnameshort102[i]
    }
  }
}
}
function get103Data(){
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
    for (j=0; j< reftype103.length; j++){
      refnameshort103[j] = refname103[j].value.replace(/et al.|et al|et. al/gi, "").trim();
      if (reftype103[j].value != 'other' && reftype103[j].value != 'U.S. Patent Publication' && reftype103[j].value != 'U.S. Patent'){
        console.log('saved ref')
        reference103[j] = reftype103[j].options[reftype103[j].selectedIndex].text;
        refnameshort103[j] = reference103[j];

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
  }
  if (reference103.length == 2){
    refList[i] = reference103[0]+ " in view of " +reference103[1]
    refListshort[i] = refnameshort103[0]+ " in view of " +refnameshort103[1]
    refListshort2[i] = refnameshort103[0]+ " and " +refnameshort103[1] +", individually or in combination,"
    refListshort3[i] = refnameshort103[0]+ " and " +refnameshort103[1] +", individually or in combination"
    refListshort4[i] = "The combination of " + refnameshort103[0]+ " and " +refnameshort103[1]
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
  // if(claims103[i].match(numbers)){
  // claims103In[i] = "Claim " + claims103[i] +" is"
  //    claims103Title[i] = "Claim " + claims103[i]
  //    claims103end[i] = "claim " + claims103[i] +" is"
  // } else{
  //   claims103In[i] = "Claims "+ claims103[i]  +" are"
  //   claims103Title[i] = "Claims " + claims103[i]
  //    claims103end[i] = "claims " + claims103[i] +" are"
  // }
  /// **************Sort Claims*************************************************

  /// Extract all claims numbers in rejection "star"///
  var dash=[]
  var star=[]
  k=-1
    var strsub = claims103[i];
    var str = strsub.replace(/[a-zA-Z]+/g, ",")
    var str = str.replace(/ /g, ",")

    for (r = 0; r<10; r++){
      var str = str.replace(/,,/g, ",")
    }
    console.log(str)
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
      ////// put rejected claims back into ranges string /////////////////////////////
      var rejranges = [], rejrstart, rejrend;
      for (var n = 0; n < star.length; n++) {
        rejrstart = star[n];
        rejrend = rejrstart;
        while (star[n + 1] - star[n] == 1) {
          rejrend = star[n + 1]; // increment the index if the numbers sequential
          n++;
        }
        rejranges.push(rejrstart == rejrend ? rejrstart+'' : rejrstart + '-' + rejrend);
      }
      /// add an "and" to last element ///
      if (rejranges.length>1){
      rejranges[rejranges.length-1] = "and " + rejranges[rejranges.length-1]
      }
      if (rejranges.length == 2){
      var rejstring = rejranges[0]+ " " + rejranges[1]
      }
      if (rejranges.length > 2){
      var rejstring = rejranges.join(', ')
      }
      if (rejranges.length ==1){
      rejstring = rejranges[0]
      }
            if(star.length ==1){
          claims103In[i] = "Claim " + rejstring +" is";
               claims103Title[i] = "Claim " + rejstring +" stands";
               claims103end[i] = "claim " + rejstring +" is";
            } else{
              claims103In[i] = "Claims "+ rejstring  +" are";
              claims103Title[i] = "Claims " + rejstring +" stand";
               claims103end[i] = "claims " + rejstring +" are";
            }
            ///////////////////////////////////////////////////////////////////////////////

      /// Filter for independent claims numbers in rejection///
      var rejInd = star.filter(x => ind3.indexOf(x) !== -1)
    /// Filter for dependent claims numbers ///
    let indClaims = star.filter(x => ind3.includes(x));
  const filterArray = (star, indClaims) => {
   const filtered = star.filter(el => {
      return indClaims.indexOf(el) === -1;
   });
   return filtered;
};
  var depClaims = filterArray(star, indClaims)
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
  if (ranges.length == 2){
    var depstring = ranges[0]+ " " + ranges[1]
  }
  if (ranges.length > 2){
    var depstring = ranges.join(', ')
  }
  if (ranges.length ==1){
    depstring = ranges[0]
  }

  /// find secondary independent claims ///
  secInd=[]
   deploop=[]
   secInd = Array.from(rejInd);
   secInd.shift()
  for (n=0; n<secInd.length-1; n++){
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
      firstind103[i] = {
        obfirstindno: rejInd[0]
      }
      restind103[i] = false;
    }
    if ((star.length - depClaims.length) > 1){
      firstind103[i] = {
        obfirstindno: rejInd[0]
      }
      restind103[i] = {
        obrestindno: secIndString,
        obrestindno2: secIndString2,
        obestindno3: secIndString3,
        obfirstindno: rejInd[0],
        deploop:  deploop,
        obnrefshort: refnameshort103[i]
      }
    }
  }
}
