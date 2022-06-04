'use strict';
// Class definition
var dataJSONArray=[]
var KTDatatableDataLocalDemo = function() {
    // Private functions

    // demo initializer
    var demo = function() {
         dataJSONArray = [
        {
          id:0,
          client:"amazon",
          clientRef:"4723-US",
          firmRef:"14-090241",
          usptoRef:"17/342,876",
          title:"Multi-Modal Haptic Feedback Touch Screen",
          action:"nfoa_rec_email",
          action2:"NFOA Rec Email",
          filingDate:"April 2, 2019",
          inventors:"Todd Everton; Avers McGee",
          examiner:"Michael Forman",
          artUnit:"3412",
          confirmationNo:"8719",
          due: "April 24, 2021",
          note:"",
          edit:null
        },{
          id:1,
          client:"halliburton",
          clientRef:"HBC-25212",
          firmRef:"18-100241",
          usptoRef:"16/782,456",
          title:"Downhole Well Perforation System and Method",
          action:"par_email",
          action2:"PAR Email",
          filingDate:"October 12, 2018",
          inventors:"David Nathaniel",
          examiner:"Christopher Woods",
          artUnit:"4192",
          confirmationNo:"6510",
          due: "April 26, 2021",
          note:"",
          edit:null
        },{
          id:2,
          client:"halliburton",
          clientRef:"HBC-26714",
          firmRef:"18-100292",
          usptoRef:"15/142,891",
          title:"Sealed Wellhead for Blow Out Prevention Systems",
          action:"new_app",
          action2:"NFOA Rec Email",
          filingDate:"March 30, 2016",
          inventors:"Sanders Thomas; Paul Gorsen",
          examiner:"Sarah Ackerman",
          artUnit:"2321",
          confirmationNo:"6712",
          due: "April 27, 2021",
          note:"",
          edit:null
        },{
          id:3,
          client:"amazon",
          clientRef:"4891-US",
          firmRef:"14-090478",
          usptoRef:"16/522,018",
          title:"Thin Wearable Device With Blood Oximetry ",
          action:"nfoa_draft",
          action2:"NFOA Draft",
          filingDate:"December 21, 2017",
          inventors:"Gennie Timbers; Anderson Salinas; Whei Lee",
          examiner:"Anthony Li",
          artUnit:"1281",
          confirmationNo:"4411",
          due: "April 24, 2021",
          note:"",
          edit:null
        },

            ];

        var datatable = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 20,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },
            // search: {
            //     input: $('#kt_datatable_search_client'),
            //     key: 'generalSearch'
            // },
            // columns definition
            columns: [
              {
      					field: 'client',
      					title: 'Client',
                template: function(row) {
                  var clientval = {
                    amazon: {'title': 'Amazon', 'class': ' label-light-info'},
                    halliburton: {'title': 'Halliburton', 'class': ' label-light-success'},
                  };
                  return clientval[row.client].title ;
                },
                width: 150
      				}, {
      					field: 'clientRef',
      					title: 'Client Ref No.',
                width: 150
      				}, {
      					field: 'firmRef',
      					title: 'Firm Ref No.',
                width: 150
      				},  {
      					field: 'title',
      					title: 'Title',
                width: 400
      				},{
      					field: 'due',
      					title: 'Due Date',
                width: 150
      				}, {
      					field: 'action',
      					title: 'Action',
                width: 200,
                template: function(row) {
                  var action = {
                    nfoa_rec_email: {'title': 'NFOA REC EMAIL', 'class': 'NFOArec-btn bg1-bt btn-pill btn-dock', 'onclick': '"funcNfoaRec()"'},
                    par_email: {'title': 'PAR EMAIL', 'class': 'email-btn3 btn-pill btn-dock'},
                    nfoa_draft: {'title': 'NFOA DRAFT RESPONSE', 'class': 'RRrec-btn bg4-btn btn-pill btn-dock', 'onclick': '"gotoPros()"'},
                    new_app: {'title': 'NEW APPLICATION', 'class': 'bg3-btn btn-pill btn-dock', 'onclick': '"gotoApp()"'},

                  };
                  return '<button onclick='  + action[row.action].onclick + ' type="button" class="btn '  + action[row.action].class + '">' + action[row.action].title + '</button>'
                  // <span class="label label-lg font-weight-bold' + action[row.action].class + ' label-inline" style="font-size: 1.25rem;">' + action[row.action].title + '</span>';
                },
      				},{
      					field: 'usptoRef',
      					title: 'Application No.',
                width: 150
      				},{
      					field: 'filingDate',
      					title: 'Filing Date',
      				}, {
      					field: 'inventors',
      					title: 'Inventors',
      				}, {
      					field: 'examiner',
      					title: 'Examiner',
      				}, {
      					field: 'artUnit',
      					title: 'Art Unit',
      				}, {
      					field: 'confirmationNo',
      					title: 'Confirmation No.',
      				}, {
      					field: 'notes',
      					title: 'Notes',
      				},{
      					field: 'edit',
      					title: 'Done',
      					sortable: false,
      					width: 125,
      					overflow: 'visible',
      					autoHide: false,
      					template: function(row) {
      						return '\
      	                        <input type="checkbox" >\
      	                    ';
      					},
      				}],
        });

        $('#kt_datatable_search_client').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'client');
        });

        $('#kt_datatable_search_attorney').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'action');
        });

        $('#kt_datatable_search_client, #kt_datatable_search_attorney').selectpicker();
    };

    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableDataLocalDemo.init();
});
function editCase(x){
  var caseData = dataJSONArray[x]
  console.log(caseData)
  document.getElementById("exampleModalLabel").innerHTML = caseData.client + "  |  " +caseData.clientRef+ "  |  " +caseData.firmRef
  document.getElementById("clientmatter").value = caseData.clientRef
  document.getElementById("firmmatter").value = caseData.firmRef
  document.getElementById("appnumber").value = caseData.usptoRef
  document.getElementById("title").value = caseData.title
  document.getElementById("filingdate").value = caseData.filingDate
  document.getElementById("workingatty").value = caseData.workingAttorney2
  document.getElementById("inventor").value = caseData.inventors
  document.getElementById("examiner").value = caseData.examiner
  document.getElementById("artunit").value = caseData.artUnit
  document.getElementById("confirmation").value = caseData.confirmationNo
  document.getElementById("notes").value = caseData.notes

}
function newCase(x){
  document.getElementById("exampleModalLabel").innerHTML = "Add New Case Data"

}

function gotoPros(){
  location.href = "prosecution_14-090478.html"
}
function gotoApp(){
  location.href = "applications_18-100292.html"
}
