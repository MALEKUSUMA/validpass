function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  
  // Example usage:
  const email = "example@example.com";
  if (isEmailValid(email)) {
    console.log("Email is valid");
  } else {
    console.log("Email is not valid");
  }
  function isPasswordValid(password) {
    // Check for minimum length (e.g., at least 8 characters)
    if (password.length < 8) {
      return false;
    }
  
    // Check for at least one uppercase letter, one lowercase letter, and one digit
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
  
    if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password)) {
      return false;
    }
  
    // Additional checks, like special characters, can be added as needed
    const specialCharacterRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
  
    if (!specialCharacterRegex.test(password)) {
      return false;
    }
  
    return true;
  }
  
  // Example usage:
  const password = "Password123!";
  if (isPasswordValid(password)) {
    console.log("Password is valid");
  } else {
    console.log("Password is not valid");
  }
    