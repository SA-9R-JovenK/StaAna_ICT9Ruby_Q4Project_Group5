
let username =localStorage.getItem("username");

let email =localStorage.getItem("email");

let password =localStorage.getItem("password");

document.getElementById("display-user").innerText = username || "Jonathan Makabebe";
document.getElementById("cred-user").innerText = username || "No Username";
document.getElementById("cred-email").innerText = email || "No Email";
document.getElementById("cred-pass").innerText = password || "No Password";


const upload = document.getElementById("profile-upload");
const profilePic = document.getElementById("profile-pic");

const savedImage = localStorage.getItem("profilePic");

if (savedImage) {
    profilePic.src = savedImage;
}

upload.addEventListener("change", function () {

    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = function (e) {
        profilePic.src = e.target.result;
        localStorage.setItem("profilePic", e.target.result);
    };
    reader.readAsDataURL(file);
});
