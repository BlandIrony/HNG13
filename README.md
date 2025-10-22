# Profile Card Multi-Page Application

A responsive, accessible multi-page web application built with semantic HTML, modern CSS, and vanilla JavaScript. Features a profile card, contact form with validation, and an about page. No build tools or dependencies required.

## Features

- **Multi-Page Navigation** - Seamless navigation between Home, About Me, and Contact pages
- **Semantic HTML5** - Uses proper semantic markup (article, figure, nav, section, form) for better accessibility and SEO
- **Fully Responsive** - Adapts seamlessly from mobile (320px) to desktop (1200px+) screens
- **Accessible** - WCAG compliant with keyboard navigation, focus states, proper ARIA attributes, and form labels
- **Form Validation** - Real-time client-side validation with accessible error messages
- **Dynamic Time Display** - Shows current time in milliseconds, updating every second
- **No Dependencies** - Pure HTML, CSS, and JavaScript—no build tools or package managers needed

## Project Structure

\`\`\`
.
├── index.html      # Home page with profile card
├── about.html      # About Me page with reflective content
├── contact.html    # Contact Us page with validated form
├── styles.css      # Responsive CSS styling for all pages
├── script.js       # Shared JavaScript for time display
├── contact.js      # Form validation logic
└── README.md       # This file
\`\`\`

## Pages Overview

### Home (index.html)
- Profile card with avatar, name, and bio
- Dynamic time display in milliseconds
- Social media links
- Hobbies and dislikes sections

### About Me (about.html)
- Biography section
- Program goals
- Areas of low confidence
- Note to future self
- Additional thoughts

### Contact Us (contact.html)
- Contact form with validation
- Required fields: name, email, subject, message
- Real-time validation feedback
- Success message on valid submission
- Accessible error messages

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (optional, for modifications)
- No installation or build process required

### Running Locally

#### Option 1: Direct File Opening (Easiest)
1. Download or clone the project files
2. Open `index.html` directly in your web browser:
   - **Windows/Mac**: Double-click `index.html`
   - **Linux**: Right-click `index.html` → Open with → Your browser

#### Option 2: Using a Local Server (Recommended)

If you have Python installed:
\`\`\`bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
\`\`\`

Then open `http://localhost:8000` in your browser.

If you have Node.js installed:
\`\`\`bash
# Using npx (comes with npm)
npx http-server
\`\`\`

Then open the URL shown in your terminal (typically `http://localhost:8080`).

If you have Ruby installed:
\`\`\`bash
ruby -run -ehttpd . -p8000
\`\`\`

Then open `http://localhost:8000` in your browser.

#### Option 3: VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Your browser will automatically open the page

## Form Validation Rules

The contact form includes the following validation:

- **Full Name**: Required field
- **Email**: Required and must be a valid email format (name@example.com)
- **Subject**: Required field
- **Message**: Required and must be at least 10 characters long

Validation occurs:
- On blur (when you leave a field)
- On input (after an error is shown)
- On form submission

## Accessibility Features

- Semantic HTML structure for screen readers
- Keyboard navigation support (Tab, Enter, Space)
- Visible focus indicators on all interactive elements
- Proper color contrast ratios (WCAG AA compliant)
- ARIA labels and live regions for dynamic content
- Form labels linked with `for` attribute
- Error messages tied to inputs with `aria-describedby`
- Alt text for images

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Modifying Profile Data
Edit `index.html` to update:
- Avatar image URL
- Name and bio text
- Social media links
- Hobbies and dislikes lists

### Modifying About Content
Edit `about.html` to update:
- Biography text
- Goals and aspirations
- Confidence areas
- Future note
- Additional thoughts

### Styling Changes
Edit `styles.css` to customize:
- Colors and typography
- Spacing and layout
- Responsive breakpoints
- Hover and focus states

### JavaScript Functionality
- Edit `script.js` to modify time display behavior
- Edit `contact.js` to adjust validation rules or error messages

## Testing

The application includes `data-testid` attributes on all major elements for easy testing:

### Home Page
- `test-profile-card` - Main card container
- `test-user-avatar` - Profile image
- `test-user-name` - User name
- `test-user-bio` - Biography text
- `test-user-time` - Time display
- `test-user-social-links` - Social navigation
- `test-user-hobbies` - Hobbies section
- `test-user-dislikes` - Dislikes section

### About Page
- `test-about-page` - Main container
- `test-about-bio` - Biography section
- `test-about-goals` - Goals section
- `test-about-confidence` - Confidence section
- `test-about-future-note` - Future note section
- `test-about-extra` - Extra thoughts section

### Contact Page
- `test-contact-name` - Name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

