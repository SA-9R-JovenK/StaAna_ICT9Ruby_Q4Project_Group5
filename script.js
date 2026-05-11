function login() {

    let username =document.getElementById("username").value.trim();
    let email =document.getElementById("email").value.trim();
    let password =document.getElementById("password").value.trim();
    if (
        username === "" ||
        email === "" ||
        password === ""
    ) {
    showMessage("⚠ Please fill in all fields.","warning");return false;
    }
    if (username.length < 3) {
    showMessage("❌ Username must be at least 3 characters.","error");return false;
    }
    let emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage("❌ Invalid email format.","error" );return false;
    }
    if (password.length < 6) {
        showMessage( "⚠ Password must be at least 6 characters.", "warning");
        return false;
    }
    showMessage("✅ Login Successful. Redirecting...","success"
    );
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setTimeout(() => { window.location.href = "index2.html";
    }, 1000);
    return false;
}
function showMessage(text, type) {
    let box = document.getElementById("form-message");
    box.style.display = "block";
    box.className = "form-message " + type;
    box.innerHTML = text;
}
function toggleImagePopup() {
    let popup =
        document.getElementById("imagePopup");
    popup.classList.toggle("active");
}
window.onclick = function(event) {
    let popup =
        document.getElementById("imagePopup");
    if (event.target === popup) {
        popup.classList.remove("active");
    }
}