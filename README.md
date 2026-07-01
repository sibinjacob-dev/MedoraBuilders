# Medora Builders static website

This is a server-free static website. It can be hosted on GitHub Pages, Netlify, Cloudflare Pages, cPanel/shared hosting, or any ordinary web server.

## Preview locally

Open `index.html` directly in a browser, or use any simple static preview extension such as VS Code Live Server.

## Add a portfolio project

1. Copy the new project images into `assets/images/`.
2. Open `assets/js/projects-data.js`.
3. Duplicate an existing project object.
4. Give it a unique `id` and replace the title, details, categories and image paths.

The Projects page, Home featured-project section and Project Details page are generated automatically from that file.

## Contact form

The contact form intentionally uses no server. On submission it opens the visitor's email application with the enquiry filled in. Phone and WhatsApp links work directly.

## Main files

- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `projects.html` — Portfolio
- `project.html?id=...` — Project details
- `contact.html` — Contact
- `assets/css/styles.css` — All styling
- `assets/js/app.js` — Navigation, filters, lightbox and interactions
- `assets/js/projects-data.js` — Editable portfolio content
