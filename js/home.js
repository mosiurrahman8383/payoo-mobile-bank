//add money to the account
/**
 * s-1: add event handlar
 * prevent page reload after form submit
 * s-2: get money to be added to the account balance
 */


//step-01: add an event handler  to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){

    //prevent page reload after form submit
    event.preventDefault();

    //step-02: get money to be added to the account
    const addMoneyInput = document.getElementById('input-amount').value;
    console.log(addMoneyInput);

    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin').value;
    console.log(pinNumberInput);

    //varify pin number
    //wrong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        //step-04: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        //atep-05: addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        //step-06: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        console.log('Failed to add money! Please try again.');
        alert('Failed to add money! Please try again.')
    }
})