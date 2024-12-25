document.getElementById('button-login').addEventListener('click', function (event){
    event.preventDefault();

    const phoneNumber =  document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(phoneNumber === '07341009647' && pinNumber === 'Aydid@'){
        console.log('You are logged in');
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong Phone Number or Pin');
    }
})