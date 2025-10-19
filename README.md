# Profile Card Component

A responsive, accessible profile card component built with semantic HTML, modern CSS, and vanilla JavaScript. No build tools or dependencies required.

## Features

- **Semantic HTML5** - Uses proper semantic markup (article, figure, nav, section) for better accessibility and SEO
- **Fully Responsive** - Adapts seamlessly from mobile (320px) to desktop (1200px+) screens
- **Accessible** - WCAG compliant with keyboard navigation, focus states, and proper ARIA attributes
- **Dynamic Time Display** - Shows current time in milliseconds, updating every second
- **No Dependencies** - Pure HTML, CSS, and JavaScript—no build tools or package managers needed
- **Social Links** - Integrated social media navigation with keyboard support
- **Interactive Elements** - Hobbies and dislikes sections with proper semantic structure

## Project Structure

\`\`\`
.
├── index.html      # Main HTML file with semantic markup
├── styles.css      # Responsive CSS styling
├── main.js       # Vanilla JavaScript for dynamic functionality
└── README.md       # This file
\`\`\`

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

#### Option 2: VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Your browser will automatically open the page

## Usage

The component displays:
- **Avatar** - Profile image with proper alt text
- **Name** - User's full name
- **Bio** - Brief description
- **Current Time** - Updates every second in milliseconds
- **Social Links** - Navigation to social media profiles
- **Hobbies** - List of interests
- **Dislikes** - List of things the user dislikes

All elements are fully keyboard accessible and include proper focus indicators.

## Accessibility Features

- Semantic HTML structure for screen readers
- Keyboard navigation support (Tab, Enter, Space)
- Visible focus indicators on all interactive elements
- Proper color contrast ratios (WCAG AA compliant)
- ARIA labels where appropriate
- Alt text for images

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Modifying Profile Data
Edit the HTML in `index.html` to update:
- Avatar image URL
- Name and bio text
- Social media links
- Hobbies and dislikes lists

### Styling Changes
Edit `styles.css` to customize:
- Colors and typography
- Spacing and layout
- Responsive breakpoints
- Hover and focus states

### JavaScript Functionality
Edit `main.js` to modify:
- Time update interval
- Time display format
- Any other dynamic behavior

## Testing

The component includes `data-testid` attributes on all major elements for easy testing:
- `data-testid="profile-card"` - Main card container
- `data-testid="avatar"` - Profile image
- `data-testid="name"` - User name
- `data-testid="bio"` - Biography text
- `data-testid="current-time"` - Time display
- `data-testid="social-links"` - Social navigation
- `data-testid="hobbies"` - Hobbies section
- `data-testid="dislikes"` - Dislikes section
