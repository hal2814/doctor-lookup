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
         $('.output').append("<img src='" + body.data[i].profile.image_url + "'>");
         $('.output').append("Doctor name: <h3>" + body.data[i].practices[i].name + "</h3>");
         if(body.data[i].practices[i].accepts_new_patients){
           $('.output').append("Accepting new patients: Yes");
         }else{
           $('.output').append("Accepting new patients: No");
         }
         $('.output').append("<h4>City: " + body.data[i].practices[i].visit_address.city + "</h4>");
         $('.output').append("<h4>State: " + body.data[i].practices[i].visit_address.state_long + "</h4>");
         $('.output').append("<h4>Street: " + body.data[i].practices[i].visit_address.street + "</h4>");
         $('.output').append("<h4>Zip: " + body.data[i].practices[i].visit_address.zip + "</h4>");
         $('.output').append("<h4>Phone: " + body.data[i].practices[i].phones[i].number + "</h4>");
         debugger;
         $('.output').append("<h4>Bio: " + body.data[i].profile.bio + "</h4><br>");
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
