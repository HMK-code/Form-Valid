       //valid-invalid properties
       const control = form => {
        let invalids = form.querySelectorAll(':invalid').length,
        button = form.querySelector('button[type="submit"]')

        console.log(invalids);

        if (invalids === 0){
            button.removeAttribute('disabled');
        } else{
            button.setAttribute('disabled', 'disabled')
        }

    }

    let forms = document.querySelectorAll('form .form-validation');
    forms.forEach(form =>{
        control(form);
        form.addEventListener('keyup' , ()=> control(form))
        form.addEventListener('change' , ()=> control(form))
    })
