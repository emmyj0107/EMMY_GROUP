document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const response = document.getElementById("contactResponse");

    console.log("Contact script loaded"); // CHECK IF JS IS WORKING

    if (!form) {
        console.log("Form not found");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("Form submitted"); // DEBUG CHECK

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            response.style.color = "red";
            response.innerText = "Please fill all fields.";
            return;
        }

        let messages = JSON.parse(localStorage.getItem("messages")) || [];

        messages.push({
            name,
            email,
            subject,
            message,
            time: new Date().toLocaleString()
        });

        localStorage.setItem("messages", JSON.stringify(messages));

        response.style.color = "green";
        response.innerText = "Message sent successfully!";

        form.reset();
    });

});