
document.forms['myform'].onsubmit = function(){

    let firstName = document.forms["myform"]["firstName"].value;
    let lastName = document.forms["myform"]["lastName"].value;
    let email = document.getElementById('mail')
    let phone = document.getElementById('phoneNr');
    let streetAddress = document.forms["myform"]["streetAddress"].value;
    let zip = document.getElementById('zipCode');
    let city = document.forms["myform"]["city"].value;

    let emailLookUp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //  let streetLookUp = \n# $&:\n\t; // Kalle Gatan, Helsingborg, Skåne, 25225, SE
    let zipLookUp = /^(\d{5})?$/;

    if (firstName == "") {
        document.getElementById('sfirstname').innerHTML = "You need to enter a First Name";
        event.preventDefault();
        return false;
    }

    if (lastName == "") {
        document.getElementById('slastname').innerHTML = "You need to enter a Last Name";
        event.preventDefault();
        return false;
    }

    if (!email.value.match(emailLookUp) || email.value.length === 0) {
        document.getElementById('semail').innerHTML = "Wrong email format, type again.";
        event.preventDefault();
        return false;
    }

    if (streetAddress == "") {
        document.getElementById('sstreetaddress').innerHTML = "You need to enter a Address";
        event.preventDefault();
        return false;
    }

        if (!zip.value.match(zipLookUp) || zip.value.length !== 5) {
        document.getElementById('szipcode').innerHTML = "Must be 5 digit";
        event.preventDefault();
        return false;
    }

    if (city == "") {
        document.getElementById('scity').innerHTML = "You need to enter a City";
        event.preventDefault();
        return false;
    }

};



// Name


/*
// Email
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

*/
