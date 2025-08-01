console.log("Main JS File Linked");


document.getElementById('donation-btn-1').addEventListener('click', function(){
    const amount = document.getElementById('donate-amount-1').value;
    if(isValid(amount)){
        const newDonationAmount = getVal1('donate-amount-1');
        const existingDonation = getVal2('donation-1')
        const availableBalance = getVal2('accountBalance');

        const donatedAmount = existingDonation + newDonationAmount;
        const finalAccountBalance =  availableBalance - newDonationAmount;
        if(newDonationAmount > availableBalance){
            alert("Account Balance is not sufficient");
        }else{
           document.getElementById('accountBalance').innerText = finalAccountBalance; 
           document.getElementById('donation-1').innerText = donatedAmount;
        }
        
    }else{
        alert("Enter numbers");
    }
})