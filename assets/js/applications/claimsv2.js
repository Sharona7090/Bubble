a = 1;
b = a+1;
c = b+1;
function addClaim1NEW(){
  a++;
  b++;
  c++;
  console.log("a="+a+", b="+b+", c="+c);

  var div = document.createElement('div')
  div.id = "div"+a;
    div.className = "firstClaims"
    // var choice1 = document.getElementById("preSelector1").value;

  // if (choice1 == "method"){
  div.innerHTML = '<div class="card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar1" style="height:10%; float:right; display:none"><button id="btn'+a+'"class="btn btn-icon btn-outline-secondary btndel1" onclick="deleteClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btn'+a+'"class="btn btn-icon btn-outline-secondary btnadd1" onclick="addDepClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true" text-indent:0px>&emsp;&emsp;<div id="claimno'+a+'" class="claimNo firstClaimNo" style="display:contents">'+a+'</div>. &emsp; <div class="preamble"  contenteditable="true" style="display: initial">The method of claim <div class="depNo1" style="display: initial">1</div>, further comprising:</div></div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
// }
// if (choice1 == "system"){
//   div.innerHTML = '<div class="card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar1" style="height:10%; float:right; display:none"><button id="btn'+a+'"class="btn btn-icon btn-outline-secondary btndel1" onclick="deleteClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btn'+a+'"class="btn btn-icon btn-outline-secondary btnadd1" onclick="addDepClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+a+'" class="claimNo firstClaimNo" style="display:contents">'+a+'</div>. &emsp; <div class="preamble" contenteditable="true" style="display: initial">The system of claim <div class="depNo1" style="display: initial">1</div>, wherein the instructions when executed by the at least one processor further cause the system to:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
// }

  document.getElementById("firstClaimSet").appendChild(div);

  var x = document.getElementsByClassName("secondClaimNo");
  var hh = document.getElementsByClassName("secondClaims");
  var i = 0;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML=a+1+i;
    var d = a+1+i
    hh[i].id = "div"+d;
  }



  var y = document.getElementsByClassName("thirdClaimNo");
  var q = document.getElementsByClassName("thirdClaims");
  var j = 0;
  for (j = 0; j < y.length; j++) {
    y[j].innerHTML=b+1+j;
    var dd =b+1+j;
    q[j].id = "div"+dd;
  }

  var r = document.getElementsByClassName("depNo2");
  var s = 0;
  for (s=0; s<r.length; s++){
    var rr = r[s].innerHTML;
    var rrrr = Number(rr)+1;
    console.log(rrrr);
      r[s].innerHTML=rrrr;
    console.log("rrrr="+rrrr);
  }

  var k = document.getElementsByClassName("depNo3");
  var t = 0;
  for (t=0; t<k.length; t++){
    var kk = k[t].innerHTML;
    var kkkk = Number(kk)+1;
    console.log(kkkk);
      k[t].innerHTML=kkkk;
    console.log("kkkk="+kkkk);
  }
  var z2 = document.getElementsByClassName("claimsBar2");
  var k2 = 0;
  for (k2 = 0; k2 < z2.length; k2++){
    var p2 = k2+2+a;
    z2[k2].innerHTML = '<button id="btndel'+p2+'"class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p2+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
  }
  var z3 = document.getElementsByClassName("claimsBar3");
  var k3 = 0;
  for (k3 = 0; k3 < z3.length; k3++){
    var p3 = k3+2+b;
    z3[k3].innerHTML = '<button id="btndel'+p3+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p3+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
  }
}

