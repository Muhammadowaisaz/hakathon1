
btn.addEventListener('click', function () {


    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let password = document.getElementById('password').value;

    let btn = document.getElementById('btn');



    if (name === "" || email === "" || password === "") {

        alert('Please Enter Data')

        window.history.location.href='index.html'

    }else{


        localStorage.setItem('userName', name);


localStorage.setItem('userEmail', email);



localStorage.setItem('userPass', password);

localStorage.setItem('login' , true);


window.location.href='login.html' ;

window.history.forward()

// alert('Account Succefully Created');

    }





});