const form = document.querySelector('form');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');
// const inputs = document.getElementsByClassName('form')




function sendEmail() {

    const emailBody = 
        `Nome: ${nome.value}<br>
        Email: ${email.value}<br>
        Assunto: ${assunto.value}<br>
        Mensagem: ${mensagem.value}`;

    Email.send({
        SecureToken : "28a8777e-0b48-4f71-869c-a2eaaa1c72fe",
        To : 'form.gse@gmail.com',
        From : "form.gse@gmail.com",
        Subject : assunto.value,
        Body : emailBody
    }).then(
      message => alert(message)
    );

}

// function checkInputs() {
//     for (const input of inputs) {
//         if (input.value == "") {
//             input.classList.add("error")
//         }
//         input.addEventListener('keyup', () => {
//             if (input.value != "") {
//                 input.classList.remove("error")
//             }
//         })
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.length > 0) {
        alert("Favor ferificar o Captcha")
        throw new Error("Favor ferificar o Captcha");
    }
    // checkInputs()
    sendEmail()
    form.reset()
    // console.log('foi')

    // const fd = new FormData(e.target);
    // const params = new URLSearchParams(fd);
});