function addClaim2NEW(){
  b++;
  c++;
  console.log("a="+a+", b="+b+", c="+c);
    var y = document.getElementsByClassName("secondClaimNo");
    var ind = y[0].innerHTML;
  var div = document.createElement('div');
  div.id = "div"+b;
      div.className = "secondClaims"
      var choice2 = document.getElementById("preSelector2").value;

    if (choice2 == "method"){
  div.innerHTML = '<div class="card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar2" style="height:10%; float:right; display:none"><button id="btndel'+b+'" class="btn btn-icon btn-outline-secondarybtndel2" onclick="deleteClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+b+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+b+'" class="claimNo secondClaimNo" style="display:contents">'+b+'</div>. &emsp; <div  class="preamble" contenteditable="true" style="display: initial">The method of claim <div class="depNo2" style="display: initial">'+ind+'</div>, further comprising:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
if (choice2 == "system"){
div.innerHTML = '<div class="card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar2" style="height:10%; float:right; display:none"><button id="btndel'+b+'" class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+b+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+b+'" class="claimNo secondClaimNo" style="display:contents">'+b+'</div>. &emsp; <div class="preamble"  contenteditable="true" style="display: initial">The system of claim <div class="depNo2" style="display: initial">'+ind+'</div>, wherein the instructions when executed by the at least one processor further cause the system to:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
  document.getElementById("secondClaimSet").appendChild(div);
  var x = document.getElementsByClassName("thirdClaimNo");
  var q = document.getElementsByClassName("thirdClaims");
  var i = 0;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML=b+1+i;
    var dd =b+1+i;
    q[i].id = "div"+dd;
  }
  var k = document.getElementsByClassName("depNo3");
  var t = 0;
  for (t=0; t<k.length; t++){
    var kk = k[t].innerHTML;
    var kkkk = Number(kk)+1;
    console.log(kkkk);
      k[t].innerHTML=kkkk;
  }
  var z3 = document.getElementsByClassName("claimsBar3");
  var k3 = 0;
  for (k3 = 0; k3 < z3.length; k3++){
    var p3 = k3+2+b;
    z3[k3].innerHTML = '<button id="btndel'+p3+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p3+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
  }

}

function addClaim3NEW(){
  c++;
  console.log("a="+a+", b="+b+", c="+c);
  var y = document.getElementsByClassName("thirdClaimNo");
  var ind = y[0].innerHTML;
  var div = document.createElement('div');
  div.id = "div"+c;
      div.className = "thirdClaims"
      var choice3 = document.getElementById("preSelector3").value;

  	if (choice3 == "method"){
  div.innerHTML = '<div class="card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar3" style="height:10%; float:right; display:none"><button id="btndel'+c+'" class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+c+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+c+'" class="claimNo thirdClaimNo" style="display:contents">'+c+'</div>. &emsp; <div  class="preamble" contenteditable="true" style="display: initial">The method of claim <div class="depNo3" style="display: initial">'+ind+'</div>, further comprising:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
if (choice3 == "system"){
div.innerHTML = '<div class="card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar3" style="height:10%; float:right; display:none"><button id="btndel'+c+'" class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+c+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+c+'" class="claimNo thirdClaimNo" style="display:contents">'+c+'</div>. &emsp; <div  class="preamble" contenteditable="true" style="display: initial">The system of claim <div class="depNo3" style="display: initial">'+ind+'</div>, wherein the instructions when executed by the at least one processor further cause the system to:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
  document.getElementById("thirdClaimSet").appendChild(div);
}

///////////////////////////////////////////////////////////////////////////////
function deleteClaim1(n){
  var parent = document.getElementById("firstClaimSet");
  var child = document.getElementById("div"+n);
  parent.removeChild(child);
    a--;
    b--;
    c--;
    var z = document.getElementsByClassName("claimNo firstClaimNo");
    var hh = document.getElementsByClassName("firstClaims");
    var k = 0;
    for (k = 0; k < z.length; k++) {
      z[k].innerHTML=1+k;
      hh[k].id = "div"+(1+k);
    }
    var x = document.getElementsByClassName("secondClaimNo");
    var har = document.getElementsByClassName("secondClaims");
    var i = 0;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML=a+1+i;
      var d = a+1+i
      har[i].id = "div"+d;
    }
    var y = document.getElementsByClassName("thirdClaimNo");
    var q = document.getElementsByClassName("thirdClaims");
    var j = 0;
    for (j = 0; j < y.length; j++) {
      y[j].innerHTML=b+1+j;
      var dd =b+1+j;
      q[j].id = "div"+dd;
    }
      console.log("a="+a+", b="+b+", c="+c);



      var z = document.getElementsByClassName("claimsBar1");
      var k = 0;
      for (k = 0; k < z.length; k++){
        var p = k+2
        z[k].innerHTML = '<button id="btndel'+p+'"class="btn btn-icon btn-outline-secondary btndel1" onclick="deleteClaim1('+p+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p+'"class="btn btn-icon btn-outline-secondary btnadd1" onclick="addDepClaim1('+p+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
      }
      var z2 = document.getElementsByClassName("claimsBar2");
      var k2 = 0;
      for (k2 = 0; k2 < z2.length; k2++){
        var p2 = k2+2+a;
        z2[k2].innerHTML = '<button id="btndel'+p2+'"class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p2+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
      }
      var z3 = document.getElementsByClassName("claimsBar3");
      var k3 = 0;
      for (k3 = 0; k3 < z3.length; k3++){
        var p3 = k3+2+b;
        z3[k3].innerHTML = '<button id="btndel'+p3+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p3+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
      }
      var r = document.getElementsByClassName("depNo1");
      var s = 0;
      for (s=0; s<r.length; s++){
        var rr = r[s].innerHTML;
        var rrrr = Number(rr);
        if(rrrr>=n){

          var div = document.createElement('div')
          div.className = "alert alert-custom alert-notice alert-light-warning fade show"
          div.role = "alert"
          div.innerHTML = '<div class="alert-icon"><i class="flaticon-warning"></i></div><div class="alert-text">Check claim dependency.</div><div class="alert-close"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i class="ki ki-close"></i></span></button></div>';
          var gir=s+2;
          console.log(gir)
        var list = document.getElementById("div"+gir);
          console.log('here')
          list.insertBefore(div, list.childNodes[0]);
          console.log('here')
      }
      }
      var u = document.getElementsByClassName("depNo2");
      var v = 0;
      for (v=0; v<u.length; v++){
        console.log('hello');
        var w = u[v].innerHTML;
        var o = Number(w)-1;
        console.log(o);
          u[v].innerHTML=o;
        console.log("o="+o);
      }

      var k = document.getElementsByClassName("depNo3");
      var t = 0;
      for (t=0; t<k.length; t++){
        var kk = k[t].innerHTML;
        var kkkk = Number(kk)-1;
        console.log(kkkk);
          k[t].innerHTML=kkkk;
        console.log("kkkk="+kkkk);
      }
}

function deleteClaim2(n){
  var parent = document.getElementById("secondClaimSet");
  var child = document.getElementById("div"+n);
  parent.removeChild(child);
    b--;
    c--;
    var x = document.getElementsByClassName("secondClaimNo");
    var har = document.getElementsByClassName("secondClaims");
    var i = 0;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML=a+1+i;
      var d = a+1+i
      har[i].id = "div"+d;
    }
    var y = document.getElementsByClassName("thirdClaimNo");
    var q = document.getElementsByClassName("thirdClaims");
    var j = 0;
    for (j = 0; j < y.length; j++) {
      y[j].innerHTML=b+1+j;
      var dd =b+1+j;
      q[j].id = "div"+dd;
    }
      console.log("a="+a+", b="+b+", c="+c);

      var z2 = document.getElementsByClassName("claimsBar2");
      var k2 = 0;
      for (k2 = 0; k2 < z2.length; k2++){
        var p2 = k2+2+a;
        z2[k2].innerHTML = '<button id="btndel'+p2+'"class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p2+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
      }
      var z3 = document.getElementsByClassName("claimsBar3");
      var k3 = 0;
      for (k3 = 0; k3 < z3.length; k3++){
        var p3 = k3+2+b;
        z3[k3].innerHTML = '<button id="btndel'+p3+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p3+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
      }

      var r = document.getElementsByClassName("depNo2");
      var s = 0;
      for (s=0; s<r.length; s++){
        var rr = r[s].innerHTML;
        var rrrr = Number(rr);
        if(rrrr>=n){

          var div = document.createElement('div')
          div.className = "alert alert-custom alert-notice alert-light-warning fade show"
          div.role = "alert"
          div.innerHTML = '<div class="alert-icon"><i class="flaticon-warning"></i></div><div class="alert-text">Check claim dependency.</div><div class="alert-close"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i class="ki ki-close"></i></span></button></div>';
          var gir=s+a+2;
          console.log(gir)
        var list = document.getElementById("div"+gir);
          console.log('here')
          list.insertBefore(div, list.childNodes[0]);
          console.log('here')
      }
      }

      var k = document.getElementsByClassName("depNo3");
      var t = 0;
      for (t=0; t<k.length; t++){
        var kk = k[t].innerHTML;
        var kkkk = Number(kk)-1;
        console.log(kkkk);
          k[t].innerHTML=kkkk;
        console.log("kkkk="+kkkk);
      }
}

function deleteClaim3(n){
  var parent = document.getElementById("thirdClaimSet");
  var child = document.getElementById("div"+n);
  parent.removeChild(child);
    c--;
    var y = document.getElementsByClassName("thirdClaimNo");
    var q = document.getElementsByClassName("thirdClaims");
    var j = 0;
    for (j = 0; j < y.length; j++) {
      y[j].innerHTML=b+1+j;
      var dd =b+1+j;
      q[j].id = "div"+dd;
    }
      console.log("a="+a+", b="+b+", c="+c);
      var z3 = document.getElementsByClassName("claimsBar3");
      var k3 = 0;
      for (k3 = 0; k3 < z3.length; k3++){
        var p3 = k3+2+b;
        z3[k3].innerHTML = '<button id="btndel'+p3+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p3+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
      }

      var r = document.getElementsByClassName("depNo3");
      var s = 0;
      for (s=0; s<r.length; s++){
        var rr = r[s].innerHTML;
        var rrrr = Number(rr);
        if(rrrr>=n){

          var div = document.createElement('div')
          div.className = "alert alert-custom alert-notice alert-light-warning fade show"
          div.role = "alert"
          div.innerHTML = '<div class="alert-icon"><i class="flaticon-warning"></i></div><div class="alert-text">Check claim dependency.</div><div class="alert-close"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i class="ki ki-close"></i></span></button></div>';
          var gir=s+b+2;
          console.log(gir)
        var list = document.getElementById("div"+gir);
          console.log('here')
          list.insertBefore(div, list.childNodes[0]);
          console.log('here')
      }
      }

}
///////////////////////////////////////////////////////////////////////////////////////
function addDepClaim1(n){
a++;
b++;
c++;
var div = document.createElement('div')
div.id = "div"+a;
div.className = "firstClaims"
var choice1 = document.getElementById("preSelector1").value;

	if (choice1 == "method"){
div.innerHTML = '<div class="card-body claimsRow from'+n+'" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar1" style="height:10%; float:right; display:none"><button id="btndel'+a+'"class="btn btn-icon btn-outline-secondary btndel1" onclick="deleteClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+a+'"class="btn btn-icon btn-outline-secondary btnadd1" onclick="addDepClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+a+'" class="claimNo firstClaimNo" style="display:contents">'+a+'</div>. &emsp; <div  class="preamble" contenteditable="true" style="display: initial">The method of claim <div class="depNo1" style="display: initial">'+n+'</div>, further comprising:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
if (choice1 == "system"){
div.innerHTML = '<div class="card-body claimsRow from'+n+'" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar1" style="height:10%; float:right; display:none"><button id="btndel'+a+'"class="btn btn-icon btn-outline-secondary btndel1" onclick="deleteClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+a+'"class="btn btn-icon btn-outline-secondary btnadd1" onclick="addDepClaim1('+a+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+a+'" class="claimNo firstClaimNo" style="display:contents">'+a+'</div>. &emsp; <div class="preamble"  contenteditable="true" style="display: initial">The system of claim <div class="depNo1" style="display: initial">'+n+'</div>, wherein the instructions when executed by the at least one processor further cause the system to:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
document.getElementById("firstClaimSet").appendChild(div);
var element = document.getElementById("firstClaimSet");
var ghost = document.getElementsByClassName("from"+n);
var m;
m=n+1
var child = document.getElementById("div"+m);
element.insertBefore(div,child);
var x = document.getElementsByClassName("secondClaimNo");
var hh = document.getElementsByClassName("secondClaims");
var i = 0;
for (i = 0; i < x.length; i++) {
  x[i].innerHTML=a+1+i;
  var d = a+1+i
  hh[i].id = "div"+d;
}
var y = document.getElementsByClassName("thirdClaimNo");
var q = document.getElementsByClassName("thirdClaims");
var j = 0;
for (j = 0; j < y.length; j++) {
  y[j].innerHTML=b+1+j;
  var dd =b+1+j;
  q[j].id = "div"+dd;
}
var z = document.getElementsByClassName("claimsBar1");
var k = 0;
for (k = 0; k < z.length; k++){
  var p = k+2
  z[k].innerHTML = '<button id="btndel'+p+'"class="btn btn-icon btn-outline-secondary btndel1" onclick="deleteClaim1('+p+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p+'"class="btn btn-icon btn-outline-secondary btnadd1" onclick="addDepClaim1('+p+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
}
var z2 = document.getElementsByClassName("claimsBar2");
var k2 = 0;
for (k2 = 0; k2 < z2.length; k2++){
  var p2 = k2+2+a;
  z2[k2].innerHTML = '<button id="btndel'+p2+'"class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p2+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+p2+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
}
var z3 = document.getElementsByClassName("claimsBar3");
var k3 = 0;
for (k3 = 0; k3 < z3.length; k3++){
  var p3 = k3+2+b;
  z3[k3].innerHTML = '<button id="btndel'+p3+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p3+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
}
var h = document.getElementsByClassName("claimNo firstClaimNo");
var g = 0;
for (g = 0; g < h.length; g++) {
  var f = g+1;
  h[g].id = "claimno"+f;
  h[g].innerHTML = f;
}

var hh = document.getElementsByClassName("firstClaims");
var gg = 0;
for (gg = 0; gg < hh.length; gg++) {
  var ff = gg+1;
  hh[gg].id = "div"+ff;
}

var r = document.getElementsByClassName("depNo1");
var s = 0;
for (s=0; s<r.length; s++){
  var rr = r[s].innerHTML;
  var rrrr = Number(rr)+1;
  console.log(rrrr);
    console.log(m);

  if(rrrr>m){
  r[s].innerHTML=rrrr;
  console.log("rrrr="+rrrr);
}
}
var u = document.getElementsByClassName("depNo2");
var v = 0;
for (v=0; v<u.length; v++){
  console.log('hello');
  var w = u[v].innerHTML;
  var o = Number(w)+1;
  console.log(o);
    u[v].innerHTML=o;
  console.log("o="+o);
}

var k = document.getElementsByClassName("depNo3");
var t = 0;
for (t=0; t<k.length; t++){
  var kk = k[t].innerHTML;
  var kkkk = Number(kk)+1;
  console.log(kkkk);
    k[t].innerHTML=kkkk;
  console.log("kkkk="+kkkk);
}
}
///////////////////////////////////////////////////
function addDepClaim2(n){
b++;
c++;
var div = document.createElement('div')
div.id = "div"+b;
div.className = "secondClaims"
var choice2 = document.getElementById("preSelector2").value;
	if (choice2 == "method"){
div.innerHTML = '<div class="card-body claimsRow from'+n+'" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar2" style="height:10%; float:right; display:none"><button id="btndel'+b+'"class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+b+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+b+'" class="claimNo secondClaimNo" style="display:contents">'+b+'</div>. &emsp; <div  class="preamble" contenteditable="true" style="display: initial">The method of claim <div class="depNo2" style="display: initial">'+n+'</div>, further comprising:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
if (choice2 == "system"){
div.innerHTML = '<div class="card-body claimsRow from'+n+'" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar2" style="height:10%; float:right; display:none"><button id="btndel'+b+'"class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+b+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+b+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+b+'" class="claimNo secondClaimNo" style="display:contents">'+b+'</div>. &emsp; <div class="preamble"  contenteditable="true" style="display: initial">The system of claim <div class="depNo2" style="display: initial">'+n+'</div>, wherein the instructions when executed by the at least one processor further cause the system to:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
document.getElementById("secondClaimSet").appendChild(div);
var element = document.getElementById("secondClaimSet");
var ghost = document.getElementsByClassName("from"+n);
var m;
m=n+1
var child = document.getElementById("div"+m);
element.insertBefore(div,child);
var y = document.getElementsByClassName("thirdClaimNo");
var q = document.getElementsByClassName("thirdClaims");
var j = 0;
for (j = 0; j < y.length; j++) {
  y[j].innerHTML=b+1+j;
  var dd =b+1+j;
  q[j].id = "div"+dd;
}
var z = document.getElementsByClassName("claimsBar2");
var k = 0;
for (k = 0; k < z.length; k++){
  var p = k+2+a;
  z[k].innerHTML = '<button id="btndel'+p+'"class="btn btn-icon btn-outline-secondary btndel2" onclick="deleteClaim2('+p+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p+'"class="btn btn-icon btn-outline-secondary btnadd2" onclick="addDepClaim2('+p+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
}
var z3 = document.getElementsByClassName("claimsBar3");
var k3 = 0;
for (k3 = 0; k3 < z3.length; k3++){
  var p3 = k3+2+b;
  z3[k3].innerHTML = '<button id="btndel'+p3+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p3+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p3+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
}
var h = document.getElementsByClassName("secondClaimNo");
var g = 0;
for (g = 0; g < h.length; g++) {
  var f = g+1+a;
  h[g].id = "claimno"+f;
  h[g].innerHTML = f;
}
var hh = document.getElementsByClassName("secondClaims");
var gg = 0;
for (gg = 0; gg < hh.length; gg++) {
  var ff = gg+1+a;
  hh[gg].id = "div"+ff;
}
var r = document.getElementsByClassName("depNo2");
var s = 0;
for (s=0; s<r.length; s++){
  var rr = r[s].innerHTML;
  var rrrr = Number(rr)+1;
  if(rrrr>m){
  r[s].innerHTML=rrrr;
  console.log("rrrr="+rrrr);
}
}
var k = document.getElementsByClassName("depNo3");
var t = 0;
for (t=0; t<k.length; t++){
  var kk = k[t].innerHTML;
  var kkkk = Number(kk)+1;
  console.log(kkkk);
    k[t].innerHTML=kkkk;
  console.log("kkkk="+kkkk);
}
}
////////////////////////////////////////////////////////////////////////////
function addDepClaim3(n){

c++;
var div = document.createElement('div')
div.id = "div"+c;
div.className = "thirdClaims"
var choice3 = document.getElementById("preSelector3").value;

	if (choice3 == "method"){
div.innerHTML = '<div class="card-body claimsRow from'+n+'" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar3" style="height:10%; float:right; display:none"><button id="btndel'+c+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+c+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+c+'" class="claimNo thirdClaimNo" style="display:contents">'+c+'</div>. &emsp; <div  class="preamble" style="display: initial">The method of claim <div class="depNo3" style="display: initial">'+n+'</div>, further comprising:</div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
if (choice3 == "system"){
div.innerHTML = '<div class="card-body claimsRow from'+n+'" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)"><div><div class="lobilist-actions claimsBar claimsBar3" style="height:10%; float:right; display:none"><button id="btndel'+c+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+c+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+c+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button></div><div contenteditable="true">&emsp;&emsp;<div id="claimno'+c+'" class="claimNo thirdClaimNo" style="display:contents">'+c+'</div>. &emsp; <div  class="preamble" style="display: initial">The system of claim <div class="depNo3" style="display: initial">'+n+'</div>, wherein the instructions when executed by the at least one processor further cause the system to: </div></div><textarea class="claimtext" style="overflow: hidden; overflow-wrap: break-word; resize: none; width:100%; border:none;" rows="2">&emsp;&emsp;</textarea></div></div>';
}
document.getElementById("thirdClaimSet").appendChild(div);
var element = document.getElementById("thirdClaimSet");
var ghost = document.getElementsByClassName("from"+n);
var m;
m=n+1
var child = document.getElementById("div"+m);
element.insertBefore(div,child);

var z = document.getElementsByClassName("claimsBar3");
var k = 0;
for (k = 0; k < z.length; k++){
  var p = k+2+b;
  z[k].innerHTML = '<button id="btndel'+p+'"class="btn btn-icon btn-outline-secondary btndel3" onclick="deleteClaim3('+p+')" style="margin-left:5px;"><i class="fas fa-times"></i></button><button id="btnadd'+p+'"class="btn btn-icon btn-outline-secondary btnadd3" onclick="addDepClaim3('+p+')" style="margin-left:5px;"><i class="fas fa-plus"></i></button>'
}
var h = document.getElementsByClassName("thirdClaimNo");
var g = 0;
for (g = 0; g < h.length; g++) {
  var f = g+1+b;
  h[g].id = "claimno"+f;
  h[g].innerHTML = f;
}
var hh = document.getElementsByClassName("thirdClaims");
var gg = 0;
for (gg = 0; gg < hh.length; gg++) {
  var ff = gg+1+b;
  hh[gg].id = "div"+ff;
}

var k = document.getElementsByClassName("depNo3");
var t = 0;
for (t=0; t<k.length; t++){
  var kk = k[t].innerHTML;
  var kkkk = Number(kk)+1;
  if(kkkk>m){
  console.log(kkkk);
    k[t].innerHTML=kkkk;
  console.log("kkkk="+kkkk);
}
}
}
/////////////////////////////////////////////////////
