document.querySelector('#formBox').addEventListener('submit', myFunction);

var contactList = JSON.parse(localStorage.getItem('contactList')) || [];

function myFunction() {
    event.preventDefault();
    var mobileObj = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        role: document.querySelector("#role").value,
        
    };
    contactList.push(mobileObj);
    localStorage.setItem('contactList', JSON.stringify(contactList));
    alert('Contact added successfully');
}