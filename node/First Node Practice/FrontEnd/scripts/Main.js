import { postData } from "./Fetch.js";
let url = "http://127.0.0.1:3001/users";
// Poceo sam da proveravam, da li rade sve metode sa servera... Get radi, post me nesto zeza?
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error));


    ///This 
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3001/users',
        crossDomain: true,
        data: '{"some":"json"}',
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
            var value = responseData.someKey;
        },
        error: function (responseData, textStatus, errorThrown) {
            alert('POST failed.');
        }
    });

    // My own method via fetch that also is not working
// postData(url,{"name" : "aleha"})
//     .then(response => response.json())
//     .then((data)=>console.log("succes"))
//     .catch((error)=>{
//         console.log(error);

//     });


//// Not working post request via the old way ??

    // let request = new XMLHttpRequest;
    // request.open("POST", url);
    // request.setRequestHeader("mode","cors");
    // request.setRequestHeader("credentials","same-origin");
    // request.setRequestHeader("Content-Type", "application/json;charset=UTF-8;" );
    // request.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));



// THis is just a reminder from stackoverflow on how should header look
    // {
    //     method: "post", // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     }