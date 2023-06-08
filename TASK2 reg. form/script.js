const formElement = document.querySelector('.form');
const information = document.querySelector('.info');
formElement.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("city").value;

    const html =`STUDENT DETAILS<br><br>
    Student Name : ${name}<br>
    Student Email : ${email}<br>
    Student Mobile : ${mobile}<br>
    Student Address : ${address}<br>`;
    information.insertAdjacentHTML('afterbegin',html);
    document.querySelector('form').onsubmit = e =>{
        e.target.reset();
    };
});