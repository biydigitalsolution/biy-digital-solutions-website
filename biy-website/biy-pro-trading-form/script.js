const form = document.getElementById("proForm");
const steps = [...document.querySelectorAll(".form-step")];
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");
const progressPercent = document.getElementById("progressPercent");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const successPanel = document.getElementById("successPanel");
const resetButton = document.getElementById("resetButton");
const experience = document.getElementById("experience");
const advancedStrategyField = document.getElementById("advancedStrategyField");
const reviewPanel = document.getElementById("reviewPanel");

let currentStep = 1;

function setError(element, message) {
  element.classList.add("invalid");
  const error = element.closest(".field")?.querySelector(".error");
  if (error) error.textContent = message;
}

function clearError(element) {
  element.classList.remove("invalid");
  const error = element.closest(".field")?.querySelector(".error");
  if (error) error.textContent = "";
}

function updateStep() {
  steps.forEach(step => step.classList.toggle("active", Number(step.dataset.step) === currentStep));
  const percent = currentStep * 25;
  progressFill.style.width = `${percent}%`;
  progressLabel.textContent = `Step ${currentStep} of 4`;
  progressPercent.textContent = `${percent}%`;
  backButton.hidden = currentStep === 1;
  nextButton.hidden = currentStep === 4;
  submitButton.hidden = currentStep !== 4;
  if (currentStep === 4) buildReview();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function validateCurrentStep() {
  let valid = true;
  const activeStep = steps.find(step => Number(step.dataset.step) === currentStep);
  activeStep.querySelectorAll("input[required], select[required], textarea[required]").forEach(field => {
    if (field.type === "radio" || field.type === "checkbox") return;
    clearError(field);
    if (!field.value.trim()) {
      setError(field, "This field is required.");
      valid = false;
    }
  });

  if (currentStep === 1) {
    const email = document.getElementById("email");
    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      setError(email, "Enter a valid email address.");
      valid = false;
    }

    const phone = document.getElementById("phone");
    const digits = phone.value.replace(/\D/g, "");
    if (phone.value && digits.length !== 10) {
      setError(phone, "Enter a valid 10-digit phone number.");
      valid = false;
    }
  }

  if (currentStep === 2) {
    const frequency = document.querySelector('input[name="frequency"]:checked');
    document.getElementById("frequencyError").textContent = frequency ? "" : "Select a trading frequency.";
    if (!frequency) valid = false;
  }

  if (currentStep === 3) {
    const risk = document.querySelector('input[name="riskComfort"]:checked');
    document.getElementById("riskError").textContent = risk ? "" : "Select your risk comfort.";
    if (!risk) valid = false;
  }

  if (currentStep === 4) {
    const consent = document.getElementById("consent");
    document.getElementById("consentError").textContent = consent.checked ? "" : "Please confirm the demo disclaimer.";
    if (!consent.checked) valid = false;
  }

  return valid;
}

function getValue(name) {
  const radio = document.querySelector(`input[name="${name}"]:checked`);
  if (radio) return radio.value;
  const field = document.querySelector(`[name="${name}"]`);
  return field?.value?.trim() || "Not provided";
}

function buildReview() {
  const items = [
    ["Client", getValue("fullName")],
    ["Company", getValue("companyName")],
    ["Email", getValue("email")],
    ["Phone", getValue("phone")],
    ["Preferred contact", getValue("preferredContact")],
    ["Experience", getValue("experience")],
    ["Market interest", getValue("marketInterest")],
    ["Trading frequency", getValue("frequency")],
    ["Primary goal", getValue("primaryGoal")],
    ["Timeline", getValue("timeline")],
    ["Risk comfort", getValue("riskComfort")],
    ["Current challenge", getValue("challenge")],
    ["Desired outcome", getValue("desiredOutcome")]
  ];

  if (!advancedStrategyField.hidden && getValue("advancedStrategy") !== "Not provided") {
    items.push(["Current strategy", getValue("advancedStrategy")]);
  }

  reviewPanel.innerHTML = items.map(([label, value]) => `
    <article class="review-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;
  currentStep += 1;
  updateStep();
});

backButton.addEventListener("click", () => {
  currentStep -= 1;
  updateStep();
});

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!validateCurrentStep()) return;
  form.hidden = true;
  successPanel.hidden = false;
  successPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

resetButton.addEventListener("click", () => {
  form.reset();
  document.querySelectorAll(".error").forEach(item => item.textContent = "");
  document.querySelectorAll(".invalid").forEach(item => item.classList.remove("invalid"));
  advancedStrategyField.hidden = true;
  currentStep = 1;
  successPanel.hidden = true;
  form.hidden = false;
  updateStep();
});

experience.addEventListener("change", () => {
  advancedStrategyField.hidden = !["intermediate", "advanced"].includes(experience.value);
});

document.querySelectorAll("input, select, textarea").forEach(field => {
  field.addEventListener("input", () => clearError(field));
  field.addEventListener("change", () => clearError(field));
});

function bindCounter(fieldId, counterId, max) {
  const field = document.getElementById(fieldId);
  const counter = document.getElementById(counterId);
  field.addEventListener("input", () => {
    counter.textContent = `${field.value.length} / ${max}`;
  });
}

bindCounter("advancedStrategy", "strategyCount", 500);
bindCounter("challenge", "challengeCount", 750);
bindCounter("desiredOutcome", "outcomeCount", 750);

updateStep();
