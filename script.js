
function showMessage() {

    document.getElementById("message").innerHTML =
        "You are my favourite person. ❤️ " +
        "Thank you for being part of my beautiful memories. 💕";

}
   
// Floating Hearts Animation

function createHeart() {

    const container = document.getElementById("hearts-container");

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 1000);
function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "12345") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("website-content").style.display = "block";
    } else {
        document.getElementById("error-message").innerHTML =
            "Wrong Password! Try Again ❤️";
    }
}