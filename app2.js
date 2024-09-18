let passlogin = document.getElementById('userPassLogin');

let emaillogin = document.getElementById('userEmailLogin');



let btnn = document.getElementById('btnn');

let passwordGet = localStorage.getItem('userPass');

let emailGet = localStorage.getItem('userEmail')

let loginGet = localStorage.getItem('login');

btnn.addEventListener('click', function(){

    if( emaillogin.value === emailGet && passlogin.value === passwordGet){

        alert('you login');

//                 if( loginGet == true){

window.location.href='dashboard.html'

window.history.forward()

//                 }else{

            // window.location.href='index.html'
//                 }

       

    }else{

        alert('Inccorect Data')
    }

});
