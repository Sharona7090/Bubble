
// category = ["machine", "tennis", "apples"]
// language = ["machine language", "tennis language", "apples language"]
// displayType = ["Button", "Dropdown", "Dropdown"]
// loadbackgrounds(category, language, displayType)


// loadfigures()




// function boilertext(data){
//   data.Items.sort((a,b) => (a.ID > b.ID) ? 1 : ((b.ID > a.ID) ? -1 : 0));
//   console.log(data.Items)
//   bfigs=[];
//   btext=[];
//   var i;
//   for (i = 0; i < data.Items.length; i++) {
//     console.log(data.Items)
//     var y = i+1
//     /// 1. Create image blocks + Set tags ///
//     var creatediv = document.createElement('div');
//     creatediv.id = "pos"+y
//     creatediv.setAttribute("ondrop", "drop(event)")
//     creatediv.setAttribute("ondragover", "allowDrop(event)")
//     creatediv.setAttribute("class", "square")
//     creatediv.innerHTML = '<div id="dragImg'+y+'" style="width:100%; height:100%; background-image: url(https://sharonsbucket.s3-us-west-2.amazonaws.com/assets/DemoFigures/Picture'+y+'.png); background-position: center; background-repeat: no-repeat; display:inline-table; border:none" draggable="true" ondragstart="drag(event)" ondragend="dragend(event)"></div>'
//     document.getElementById("figGrid").appendChild(creatediv);
//     /// 2. Set short description ///
//     bfigs[i] = data.Items[i].shortdesc
//     /// 3. Set spec text ///
//     btext[i] = data.Items[i].spectext
//     }
//     console.log(bfigs)
//     console.log(btext)
// }


///////// FOR STATIC DATA ///////////////////////
function fakeloadfigures(){
  var x=5
  for (i=1; i<x; i++){
  var newFigCard = document.createElement("div");
      newDiv.classList.add("col-3")
      newDiv.innerHTML = `<div class="card figCard"  data-toggle="modal" data-target="#exampleModal${i}" style="width: 100%;padding-top: 100%;position: relative;" onclick="focusfig(${i})">
                          <div class="d-flex flex-column align-items-center figbg" style="position: absolute; top: 0;left: 0;bottom: 0;right: 0; background-image:url(assets/figures/${i}.PNG); background-position: center; background-repeat: no-repeat; background-size: contain; ">
                          <div style="height: 8%; width: 16%; position: absolute; top: 93%; left: 44%; background-color: white;"> </div>
                          </div>
                          <div id="figoverlay${i}" class="figbg stack-top" style=""></div>
                          </div>`
      document.getElementById("figCardContainer").append(newDiv)
  }
  var newModal = document.createElement("div");
  newModal.innerHTML = `<div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="modalLabel${i}" aria-hidden="true">
                            <div class="modal-dialog modal-xl" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="modalLabel${i}">Example computing device providing access to an electronic marketplace</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <i aria-hidden="true" class="ki ki-close"></i>
                                  </button>
                                </div>
                                <div class="modal-body row">
                                  <div id="pdfFigure${i}" class="col-6 modalfig">
                                      <img id="image${i}" style="width:100%;" src="assets/figures/${i}.PNG">
                                      <input id="${i}_1" class=" refno refno${i}" style="top: 0%; left: 90%;" onkeyup="checkNumber(1)" readonly="">
                                      <input id="${i}_2" class="refno refno1" style="top: 15%; left: 2%;" onkeyup="checkNumber(1)" readonly="">
                                      <input id="${i}_3" class="refno refno1" style="top: 24%; left: 4%;;" onkeyup="checkNumber(1)" readonly="">
                                      <input id="${i}_4" class="refno refno1" style="top: 32%; left: 7%;" onkeyup="checkNumber(1)" readonly="">
                                      <input id="${i}_5" class="refno refno1" style="top: 37%; left: 7%;" onkeyup="checkNumber(1)" readonly="">
                                      <input id="figno1" class="figno figno1" style="top: 94.5%;left: 55%;" readonly="">
                                  </div>
                                  <div class="col-6 figdescription">
                                    <d id="figtitle${i}" style="display:none">FIG. <e class=" figinput1">__</e> <e id="shortfig${i}">illustrates an example computing device providing access to an electronic marketplace, in accordance with various embodiments.</e></d>
                                    <d id="spec${i}">

                                    FIG. <e class=" figinput${i}">__</e> illustrates an example ref100 computing device ref102 providing access to an electronic marketplace ref104, in accordance with various embodiments. In this example, a computing device ref102 provides access to an electronic marketplace ref104, in accordance with various embodiments. Although a tablet computing device is shown in this example, it should be understood that various other types of electronic devices that are capable of determining and processing input and providing output can be used in accordance with various embodiments discussed herein.  These devices can include, for example, smart phones, e-book readers, desktop computers, notebook computers, personal data assistants, video gaming consoles or controllers, smart televisions, and portable media players, wearable computers (e.g., glasses, watches, etc.) among others. Further, the elements illustrated can be part of a single device, while at least some elements illustrated and otherwise utilized for such a device can be provided as one or more peripheral devices or accessories within the scope of the various embodiments. As illustrated, the electronic marketplace ref104 provides a plurality of items ref102 available for consumption (e.g., purchase, rent, use, stream). in some embodiments, various descriptors ref108 of an item are provided, such as images, price, name, among others.


                                    </d>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <div class="col-3" style="text-align:left;padding-left: 50px;">
                                    <button id="deselect${i}" type="button" class="btn btn-secondary btn-disabled" onclick="deselectfig(${i})" data-dismiss="modal" aria-label="Close">Deselect</button>
                                  </div>
                                  <div class="col-3">
                                    <label>Figure number:</label> <input id="figinput1" class="figinput" autofocus onkeyup="autoNumber(${i})" ></input>
                                  </div>
                                  <div class="col-4">
                                    <div class="row">
                                      <label style="margin-right:20px">Reference numbers:</label>
                                      <div class="radio-inline">
                                        <label class="radio">
                                        <input id="autoRef${i}" type="radio" checked="checked" name="radios${i}" onchange="autoNumber(${i})">
                                        <span></span>Auto</label>
                                        <label class="radio">
                                        <input id="manualRef${i}" type="radio" name="radios1" onchange="autoNumber(${i})">
                                        <span></span>Manual</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-2">
                                    <button type="button" class="btn btn-primary font-weight-bold btn-disabled" data-dismiss="modal" aria-label="Close" onclick="selectfig(${i})">Select Figure</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`
}
