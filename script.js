
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // Username validation
        if (usernameInput.value.trim().length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long.';
            usernameError.style.display = 'block';
            usernameInput.classList.add('invalid');
            isValid = false;
        } else {
            usernameError.style.display = 'none';
            usernameInput.classList.remove('invalid');
        }

        // Email validation
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('invalid');
        }

        // Password validation
        if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            passwordError.style.display = 'block';
            passwordInput.classList.add('invalid');
            isValid = false;
        } else {
            passwordError.style.display = 'none';
            passwordInput.classList.remove('invalid');
        }

        // Confirm password validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            confirmPasswordError.style.display = 'block';
            confirmPasswordInput.classList.add('invalid');
            isValid = false;
        } else {
            confirmPasswordError.style.display = 'none';
            confirmPasswordInput.classList.remove('invalid');
        }

        // If form is valid, simulate form submission (e.g., alert or redirect)
        if (isValid) {
            alert('Form submitted successfully!');
            // Uncomment the next line to actually submit the form
            // form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
