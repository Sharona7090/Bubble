function loadbackgrounds(bcategory, blanguage, bdisplayType){
  category = bcategory;
  language = blanguage;
  displayType = bdisplayType
  console.log(category)
  console.log(language)
  console.log(displayType)
  if (displayType.includes("Dropdown")){
    document.getElementById("categorydropdown").style.display = "inline"
  }else{
    document.getElementById("categorydropdown").style.display = "none"
  }
  for (var i = 0; i < category.length; i++){
    if (displayType[i] == "Button"){
      var newSpan = document.createElement("span");
      newSpan.innerHTML = `<button type="button" class="btn mr-2 email-btn bg1-btn" onclick="demoBG(${i})">${category[i]}</button>`
      document.getElementById("buttonzone").append(newSpan);
    }
    if (displayType[i] == "Dropdown"){
      const newOption = document.createElement('option');
      const optionText = document.createTextNode(category[i]);
      newOption.appendChild(optionText);
      newOption.setAttribute('value', i);
      document.getElementById("categorydropdown").appendChild(newOption);
    }
  }
}

function dropdemoBG(){
  var x = document.getElementById('categorydropdown').value;
  demoBG(x)
}

function demoBG(x){
  document.getElementById('bgText').value = language[x]
  bgCategory = category[x]
  document.getElementById('categoryfield').innerText = bgCategory
}
