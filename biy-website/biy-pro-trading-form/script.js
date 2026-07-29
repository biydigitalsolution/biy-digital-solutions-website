const form = document.getElementById('tradingIntake');
const steps = [...document.querySelectorAll('.form-step')];
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');
const progressBar = document.getElementById('progressBar');
const stepLabel = document.getElementById('stepLabel');
const progressPercent = document.getElementById('progressPercent');
const formError = document.getElementById('formError');
const successModal = document.getElementById('successModal');
let currentStep = 0;

function updateStep() {
  steps.forEach((step, index) => step.classList.toggle('active', index === currentStep));
  const percent = Math.round(((currentStep + 1) / steps.length) * 100);
  progressBar.style.width = `${percent}%`;
  stepLabel.textContent = `Step ${currentStep + 1} of ${steps.length}`;
  progressPercent.textContent = `${percent}%`;
  prevBtn.style.visibility = currentStep === 0 ? 'hidden' : 'visible';
  nextBtn.classList.toggle('hidden', currentStep === steps.length - 1);
  submitBtn.classList.toggle('hidden', currentStep !== steps.length - 1);
  formError.textContent = '';
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

function checkedCount(name) {
  return form.querySelectorAll(`input[name="${name}"]:checked`).length;
}

function validateCurrentStep() {
  const step = steps[currentStep];
  const requiredFields = [...step.querySelectorAll('[required]')];

  for (const field of requiredFields) {
    if (field.type === 'radio') {
      if (!step.querySelector(`input[name="${field.name}"]:checked`)) {
        formError.textContent = 'Please complete all required questions before continuing.';
        return false;
      }
    } else if (field.type === 'checkbox') {
      if (!field.checked) {
        formError.textContent = 'Please complete all required questions before continuing.';
        return false;
      }
    } else if (!field.value.trim()) {
      field.focus();
      formError.textContent = 'Please complete all required questions before continuing.';
      return false;
    }
  }

  if (currentStep === 1 && checkedCount('markets') === 0) {
    formError.textContent = 'Please select at least one market.';
    return false;
  }

  if (currentStep === 2 && checkedCount('goals') === 0) {
    formError.textContent = 'Please select at least one goal.';
    return false;
  }

  return true;
}

nextBtn.addEventListener('click', () => {
  if (!validateCurrentStep()) return;
  if (currentStep < steps.length - 1) {
    currentStep += 1;
    updateStep();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep -= 1;
    updateStep();
  }
});

function showConditional(name, value, targetId) {
  const selected = form.querySelector(`input[name="${name}"]:checked`);
  document.getElementById(targetId).classList.toggle('show', selected?.value === value);
}

form.addEventListener('change', (event) => {
  if (event.target.name === 'hasPlan') {
    showConditional('hasPlan', 'Yes', 'planYes');
    showConditional('hasPlan', 'No', 'planNo');
  }
  if (event.target.name === 'usesJournal') {
    showConditional('usesJournal', 'Yes', 'journalYes');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateCurrentStep()) return;
  const firstName = form.elements.firstName.value.trim() || 'there';
  document.getElementById('clientName').textContent = firstName;
  successModal.classList.add('open');
  successModal.setAttribute('aria-hidden', 'false');
});

document.getElementById('resetForm').addEventListener('click', () => {
  form.reset();
  currentStep = 0;
  ['planYes','planNo','journalYes'].forEach(id => document.getElementById(id).classList.remove('show'));
  successModal.classList.remove('open');
  successModal.setAttribute('aria-hidden', 'true');
  updateStep();
});

successModal.addEventListener('click', event => {
  if (event.target === successModal) {
    successModal.classList.remove('open');
    successModal.setAttribute('aria-hidden', 'true');
  }
});

updateStep();
