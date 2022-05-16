function addClaim3(){
  c++;

  a++;
  a--; 
  b++;
  b--;
//	document.getElementById("ccounter").innerHTML = c;
/// CREATE ELEMENTS //
  var div = document.createElement('div')
 	  div.className = "set3";
 	  div.id = 3+a+b+c +"group";
//		div.innerHTML = "set 3 claim ";
   	document.getElementById("col3").appendChild(div);

  var div1 = document.createElement('div')
 	  div1.className = "set3inner";
 	  div1.id = 3+a+b+c+"claim";
		//div1.innerHTML = 3+a+b+c ;
   	document.getElementById(div.id).appendChild(div1);

  var div2 = document.createElement('div')
    div2.innerHTML = 3+a+b+c+ ")"+" &nbsp;&nbsp; Depend From &nbsp;"
    div2.style.display = "inline-block"
    div2.className = "depfrom3"
    document.getElementById(div1.id).appendChild(div2);

  var input = document.createElement('input')
    input.type = "text"
    input.size = "1"
   	input.className = "set3input form-control appform";
   	input.id = 3+a+b+c+ "dep";
    //input.value = "1"
    document.getElementById(div1.id).appendChild(input);

  var textarea = document.createElement('textarea')
 	  textarea.className = "set3textarea countClaimText form-control appform";
 	  textarea.id = 3+a+b+c;
   	document.getElementById(div.id).appendChild(textarea);

	var btn = document.createElement("button");
  btn.innerHTML = '<i class="fa fa-minus"></i>';
		btn.className = "btn set1btn"
    btn.id = 3+a+b+c+"btn"
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

// CANCEL CLAIM BUTON ( - CLICK) //////////////////////////////////////////////
    function click(){
      c--;
  //    document.getElementById("ccounter").innerHTML = c;

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
  btn.className = "cancelbtn"
  btn.id = "blankbtn"
  btn.style = "display:none"
  btn1.style="display:inline-block"
  btn2.style = "display:inline-block"

      x = document.getElementsByClassName("set3");
      i = 0
      for (i = 0; i < x.length; i++) {
      x[i].id = 3 + i + a + b +"group";
      }
      x = document.getElementsByClassName("set3inner");
      i = 0
      for (i = 0; i < x.length; i++) {
      x[i].id = 3 + i + a + b+ "claim";
  //    x[i].innerHTML = 3 + i + a + b;
      }
      x = document.getElementsByClassName("depfrom3");
          i = 0
          for (i = 0; i < x.length; i++) {
          x[i].innerHTML =  4+i+a+b+")"+" &nbsp;&nbsp;  Depend From &nbsp;";
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
    c++;
//    document.getElementById("ccounter").innerHTML = c;

    div.style="border-style:none";
    div.className = "set3"
    div1.className = "set3inner"
    div2.className = "depfrom3"
    textarea.className = "set3textarea form-control appform"
    btn.className = "btn set1btn"
    btn.style = "display:inline-block"
    btn1.style="display:none"
    btn2.style = "display:none"
    input.className = "set3input form-control appform"
    input.id="set3input"

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
    x = document.getElementsByClassName("depfrom3");
    i = 0
    for (i = 0; i < x.length; i++) {
    x[i].innerHTML =  4 + i + a + b + ")"+" &nbsp;&nbsp; Depend From &nbsp;";
    }
                            x = document.getElementsByClassName("set3textarea");
                            i = 0
                            for (i = 0; i < x.length; i++) {
                            x[i].id = 3 + i + a + b;
                            }
                            x = document.getElementsByClassName("set3input");
                            i = 0
                            for (i = 0; i < x.length; i++) {
                              x[i].id = 4 + i + a +b + "dep";
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
