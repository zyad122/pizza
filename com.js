const myForm = document.querySelector('form');
const msgDiv = document.getElementById('message');
const formTitle = document.querySelector('h2'); 

myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    myForm.style.display = 'none';
    formTitle.style.display = 'none';
    msgDiv.innerHTML = "<h3>Sent successfully</h3><p>we will contact you within 24 hours</p>";
});