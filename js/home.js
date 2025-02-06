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
    const amountNumber = document.getElementById('input-amount').value;
    console.log(amountNumber);

    //get the pin number provided
    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber)
})