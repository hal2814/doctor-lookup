import { Doctor } from './../js/doctor.js';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let myDoctor = new Doctor();
    let issue = $('#issue').val();
    let docName = $('#docName').val();

    let issuePromise = myDoctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&gender=male&sort=full-name-asc&skip=0&limit=10&user_key=2cc758b12d85e0254e5031c2ac84e7e1`);
    let namePromise =
    myDoctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${docName}&query=${issue}&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&gender=male&sort=full-name-asc&skip=0&limit=10&user_key=2cc758b12d85e0254e5031c2ac84e7e1`);

    myDoctor.callApi(promise,year,crime);
  });
});
