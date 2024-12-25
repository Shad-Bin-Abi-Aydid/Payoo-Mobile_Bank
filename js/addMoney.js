// Add event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const pinNumberInput = document.getElementById('input-pin-number').value;
    const addMoneyInput = document.getElementById('input-add-money').value;

    if(pinNumberInput === 'Aydid@'){
        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to added money! Please try again');
    }

})