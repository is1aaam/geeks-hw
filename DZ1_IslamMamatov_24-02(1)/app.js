function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const showPasswordCheckbox = document.getElementById("show-password");

    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
      confirmPasswordInput.type = "text";
    } else {
      passwordInput.type = "password";
      confirmPasswordInput.type = "password";
    }
  }

  function validateForm(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    // Проверка email
    if (!emailInput.checkValidity()) {
      emailError.innerText = "Проверьте правильность заполнения пароля!";
    } else {
      emailError.innerText = "";
    }

    // Проверка пароля
    if (!passwordInput.checkValidity()) {
      passwordError.innerText = "Пароль должен содержать не менее 8 символов, включая как минимум одну заглавную букву, одну строчную букву и одну цифру..!";
    } else {
      passwordError.innerText = "";
    }

    // Проверка подтверждения пароля
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.innerText = "Пароли не совпадают";
    } else {
      confirmPasswordError.innerText = "";
    }

    // Если ошибок нет
    if (emailInput.checkValidity() && passwordInput.checkValidity() && confirmPasswordInput.value === passwordInput.value) {
      document.querySelector("form").submit();
    }
  }

