
function fillClaims(){
  document.getElementById('claimsContainer').innerHTML = filledClaims
  claimsArray =
  [
    {
        "claim": 1,
        "parent": 0,
        "zone": 1
    },
    {
        "claim": 2,
        "parent": 1,
        "zone": 1
    },
    {
        "claim": 3,
        "parent": 1,
        "zone": 1
    },
    {
        "claim": 4,
        "parent": 1,
        "zone": 1
    },
    {
        "claim": 5,
        "parent": 4,
        "zone": 1
    },
    {
        "claim": 6,
        "parent": 0,
        "zone": 2
    },
    {
        "claim": 7,
        "parent": 6,
        "zone": 2
    },
    {
        "claim": 8,
        "parent": 7,
        "zone": 2
    },
    {
        "claim": 9,
        "parent": 6,
        "zone": 2
    },
    {
        "claim": 10,
        "parent": 9,
        "zone": 2
    },
    {
        "claim": 11,
        "parent": 6,
        "zone": 2
    },
    {
        "claim": 12,
        "parent": 6,
        "zone": 2
    },
    {
        "claim": 13,
        "parent": 0,
        "zone": 3
    },
    {
        "claim": 14,
        "parent": 13,
        "zone": 3
    },
    {
        "claim": 15,
        "parent": 13,
        "zone": 3
    },
    {
        "claim": 16,
        "parent": 15,
        "zone": 3
    },
    {
        "claim": 17,
        "parent": 15,
        "zone": 3
    },
    {
        "claim": 18,
        "parent": 13,
        "zone": 3
    },
    {
        "claim": 19,
        "parent": 13,
        "zone": 3
    },
    {
        "claim": 20,
        "parent": 13,
        "zone": 3
    }
]
}
var filledClaims =
`										<div class="icSet col-md-4 draggable0" tabindex="-1">
										<div id="outerDiv1" data-claim="1" data-unique-id="101" data-parent-id="000" class="card my-3 card-block d-flex no-b ClaimSet outerDiv draggable-zone1 draggable_NA" style="" data-parent="0" tabindex="-1">
												<div id="innerDiv1" data-claim="1" class="card-body claimsRow claimGroup1 innerDiv">
												<div class="lobilist-actions claimsBar" style="display:flex; visibility:visible">
<span class="depNo" style="display:none" id="depno1">0,</span>
							<div class="dropdown preambleBtn">
							    <button type="button" class="btn btn-icon btn-outline-secondary btnPreamble" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="-200, 0">
							      <i class="fas fa-cog"></i>
							    </button>
									<form id="preambleBox1" class="dropdown-menu preambleBox p-0" style="">
											<div class="card card-custom example example-compact">
												<div class="card-header preamble-header-card" style="">
													<h3 class="card-title">
														Preamble
													</h3>
												</div>
										<div class="card-body preamble-body-card">
										<div class="form-group">
										    <div id="radioList1" class="radio-list">
										        <label class="radio">
										            <input type="radio" class="method" checked="true" name="1" value="method" onclick="checkPreamble(this.value, this.name)">
										            <span></span>
										            Method - Software
										        </label>
										        <label class="radio">
										            <input type="radio" class="system" name="1" value="system" onclick="checkPreamble(this.value, this.name)">
										            <span></span>
										            System - Software
										        </label>
										        <label class="radio">
										            <input type="radio" class="crm" name="1" value="crm" onclick="checkPreamble(this.value, this.name)">
										            <span></span>
										            CRM - Software
										        </label>
														<!-- <br> -->
														<label class="radio">
										            <input type="radio" class="custom" name="1" value="custom" onclick="checkPreamble(this.value, this.name)">
										            <span></span>
										            Custom
																<div id="customPreamble1" style="display:none">
																<div class="preambleCustomDiv">IC:	<input id="" style="" type="text" class="form-control comments preambleCustomInput customIC" placeholder="E.g., A system..." required="">, comprising...</div>
																<div class="preambleCustomDiv">DC:	<input id="customDC" style="" type="text" class="form-control comments preambleCustomInput customDC" placeholder="E.g., The system..." required=""> of claim...</div>
															</div>
										        </label>

										    </div>

										</div>
									</div>
									<div class="card-footer preamble-footer-card">
										<button id="" type="button" class="btn btn-primary mr-2 btnSetPreamble" name="1" onclick="setPreamble(this.name, 1)">Set</button>
									</div>
</div>
</form>
							</div>
												<button id="" data-handle="0" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle0"><i class="fas fa-arrows-alt-h"></i></button>
												<button id="btnAdd1" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(1, 101, 1)" style=""><i class="fas fa-plus"></i></button>
												<button class="btnDel" style="display:none" id="btnDel1" onclick="deleteClaim(1)"></button>
												</div>
													<div class="ADeditor ADeditorInd" id="ADeditor1">
														<p class="preambleBlock indPreambleBlock indPreamble1">
  <span class="claimNo" id="claimNo1">1. </span>
  <span class="preamble preambleInclude">A system, comprising:</span></p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">a processor;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">a touch sensitive display;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">a memory device;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">instructions, the instructions when executed by the processor cause the system to:</p>
														<p class="claimBodyLine" style="text-indent:.5in" contenteditable="true">display, on the display, a graphical user interface;</p>
													<p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">receive, via the touch-sensitive display, an input representing a contact with the graphical user interface, the input having an input intensity;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">determine whether the input intensity of the input meets or exceeds a first intensity threshold in response to receiving the input and in accordance with a determination that the electronic device is in a first activity state;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">determine whether the input intensity of the input meets a second intensity threshold in accordance with a determination that the electronic device is in a second activity state; and</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">provide a haptic feedback of a second feedback level higher than the first feedback level in response to receiving the input.</p></div>
												</div>
										<div class="outerDiv depouterDiv draggable-zone5 draggable-zone2 draggable1" data-claim="2" data-parent="1" data-unique-id="206" data-parent-id="101" id="outerDiv2" tabindex="-1" style="">
    <div id="innerDiv2" data-claim="2" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel2" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(2)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="1" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle1" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd2" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(2, 206, 1)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor5">
        <p class="preambleBlock" id="preambleBlock5">
        <span class="setCursor depPreamble1">
  <span class="claimNo" id="claimNo2">2. </span>
  <span class="preamble preambleInclude">The system of claim </span><span class="depNo preambleInclude" id="depno2">1, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein graphical user interface includes an affordance, and wherein the input represents a contact with the affordance, the one or more programs further including instructions for providing a haptic feedback of a third feedback level different from the first feedback level.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 2)"></button>
      </div></div><div class="outerDiv depouterDiv draggable-zone3 draggable1" data-claim="3" data-parent="1" data-unique-id="203" data-parent-id="101" id="outerDiv3" tabindex="-1">
    <div id="innerDiv3" data-claim="3" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel3" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(3)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="1" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle1" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd3" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(3, 203, 1)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor2">
        <p class="preambleBlock" id="preambleBlock2">
        <span class="setCursor depPreamble1">
  <span class="claimNo" id="claimNo3">3. </span>
  <span class="preamble preambleInclude">The system of claim </span><span class="depNo preambleInclude" id="depno3">1, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein the determination that the electronic device is in the second activity state is based at least in part on one or more data selected from the group consisting of: accelerometer data, global positioning system data, wireless communication data, heart rate sensor data, and gyroscope data.&nbsp;&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 3)"></button>
      </div></div><div class="outerDiv depouterDiv draggable-zone4 draggable1" data-claim="4" data-parent="1" data-unique-id="204" data-parent-id="101" id="outerDiv4" tabindex="-1">
    <div id="innerDiv4" data-claim="4" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel4" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(4)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="1" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle1" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd4" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(4, 204, 1)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor3">
        <p class="preambleBlock" id="preambleBlock3">
        <span class="setCursor depPreamble1">
  <span class="claimNo" id="claimNo4">4. </span>
  <span class="preamble preambleInclude">The system of claim </span><span class="depNo preambleInclude" id="depno4">1, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein the graphical user interface includes an affordance, and wherein the input represents a contact with the affordance, the one or more programs further including instructions for providing a haptic feedback of a first feedback level.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 4)"></button>
      </div><div class="outerDiv depouterDiv draggable-zone5 draggable4" data-claim="5" data-parent="4" data-unique-id="205" data-parent-id="204" id="outerDiv5" tabindex="-1">
    <div id="innerDiv5" data-claim="5" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel5" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(5)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="4" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle4" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd5" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(5, 205, 1)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor4">
        <p class="preambleBlock" id="preambleBlock4">
        <span class="setCursor depPreamble1">
  <span class="claimNo" id="claimNo5">5. </span>
  <span class="preamble preambleInclude">The system of claim </span><span class="depNo preambleInclude" id="depno5">4, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein the first feedback level and the second feedback level have different values.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 5)"></button>
      </div></div></div></div>

								</div>




					<!-- end::Claims Row -->
							<div class="icSet col-md-4 draggable0" tabindex="-1"><div id="outerDiv6" data-claim="6" data-unique-id="201" data-parent-id="000" class="draggable-zone card my-3 card-block d-flex no-b ClaimSet outerDiv draggable-zone6 draggable_NA" style="" data-parent="0" tabindex="-1"><div id="innerDiv6" data-claim="6" class="card-body claimsRow claimGroup1 innerDiv"><div class="lobilist-actions claimsBar" style="visibility:visible"><span class="depNo" style="display:none" id="depno6">0,</span>
  <div class="dropdown preambleBtn "> <button type="button" class="btn btn-icon btn-outline-secondary btnPreamble" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="-200, 0">
     <i class="fas fa-cog"></i>
   </button>				<form id="preambleBox2" class="dropdown-menu preambleBox  p-0">
  											<div class="card card-custom example example-compact">
  												<div class="card-header preamble-header-card" style="">
  													<h3 class="card-title">
  														Preamble
  													</h3>
  												</div>
  										<div class="card-body preamble-body-card">
  										<div class="form-group">
  										    <div id="radioList2" class="radio-list">
  										        <label class="radio">
  										            <input type="radio" class="method" checked="true" name="2" value="method" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            Method - Software
  										        </label>
  										        <label class="radio">
  										            <input type="radio" class="system" name="2" value="system" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            System - Software
  										        </label>
  										        <label class="radio">
  										            <input type="radio" class="crm" name="2" value="crm" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            CRM - Software
  										        </label>
  														<label class="radio">
  										            <input type="radio" class="custom" name="2" value="custom" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            Custom
  																<div id="customPreamble2" style="display:none">
  																<div class="preambleCustomDiv">IC:	<input id="" style="" type="text" class="form-control comments preambleCustomInput customIC" placeholder="E.g., A system..." required="">, comprising...</div>
  																<div class="preambleCustomDiv">DC:	<input id="customDC" style="" type="text" class="form-control comments preambleCustomInput customDC" placeholder="E.g., The system..." required=""> of claim...</div>
  															</div>
  										        </label>

  										    </div>

  										</div>
  									</div>
  									<div class="card-footer preamble-footer-card">
  										<button id="" type="button" class="btn btn-primary mr-2 btnSetPreamble" name="2" onclick="setPreamble(this.name, 6)">Set</button>
  									</div>
  </div>
  </form></div><button id="" data-handle="0" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle0"><i class="fas fa-arrows-alt-h"></i></button><button id="btnAdd6" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(6, 201, 2)"><i class="fas fa-plus"></i></button><button class="btnDel" style="display:none" id="btnDel6" onclick="deleteClaim(6)"></button></div>

  <div class="ADeditor ADeditorInd" id="ADeditor2">
    <p class="preambleBlock indPreambleBlock indPreamble2">
      <span class="claimNo" id="claimNo6">6. </span>
      <span class="preamble preambleInclude">A computer implemented method, comprising:</span>
    </p>
    <p class="claimBodyLine" style="text-indent:.5in" contenteditable="true">displaying, on a touch-sensitive display, a graphical user interface;</p>
  <p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">receiving, via the display, an input representing a contact with the graphical user interface, the input having an input intensity;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">determining whether the input intensity of the input meets or exceeds a first characteristic intensity threshold;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">providing a haptic feedback of a first feedback level;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">determining whether the input intensity of the input meets or exceeds a second characteristic intensity threshold higher than the first characteristic intensity threshold; and</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">providing a haptic feedback of a second feedback level higher than the first feedback level in response to receiving the input.</p></div>
    </div>	<div class="outerDiv depouterDiv draggable-zone7 draggable6" data-claim="7" data-parent="6" data-unique-id="207" data-parent-id="201" id="outerDiv7" tabindex="-1">
    <div id="innerDiv7" data-claim="7" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel7" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(7)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="6" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle6" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd7" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(7, 207, 2)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor7">
        <p class="preambleBlock" id="preambleBlock7">
        <span class="setCursor depPreamble2"><span class="claimNo" id="claimNo7">7. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class="depNo preambleInclude" id="depno7">6, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;wherein the determination that the electronic device is in the second activity state is based at least in part on one or more data selected from the group consisting of: accelerometer data, global positioning system data, wireless communication data, heart rate sensor data, and gyroscope data.</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 7)"></button>
      </div><div class="outerDiv depouterDiv draggable-zone8 draggable7" data-claim="8" data-parent="7" data-unique-id="212" data-parent-id="207" id="outerDiv8" tabindex="-1">
    <div id="innerDiv8" data-claim="8" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel8" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(8)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="7" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle7" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd8" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(8, 212, 2)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor8">
        <p class="preambleBlock" id="preambleBlock8">
        <span class="setCursor depPreamble2"><span class="claimNo" id="claimNo8">8. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class="depNo preambleInclude" id="depno8">7, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein graphical user interface includes an affordance, and wherein the input represents a contact with the affordance, the one or more programs further including instructions for providing a haptic feedback of a third feedback level different from the first feedback level.&nbsp;&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 8)"></button>
      </div></div></div><div class="outerDiv depouterDiv draggable-zone9 draggable6" data-claim="9" data-parent="6" data-unique-id="208" data-parent-id="201" id="outerDiv9" tabindex="-1">
    <div id="innerDiv9" data-claim="9" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel9" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(9)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="6" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle6" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd9" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(9, 208, 2)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor8">
        <p class="preambleBlock" id="preambleBlock8">
        <span class="setCursor depPreamble2"><span class="claimNo" id="claimNo9">9. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class="depNo preambleInclude" id="depno9">6,</span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;further comprising:</span>
        </p>

        <p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">in accordance with a determination that the input intensity of the input meets or exceeds the second characteristic intensity threshold, providing a haptic feedback of a second feedback level higher than the first feedback level.</p></div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 9)"></button>
      </div><div class="outerDiv depouterDiv draggable-zone10 draggable9" data-claim="10" data-parent="9" data-unique-id="209" data-parent-id="208" id="outerDiv10" tabindex="-1">
    <div id="innerDiv10" data-claim="10" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel10" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(10)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="9" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle9" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd10" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(10, 209, 2)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor9">
        <p class="preambleBlock" id="preambleBlock9">
        <span class="setCursor depPreamble2"><span class="claimNo" id="claimNo10">10. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class="depNo preambleInclude" id="depno10">9, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;wherein the determination that the electronic device is in the first activity state is based at least in part on one or more data selected from the group consisting of: accelerometer data, global positioning system data, wireless communication data, heart rate sensor data, and gyroscope data.</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 10)"></button>
      </div></div></div><div class="outerDiv depouterDiv draggable-zone11 draggable6" data-claim="11" data-parent="6" data-unique-id="210" data-parent-id="201" id="outerDiv11" tabindex="-1">
    <div id="innerDiv11" data-claim="11" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel11" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(11)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="6" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle6" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd11" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(11, 210, 2)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor10">
        <p class="preambleBlock" id="preambleBlock10">
        <span class="setCursor depPreamble2"><span class="claimNo" id="claimNo11">11. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class="depNo preambleInclude" id="depno11">6,</span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;wherein the first activity state and the second activity state are obtained through the same activity function.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 11)"></button>
      </div></div><div class="outerDiv depouterDiv draggable-zone12 draggable6" data-claim="12" data-parent="6" data-unique-id="211" data-parent-id="201" id="outerDiv12" tabindex="-1">
    <div id="innerDiv12" data-claim="12" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel12" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(12)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="6" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle6" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd12" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(12, 211, 2)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor11">
        <p class="preambleBlock" id="preambleBlock11">
        <span class="setCursor depPreamble2"><span class="claimNo" id="claimNo12">12. </span>
  <span class="preamble preambleInclude">The computer implemented method of claim </span>
  <span class="depNo preambleInclude" id="depno12">6, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein the first feedback level and the second feedback level have different values.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 12)"></button>
      </div></div></div></div><div class="icSet col-md-4 draggable0" tabindex="-1"><div id="outerDiv13" data-claim="13" data-unique-id="202" data-parent-id="000" class="draggable-zone card my-3 card-block d-flex no-b ClaimSet outerDiv draggable-zone13 draggable_NA" style="" data-parent="0" tabindex="-1"><div id="innerDiv13" data-claim="13" class="card-body claimsRow claimGroup1 innerDiv"><div class="lobilist-actions claimsBar" style="visibility:visible"><span class="depNo" style="display:none" id="depno13">0,</span>
  <div class="dropdown preambleBtn"> <button type="button" class="btn btn-icon btn-outline-secondary btnPreamble" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="-200, 0">
     <i class="fas fa-cog"></i>
   </button>				<form id="preambleBox3" class="dropdown-menu preambleBox p-0" style="">
  											<div class="card card-custom example example-compact">
  												<div class="card-header preamble-header-card" style="">
  													<h3 class="card-title">
  														Preamble
  													</h3>
  												</div>
  										<div class="card-body preamble-body-card">
  										<div class="form-group">
  										    <div id="radioList3" class="radio-list">
  										        <label class="radio">
  										            <input type="radio" class="method" checked="true" name="3" value="method" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            Method - Software
  										        </label>
  										        <label class="radio">
  										            <input type="radio" class="system" name="3" value="system" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            System - Software
  										        </label>
  										        <label class="radio">
  										            <input type="radio" class="crm" name="3" value="crm" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            CRM - Software
  										        </label>
  														<label class="radio">
  										            <input type="radio" class="custom" name="3" value="custom" onclick="checkPreamble(this.value, this.name)">
  										            <span></span>
  										            Custom
  																<div id="customPreamble3" style="display:none">
  																<div class="preambleCustomDiv">IC:	<input id="" style="" type="text" class="form-control comments preambleCustomInput customIC" placeholder="E.g., A system..." required="">, comprising...</div>
  																<div class="preambleCustomDiv">DC:	<input id="customDC" style="" type="text" class="form-control comments preambleCustomInput customDC" placeholder="E.g., The system..." required=""> of claim...</div>
  															</div>
  										        </label>

  										    </div>

  										</div>
  									</div>
  									<div class="card-footer preamble-footer-card">
  										<button id="" type="button" class="btn btn-primary mr-2 btnSetPreamble" name="3" onclick="setPreamble(this.name, 13)">Set</button>
  									</div>
  </div>
  </form></div><button id="" data-handle="0" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle0"><i class="fas fa-arrows-alt-h"></i></button><button id="btnAdd13" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(13, 202, 3)"><i class="fas fa-plus"></i></button><button class="btnDel" style="display:none" id="btnDel13" onclick="deleteClaim(13)"></button></div>

  <div class="ADeditor ADeditorInd" id="ADeditor3">
    <p class="preambleBlock indPreambleBlock indPreamble3">
  <span class="claimNo" id="claimNo13">13. </span>
  <span class="preamble preambleInclude">A non-transitory computer-accessible storage medium storing program instructions that when executed on one or more processors cause the processors to:</span></p>
    <p class="claimBodyLine" style="text-indent:.5in" contenteditable="true">display, on the display, a graphical user interface;</p>
  <p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">receive, via the touch-sensitive display, an input representing a contact with the graphical user interface, the input having an input intensity;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">determine whether the input intensity of the input meets or exceeds a first intensity threshold in accordance with a determination that the electronic device is in a first activity state;</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">determine whether the input intensity of the input meets or exceeds a second intensity threshold in response to receiving the input and in accordance with a determination that the electronic device is in a second activity state; and</p><p class="claimBodyLine" contenteditable="true" style="text-indent: 0.5in;">provide a haptic feedback of a second feedback level higher than the first feedback level in response to receiving the input.&nbsp;</p></div>
    </div>	<div class="outerDiv depouterDiv draggable-zone14 draggable13" data-claim="14" data-parent="13" data-unique-id="213" data-parent-id="202" id="outerDiv14" tabindex="-1">
    <div id="innerDiv14" data-claim="14" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel14" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(14)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="13" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle13" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd14" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(14, 213, 3)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor14">
        <p class="preambleBlock" id="preambleBlock14">
        <span class="setCursor depPreamble3">
  <span class="claimNo" id="claimNo14">14. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class="depNo preambleInclude" id="depno14">13, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein the determination that the electronic device is in the second activity state is based at least in part on one or more data selected from the group consisting of: accelerometer data, global positioning system data, wireless communication data, heart rate sensor data, and gyroscope data.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 14)"></button>
      </div></div><div class="outerDiv depouterDiv draggable-zone15 draggable13" data-claim="15" data-parent="13" data-unique-id="214" data-parent-id="202" id="outerDiv15" tabindex="-1">
    <div id="innerDiv15" data-claim="15" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel15" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(15)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="13" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle13" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd15" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(15, 214, 3)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor15">
        <p class="preambleBlock" id="preambleBlock15">
        <span class="setCursor depPreamble3">
  <span class="claimNo" id="claimNo15">15. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class="depNo preambleInclude" id="depno15">13, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein graphical user interface includes an affordance, and wherein the input represents a contact with the affordance, the one or more programs further including instructions for providing a haptic feedback of a third feedback level different from the first feedback level.&nbsp;&nbsp;&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 15)"></button>
      </div><div class="outerDiv depouterDiv draggable-zone16 draggable15" data-claim="16" data-parent="15" data-unique-id="217" data-parent-id="214" id="outerDiv16" tabindex="-1">
    <div id="innerDiv16" data-claim="16" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel16" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(16)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="15" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle15" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd16" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(16, 217, 3)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor16">
        <p class="preambleBlock" id="preambleBlock16">
        <span class="setCursor depPreamble3">
  <span class="claimNo" id="claimNo16">16. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class="depNo preambleInclude" id="depno16">15, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein the first activity state and the second activity state are obtained through the same activity function.&nbsp;&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 16)"></button>
      </div></div><div class="outerDiv depouterDiv draggable-zone17 draggable15" data-claim="17" data-parent="15" data-unique-id="218" data-parent-id="214" id="outerDiv17" tabindex="-1">
    <div id="innerDiv17" data-claim="17" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel17" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(17)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="15" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle15" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd17" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(17, 218, 3)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor17">
        <p class="preambleBlock" id="preambleBlock17">
        <span class="setCursor depPreamble3">
  <span class="claimNo" id="claimNo17">17. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class="depNo preambleInclude" id="depno17">15,</span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;wherein the first feedback level and the second feedback level have different values.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 17)"></button>
      </div></div></div><div class="outerDiv depouterDiv draggable-zone18 draggable13" data-claim="18" data-parent="13" data-unique-id="215" data-parent-id="202" id="outerDiv18" tabindex="-1">
    <div id="innerDiv18" data-claim="18" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel18" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(18)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="13" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle13" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd18" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(18, 215, 3)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor16">
        <p class="preambleBlock" id="preambleBlock16">
        <span class="setCursor depPreamble3">
  <span class="claimNo" id="claimNo18">18. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class="depNo preambleInclude" id="depno18">13,</span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;wherein the first activity state and the second activity state are obtained through the same activity function.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 18)"></button>
      </div></div><div class="outerDiv depouterDiv draggable-zone19 draggable13" data-claim="19" data-parent="13" data-unique-id="216" data-parent-id="202" id="outerDiv19" tabindex="-1">
    <div id="innerDiv19" data-claim="19" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel19" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(19)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="13" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle13" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd19" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(19, 216, 3)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor17">
        <p class="preambleBlock" id="preambleBlock17">
        <span class="setCursor depPreamble3">
  <span class="claimNo" id="claimNo19">19. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class="depNo preambleInclude" id="depno19">13, </span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">wherein the first activity state and the second activity state are obtained through different activity functions.&nbsp;</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 19)"></button>
      </div></div><div class="outerDiv depouterDiv draggable-zone20 draggable13" data-claim="20" data-parent="13" data-unique-id="219" data-parent-id="202" id="outerDiv20" tabindex="0">
    <div id="innerDiv20" data-claim="20" class="innerDiv card-body claimsRow" onmouseenter="mouseIn2(this)" onmouseleave="mouseOut2(this)">
      <div class="lobilist-actions claimsBar" style="visibility: hidden;">
        <button id="btnDel20" class="btn btn-icon btn-outline-secondary btnDel" onclick="deleteClaim(20)" style="margin-left:5px;"><i class="fas fa-times"></i>
        </button>
        <button id="" data-handle="13" class="btn btn-icon btn-outline-secondary btnMove handle draggable-handle13" onmouseup=""><i class="fas fa-arrows-alt-v"></i>
        </button>
        <button id="btnAdd20" class="btn btn-icon btn-outline-secondary btnAdd" onclick="addClaim(20, 219, 3)" style="margin-left:5px;"><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="ADeditor" id="ADeditor20">
        <p class="preambleBlock" id="preambleBlock20">
        <span class="setCursor depPreamble3">
  <span class="claimNo" id="claimNo20">20. </span>
  <span class="preamble preambleInclude">The non-transitory computer-accessible storage medium of claim </span>
  <span class="depNo preambleInclude" id="depno20">13,</span></span>
        <span class="preambleBody preambleInclude" contenteditable="true" style="outline:none">&nbsp;wherein the first feedback level and the second feedback level have different values.</span>
        </p>

        </div>
        <button class="btnSetPreamble" style="display:none" onclick="setPreamble(this.name, 20)"></button>
      </div></div></div></div>
      `
