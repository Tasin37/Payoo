// Add Money
document.getElementById('btn-addMoney').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;

    if (inputPin=='1234'){
        console.log('Adding money to your account');
        const balance = document.getElementById('balance').innerText;
        const addMoneyNum = parseFloat(inputAmount);
        const balanceNum = parseFloat(balance);
        const newbalance = addMoneyNum + balanceNum;
        console.log(newbalance);
        document.getElementById('balance').innerText = newbalance;
    }
    else{
        alert('Failed to add money!! Please try again.');
    }
});