function fillOfficeAction(){
  document.getElementById('OAcontainer').innerHTML = filledOfficeAction
}
var filledOfficeAction =
`<div id = "OAcontainer" class="card-body">
				<div class="accordion accordion-solid accordion-toggle-plus" id="accordionExample6" style="margin-bottom:30px">


	<div class="card">
		<div class="card-header" id="caseData" onclick="setTimeout(autofocusMail, 500)">
			<div id="casedatacard" class="card-title collapsed" data-toggle="collapse" data-target="#collapseThree6" aria-expanded="false">
				<i class="fas fa-exclamation-triangle"></i>
				Check Case Data
			</div>
		</div>
		<div id="collapseThree6" class="collapse" data-parent="#accordionExample6" style="">
			<div class="card-body">

				<div class="form-group row">
							<div class="col-lg-3">
								<label>Client Matter No.</label>
								<input id="clientmatter" type="text" class="form-control" placeholder="" required="">
								<!-- <span class="form-text text-muted">Please enter your full name</span> -->
							</div>
							<div class="col-lg-3">
								<label>Firm Matter No.</label>
								<input id="firmmatter" type="text" class="form-control" placeholder="" required="">
							</div>
							<div class="col-lg-3">
								<label>Application No.</label>
								<input id="appnumber" type="text" class="form-control" placeholder="" required="">
							</div>
							<div class="col-lg-3">
								<label>Filing Date</label>
								<input id="filingdate" type="text" class="form-control" placeholder="" required="">
							</div>
				</div>

				<div class="form-group row">
							<div class="col-lg-8">
								<label>Title</label>
								<input id="title" type="text" class="form-control" placeholder="" required="">
								<!-- <span class="form-text text-muted">Please enter your full name</span> -->
							</div>
							<div class="col-lg-4">
								<label>Inventor</label>
								<input id="inventor" type="text" class="form-control" placeholder="" required="">
							</div>
				</div>
				<div class="form-group row">
					<div class="col-lg-3">
						<label>Examiner</label>
						<input id="examiner" type="text" class="form-control" placeholder="" required="">
					</div>
							<div class="col-lg-2">
								<label>Art Unit</label>
								<input id="artunit" type="text" class="form-control" placeholder="" required="">
								<!-- <span class="form-text text-muted">Please enter your full name</span> -->
							</div>
							<div class="col-lg-2">
								<label>Confirmation No.</label>
								<input id="confirmation" type="text" class="form-control" placeholder="" required="">
							</div>
							<div class="col-lg-3">
								<label>Mail Date</label>
								<input required="" id="maildate" type="text" class="form-control" placeholder="">
							</div>
							<div class="col-lg-2" style="margin-top: auto;">

								<button type="button" class="btn btn-secondary btn-success" onclick="">Save</button>
							</div>
				</div>

			</div>
		</div>
	</div>

	<div class="card">
		<div class="card-header" id="headingTwo6">
			<div class="card-title" data-toggle="collapse" data-target="#collapseTwo6" aria-expanded="true">
				<i class="far fa-arrow-alt-circle-right"></i> Import Pending Claims
			</div>
		</div>
		<div id="collapseTwo6" class="collapse show" data-parent="#accordionExample6" style="">
			<div id="claimImportCard" class="card-body">
				<div class="form-group mb-8">
										<div class="alert alert-custom alert-default" role="alert">
											<div class="alert-icon"><span class="svg-icon svg-icon-primary svg-icon-xl"><!--begin::Svg Icon | path:/metronic/themes/metronic/theme/html/demo1/dist/assets/media/svg/icons/Tools/Compass.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
				    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				        <rect x="0" y="0" width="24" height="24"></rect>
				        <path d="M7.07744993,12.3040451 C7.72444571,13.0716094 8.54044565,13.6920474 9.46808594,14.1079953 L5,23 L4.5,18 L7.07744993,12.3040451 Z M14.5865511,14.2597864 C15.5319561,13.9019016 16.375416,13.3366121 17.0614026,12.6194459 L19.5,18 L19,23 L14.5865511,14.2597864 Z M12,3.55271368e-14 C12.8284271,3.53749572e-14 13.5,0.671572875 13.5,1.5 L13.5,4 L10.5,4 L10.5,1.5 C10.5,0.671572875 11.1715729,3.56793164e-14 12,3.55271368e-14 Z" fill="#000000" opacity="0.3"></path>
				        <path d="M12,10 C13.1045695,10 14,9.1045695 14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 C10,9.1045695 10.8954305,10 12,10 Z M12,13 C9.23857625,13 7,10.7614237 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,10.7614237 14.7614237,13 12,13 Z" fill="#000000" fill-rule="nonzero"></path>
				    </g>
				</svg><!--end::Svg Icon--></span></div>
											<div class="alert-text">
												Simply paste the original claims, or amended claims from the last response with underlines, strikethroughs, and status indicators. Claims will be automatically updated for the present response.
											</div>
										</div>
									</div>
        <textarea id="kt-tinymce-1" name="kt-tinymce-1" class="tox-target" aria-hidden="true" style="display: none;"></textarea><div role="application" class="tox tox-tinymce" style="visibility: hidden; height: 200px;"><div class="tox-editor-container"><div data-alloy-vertical-dir="toptobottom" class="tox-editor-header"><div role="menubar" data-alloy-tabstop="true" class="tox-menubar"><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" style="user-select: none;"><span class="tox-mbtn__select-label">File</span><div class="tox-mbtn__select-chevron">!not found!</div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" style="user-select: none;"><span class="tox-mbtn__select-label">Edit</span><div class="tox-mbtn__select-chevron">!not found!</div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" style="user-select: none;"><span class="tox-mbtn__select-label">View</span><div class="tox-mbtn__select-chevron">!not found!</div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" style="user-select: none;"><span class="tox-mbtn__select-label">Format</span><div class="tox-mbtn__select-chevron">!not found!</div></button></div><div class="tox-anchorbar"></div></div><div class="tox-sidebar-wrap"><div class="tox-edit-area"><iframe id="kt-tinymce-1_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area. Press ALT-0 for help." class="tox-edit-area__iframe"></iframe></div><div role="complementary" class="tox-sidebar"><div data-alloy-tabstop="true" tabindex="-1" class="tox-sidebar__slider tox-sidebar--sliding-closed" style="width: 0px;"><div class="tox-sidebar__pane-container"></div></div></div></div></div><div aria-hidden="true" class="tox-throbber" style="display: none;"></div></div>

			</div>

		</div>
	</div>
	</div>
	<div class="separator separator-dashed my-5"></div>

	<div class="form-group" style="margin: 30px 0;">
		<label class="" style="display:inline; font-weight:600">
			Pending Claims:
		</label>
		<input id="pendClaims" class="form-control comments claimbox" style="width: 200px; height: 40px" placeholder="e.g., 1-20">

		<label class="" style="display:inline; font-weight:600; margin-left:20px">
			Independent Claims:
		</label>
		<input id="indClaims" class="form-control comments claimbox" style="width: 200px; height: 40px" placeholder="e.g., 1, 5, and 16">
	</div>


<div class="separator separator-dashed my-5"></div>
				<div class="form-group" style="margin: 30px 0;">
					<!-- <label>Amendment Sections</label> -->
					<div class="checkbox-list">
						<label class="checkbox checkbox-lg">
							<input id="amenddraw" type="checkbox">
							<span></span>
							Amendments to the Drawings
						</label>
						<label class="checkbox checkbox-lg">
							<input id="amendspec" type="checkbox">
							<span></span>
							Amendments to the Specification
						</label>
						<label class="checkbox checkbox-lg">
							<input id="amendclaims" type="checkbox" checked="">
							<span></span>
							Amendments to the claims
						</label>
					</div>
				</div>
<div class="separator separator-dashed my-5"></div>
<div class="form-group" style="margin: 30px 0;">
	<!-- <label>Remarks Sections</label> -->
	<!-- <div class="" style="">
		<label class="" style="display:inline">
			Pending Claims
		</label>
		<input class="form-control comments claimbox" >
		<br>
		<label class="" style="display:inline">
			Independent Claims
		</label>
		<input class="form-control comments claimbox" >
	</div> -->
	<div class="checkbox-list">
		<label class="checkbox checkbox-lg">
			<input id="interview" type="checkbox">
			<span></span>
Examiner Interview
</label>

		<label id="allowLb" class="checkbox checkbox-lg" style="font-weight: 600;">
			<input type="checkbox" id="allow" onchange="handleChange(this)">
			<span></span>
			Allowable Subject Matter
		</label>
		<div id="allowAcc" class="panel" style="display: none;">
		<p>  Claim(s) <input id="allowed" style="" type="text" class="form-control comments claimbox" placeholder="e.g., 1, 3-4, and 10"> is/are allowable.</p>
		<p>  Claim(s) <input id="wouldbe" style="" type="text" class="form-control comments claimbox" placeholder="e.g., 1, 3-4, and 10"> would be allowable.</p>
		</div>
		<label id="doubleLb" class="checkbox checkbox-lg">
			<input id="double" type="checkbox" onchange="handleChange(this)">
			<span></span>
Double Patenting Rejection
		</label>
		<div id="doubleAcc" class="panel">
			<p>  Claim(s)
				<input style="" type="text" class="form-control comments doublein1 claimbox" placeholder="e.g., 1, 3-4, and 10"> is/are rejected over claim(s)
				<input style="" type="text" class="form-control comments doublein2 claimbox" placeholder="e.g., 1, 3-4, and 10"> of U.S. Patent No.
				<input style="" type="text" class="form-control comments doublein3" placeholder="e.g., 7,325,221">
				<button type="button" onclick="addDouble()" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #f87da9;"><i class="fas fa-plus" style="color:white; display: block;"></i></button></p>

	</div>
		<label id="objectionsLb" class="checkbox checkbox-lg">
			<input id="objections" type="checkbox" onchange="handleChange(this)">
			<span></span>
			Objections
		</label>
				<div id="objectionsAcc" class="panel">
			<p> <input style="width:300px" type="text" class="form-control comments objection1" placeholder="e.g., The Specification is, Claim 4 is"> objected to for allegedly <input style="width:345px; display:inline-block" type="text" class="form-control comments objection2" placeholder="">
				<button type="button" onclick="addObjection()" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #f87da9;"><i class="fas fa-plus" style="color:white; display: block;"></i></button></p>
</div>
		<label id="re112Lb" class="checkbox checkbox-lg">
			<input id="re112" type="checkbox" onchange="handleChange(this)">
			<span></span>
			112 Rejections
		</label>
		<div id="re112Acc" class="panel">
			<p>Claim(s) <input style="" type="text" class="form-control comments claimbox claims112" placeholder="e.g., 1, 3-4, and 10"> is/are rejected under
				<select style="width:90px" type="text" class="form-control comments type112" placeholder="">
					<option>112(a)</option>
					<option>112(b)</option>
				</select>
						<button type="button" onclick="add112()" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #f87da9;"><i class="fas fa-plus" style="color:white; display: block;"></i></button></p>
	</div>


		<label id="re101Lb" class="checkbox checkbox-lg" style="font-weight: 900;">
			<input id="re101" type="checkbox" onchange="handleChange(this)">
			<span></span>
101 Rejections		</label>
<div id="re101Acc" class="panel" style="display: block;">
	<p>  Claim(s) <input id="eligibleC" style="" type="text" class="form-control comments claimbox" placeholder="e.g., 1, 3-4, and 10"> are rejected under 101.</p>

</div>


		<label id="re102Lb" class="checkbox checkbox-lg" style="font-weight: 900;">
			<input id="re102" type="checkbox" onchange="handleChange(this)">
			<span></span>
102 Rejections		</label>
<div id="re102Acc" class="panel" style="display: block;">
	<div class="inner102">  Claim(s) <input style="" type="text" class="form-control comments claimbox claims102" placeholder="e.g., 1, 3-4, and 10"> is/are rejected over
		<select id="refselect1" onchange="change(this, 102)" style="" type="text" class="form-control comments reftype102 refselect" placeholder="">
		<option class="pub" value="U.S. Patent Publication" selected="">U.S. Publication</option>
		<option class="patent" value="U.S. Patent">U.S. Patent</option>
		<option class="other" value="other">Other</option>
		<option value="Smith" class="saved" style="background-color: rgb(255, 221, 117);">Smith</option><option value="Johnson" class="saved" style="background-color: rgb(255, 221, 117);">Johnson</option></select>
		<input style="display: inline-block;" type="text" class="form-control comments refno102" placeholder="e.g., 7,325,221"> <p style="display:inline">to</p>
		<input style="display: inline-block;" type="text" class="form-control comments refname102" placeholder="Smith" onfocusout="refSaver(this)">
			<button type="button" onclick="add102()" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #f87da9;"><i class="fas fa-plus" style="color:white; display: block;"></i></button>
		</div>
</div>

		<label id="re103Lb" class="checkbox checkbox-lg" style="font-weight: 900;">
			<input id="re103" type="checkbox" onchange="handleChange(this)">
			<span></span>
103 Rejections		</label>
<div id="re103Acc" class="panel" style="display: block;">
	<div class="inner103" style="display:inline-block">  Claim(s) <input style="" type="text" class="form-control comments claimbox claims103" placeholder="e.g., 1, 3-4, and 10"> is/are rejected over
		<select onchange="change(this, 103)" style="" type="text" class="form-control comments reftype103 refselect" placeholder="">
			<option class="pub" value="U.S. Patent Publication" selected="">U.S. Publication</option>
			<option class="patent" value="U.S. Patent">U.S. Patent</option>
			<option class="other" value="other">Other</option>
		<option value="Smith" class="saved" style="background-color: rgb(255, 221, 117);">Smith</option><option value="Johnson" class="saved" style="background-color: rgb(255, 221, 117);">Johnson</option></select>
			<input id="refnum1" style="display: none;" type="text" class="form-control comments refno103" placeholder="e.g., 7,325,221"> <p style="display: none;">to</p>
			<input id="refname1" style="display: none;" type="text" class="form-control comments refname103" placeholder="Smith" onfocusout="refSaver(this)">

			<button type="button" class="btn btn-light-info" style="display:inline-block" onclick="addinview(this)">+ in view of</button>
			<button type="button" onclick="add103()" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; background: #f87da9;"><i class="fas fa-plus" style="color:white; display: block;"></i></button>
	<div style="margin-left: 354px; margin-top: 5px;"><select onchange="change(this, 103)" type="text" class="form-control comments refselect reftype103" placeholder="">
		<option class="pub" value="U.S. Patent Publication" selected="">U.S. Publication</option>
		<option class="patent" value="U.S. Patent">U.S. Patent</option>
		<option class="other" value="other">Other</option>
		<option value="Smith" class="saved" style="background-color: rgb(255, 221, 117);">Smith</option><option value="Johnson" class="saved" style="background-color: rgb(255, 221, 117);">Johnson</option></select> <input type="text" class="form-control comments refno103" placeholder="e.g., 7,325,221"> <p style="display:inline">to</p> <input type="text" class="form-control comments refname103" placeholder="Smith" onfocusout="refSaver(this)"><button type="button" onclick="del103(this)" style="padding: 0px; border-radius: 155px; width: 27px; height: 27px; border: none; margin: 5px; margin-left:8px; background: #cecece;"><i class="fas fa-minus" style="color:white; display: block;"></i></button></div></div>

</div>
	</div>
</div>
      `
