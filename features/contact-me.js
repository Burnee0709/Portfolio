import { socialLinks } from "../data-structures/links-data.js";
import { getSocialLinkStructure } from "../utils/structures.js";
import { scrollReveal } from "../utils/scroll-reveal.js";
const socialsContainer = document.querySelector("#contact-me .socials");
const submitbutton = document.querySelector("#contact-me button");

export const setupContactMe = () => {
  socialLinks.map((link) => {
    const socialLink = getSocialLinkStructure(link);
    socialsContainer.appendChild(socialLink);
  });
  form.addEventListener("submit", sendEmail);
  animations();
};

const sendEmail = async (e) => {
  e.preventDefault();
  submitbutton.disabled = true;
  submitbutton.textContent = "Sending...";
  try {
    await emailjs.sendForm(
      "service_72coaz7",
      "template_ab2gyy4",
      "#form",
      "hptaIgyyH2KLzXyUf"
    );
    alert("✅ Message sent successfully");
  } catch (error) {
    alert("❌ Message not sent (service error)");
  } finally {
    submitbutton.disabled = false;
    submitbutton.textContent = "Send Message";
    form.reset();
  }
};
const animations = () => {
  scrollReveal.reveal("#contact-me h2", {
    origin: "top",
    delay: 300,
  });

  scrollReveal.reveal("#contact-me .content form", {
    origin: "left",
    delay: 400,
  });

  scrollReveal.reveal("#contact-me .content .info", {
    origin: "right",
    delay: 400,
  });
};
