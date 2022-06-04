init()

function init() {
  var claimsModel = [
    {
      claim: 1,
      parent: 0,
      zone: 1,
      preambleSetting: 'method',
      content: '',
    }
  ]
  initializeClaims(claimsModel, document.getElementById('claimsContainer'))
  setupEditor()
}

function initializeClaims(claimsModel, containerEl) {
  var claimsHTML = claimsModel.map(makeClaim)
  containerEl.innerHTML = claimsHTML.join('')
}

function makeClaim(data) {
  if (data.parent === 0) {
  return makeIndependentClaim(data)
  }

  return makeIndependentClaim(data)
}

function makeDependentPreamble(data) {
  var preambles = {
    method: `
      <span class="claimNo">${data.claim}. </span>
      <span class="preamble">The computer implemented method of claim </span>
      <span class = "depNo" > ${data.parent},&nbsp;</span>
    `,
    system: `
      <span class="claimNo">${data.claim}. </span>
      <span class="preamble">The system of claim </span>
      <span class = "depNo" > ${data.parent},&nbsp;</span>
      <span>wherein the instructions when executed further cause the system to:</span>
    `
  }

  if (preambles[data.preambleSetting]) {
    return preambles[data.preambleSetting]
  }

  return ``
}

function makeIndependentPreamble(data) {
  var preambles = {
    method: `
      <span class="claimNo">${data.claim}. </span>
      <span class="preamble">A computer implemented method, comprising:</span>
    `,
    system: `
      <span class="claimNo">${data.claim}. </span>
      <span class="preamble">A system, comprising:</span>
      <p style="text-indent:.5in">a processor;</p>
      <p style="text-indent:.5in">a memory device; and</p>
      <p style="text-indent:.5in">instructions, the instructions when executed by the processor cause the system to:</p>
    `,
  }

  if (preambles[data.preambleSetting]) {
    return preambles[data.preambleSetting]
  }

  return ``
}

function makeIndependentClaim(data) {
  return `
    <div class="ad-independent-claim">
      <p class="preambleBlock" id="preambleBlock${data.claim}">
        <span class="setCursor">
          ${makeIndependentPreamble(data)}
        </span>
        <span class="preambleBody" contenteditable="true" style="outline:none;"> </span>
      </p>
    </div>
  `
}

function makeDependentClaim(data) {
  return ''
}
