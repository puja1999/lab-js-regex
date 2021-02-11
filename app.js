/* Fill your code*/

function formValidate() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var Cpwd = document.getElementById('Cpwd').value;
    var phone = document.getElementById('phone').value;

    var nameCheck = /^[\w]{8,15}$/;
    var addressCheck = /^([a-zA-Z0-9\.]{6,})$/;
    var emailCheck = /^[A-Za-z0-9._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var pwdCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]$/
    var phoneCheck = /^[0-9]{10}$/;

    // check for name
    if (nameCheck.test(name)) {
        document.getElementById('nameErr').innerHTML = " ";
    } else {
        document.getElementById('nameErr').innerHTML = "Atleast 8 to 15 Character Required ";
        return false;
    }

    // check for address
    if (addressCheck.test(address)) {
        document.getElementById('addressErr').innerHTML = " ";
    } else {
        document.getElementById('addressErr').innerHTML = "Kindly fill Address field ";
        return false;
    }

    // check for email
    if (email == "") {
        document.getElementById('emailErr').innerHTML = "Kindly fill the Email field";
        return false;
    } else if (emailCheck.test(email)) {
        document.getElementById('emailErr').innerHTML = " ";
    } else {
        document.getElementById('emailErr').innerHTML = "Enter a valid Email";
        return false;
    }

    // check for password
    if (pwd == "") {
        pwdErr.innerText = "Kindly fill password field";
        return false;
    } else if (pwdCheck.test(pwd)) {
        document.getElementById('pwdErr').innerHTML = " ";
    } else {
        document.getElementById('pwdErr').innerHTML = "password must contain 1 uppercase letter, 1 lowecase <br> letter, atleast 1 number, any Symbols";
        return false;
    }

    // check for confirm password
    if (Cpwd == "") {
        cpwdErr.innerText = "Kindly fill this field";
        return false;
    } else if (Cpwd.match(pwd)) {
        document.getElementById('cpwdErr').innerHTML = " ";
    } else {
        document.getElementById('cpwdErr').innerHTML = "Password and confirm password must be same ";
        return false;
    }

    // check for phone number
    if (phoneCheck.test(phone)) {
        document.getElementById('phoneErr').innerHTML = " ";
    } else {
        document.getElementById('phoneErr').innerHTML = "Kindly fill this field ";
        return false;
    }
  

}

/*function fun() {
    let ele = document.getElementById('status');
    ele.innerHTML += 'Regex Validation Success';
}*/