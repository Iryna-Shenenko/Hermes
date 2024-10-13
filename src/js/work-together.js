const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-text');
const submBtn = document.querySelector('.contact-btn');



submBtn.addEventListener('submit', getUserInfo);

function getUserInfo (event) {
    event.preventDefault(); 
    const usrSchValue = event.target.elements
    
}