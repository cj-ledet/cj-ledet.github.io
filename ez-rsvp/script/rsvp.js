// document.querySelector() is used to select an element from the document using its ID

window.addEventListener("load", function () {


    let captchaText = document.querySelector('#captcha');
    var context = captchaText.getContext("2d");


    context.font = "25pt Roboto";
    context.fillStyle = "#ffffff";
    context.textAlign = 'center';

    let userText = document.querySelector('#captchaTextBox');
    let submitButton = document.querySelector('#submitButton');
    let captchaOutput = document.querySelector('#captchaOutput');
    let refreshButton = document.querySelector('#refreshButton');
    let confirmButton = document.querySelector('#confirmButton');

    let alphaNums = [
        // 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        // 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        // '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        // '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='
    ];
    let captcha = [];
    // const captchaLength = randomNumber(5, 7);
    const captchaLength = 10;
    const captchaSpaceFreq = 4;

    refreshCaptcha();

    //
    userText.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) { // Enter key
            submitCaptcha(userText);
        }
    });

    //
    submitButton.addEventListener('click', function () { submitCaptcha(userText) });

    //
    refreshButton.addEventListener('click', refreshCaptcha);

    //
    confirmButton.addEventListener('click', goToConfirm);

    //
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //

    function refreshCaptcha() {
        userText.value = "";
        let refreshArr = [];
        for (let j = 1; j <= captchaLength; j++) {
            refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
            if (j % captchaSpaceFreq == 0) {
                refreshArr.push(' ');
            }
        }
        captcha = refreshArr.join('');
        context.clearRect(0, 0, captchaText.width, captchaText.height);
        let x = captchaText.width / 2;
        let y = captchaText.height / 2;
        context.font = "bold 28px verdana, sans-serif";
        context.fillStyle = "#000000";
        context.fillText(captcha, x, y);

        captchaOutput.innerHTML = "<span>Waiting...</span>";
    }

    let captchaCorrect = false;

    //
    function submitCaptcha(userText) {
        if (userText.value === captcha) {
            captchaOutput.classList.add("correctCaptcha");
            captchaOutput.innerHTML = "<span id=\"correct\">Correct!</span>";
            captchaCorrect = true;
            document.getElementById("confirmButton").style.visibility = "visible";

        } else {
            captchaOutput.classList.add("incorrectCaptcha");
            captchaOutput.innerHTML = "<span id=\"incorrect\">Incorrect, please try again</span>";
        }
    }


    function goToConfirm(){
        if (captchaCorrect){
            window.location.href="rsvp_confirmation.html";
        }
        else{
            captchaOutput.classList.add("incorrectCaptcha");
            captchaOutput.innerHTML = "<span id=\"incorrect\">Please submit captcha</span>";
        }
    }

})