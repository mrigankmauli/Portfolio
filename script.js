const form = document.getElementById("contact-form");
const thankYouMessage = document.getElementById("thank-you");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.style.display = "none";
      if (thankYouMessage) {
        thankYouMessage.style.display = "block";
      }
    } else {
      alert("Oops! Something went wrong.");
    }
  });
}
