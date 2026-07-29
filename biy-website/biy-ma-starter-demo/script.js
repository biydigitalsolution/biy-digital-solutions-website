const API_URL = "https://biy-intake-api-dhe6fpergre7bjfy.centralus-01.azurewebsites.net/api/submit_ma_demo";

const form = document.getElementById("demoForm");
const companyName = document.getElementById("companyName");
const acquisitionName = document.getElementById("acquisitionName");
const fileInput = document.getElementById("csvFile");
const chooseFile = document.getElementById("chooseFile");
const dropZone = document.getElementById("dropZone");
const fileName = document.getElementById("fileName");
const fileError = document.getElementById("fileError");
const processingPanel = document.getElementById("processingPanel");
const processingTitle = document.getElementById("processingTitle");
const processingText = document.getElementById("processingText");
const resultsPanel = document.getElementById("resultsPanel");
const resultUsers = document.getElementById("resultUsers");
const runAgain = document.getElementById("runAgain");
const steps = [...document.querySelectorAll(".step")];

let selectedFile = null;

function setSelectedFile(file) {
  selectedFile = file || null;
  fileName.textContent = selectedFile ? selectedFile.name : "No file selected";
  fileError.textContent = "";
}

chooseFile.addEventListener("click", (event) => {
  event.stopPropagation();
  fileInput.click();
});

dropZone.addEventListener("click", (event) => {
  if (event.target !== chooseFile) fileInput.click();
});

dropZone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    fileInput.click();
  }
});

["dragenter", "dragover"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add("dragover");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.remove("dragover");
  });
});

dropZone.addEventListener("drop", (event) => {
  const file = event.dataTransfer?.files?.[0] || null;
  setSelectedFile(file);
});

fileInput.addEventListener("change", () => {
  setSelectedFile(fileInput.files[0] || null);
});

function setStep(number) {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index + 1 === number);
    step.classList.toggle("complete", index + 1 < number);
  });
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function countCsvUsers(text) {
  const clean = text.replace(/\r/g, "").trim();
  const lines = clean.split("\n").filter((line) => line.trim().length > 0);
  return Math.max(lines.length - 1, 0);
}

function validateFields() {
  let valid = true;

  document.querySelectorAll(".field input").forEach((input) => {
    const error = input.parentElement.querySelector(".error");
    error.textContent = input.value.trim() ? "" : "This field is required.";
    if (!input.value.trim()) valid = false;
  });

  if (!selectedFile) {
    fileError.textContent = "Choose a CSV file.";
    valid = false;
  } else if (!selectedFile.name.toLowerCase().endsWith(".csv")) {
    fileError.textContent = "The uploaded file must be a CSV file.";
    valid = false;
  } else {
    fileError.textContent = "";
  }

  return valid;
}

async function submitDemo(totalUsers) {
  const formData = new FormData();
  formData.append("companyName", companyName.value.trim());
  formData.append("acquisitionName", acquisitionName.value.trim());
  formData.append("file", selectedFile, selectedFile.name);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  let result = {};
  try {
    result = await response.json();
  } catch {
    result = {};
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "The M&A demo could not be started.");
  }

  resultUsers.textContent = totalUsers;
  return result;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!validateFields()) return;

  const csvText = await selectedFile.text();
  const totalUsers = countCsvUsers(csvText);

  if (totalUsers < 1) {
    fileError.textContent = "The CSV must contain a header row and at least one user.";
    return;
  }

  form.hidden = true;
  processingPanel.hidden = false;
  setStep(2);
  processingTitle.textContent = "Validating the uploaded file...";
  processingText.textContent = "Checking the CSV format and required structure.";

  try {
    await wait(500);
    setStep(3);
    processingTitle.textContent = "Counting employee records...";
    processingText.textContent = `Found ${totalUsers} user records in the CSV.`;

    await wait(500);
    setStep(4);
    processingTitle.textContent = "Sending the request securely...";
    processingText.textContent = "Uploading the CSV to the BIY M&A demo environment.";

    const result = await submitDemo(totalUsers);

    setStep(5);
    processingTitle.textContent = "Starting the automation...";
    processingText.textContent = "SharePoint received the file and Power Automate is processing the request.";

    await wait(900);
    setStep(6);
    processingPanel.hidden = true;
    resultsPanel.hidden = false;

    const statusValue = document.getElementById("resultStatus");
    const fileValue = document.getElementById("resultFile");
    if (statusValue) statusValue.textContent = result.status || "Queued";
    if (fileValue) fileValue.textContent = result.fileName || selectedFile.name;

    resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    processingPanel.hidden = true;
    form.hidden = false;
    fileError.textContent = error.message || "The M&A demo could not be started. Please try again.";
    setStep(1);
  }
});

runAgain.addEventListener("click", () => {
  form.reset();
  selectedFile = null;
  fileName.textContent = "No file selected";
  fileError.textContent = "";
  resultsPanel.hidden = true;
  processingPanel.hidden = true;
  form.hidden = false;
  setStep(1);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
