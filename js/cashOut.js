document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('this is a cash out form')

    const cashOutAmount = document.getElementById('input-cash-out').value;
    console.log(cashOutAmount);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOutPin);

    if(cashOutPin === '1234'){
        console.log('Reducing your amount');

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        console.log(typeof balanceNumber);

        const cashOutNumber = parseFloat(cashOutAmount);

        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to cash out! Please try again.')
    }
})