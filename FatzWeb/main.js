const inputEl = document.querySelector('#email');
const textError = document.querySelector('.error-input');


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    

    const email = inputEl.value;
   let elArroba = email.indexOf("@");
   
    const mailll = email.slice(elArroba);

    console.log(email);

    if(mailll != "@gmail.com"){
        textError.style.color = 'red';
        textError.innerText = 'por favor provee un email valido';

   }else{
       textError.style.color = 'green';
       textError.innerText = 'Gracias por suscribirte.';

       var templateParams = {
        from_name: "Nuevo cliente",
        to_name: "Sarut",
        message: "Registrar nueva cliente",
        from_email: email,
        subject: "tal_vez",
     };

     emailjs.send('gmail','template_9lzcim5', templateParams)
     .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

   }

});



 
     


