function startemail(client, email, casedata){
// if (client == "Amazon" || )

var appnumber = casedata.appnumber
var artunit = casedata.artunit
var clientid = casedata.clientid
var confirmation = casedata.confirmation
var examiner = casedata.examiner
var filingdate = casedata.filingdate
var firmid = casedata.firmid
var firstinventor = casedata.firstinventor
var inventiontitle = casedata.inventiontitle
var applicationtitle = casedata.applicationtitle

console.log(client, email, casedata)
funcNfoaRec(casedata)
}
