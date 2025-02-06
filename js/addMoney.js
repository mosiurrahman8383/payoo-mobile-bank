// step-01: add event handler
document.getElementById('btn-add-money').addEventListener('click',function(event){
    //for prevent reload page
    event.preventDefault();
    console.log('this is nee')

    //step-02: get amount and pin value
    const addMoneyInput = document.getElementById('input-amount').value;
    console.log(addMoneyInput);

    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber)

    //step-03: varify pin number
    if(pinNumber === '1234'){
        console.log('adding you money');

        // step-04: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance)
        console.log(balance)

        const addMoneyNumber = parseFloat(addMoneyInput);

        //step-05: addMoneyInput(addMoneyNumber) with balance(balanceNumber)
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        // setp-06: show the update balance in UI/DOM in display
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        console.log('Failed to add money! Please try again.');
        alert('Failed to add money! Please try again.')

    }

})