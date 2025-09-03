// Cash out
document.getElementById('btn-cashOut').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-out-amount').value;
    const inputPin = document.getElementById('input-out-pin').value;

    if (inputPin=='1234'){
        console.log('Reducing money from your account');
        const balance = document.getElementById('balance').innerText;
        const reduceMoneyNum = parseFloat(inputAmount);
        const balanceNum = parseFloat(balance);
        const newbalance = balanceNum - reduceMoneyNum;
        console.log(newbalance);
        document.getElementById('balance').innerText = newbalance;

        // adding in transaction history
        const p = document.createElement('p');
        p.innerText = `Reduced: ${reduceMoneyNum} Tk. New Balance: ${newbalance}`;

        document.getElementById('transaction-history').appendChild(p);
    }
    else{
        alert('Failed to cash out!! Please try again.');
    }
});