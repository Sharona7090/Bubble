function funcNfoaRec(casedata){
  var actionFull = "Non-Final Office Action Recommendation"
  var clientno = casedata.clientid
  var matter = casedata.firmid
  var title = casedata.title 
  var file = casedata.filingdate
  var ihc = "John"
  var to = "To: "
  var cc = "\r\Cc: "
  var subject = "\r\Subject: " + clientno + " / " + matter + " - " + actionFull + " (privileged and confidential)" + "\r\X-Unsent: 1 \r\Content-Type: text/html";
  var body = "\n\r<html><body style='font-size: 11pt; font-family:\"Calibri\",\"sans-serif\"';><table style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse; padding:0px;\"><tr style=\"border:0px none; border-collapse:collapse; padding:0px;\"><td style=\"font-family:calibri; font-size: 10.5pt; border:0px none; border-collapse:collapse;padding:0px;\"><b>NO ACTION REQUIRED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\"><b>  </b></td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Amazon Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt;border:0px none;border-collapse:collapse;	padding:0px;\">" + clientno + "</td></tr><tr style=\"border:0px none; border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">OC Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">" + matter + "</td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Matter Name:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse;padding:0px;\">" +  title + "</td></tr><tr style=\"border:0px none;	border-collapse:collapse;	padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;	border-collapse:collapse;padding:0px;\">Response Due Date:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;		border-collapse:collapse;padding:0px;\">" + file + "</td></tr></table><br>"
  /////    Body    ///////
  + "Dear "+ihc+",<br><br>We have received a Non-Final Office Action in the above-referenced patent application. Attached are copies of the Non-Final Office Action for your review. Our summary of the rejections and recommendation for response are as follows: <br><br><b>Do you recommend an Examiner interview?</b><br>[<i>Yes/No. Include a brief explanation.</i>]<br><br><b>Summary of rejected claims, cited art, and plan to overcome rejection:</b><br>[<i>Insert a brief summary of the status of the application, including number of RCEs filed, relevant materials, and your recommendation/response strategy.</i>]<br>" +
    /////    Signature    ///////
  "<br>Best,<br> Pat </body></html>" +  "<html><body lang=EN-US link=blue vlink=purple><div class=WordSection1><p class=MsoNormal style='margin-bottom:6.0pt'><b><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-language:ZH-CN'>Pat Lawyerton</span></b><b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";text-transform:uppercase;letter-spacing:1.0pt'><br></span></b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Senior Associate</span><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\"'><o:p></o:p></span></p><table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse'> <tr style='height:15.5pt'><td width=250 colspan=2 valign=top style='width:187.5pt;border:none;border-top:solid #BED600 2.25pt;padding:0in 5.75pt 0in 0in;height:15.5pt'> <p class=MsoNormal style='line-height:115%'> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Very Efficient Law Firm LLP </span> </b> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>123 Main Street, USA<o:p></o:p> </span> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>800-555-2342<o:p></o:p> </span> </p> </td></tr> <tr><td width=39 valign=top style='width:28.9pt;padding:0in 5.75pt 0in 0in'></td></tr></table><p class=MsoNormal style='mso-margin-top-alt:3.0pt;margin-right:0in;margin-bottom:5.0pt;margin-left:0in;line-height:12.0pt;mso-line-height-rule:exactly'><i><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Please consider the environment before printing this e-mail.<o:p></o:p></span></i></p><p class=MsoNormal><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060'><o:p>&nbsp;</o:p></span></p><p class=MsoNormal><o:p>&nbsp;</o:p></p></div></body></html>"

  var  textbox = to+cc+subject + body;
  var textFile = null,
  makeTextFile = function (text) {
  var data = new Blob([text], {type: 'text/plain'});
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);}
  textFile = window.URL.createObjectURL(data);
  return textFile;};
  const newLink = document.createElement("a");
  newLink.download = matter +" "+actionFull+".eml"
  newLink.href = makeTextFile(textbox);
  newLink.click();
};

