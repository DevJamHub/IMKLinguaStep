const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const submitBtn = document.getElementById("submit-btn");

loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    submitBtn.textContent = "Login";
});

signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    submitBtn.textContent = "Sign up";
});
