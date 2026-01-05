window.onload = function () {
    const encodedMail = window.atob("aW5mb0BjZWxpbmVsb2V0c2NoZXIuY2g=");
    const mail = document.querySelector('#mail');
    mail.innerHTML = encodedMail;
};
function mail() {
    const encodedMail = window.atob("aW5mb0BjZWxpbmVsb2V0c2NoZXIuY2g=");
    document.location.href = "mailto:" + encodedMail;
};