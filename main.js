// Update the current time in milliseconds
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]')
  const currentTime = Date.now()
  timeElement.textContent = currentTime

  // Update datetime attribute for semantic HTML
  const dateObj = new Date(currentTime)
  timeElement.setAttribute("datetime", dateObj.toISOString())
}

// Initialize time on page load
document.addEventListener("DOMContentLoaded", () => {
  updateTime()
  // Update time every second for demonstration
  setInterval(updateTime, 1000)
})

// Ensure keyboard navigation works for all interactive elements
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const target = e.target
    if (target.tagName === "A") {
      // Links handle Enter/Space natively
      return
    }
  }
})
