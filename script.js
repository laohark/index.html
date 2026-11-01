
function checkPassword() {
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const loginScreen = document.getElementById("login-screen");
    const websiteContent = document.getElementById("website-content");

    if (passwordInput.value.trim() === "12345") {
        loginScreen.style.display = "none";
        websiteContent.style.display = "block";
    } else {
        errorMessage.textContent = "Wrong Password! Try Again ❤️";
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = "5s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000);
