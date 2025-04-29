document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); //preventing the page from crashing

      alert("Thank you for your message! We will reach back out to you shortly.");
      
      //clearing the form
      form.reset();
    });
  });