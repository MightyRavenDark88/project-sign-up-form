
const phoneNumberInput = document.getElementById('phone-num');

phoneNumberInput.addEventListener('input', function(event) {
    const input = event.target.value.replace(/\D/g, '');
    const formattedInput = formatPhoneNumber(input);
    event.target.value = formattedInput;
});

function formatPhoneNumber(input) {
    const regex = /^(\d{3})(\d{3})(\d{4})$/;
    const groups = regex.exec(input);
    if (groups) {
        return `${groups[1]}-${groups[2]}-${groups[3]}`;
    }
    return input;
}


const passwordGroup = document.getElementById('password-group'),
    passwordInput = document.getElementById ('password'),
    confirmPasswordInput = document.getElementById('password-confirm'),
    phoneNumber = document.getElementById('phone-num'),
    email = document.getElementById('email'),
    firstName = document.getElementById('first-name'),
    lastName = document.getElementById('last-name'),
    submitButton = document.getElementById('submit-button'),
    errorText = document.createElement("span");
    errorText.textContent = "* Passwords do not match";
    errorText.style.color = "red";

let errorAppended = false;

function checkValid(event){

    event.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!phoneNumber.validity.valid){
        phoneNumber.classList.add('error')
    }
    else{
        phoneNumber.classList.remove('error')
    }
    if (!email.validity.valid){
        email.classList.add('error')
    }
    else{
        email.classList.remove('error')
    }
    if (!firstName.validity.valid){
        firstName.classList.add('error')
    }
    else{
        firstName.classList.remove('error')
    }
    if (!lastName.validity.valid){
        lastName.classList.add('error')
    }
    else{
        lastName.classList.remove('error')
    }
    if (password !== confirmPassword) {
        
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');
        if(!errorAppended){    
            passwordGroup.appendChild(errorText);
            errorAppended = true;
        }
    } else {
        
        passwordInput.classList.remove('error');
        confirmPasswordInput.classList.remove('error');
        if(errorAppended){    
            passwordGroup.removeChild(errorText);
            errorAppended = false;
        }
    }
}
submitButton.addEventListener('click', checkValid);