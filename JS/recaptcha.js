const form = document.querySelector('form');

const nome = document.getElementById('nome');
console.log(nome)
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.length > 0) {
        throw new Error("Favor ferificar o Captcha");
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);

    Email.send({
        Host : "smtp.gmail.com",
        Username : "form.gse@gmail.com",
        Password : "gse.mailer.2024",
        To : 'form.gse@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    // fetch('http://httpbin.org/post', {
    //     method: "POST",
    //     body: params,
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err))
    
});