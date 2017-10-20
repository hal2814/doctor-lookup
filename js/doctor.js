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
       for(let i = 0; i < body.data.length +1; ++i){
         $('.output').prepend("Bio: <h6>" + body.data[i].profile.bio + "</h6><br>");
         $('.output').prepend("Phone: <h4>" + body.data[i].practices[0].phones[0].number + "</h4>");
         $('.output').prepend("Zip: <h4>" + body.data[i].practices[0].visit_address.zip + "</h4>");
         $('.output').prepend("Street: <h4>" + body.data[i].practices[0].visit_address.street + "</h4>");
         $('.output').prepend("State: <h4>" + body.data[i].practices[0].visit_address.state_long + "</h4>");
         $('.output').prepend("City: <h4>" + body.data[i].practices[0].visit_address.city + "</h4>");
         if(body.data[i].practices[0].accepts_new_patients){
           $('.output').prepend("Accepting new patients: <h4> Yes</h4>");
         }else{
           $('.output').prepend("Accepting new patients: <h4>No</h4>");
         }
         $('.output').prepend("Practice: <h4>" + body.data[i].practices[0].name + "</h4>");
         $('.output').prepend("Doctor name: <h3>Dr. " + body.data[i].profile.first_name + " " + body.data[i].profile.middle_name + " " + body.data[i].profile.last_name +"</h3>");
         $('.output').prepend("<hr><img src='" + body.data[i].profile.image_url + "'><br>");
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
