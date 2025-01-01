// Add event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney =  getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    if(pinNumber == '123'){
        const balance = getTextFieldValueById('account-balance');


        const newBalance = balance + addMoney;
        
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction History

        const p = document.createElement('p');
        p.innerText = `${addMoney} TK. New Balance is ${newBalance}`;

        // added to the transaction history
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to added money! Please try again');
    }

})