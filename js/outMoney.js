// Add event handler to the out money button inside the form

document.getElementById('btn-out-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const pinNumberInput = document.getElementById('input-cash-out').value;
    const outMoneyInput = document.getElementById('input-out-money').value;

    if(pinNumberInput === 'Aydid@'){
        const balance = document.getElementById('account-balance').innerText;
        const outMoneyNumber = parseFloat(outMoneyInput);
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - outMoneyNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Out money! Please try again');
    }

})