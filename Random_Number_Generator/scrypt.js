const sendEmail = require('sendEmail');

function sendCode() {
  const emailAddress = prompt('Enter your email address:');
  const otp = randomNumber();
  sendEmail(emailAddress, otp);
}

function randomNumber(){
    var rNumber = Math.random();
    rNumber = Math.floor(rNumber *9000)+1000;
    let divv = document.getElementById("mainDiv");
    divv.innerHTML = rNumber;
}

function exitBt(){
    document.getElementById("div_box");
    document.getElementById("heading_Main").innerHTML = "Thank you for using This Function";
    // console.log(document.getElementsByClassName("dataR")[1].innerHTML);

    for(var i = 0; i < 5; i++){
        document.getElementsByClassName("dataR")[i].classList.add('visible');
    }
}