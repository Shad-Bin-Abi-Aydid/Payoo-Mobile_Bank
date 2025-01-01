// Add event handler to the out money button inside the form

document.getElementById('btn-out-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const pinNumber = getInputFieldValueById('input-cash-out');  

    const outMoney = getInputFieldValueById('input-out-money');

    if(isNaN(outMoney)){
        alert('Failed to add money');
        return;
    }

    if(pinNumber == '123'){
        const balance = getTextFieldValueById('account-balance');

        if(outMoney > balance){
            alert('You do not have enough Balance to Withdraw');
            return;
        }
        
        const newBalance = balance - outMoney;
        
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history

        const div = document.createElement('div');
        div.classList.add('text-rose-600');

        div.innerHTML = `
        <p>${outMoney} withdraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to Out money! Please try again');
    }

})