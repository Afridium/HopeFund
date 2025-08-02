console.log("Main JS File Linked");

donationUpdate('donation-btn-1','donate-amount-1','donation-1');
donationUpdate('donation-btn-2','donate-amount-2','donation-2');
donationUpdate('donation-btn-3','donate-amount-3','donation-3');

const toggleButtonPage = document.getElementById('donation-page-button');
const toggleButtonHistory = document.getElementById('donation-history-button');
const donationPage = document.getElementById('donation-page');
const historyPage = document.getElementById('transaction-history')

document.getElementById('donation-page-button').addEventListener('click', function(){
    toggleButtonHistory.classList.remove('btn-active');
    toggleButtonHistory.classList.add('btn-primary');
    historyPage.classList.add('hidden');
    toggleButtonPage.classList.remove('btn-primary');
    toggleButtonPage.classList.add('btn-active');
    donationPage.classList.remove('hidden');

})
document.getElementById('donation-history-button').addEventListener('click', function(){
    toggleButtonPage.classList.remove('btn-active');
    toggleButtonPage.classList.add('btn-primary');
    donationPage.classList.add('hidden');
    toggleButtonHistory.classList.remove('btn-primary');
    toggleButtonHistory.classList.add('btn-active');
    historyPage.classList.remove('hidden');

})

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href ="./blog.html";
})

document.getElementById('modal-close-btn').addEventListener('click', function(){
    document.getElementById('modal-container').classList.add('hidden');
});