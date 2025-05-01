document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("responseMsg");
    msg.textContent = "Thank you for your message!";
    msg.classList.add("active");
});
  
