console.log("Main JS File Linked");

donationUpdate('donation-btn-1','donate-amount-1','donation-1');
donationUpdate('donation-btn-2','donate-amount-2','donation-2');
donationUpdate('donation-btn-3','donate-amount-3','donation-3');


document.getElementById('donation-page-button').addEventListener('click', function(){
    document.getElementById('donation-history-button').classList.remove('btn-active');
    document.getElementById('donation-history-button').classList.add('btn-primary');
    document.getElementById('donation-page-button').classList.remove('btn-primary');
    document.getElementById('donation-page-button').classList.add('btn-active');

})
document.getElementById('donation-history-button').addEventListener('click', function(){
    document.getElementById('donation-page-button').classList.remove('btn-active');
    document.getElementById('donation-page-button').classList.add('btn-primary');
    document.getElementById('donation-history-button').classList.remove('btn-primary');
    document.getElementById('donation-history-button').classList.add('btn-active');

})