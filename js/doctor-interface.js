import { Doctor } from './../js/doctor.js';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let myDoctor = new Doctor();
    // let year = parseInt($('#year').val());
    // let crime = $('#crimeType').val();
    let promise = myDoctor.makePromise(``);

    myDoctor.callApi(promise,year,crime);
  });
});
