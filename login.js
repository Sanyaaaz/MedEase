function openForm() {
    document.getElementById("formModal").style.display = "flex";
}

function closeForm() {
    document.getElementById("formModal").style.display = "none";
}

function showSignUp() {
    document.getElementById("signUpForm").classList.remove("hidden");
    document.getElementById("signInForm").classList.add("hidden");
    document.getElementById("signUpTab").classList.add("active");
    document.getElementById("signInTab").classList.remove("active");
}

function showSignIn() {
    document.getElementById("signUpForm").classList.add("hidden");
    document.getElementById("signInForm").classList.remove("hidden");
    document.getElementById("signInTab").classList.add("active");
    document.getElementById("signUpTab").classList.remove("active");
}

// Close modal when clicked outside
window.onclick = function(event) {
    if (event.target === document.getElementById("formModal")) {
        closeForm();
    }
};
