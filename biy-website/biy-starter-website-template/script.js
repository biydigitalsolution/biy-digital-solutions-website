const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}


function attachEmailPhoneValidation(form, emailSelector, phoneSelector) {
  const email = form.querySelector(emailSelector);
  const phone = form.querySelector(phoneSelector);

  if (email) {
    const validateEmail = () => {
      const value = email.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      email.setCustomValidity(valid || !value ? "" : "Please enter a valid email address, including @.");
      return valid;
    };
    email.addEventListener("input", validateEmail);
    email.addEventListener("blur", validateEmail);
  }

  if (phone) {
    phone.setAttribute("inputmode", "numeric");
    phone.setAttribute("pattern", "[0-9]{10}");
    phone.setAttribute("maxlength", "10");
    const cleanPhone = () => {
      phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
      const valid = phone.value.length === 0 || /^\d{10}$/.test(phone.value);
      phone.setCustomValidity(valid ? "" : "Please enter a valid 10-digit phone number using numbers only.");
      return valid;
    };
    phone.addEventListener("input", cleanPhone);
    phone.addEventListener("blur", cleanPhone);
  }
}

const demoForm = document.querySelector('.contact-form');
if (demoForm) {
  attachEmailPhoneValidation(demoForm, 'input[name="email"]', 'input[name="phone"]');

  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = demoForm.querySelector('input[name="email"]');
    const phone = demoForm.querySelector('input[name="phone"]');

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      email.setCustomValidity('Please enter a valid email address, including @.');
      email.reportValidity();
      return;
    }

    if (phone && phone.value && !/^\d{10}$/.test(phone.value)) {
      phone.setCustomValidity('Please enter a valid 10-digit phone number using numbers only.');
      phone.reportValidity();
      return;
    }

    if (!demoForm.checkValidity()) {
      demoForm.reportValidity();
      return;
    }

    alert('Demo form submitted. Connect this form to the client intake or automation before launch.');
  });
}
