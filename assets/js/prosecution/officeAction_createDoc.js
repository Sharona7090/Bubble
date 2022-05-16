document.getElementById('nfoa_form').addEventListener('submit', function(event){
  event.preventDefault();
  importClaims()
  getBasicData()
  get102Data()
  get103Data()
  createDocxData()
})

function createDocxData(){
  var passData = {
    pending: pen,
    ind:  ind,
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
    html: cleanHtml
  }

  console.log(passData);
    // invoke_docxtemp(passData)
  /// FOR USING LAMBDA
  $.ajax({
    type: 'POST',
    url: 'https://iidya55bn6.execute-api.us-west-2.amazonaws.com/default/CreatePros',
    data: JSON.stringify({"passData": passData}),
    contentType: "application/json",
    success: function(data){
      console.log(data)
      invoke_docxtemp(data)
    }
  })
}

function invoke_docxtemp(passData){
  PizZipUtils.getBinaryContent(
           doc,
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
