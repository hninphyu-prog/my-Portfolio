emailjs.init({
    publicKey: "74zuOyIKyqhqQQ-oP"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_gyyax3k",
        "template_amsb4qj",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
    });
});
function changeLanguage(lang){

    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(element => {

        element.textContent = element.getAttribute("data-" + lang);

    });


    const inputs = document.querySelectorAll("input[data-en]");

    inputs.forEach(input => {

        input.value = input.getAttribute("data-" + lang);

    });

}