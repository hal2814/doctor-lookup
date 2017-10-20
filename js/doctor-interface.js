import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let myDoctor = new Doctor();
    let issue = $('#issue').val();
    let docName = $('#docName').val();
    let promise;

    if(docName === ""){
      promise =
      myDoctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&sort=full-name-asc&fields=practices(name%2Caccepts_new_patients%2Cvisit_address(city%2Cstate_long%2Cstreet%2Czip)%2Cphones(number))%2Cprofile(image_url)%2Cbio&skip=0&limit=10&user_key=${apiKey}`);
    }else{
      promise =
      myDoctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${docName}&query=${issue}&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&sort=full-name-asc&fields=practices(name%2Caccepts_new_patients%2Cvisit_address(city%2Cstate_long%2Cstreet%2Czip)%2Cphones(number))%2Cprofile(image_url%2Cbio)&skip=0&limit=10&user_key=${apiKey}`);
    }

    //promise will return first name, last name, address, phone, website, and accepting patients status
    //practices(name,accepts_new_patients,visit_address(city,state_long,street,zip),phones(number)),profile(image_url),bio

    // myDoctor.callTest(promise);
    myDoctor.callApi(promise);
  });
});
