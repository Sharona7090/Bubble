
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('code')){
  const code = urlParams.get('code')
  console.log('referrer: cognito')

    const passData = {
    code: code
  }
  $.ajax({
    type: 'POST',
    url: 'https://9us3dz5yuh.execute-api.us-west-2.amazonaws.com/test/LoginAuth',
    data: JSON.stringify({"passData": passData}),
    contentType: "application/json",
    success: function(data){
      console.log(data)
      loginSuccess(data)
      //receives user data and sessionID
    }
  })
}
else{
  console.log('referrer: not cognito')

  if (localStorage.getItem("var1") === null) {
    // window.location.replace("https://actiondraft.auth.us-west-2.amazoncognito.com/login?client_id=161ft98gmr0m3nacu8s1663gmn&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:5000/emails.html"); //redirect to hosted UI
  }else{
     const sessionID = localStorage.getItem("var1");
     const passData = {
     sessionID: sessionID
   }
     $.ajax({
       type: 'POST',
       url: ' ',
       data: JSON.stringify({"passData": passData}),
       contentType: "application/json",
       success: function(data){
         console.log(data)
         loginSuccess(data)
       }
     })
  }

}

///////////////////////////////////////////////////////////////////////////////
function loginSuccess(data){
  document.getElementById('kt_body').style.visibility= "visible"

}
