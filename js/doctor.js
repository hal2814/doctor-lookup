export class Doctor {
  constructor(){

  }


  makePromise(api_key){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = api_key;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  callApi(promise){
    promise.then(function(response) {
      let body = JSON.parse(response);
       for(let i = 0; i < body.data.length; ++i){
         $('#picture').append("<img src='" + body.data[i].profile.image_url + "'>");
         $('#name').append("<h3>Doctor name: " + body.data[i].practics[i].name + "</h3>");
         if(body.data[i].practics[i].accepts_new_patients){
           $('#newPatients').append("<h3>Accepting new patients: Yes</h3>");
         }else{
           $('#newPatients').append("<h3>Accepting new patients: No</h3>");
         }
         $('#city').append("<h4>City: " + body.data[i].practics[i].visit_address.city + "</h4>");
         $('#state').append("<h4>State: " + body.data[i].practics[i].visit_address.state_long + "</h4>");
         $('#street').append("<h4>Street: " + body.data[i].practics[i].visit_address.street + "</h4>");
         $('#zip').append("<h4>Zip: " + body.data[i].practics[i].visit_address.zip + "</h4>");
         $('#phone').append("<h4>Phone: " + body.data[i].practices[i].phones[i].number + "</h4>");
         $('#bio').append("<h4>Bio: " + body.data[i].bio + "</h4>");
       }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

  callTest(promise){
    promise.then(function(response) {
      let body = JSON.parse(response);
      debugger;
      $('#test').text(body.data);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }
}
