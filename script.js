const API_URL = "https://s8i1b2giva.execute-api.ap-southeast-2.amazonaws.com/submit-form";

// Appointment form
const appointmentForm = document.getElementById("appointmentForm");
const apptStatus = document.getElementById("apptStatus");

appointmentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  apptStatus.textContent = "Submitting...";
  apptStatus.style.color = "#0b5f77";

  const payload = {
    formType: "appointment",
    name: document.getElementById("apptName").value,
    phone: document.getElementById("apptPhone").value,
    department: document.getElementById("apptDept").value,
    preferredDate: document.getElementById("apptDate").value,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      apptStatus.textContent = "✅ Appointment booked successfully! We'll contact you soon.";
      apptStatus.style.color = "green";
      appointmentForm.reset();
    } else {
      apptStatus.textContent = "❌ Something went wrong. Please try again.";
      apptStatus.style.color = "red";
    }
  } catch (err) {
    apptStatus.textContent = "❌ Network error. Please try again.";
    apptStatus.style.color = "red";
  }
});

// Contact form
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  contactStatus.textContent = "Sending...";
  contactStatus.style.color = "#0b5f77";

  const payload = {
    formType: "contact",
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value,
    message: document.getElementById("contactMessage").value,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      contactStatus.textContent = "✅ Message sent successfully! We'll get back to you.";
      contactStatus.style.color = "green";
      contactForm.reset();
    } else {
      contactStatus.textContent = "❌ Something went wrong. Please try again.";
      contactStatus.style.color = "red";
    }
  } catch (err) {
    contactStatus.textContent = "❌ Network error. Please try again.";
    contactStatus.style.color = "red";
  }
});