document.getElementById('btn-cash-out-primary').addEventListener('click',function(){
    document.getElementById('form-cash-out').classList.remove('hidden');
    document.getElementById('form-add-money').classList.add('hidden')
})

document.getElementById('btn-add-money-primary').addEventListener('click',function(){
    document.getElementById('form-add-money').classList.remove('hidden');
    document.getElementById('form-cash-out').classList.add('hidden')
})