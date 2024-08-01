const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const interest = document.getElementById("interest").value;

    // Basic validation - you can add more robust checks here
    if (name.trim() === "" || email.trim() === "" || interest === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Send the form data (using AJAX or a similar method)
    // Here's a simplified example using `console.log` for demonstration:
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Interest:", interest);

    // After successful submission:
    contactForm.reset(); // Reset the form
    alert("Thank you for your message!");
});