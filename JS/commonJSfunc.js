function isValid(amount) {
    return /^[0-9]*\.?[0-9]+$/.test(amount) && parseFloat(amount) > 0;
}

function getVal1(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
function getVal2(id){
    const inputValue = parseFloat(document.getElementById(id).innerText);
    return inputValue;
}

function donationUpdate(donateButtonID, donationAmountID, donationSectionID){
    document.getElementById(donateButtonID).addEventListener('click', function(){
    const amount = document.getElementById(donationAmountID).value;
    if(isValid(amount)){
        const newDonationAmount = getVal1(donationAmountID);
        const existingDonation = getVal2(donationSectionID)
        const availableBalance = getVal2('accountBalance');

        const donatedAmount = existingDonation + newDonationAmount;
        const finalAccountBalance =  availableBalance - newDonationAmount;
        if(newDonationAmount > availableBalance){
            alert("Account Balance is not sufficient");
        }else{
           document.getElementById('accountBalance').innerText = finalAccountBalance; 
           document.getElementById(donationSectionID).innerText = donatedAmount;
        }
        
    }else{
        alert("Enter numbers");
    }
})
}