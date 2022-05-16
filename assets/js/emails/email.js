function clicknext(){
  document.getElementById("emailcase").style.display="none"
 document.getElementById("emailform").style.display="block"

 var globalMatter = document.getElementById("emailMatter").value
 document.getElementById("emailbuttonscardcase2").innerHTML = globalMatter;
//   document.getElementById("emailcase").style.display="none"
//   // document.getElementById("emailform2").style.display="block"
//   if (globalMatter == "001.001") {
//     document.getElementById("emailform1").style.display="block"
//   }
//   else if (globalMatter == "002.002") {
//     document.getElementById("emailform2").style.display="block"
//   } 
// else  if (globalMatter == "002.003") {
//     document.getElementById("emailform3").style.display="block"
//   } else { document.getElementById("emailform4").style.display="block"
// }
  // document.getElementById("emailCardtitle").innerHTML="Email For "+ globalMatter
}
function clickback(){
  document.getElementById("emailcase").style.display="block"
  document.getElementById("emailform").style.display="none"

  // document.getElementById("emailform1").style.display="none"
  // document.getElementById("emailform2").style.display="none"
  // document.getElementById("emailform3").style.display="none"
  // document.getElementById("emailform4").style.display="none"
}

///////////////////////////////////////////////////////////////////////////////