function funcNfoaDraft(matter, clientno, attorney, title, file, ihc){
  var textbox = document.getElementById("anotes");
  console.log(textbox)
  var actionFull = "Response to Non-Final Office Action"
  var clientno = "4723-US"
  var matter = "14-090241"
  console.log(matter)
  var title = "Multi-Modal Haptic Feedback Touch Screen"
  var file = "June 2, 2021"
  var ihc = "John"
  var to = "To: "
  var cc = "\r\Cc: "
  var subject = "\r\Subject: " + clientno + " / " + matter + " - " + actionFull + " (privileged and confidential)" + "\r\X-Unsent: 1 \r\Content-Type: text/html";
  body = "\n\r<html><body style='font-size: 11pt; font-family:\"Calibri\",\"sans-serif\"';><table style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse; padding:0px;\"><tr style=\"border:0px none; border-collapse:collapse; padding:0px;\"><td style=\"font-family:calibri; font-size: 10.5pt; border:0px none; border-collapse:collapse;padding:0px;\"><b>ACTION REQUIRED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\"><b>Approve Response</b></td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Amazon Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt;border:0px none;border-collapse:collapse;	padding:0px;\">" + clientno + "</td></tr><tr style=\"border:0px none; border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">OC Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">" + matter + "</td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Matter Name:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse;padding:0px;\">" +  title + "</td></tr><tr style=\"border:0px none;	border-collapse:collapse;	padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;	border-collapse:collapse;padding:0px;\">Response Due Date:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;		border-collapse:collapse;padding:0px;\">" + file + "</td></tr></table><br>"
  /////    Body    ///////
  + "Dear "+ihc+",<br><br>Please find attached a draft response to the non-final office action for the above-referenced patent application. Please let us know if you approve or if you have comments or questions.<br><br>[Include any details or explanation if needed]<br><br>" +

    /////    Signature    ///////
    "<br>Best,<br> Pat </body></html>" +  "<html><body lang=EN-US link=blue vlink=purple><div class=WordSection1><p class=MsoNormal style='margin-bottom:6.0pt'><b><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-language:ZH-CN'>Pat Lawyerton</span></b><b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";text-transform:uppercase;letter-spacing:1.0pt'><br></span></b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Senior Associate</span><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\"'><o:p></o:p></span></p><table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse'> <tr style='height:15.5pt'><td width=250 colspan=2 valign=top style='width:187.5pt;border:none;border-top:solid #BED600 2.25pt;padding:0in 5.75pt 0in 0in;height:15.5pt'> <p class=MsoNormal style='line-height:115%'> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Very Efficient Law Firm LLP </span> </b> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>123 Main Street, USA<o:p></o:p> </span> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>800-555-2342<o:p></o:p> </span> </p> </td></tr> <tr><td width=39 valign=top style='width:28.9pt;padding:0in 5.75pt 0in 0in'></td></tr></table><p class=MsoNormal style='mso-margin-top-alt:3.0pt;margin-right:0in;margin-bottom:5.0pt;margin-left:0in;line-height:12.0pt;mso-line-height-rule:exactly'><i><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Please consider the environment before printing this e-mail.<o:p></o:p></span></i></p><p class=MsoNormal><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060'><o:p>&nbsp;</o:p></span></p><p class=MsoNormal><o:p>&nbsp;</o:p></p></div></body></html>"

      textbox.value = to+cc+subject + body;
      var textFile = null,
        makeTextFile = function (text) {
          var data = new Blob([text], {type: 'text/plain'});
          if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);}
          textFile = window.URL.createObjectURL(data);
          return textFile;};
          var link = document.getElementById('downloadlink');
          link.download = matter +" "+actionFull+".eml"
          link.href = makeTextFile(textbox.value);
          link.style.display = 'none';
          document.getElementById("downloadlink").click(); // Click on the checkbox
          // setTimeout(function(){window.location = window.location }, 1000);}
};
///////////////////////////////////////////////////////////////////////////////
function funcFoaRec(){
  var textbox = document.getElementById("anotes");
  console.log(textbox)
  var actionFull = "Final Office Action Recommendation"
  var clientno = "4723-US"
  var matter = "14-090241"
  console.log(matter)
  var title = "Multi-Modal Haptic Feedback Touch Screen"
  var file = "June 2, 2021"
  var ihc = "John"
  var to = "To: "
  var cc = "\r\Cc: "
  var subject = "\r\Subject: " + clientno + " / " + matter + " - " + actionFull + " (privileged and confidential)" + "\r\X-Unsent: 1 \r\Content-Type: text/html";
  var body = "\n\r<html><body style='font-size: 11pt; font-family:\"Calibri\",\"sans-serif\"';><table style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse; padding:0px;\"><tr style=\"border:0px none; border-collapse:collapse; padding:0px;\"><td style=\"font-family:calibri; font-size: 10.5pt; border:0px none; border-collapse:collapse;padding:0px;\"><b>NO ACTION REQUIRED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\"><b>  </b></td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Amazon Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt;border:0px none;border-collapse:collapse;	padding:0px;\">" + clientno + "</td></tr><tr style=\"border:0px none; border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">OC Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">" + matter + "</td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Matter Name:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse;padding:0px;\">" +  title + "</td></tr><tr style=\"border:0px none;	border-collapse:collapse;	padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;	border-collapse:collapse;padding:0px;\">Response Due Date:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;		border-collapse:collapse;padding:0px;\">" + file + "</td></tr></table><br>"
  /////    Body    ///////
  + "Dear "+ihc+",<br><br>We have receive a Final Office Action in the above-referenced patent application. Attached are copies of the Final Office Action for your review. Our summary of the rejections and recommendation for response are as follows: <br><br><b>Do you recommend an Examiner interview?</b><br>[<i>Yes/No. Include a brief explanation.</i>]<br><br><b>Summary of rejected claims, cited art, and plan to overcome rejection:</b><br>[<i>Insert a brief summary of the status of the application, including number of RCEs filed, relevant materials, and your recommendation/response strategy.</i>]<br>" +

    /////    Signature    ///////
"<br>Best,<br> Pat </body></html>" +  "<html><body lang=EN-US link=blue vlink=purple><div class=WordSection1><p class=MsoNormal style='margin-bottom:6.0pt'><b><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-language:ZH-CN'>Pat Lawyerton</span></b><b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";text-transform:uppercase;letter-spacing:1.0pt'><br></span></b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Senior Associate</span><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\"'><o:p></o:p></span></p><table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse'> <tr style='height:15.5pt'><td width=250 colspan=2 valign=top style='width:187.5pt;border:none;border-top:solid #BED600 2.25pt;padding:0in 5.75pt 0in 0in;height:15.5pt'> <p class=MsoNormal style='line-height:115%'> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Very Efficient Law Firm LLP </span> </b> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>123 Main Street, USA<o:p></o:p> </span> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>800-555-2342<o:p></o:p> </span> </p> </td></tr> <tr><td width=39 valign=top style='width:28.9pt;padding:0in 5.75pt 0in 0in'></td></tr></table><p class=MsoNormal style='mso-margin-top-alt:3.0pt;margin-right:0in;margin-bottom:5.0pt;margin-left:0in;line-height:12.0pt;mso-line-height-rule:exactly'><i><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Please consider the environment before printing this e-mail.<o:p></o:p></span></i></p><p class=MsoNormal><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060'><o:p>&nbsp;</o:p></span></p><p class=MsoNormal><o:p>&nbsp;</o:p></p></div></body></html>"

  textbox.value = to+cc+subject + body;
  var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([text], {type: 'text/plain'});
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);}
      textFile = window.URL.createObjectURL(data);
      return textFile;};
      var link = document.getElementById('downloadlink');
      link.download = matter +" "+actionFull+".eml"
      link.href = makeTextFile(textbox.value);
      link.style.display = 'none';
      document.getElementById("downloadlink").click(); // Click on the checkbox
      // setTimeout(function(){window.location = window.location }, 1000);}

};
////////////////////////////////////////////////////////////////////////////////
function funcFoaDraft(matter, clientno, attorney, title, file, ihc){
  var textbox = document.getElementById("anotes");
  console.log(textbox)
  var actionFull = "Response to Final Office Action"
  var clientno = "4723-US"
  var matter = "14-090241"
  console.log(matter)
  var title = "Multi-Modal Haptic Feedback Touch Screen"
  var file = "June 2, 2021"
  var ihc = "John"
  var to = "To: "
  var cc = "\r\Cc: "
  var subject = "\r\Subject: " + clientno + " / " + matter + " - " + actionFull + " (privileged and confidential)" + "\r\X-Unsent: 1 \r\Content-Type: text/html";
  body = "\n\r<html><body style='font-size: 11pt; font-family:\"Calibri\",\"sans-serif\"';><table style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse; padding:0px;\"><tr style=\"border:0px none; border-collapse:collapse; padding:0px;\"><td style=\"font-family:calibri; font-size: 10.5pt; border:0px none; border-collapse:collapse;padding:0px;\"><b>ACTION REQUIRED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\"><b>Approve Response</b></td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Amazon Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt;border:0px none;border-collapse:collapse;	padding:0px;\">" + clientno + "</td></tr><tr style=\"border:0px none; border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">OC Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">" + matter + "</td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Matter Name:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse;padding:0px;\">" +  title + "</td></tr><tr style=\"border:0px none;	border-collapse:collapse;	padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;	border-collapse:collapse;padding:0px;\">Response Due Date:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;		border-collapse:collapse;padding:0px;\">" + file + "</td></tr></table><br>"
  /////    Body    ///////
  + "Dear "+ihc+",<br><br>Please find attached a draft response to the final office action for the above-referenced patent application. Please let us know if you approve or if you have comments or questions.<br><br>[Include any details or explanation if needed]<br><br>" +

    /////    Signature    ///////
    "<br>Best,<br> Pat </body></html>" +  "<html><body lang=EN-US link=blue vlink=purple><div class=WordSection1><p class=MsoNormal style='margin-bottom:6.0pt'><b><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-language:ZH-CN'>Pat Lawyerton</span></b><b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";text-transform:uppercase;letter-spacing:1.0pt'><br></span></b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Senior Associate</span><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\"'><o:p></o:p></span></p><table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse'> <tr style='height:15.5pt'><td width=250 colspan=2 valign=top style='width:187.5pt;border:none;border-top:solid #BED600 2.25pt;padding:0in 5.75pt 0in 0in;height:15.5pt'> <p class=MsoNormal style='line-height:115%'> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Very Efficient Law Firm LLP </span> </b> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>123 Main Street, USA<o:p></o:p> </span> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>800-555-2342<o:p></o:p> </span> </p> </td></tr> <tr><td width=39 valign=top style='width:28.9pt;padding:0in 5.75pt 0in 0in'></td></tr></table><p class=MsoNormal style='mso-margin-top-alt:3.0pt;margin-right:0in;margin-bottom:5.0pt;margin-left:0in;line-height:12.0pt;mso-line-height-rule:exactly'><i><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Please consider the environment before printing this e-mail.<o:p></o:p></span></i></p><p class=MsoNormal><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060'><o:p>&nbsp;</o:p></span></p><p class=MsoNormal><o:p>&nbsp;</o:p></p></div></body></html>"

      textbox.value = to+cc+subject + body;
      var textFile = null,
        makeTextFile = function (text) {
          var data = new Blob([text], {type: 'text/plain'});
          if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);}
          textFile = window.URL.createObjectURL(data);
          return textFile;};
          var link = document.getElementById('downloadlink');
          link.download = matter +" "+actionFull+".eml"
          link.href = makeTextFile(textbox.value);
          link.style.display = 'none';
          document.getElementById("downloadlink").click(); // Click on the checkbox
          // setTimeout(function(){window.location = window.location }, 1000);}
};
///////////////////////////////////////////////////////////////////////////////
function funcNoaRec(){
  var textbox = document.getElementById("anotes");
  var actionFull = "Notice of Allowance Review"
  var clientno = "4723-US"
  var matter = "14-090241"
  console.log(matter)
  var title = "Multi-Modal Haptic Feedback Touch Screen"
  var file = "June 2, 2021"
  var ihc = "John"
  var to = "To: "
  var cc = "\r\Cc: "
  var subject = "\r\Subject: " + clientno + " / " + matter + " - " + actionFull + " (privileged and confidential)" + "\r\X-Unsent: 1 \r\Content-Type: text/html";
  var body = "\n\r<html><body style='font-size: 11pt; font-family:\"Calibri\",\"sans-serif\"';><table style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse; padding:0px;\"><tr style=\"border:0px none; border-collapse:collapse; padding:0px;\"><td style=\"font-family:calibri; font-size: 10.5pt; border:0px none; border-collapse:collapse;padding:0px;\"><b>ACTION REQUIRED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\"><b>Continuation Instructions  </b></td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Amazon Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt;border:0px none;border-collapse:collapse;	padding:0px;\">" + clientno + "</td></tr><tr style=\"border:0px none; border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">OC Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">" + matter + "</td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Matter Name:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse;padding:0px;\">" +  title + "</td></tr><tr style=\"border:0px none;	border-collapse:collapse;	padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;	border-collapse:collapse;padding:0px;\">Issue Fee Due:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;		border-collapse:collapse;padding:0px;\">" + file + "</td></tr></table><br>"
  /////    Body    ///////
  + "Dear "+ihc+",<br><br>We have receive a Notice of Allowance in the above-referenced patent application. Our summary of the prosecution and continuation recommendation are as follows: <br><br><b>Summary of Prosecution</b><br>[<i>Include a brief summary of prosecution history, number of office actions and RCEs, and any notable events</i>]<br><br><b>Recommendation for continuation</b><br>[<i>How well do the allowed claims cover the invention, and any reason for a CON, DIV, or CIP</i>]<br><br> Please let us know if you would like to file a continuation application. Unless instructed otherwise, we will pay the issue fee two (2) weeks before the issue fee due date. <br><br>" +

    /////    Signature    ///////
"<br>Best,<br> Pat </body></html>" +  "<html><body lang=EN-US link=blue vlink=purple><div class=WordSection1><p class=MsoNormal style='margin-bottom:6.0pt'><b><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-language:ZH-CN'>Pat Lawyerton</span></b><b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";text-transform:uppercase;letter-spacing:1.0pt'><br></span></b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Senior Associate</span><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\"'><o:p></o:p></span></p><table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse'> <tr style='height:15.5pt'><td width=250 colspan=2 valign=top style='width:187.5pt;border:none;border-top:solid #BED600 2.25pt;padding:0in 5.75pt 0in 0in;height:15.5pt'> <p class=MsoNormal style='line-height:115%'> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Very Efficient Law Firm LLP </span> </b> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>123 Main Street, USA<o:p></o:p> </span> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>800-555-2342<o:p></o:p> </span> </p> </td></tr> <tr><td width=39 valign=top style='width:28.9pt;padding:0in 5.75pt 0in 0in'></td></tr></table><p class=MsoNormal style='mso-margin-top-alt:3.0pt;margin-right:0in;margin-bottom:5.0pt;margin-left:0in;line-height:12.0pt;mso-line-height-rule:exactly'><i><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Please consider the environment before printing this e-mail.<o:p></o:p></span></i></p><p class=MsoNormal><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060'><o:p>&nbsp;</o:p></span></p><p class=MsoNormal><o:p>&nbsp;</o:p></p></div></body></html>"

  textbox.value = to+cc+subject + body;
  var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([text], {type: 'text/plain'});
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);}
      textFile = window.URL.createObjectURL(data);
      return textFile;};
      var link = document.getElementById('downloadlink');
      link.download = matter +" "+actionFull+".eml"
      link.href = makeTextFile(textbox.value);
      link.style.display = 'none';
      document.getElementById("downloadlink").click(); // Click on the checkbox
      // setTimeout(function(){window.location = window.location }, 1000);}

};
///////////////////////////////////////////////////////////////////////////////
function AARec(){
  var textbox = document.getElementById("anotes");
  console.log(textbox)
  var actionFull = "Advisory Action Recommendation"
  var clientno = "4723-US"
  var matter = "14-090241"
  console.log(matter)
  var title = "Multi-Modal Haptic Feedback Touch Screen"
  var file = "June 2, 2021"
  var ihc = "John"
  var to = "To: "
  var cc = "\r\Cc: "
  var subject = "\r\Subject: " + clientno + " / " + matter + " - " + actionFull + " (privileged and confidential)" + "\r\X-Unsent: 1 \r\Content-Type: text/html";
  var body = "\n\r<html><body style='font-size: 11pt; font-family:\"Calibri\",\"sans-serif\"';><table style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse; padding:0px;\"><tr style=\"border:0px none; border-collapse:collapse; padding:0px;\"><td style=\"font-family:calibri; font-size: 10.5pt; border:0px none; border-collapse:collapse;padding:0px;\"><b>NO ACTION REQUIRED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\"><b>  </b></td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Amazon Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt;border:0px none;border-collapse:collapse;	padding:0px;\">" + clientno + "</td></tr><tr style=\"border:0px none; border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">OC Tracking No.:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">" + matter + "</td></tr><tr style=\"border:0px none;border-collapse:collapse;padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;border-collapse:collapse;padding:0px;\">Matter Name:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none; border-collapse:collapse;padding:0px;\">" +  title + "</td></tr><tr style=\"border:0px none;	border-collapse:collapse;	padding:0px;\"><td style=\"font-family:calibri; font-size: 11pt; border:0px none;	border-collapse:collapse;padding:0px;\">Response Due Date:&nbsp;&nbsp;</td><td style=\"font-family:calibri; font-size: 11pt; border:0px none;		border-collapse:collapse;padding:0px;\">" + file + "</td></tr></table><br>"
  /////    Body    ///////
  + "Dear "+ihc+",<br><br>We have received an Advisory Action for the abovereferenced case. Attached are copies of the Advisory Action and the filed response to Final Office Action for your review. In the Advisory Action, the Examiner indicated...[insert summary of advisory action]. Our recommendation is... [insert recommendation]<br><br>Please let us know how you would like to proceed.<br><br>"+

    /////    Signature    ///////
"<br>Best,<br> Pat </body></html>" +  "<html><body lang=EN-US link=blue vlink=purple><div class=WordSection1><p class=MsoNormal style='margin-bottom:6.0pt'><b><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-language:ZH-CN'>Pat Lawyerton</span></b><b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";text-transform:uppercase;letter-spacing:1.0pt'><br></span></b><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Senior Associate</span><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\"'><o:p></o:p></span></p><table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse'> <tr style='height:15.5pt'><td width=250 colspan=2 valign=top style='width:187.5pt;border:none;border-top:solid #BED600 2.25pt;padding:0in 5.75pt 0in 0in;height:15.5pt'> <p class=MsoNormal style='line-height:115%'> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Very Efficient Law Firm LLP </span> </b> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>123 Main Street, USA<o:p></o:p> </span> <b> <span style='font-size:8.0pt;line-height:115%;font-family:\"Arial\",\"sans-serif\";color:#606060;text-transform:uppercase;letter-spacing:1.0pt'> <br> </span> </b> <span style='font-size:8.0pt;margin-bottom:0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>800-555-2342<o:p></o:p> </span> </p> </td></tr> <tr><td width=39 valign=top style='width:28.9pt;padding:0in 5.75pt 0in 0in'></td></tr></table><p class=MsoNormal style='mso-margin-top-alt:3.0pt;margin-right:0in;margin-bottom:5.0pt;margin-left:0in;line-height:12.0pt;mso-line-height-rule:exactly'><i><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060;mso-fareast-language:ZH-CN'>Please consider the environment before printing this e-mail.<o:p></o:p></span></i></p><p class=MsoNormal><span style='font-size:8.0pt;font-family:\"Arial\",\"sans-serif\";color:#606060'><o:p>&nbsp;</o:p></span></p><p class=MsoNormal><o:p>&nbsp;</o:p></p></div></body></html>"

  textbox.value = to+cc+subject + body;
  var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([text], {type: 'text/plain'});
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);}
      textFile = window.URL.createObjectURL(data);
      return textFile;};
      var link = document.getElementById('downloadlink');
      link.download = matter +" "+actionFull+".eml"
      link.href = makeTextFile(textbox.value);
      link.style.display = 'none';
      document.getElementById("downloadlink").click(); // Click on the checkbox
      // setTimeout(function(){window.location = window.location }, 1000);}

};
