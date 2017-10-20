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
       for(let i = 0; i < body.length; ++i){
         $('#picture').append("<img src='" + body.profile.image_url + "'>");
         $('#name').append("<h3>Doctor name: " + body.practics.name + "</h3>");
         $('#city').append("<h4>City: " + body.practics.visit_address.city + "</h4>");
         $('#state').append("<h4>State: " + body.practics.visit_address.state + "</h4>");
         $('#street').append("<h4>Street: " + body.practics.visit_address.street + "</h4>");
         $('#zip').append("<h4>Zip: " + body.practics.visit_address.zip + "</h4>");
         $('#phone').append("<h4>Phone: " + body.phones.number + "</h4>");
         $('#bio').append("<h4>Bio: " + body.bio + "</h4>");
       }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }
}
