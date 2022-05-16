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
          workingAttorney:"pat_lawyerton",
          workingAttorney2:"Pat Lawyerton",
          filingDate:"April 2, 2019",
          inventors:"Todd Everton; Avers McGee",
          examiner:"Michael Forman",
          artUnit:"3412",
          confirmationNo:"8719",
          note:"",
          edit:null
        },{
          id:1,
          client:"halliburton",
          clientRef:"HBC-25212",
          firmRef:"18-100241",
          usptoRef:"16/782,456",
          title:"Downhole Well Perforation System and Method",
          workingAttorney:"amy_johnson",
          workingAttorney2:"Amy Johnson",
          filingDate:"October 12, 2018",
          inventors:"David Nathaniel",
          examiner:"Christopher Woods",
          artUnit:"4192",
          confirmationNo:"6510",
          note:"",
          edit:null
        },{
          id:2,
          client:"halliburton",
          clientRef:"HBC-26714",
          firmRef:"18-100292",
          usptoRef:"15/142,891",
          title:"Sealed Wellhead for Blow Out Prevention Systems",
          workingAttorney:"pat_lawyerton",
          workingAttorney2:"Pat Lawyerton",
          filingDate:"March 30, 2016",
          inventors:"Sanders Thomas; Paul Gorsen",
          examiner:"Sarah Ackerman",
          artUnit:"2321",
          confirmationNo:"6712",
          note:"",
          edit:null
        },{
          id:3,
          client:"amazon",
          clientRef:"4891-US",
          firmRef:"14-090478",
          usptoRef:"16/522,018",
          title:"Thin Wearable Device With Blood Oximetry ",
          workingAttorney:"thomas_morris",
          workingAttorney2:"Thomas Morris",
          filingDate:"December 21, 2017",
          inventors:"Gennie Timbers; Anderson Salinas; Whei Lee",
          examiner:"Anthony Li",
          artUnit:"1281",
          confirmationNo:"4411",
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
      				}, {
      					field: 'usptoRef',
      					title: 'Application No.',
                width: 150
      				}, {
      					field: 'title',
      					title: 'Title',
                width: 400
      				}, {
      					field: 'workingAttorney',
      					title: 'Working Attorney',
                width: 200,
                template: function(row) {
                  var attorney = {
                    pat_lawyerton: {'title': 'Pat Lawyerton', 'class': ' label-light-info'},
                    thomas_morris: {'title': 'Thomas Morris', 'class': ' label-light-success'},
                    amy_johnson: {'title': 'Amy Johnson ', 'class': ' label-light-warning'},
                  };
                  return '<span class="label label-lg font-weight-bold' + attorney[row.workingAttorney].class + ' label-inline" style="font-size: 1.25rem;">' + attorney[row.workingAttorney].title + '</span>';
                },
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
      					title: 'Edit',
      					sortable: false,
      					width: 125,
      					overflow: 'visible',
      					autoHide: false,
      					template: function(row) {
      						return '\
      	                        <button type="button" class="btn " data-toggle="modal" data-target="#exampleModal" onclick="editCase('+ row.id+')">\
      	                           <i class="fas fa-edit"></i>\
      	                        </button>\
      	                    ';
      					},
      				}],
        });

        $('#kt_datatable_search_client').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'client');
        });

        $('#kt_datatable_search_attorney').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'workingAttorney');
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
