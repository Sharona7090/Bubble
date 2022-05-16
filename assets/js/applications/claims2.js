function addClaim2(){
  b++;

  a++;
  a--;
  c++;
  c--;
//	document.getElementById("bcounter").innerHTML = b;
/// CREATE ELEMENTS //
  var div = document.createElement('div')
 	  div.className = "set2";
 	  div.id = 2+a+b + "group";
//		div.innerHTML = "set 2 claim ";
   	document.getElementById("col2").appendChild(div);

  var div1 = document.createElement('div')
 	  div1.className = "set2inner";
 	  div1.id = 2+a+b+"claim";
	//	div1.innerHTML = 2+a+b;
   	document.getElementById(div.id).appendChild(div1);

var div2 = document.createElement('div')
    div2.innerHTML = 2+a + b+ ")"+" &nbsp;&nbsp; Depend From &nbsp;"
    div2.style.display = "inline-block"
    div2.className = "depfrom2"
    document.getElementById(div1.id).appendChild(div2);

  var input = document.createElement('input')
    input.type = "text"
    input.size = "1"
   	input.className = "set2input form-control appform";
   	input.id = 2+a+b+ "dep";
//    input.value = 2+a;
    document.getElementById(div1.id).appendChild(input);

  var textarea = document.createElement('textarea')
 	  textarea.className = "set2textarea countClaimText form-control appform";
 	  textarea.id = 2+a+b;
   	document.getElementById(div.id).appendChild(textarea);

	var btn = document.createElement("button");
  btn.innerHTML = '<i class="fa fa-minus"></i>';
		btn.className = "btn set1btn"
    btn.id = 2+a+b+"btn"
    btn.onclick = click;
    document.getElementById(div1.id).appendChild(btn);

  var btn1 = document.createElement("button");
    btn1.innerHTML = '<i class="fa fa-remove"></i>';
    btn1.className = "btn canbtn"
    btn1.onclick = click1;
    btn1.style = "display:none"
    document.getElementById(div1.id).appendChild(btn1);

  var btn2 = document.createElement("button");
    btn2.innerHTML = '<i class="fa fa-plus"></i>';
    btn2.className = "btn keepbtn"
    btn2.onclick = click2;
    btn2.style = "display:none"
    document.getElementById(div1.id).appendChild(btn2);

// INCREMENT OTHER CLAIM SETS //

x = document.getElementsByClassName("set3");
i = 0
for (i = 0; i < x.length; i++) {
x[i].id = 3 + i + a + b +"group";
}
x = document.getElementsByClassName("set3inner");
i = 0
for (i = 0; i < x.length; i++) {
x[i].id = 3 + i + a + b+ "claim";
x[0].innerHTML = 3 + a + b + ")"+" &nbsp;&nbsp; Independent Claim";
}

x = document.getElementsByClassName("depfrom3");
i = 0
for (i = 0; i < x.length; i++) {
x[i].innerHTML =  4+i+a+b+ ")"+" &nbsp;&nbsp; Depend From &nbsp;";
}

                        x = document.getElementsByClassName("set3textarea");
                        i = 0
                        for (i = 0; i < x.length; i++) {
                          x[i].id = 3 + i + a + b;
                        }
                        x = document.getElementsByClassName("set3input");
                        i = 0
                        for (i = 0; i < x.length; i++) {
                          x[i].id = 4 + i + a +b+ "dep";
                        }
x = document.getElementsByClassName("set3btn");
i = 0
for (i = 0; i < x.length; i++) {
x[i].id = 4 + i + a +b+"btn";
}

// CANCEL CLAIM BUTON ( - CLICK) //////////////////////////////////////////////
    function click(){
      b--;
//      document.getElementById("acounter").innerHTML = a;

// div.style="border-style:solid";
div.className = "cancel"
div.id="blank"
div1.className = "cancelinner"
div1.id="blankinner"
div2.innerHTML = "Canceled &nbsp;"
div2.className = "cancel1"
textarea.className = "canceltextarea form-control appform"
textarea.id="blanktextarea"
input.className = "cancelinput form-control appform"
input.id="blankinput"
btn.className = "btn canbtn"
btn.id = "blankbtn"
btn.style = "display:none"
btn1.style="display:inline-block"
btn2.style = "display:inline-block"

      x = document.getElementsByClassName("set2");
      i = 0
      for (i = 0; i < x.length; i++) {
        x[i].id = 2 + i + a + "group";
      }
      x = document.getElementsByClassName("set2inner");
      i = 0
      for (i = 0; i < x.length; i++) {
        x[i].id = 2 + i + a +"inner";
      }
      x = document.getElementsByClassName("depfrom2");
          i = 0
          for (i = 0; i < x.length; i++) {
          x[i].innerHTML =  3+i+a+")"+" &nbsp;&nbsp;  Depend From &nbsp;";
          }
                              x = document.getElementsByClassName("set2textarea");
                              i = 0
                              for (i = 0; i < x.length; i++) {
                                x[i].id = 2 + i + a ;
                              }
                              x = document.getElementsByClassName("set2input");
                              i = 0
                              for (i = 0; i < x.length; i++) {
                                x[i].id = 3 + i + a + "dep";
                              }
      x = document.getElementsByClassName("set2btn");
      i = 0
      for (i = 0; i < x.length; i++) {
        x[i].id = 3 + i + a +"btn";
      }


  // DECREMENT OTHER CLAIM SETS //

  x = document.getElementsByClassName("set3");
  i = 0
  for (i = 0; i < x.length; i++) {
  x[i].id = 3 + i + a + b +"group";
  }
  x = document.getElementsByClassName("set3inner");
  i = 0
  for (i = 0; i < x.length; i++) {
  x[i].id = 3 + i + a + b+ "claim";
  x[0].innerHTML = 3 + a + b+ ")"+" &nbsp;&nbsp; Independent Claim";
  }
  x = document.getElementsByClassName("depfrom3");
  i = 0
  for (i = 0; i < x.length; i++) {
  x[i].innerHTML =  4+i+a+b+ ")"+" &nbsp;&nbsp; Depend From &nbsp; ";
}
                          x = document.getElementsByClassName("set3textarea");
                          i = 0
                          for (i = 0; i < x.length; i++) {
                            x[i].id = 3 + i + a + b;
                          }
                          x = document.getElementsByClassName("set3input");
                          i = 0
                          for (i = 0; i < x.length; i++) {
                            x[i].id = 4 + i + a +b+ "dep";
                          }
  x = document.getElementsByClassName("set3btn");
  i = 0
  for (i = 0; i < x.length; i++) {
  x[i].id = 4 + i + a +b+"btn";
  }
     }
// HIDE CANCELED CLAIM ( X CLICK) ////////////////////////////////////////////////
  function click1(){
    div.style="display:none";
  }

// RESTORE CLAIM ( + CLICK) ////////////////////////////////////////////////
  function click2(){
    b++;
//    document.getElementById("acounter").innerHTML = a;

    div.style="border-style:none";
    div.className = "set2"
    div1.className = "set2inner"
    div2.className = "depfrom2"
    textarea.className = "set2textarea form-control appform"
    btn.className = "btn set1btn"
    btn.style = "display:inline-block"
    btn1.style="display:none"
    btn2.style = "display:none"
    input.className = "set2input form-control appform"
    input.id="set2input"

    x = document.getElementsByClassName("set2");
    i = 0
    for (i = 0; i < x.length; i++) {
      x[i].id = 2 + i + a + "group";
    }
    x = document.getElementsByClassName("set2inner");
    i = 0
    for (i = 0; i < x.length; i++) {
      x[i].id = 2 + i + a +"claim";
    //  x[i].innerHTML = 2 + i + a;
    }
    x = document.getElementsByClassName("depfrom2");
    i = 0
    for (i = 0; i < x.length; i++) {
    x[i].innerHTML =  3 + i + a + ")"+" &nbsp;&nbsp; Depend From &nbsp;";
    }

                            x = document.getElementsByClassName("set2textarea");
                            i = 0
                            for (i = 0; i < x.length; i++) {
                              x[i].id = 2 + i + a ;
                            }
                            x = document.getElementsByClassName("set2input");
                            i = 0
                            for (i = 0; i < x.length; i++) {
                              x[i].id = 3 + i + a + "dep";
                            }
    x = document.getElementsByClassName("set2btn");
    i = 0
    for (i = 0; i < x.length; i++) {
      x[i].id = 3 + i + a +"btn";
    }
// INCREMENT OTHER CLAIMS /////////////////////////////////////////////////////
x = document.getElementsByClassName("set3");
i = 0
for (i = 0; i < x.length; i++) {
x[i].id = 3 + i + a + b +"group";
}
x = document.getElementsByClassName("set3inner");
i = 0
for (i = 0; i < x.length; i++) {
x[i].id = 3 + i + a + b+ "claim";
//x[i].innerHTML = 3 + i + a + b;
}
                        x = document.getElementsByClassName("set3textarea");
                        i = 0
                        for (i = 0; i < x.length; i++) {
                          x[i].id = 3 + i + a + b;
                        }
                        x = document.getElementsByClassName("set3input");
                        i = 0
                        for (i = 0; i < x.length; i++) {
                          x[i].id = 4 + i + a +b+ "dep";
                        }
x = document.getElementsByClassName("set3btn");
i = 0
for (i = 0; i < x.length; i++) {
x[i].id = 4 + i + a +b+"btn";
}
  }
  autosize(document.getElementsByClassName("set1textarea"))
  autosize(document.getElementsByClassName("set2textarea"))
  autosize(document.getElementsByClassName("set3textarea"))
  action()
}
