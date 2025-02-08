

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('this is a js file');

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href = '/payoo-mobile-bank/home.html'
    }
    else{
        alert('You are give wrong pin or number')
    }

})
