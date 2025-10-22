document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm")
  const nameInput = document.querySelector('[data-testid="test-contact-name"]')
  const emailInput = document.querySelector('[data-testid="test-contact-email"]')
  const subjectInput = document.querySelector('[data-testid="test-contact-subject"]')
  const messageInput = document.querySelector('[data-testid="test-contact-message"]')
  const successMessage = document.querySelector('[data-testid="test-contact-success"]')

  const nameError = document.querySelector('[data-testid="test-contact-error-name"]')
  const emailError = document.querySelector('[data-testid="test-contact-error-email"]')
  const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]')
  const messageError = document.querySelector('[data-testid="test-contact-error-message"]')

  function validateName() {
    const value = nameInput.value.trim()
    if (value === "") {
      showError(nameInput, nameError, "Full name is required")
      return false
    }
    clearError(nameInput, nameError)
    return true
  }

  function validateEmail() {
    const value = emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (value === "") {
      showError(emailInput, emailError, "Email is required")
      return false
    }
    if (!emailRegex.test(value)) {
      showError(emailInput, emailError, "Please enter a valid email address")
      return false
    }
    clearError(emailInput, emailError)
    return true
  }

  function validateSubject() {
    const value = subjectInput.value.trim()
    if (value === "") {
      showError(subjectInput, subjectError, "Subject is required")
      return false
    }
    clearError(subjectInput, subjectError)
    return true
  }

  function validateMessage() {
    const value = messageInput.value.trim()
    if (value === "") {
      showError(messageInput, messageError, "Message is required")
      return false
    }
    if (value.length < 10) {
      showError(messageInput, messageError, "Message must be at least 10 characters long")
      return false
    }
    clearError(messageInput, messageError)
    return true
  }

  function showError(input, errorElement, message) {
    input.classList.add("error")
    errorElement.textContent = message
    input.setAttribute("aria-invalid", "true")
  }

  function clearError(input, errorElement) {
    input.classList.remove("error")
    errorElement.textContent = ""
    input.setAttribute("aria-invalid", "false")
  }

  nameInput.addEventListener("blur", validateName)
  emailInput.addEventListener("blur", validateEmail)
  subjectInput.addEventListener("blur", validateSubject)
  messageInput.addEventListener("blur", validateMessage)

  // Clear error on input
  nameInput.addEventListener("input", () => {
    if (nameInput.classList.contains("error")) {
      validateName()
    }
  })

  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("error")) {
      validateEmail()
    }
  })

  subjectInput.addEventListener("input", () => {
    if (subjectInput.classList.contains("error")) {
      validateSubject()
    }
  })

  messageInput.addEventListener("input", () => {
    if (messageInput.classList.contains("error")) {
      validateMessage()
    }
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    successMessage.style.display = "none"

    const isNameValid = validateName()
    const isEmailValid = validateEmail()
    const isSubjectValid = validateSubject()
    const isMessageValid = validateMessage()

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      form.reset()

      clearError(nameInput, nameError)
      clearError(emailInput, emailError)
      clearError(subjectInput, subjectError)
      clearError(messageInput, messageError)

      successMessage.style.display = "block"

      successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" })

      setTimeout(() => {
        successMessage.style.display = "none"
      }, 5000)
    } else {
      if (!isNameValid) {
        nameInput.focus()
      } else if (!isEmailValid) {
        emailInput.focus()
      } else if (!isSubjectValid) {
        subjectInput.focus()
      } else if (!isMessageValid) {
        messageInput.focus()
      }
    }
  })
})
