(function () {
  "use strict";

  const page = document.body.dataset.page || "";
  const projects = window.MEDORA_PROJECTS || [];

  const icon = (name) => {
    const icons = {
      arrow:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
      chevron:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
      menu:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
      close:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
      instagram:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',
      facebook:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg>'
    };
    return icons[name] || "";
  };

  function renderShell() {
    const header = document.querySelector("[data-site-header]");
    const footer = document.querySelector("[data-site-footer]");

    if (header) {
      const links = [
        ["Home", "index.html", "home"],
        ["About", "about.html", "about"],
        ["Services", "services.html", "services"],
        ["Projects", "projects.html", "projects"],
        ["Real Estate", "real-estate.html", "real-estate"],
        ["Contact", "contact.html", "contact"]
      ];

      header.innerHTML = `
        <header class="site-header" id="site-header">
          <div class="container nav-wrap">
            <a class="brand" href="index.html" aria-label="Medora Builders home">
              <img src="assets/images/medora-logo.png" alt="Medora Builders" width="211" height="50">
            </a>
            <nav class="desktop-nav" aria-label="Primary navigation">
              ${links
                .map(
                  ([label, href, key]) =>
                    `<a href="${href}" ${page === key ? 'class="active" aria-current="page"' : ""}>${label}</a>`
                )
                .join("")}
            </nav>
            <a class="nav-cta" href="contact.html">Start a project ${icon("arrow")}</a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
              ${icon("menu")}
            </button>
          </div>
          <div class="mobile-menu" id="mobile-menu">
            <nav aria-label="Mobile navigation">
              ${links
                .map(
                  ([label, href, key], index) =>
                    `<a href="${href}" ${page === key ? 'class="active" aria-current="page"' : ""}><span>0${index + 1}</span>${label}</a>`
                )
                .join("")}
              <a class="button button-primary" href="contact.html">Get a consultation ${icon("arrow")}</a>
            </nav>
          </div>
        </header>`;
    }

    if (footer) {
      footer.innerHTML = `
        <footer class="site-footer">
          <div class="container">
            <div class="footer-top">
              <div class="footer-brand">
                <img src="assets/images/medora-logo.png" alt="Medora Builders" width="253" height="60">
                <p>Quality construction, practical design and dependable site execution for homes and commercial spaces in Kerala.</p>
              </div>
              <div class="footer-column">
                <h3>Explore</h3>
                <a href="about.html">Our studio</a>
                <a href="services.html">Expertise</a>
                <a href="projects.html">Selected work</a>
                <a href="real-estate.html">Real estate</a>
                <a href="contact.html">Contact</a>
              </div>
              <div class="footer-column">
                <h3>Contact</h3>
                <a href="tel:+919447782094">+91 94477 82094</a>
                <a href="tel:+919447462720">+91 94474 62720</a>
                <a href="https://wa.me/918590784022" target="_blank" rel="noopener">WhatsApp: +91 85907 84022</a>
                <a href="mailto:info@medorabuilders.com">info@medorabuilders.com</a>
                <a href="https://medorabuilders.com/" target="_blank" rel="noopener">www.medorabuilders.com</a>
              </div>
              <div class="footer-column footer-news">
                <h3>Social</h3>
                <p>Tell us what you’re planning. We’ll help shape the right design, budget and construction path.</p>
                <a href="https://www.instagram.com/medora_builders/" target="_blank" rel="noopener">Instagram</a>
                <a href="https://www.facebook.com/Medora.Builders/" target="_blank" rel="noopener">Facebook</a>
                <a class="text-link light" href="contact.html">Book a consultation ${icon("arrow")}</a>
              </div>
            </div>
            <div class="footer-bottom">
              <p>© ${new Date().getFullYear()} Medora Builders. All rights reserved.</p>
              <p>Designing Spaces. Building Dreams.</p>
            </div>
          </div>
        </footer>
        <a class="whatsapp-float" href="https://wa.me/918590784022?text=Hello%20Medora%20Builders%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener" aria-label="Chat with Medora Builders on WhatsApp">
          <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.05 3A12.8 12.8 0 0 0 5 22.24L3.3 29l6.93-1.62A12.9 12.9 0 1 0 16.05 3Zm0 23.4a10.5 10.5 0 0 1-5.35-1.46l-.38-.22-4.11.96 1-4-.25-.4a10.5 10.5 0 1 1 9.09 5.12Zm5.76-7.85c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.19.21-.37.24-.69.08-1.86-.93-3.08-1.66-4.31-3.77-.33-.57.33-.53.94-1.76.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.25-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.08-1.11 2.63s1.14 3.06 1.29 3.27c.16.21 2.23 3.4 5.4 4.77 2 .86 2.78.93 3.78.78 1.21-.18 1.87-1.08 2.13-2.13.26-1.05.26-1.95.18-2.13-.08-.19-.29-.27-.61-.43Z"/></svg>
        </a>`;
    }
  }

  function initNavigation() {
    const header = document.getElementById("site-header");
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".mobile-menu");

    const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      toggle.innerHTML = icon(open ? "menu" : "close");
      menu?.classList.toggle("open", !open);
      header?.classList.toggle("menu-active", !open);
      document.body.classList.toggle("menu-open", !open);
    });
  }

  function revealOnScroll() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );
    items.forEach((item) => observer.observe(item));
  }

  function projectCard(project, featured = false) {
    return `
      <article class="project-card ${featured ? "featured-card" : ""}" data-project-category="${project.categories.join(" ")}" data-reveal>
        <a class="project-image" href="project.html?id=${project.id}" aria-label="View ${project.title}">
          <img src="${project.image}" alt="${project.title}, ${project.location}" loading="lazy">
          <span class="project-index">${project.year}</span>
          <span class="project-arrow">${icon("arrow")}</span>
        </a>
        <div class="project-copy">
          <div>
            <p class="eyebrow">${project.style} · ${project.location}</p>
            <h3><a href="project.html?id=${project.id}">${project.title}</a></h3>
          </div>
          <p>${project.summary}</p>
        </div>
      </article>`;
  }

  function renderProjects() {
    const featuredGrid = document.querySelector("[data-featured-projects]");
    const portfolioGrid = document.querySelector("[data-project-grid]");

    if (featuredGrid) {
      featuredGrid.innerHTML = projects.slice(0, 2).map((project, index) => projectCard(project, index === 0)).join("");
    }

    if (portfolioGrid) {
      portfolioGrid.innerHTML = projects.map((project) => projectCard(project)).join("");
      const filters = document.querySelectorAll("[data-filter]");
      filters.forEach((button) => {
        button.addEventListener("click", () => {
          filters.forEach((item) => item.classList.remove("active"));
          button.classList.add("active");
          const filter = button.dataset.filter;
          portfolioGrid.querySelectorAll(".project-card").forEach((card) => {
            const matches = filter === "All" || card.dataset.projectCategory.split(" ").includes(filter);
            card.hidden = !matches;
          });
        });
      });
    }
  }

  function renderProjectDetail() {
    const mount = document.querySelector("[data-project-detail]");
    if (!mount) return;

    const params = new URLSearchParams(window.location.search);
    const selected = projects.find((project) => project.id === params.get("id")) || projects[0];
    document.title = `${selected.title} | Medora Builders`;

    mount.innerHTML = `
      <section class="project-detail-hero">
        <div class="project-detail-image">
          <img src="${selected.image}" alt="${selected.title}">
        </div>
        <div class="container project-detail-heading">
          <a class="back-link" href="projects.html">← All projects</a>
          <p class="eyebrow light">${selected.style} · ${selected.location}</p>
          <h1>${selected.title}</h1>
        </div>
      </section>
      <section class="section project-overview">
        <div class="container detail-grid">
          <div data-reveal>
            <p class="section-kicker">The project</p>
            <h2>A home designed around place, light and everyday life.</h2>
          </div>
          <div data-reveal>
            <p class="large-copy">${selected.description}</p>
            <div class="project-facts">
              <div><span>Location</span><strong>${selected.location}</strong></div>
              <div><span>Architectural style</span><strong>${selected.style}</strong></div>
              <div><span>Built-up area</span><strong>${selected.area}</strong></div>
              <div><span>Current status</span><strong>${selected.status}</strong></div>
            </div>
          </div>
        </div>
      </section>
      <section class="section gallery-section">
        <div class="container">
          <div class="section-heading inline-heading" data-reveal>
            <div><p class="section-kicker">Work gallery</p><h2>Project gallery</h2></div>
            <p>Explore the architecture, finish and material character through selected project images.</p>
          </div>
          <div class="project-gallery">
            ${selected.gallery
              .map(
                (image, index) => `
                  <button class="gallery-item gallery-item-${index + 1}" data-lightbox="${image}" aria-label="Open project image ${index + 1}" data-reveal>
                    <img src="${image}" alt="${selected.title} view ${index + 1}" loading="lazy">
                    <span>View image</span>
                  </button>`
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section detail-cta">
        <div class="container" data-reveal>
          <p class="section-kicker light">Have a site in mind?</p>
          <h2>Let’s shape a home that feels unmistakably yours.</h2>
          <a class="button button-light" href="contact.html?project=${encodeURIComponent(selected.title)}">Enquire about a project ${icon("arrow")}</a>
        </div>
      </section>`;
  }

  function initLightbox() {
    const triggers = document.querySelectorAll("[data-lightbox]");
    if (!triggers.length) return;
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close image">${icon("close")}</button>
      <img src="" alt="Expanded project view">`;
    document.body.appendChild(lightbox);

    const close = () => {
      lightbox.classList.remove("open");
      document.body.classList.remove("lightbox-open");
    };
    triggers.forEach((trigger) =>
      trigger.addEventListener("click", () => {
        lightbox.querySelector("img").src = trigger.dataset.lightbox;
        lightbox.classList.add("open");
        document.body.classList.add("lightbox-open");
      })
    );
    lightbox.querySelector("button").addEventListener("click", close);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const queryProject = new URLSearchParams(window.location.search).get("project");
    if (queryProject && form.elements.project) form.elements.project.value = queryProject;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`Project enquiry from ${data.get("name")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nProject type: ${data.get("project")}\n\nMessage:\n${data.get("message")}`
      );
      window.location.href = `mailto:info@medorabuilders.com?subject=${subject}&body=${body}`;
      const note = form.querySelector(".form-note");
      if (note) note.textContent = "Your email application is opening with the enquiry prepared.";
    });
  }

  function initWhatsAppVisibility() {
    const button = document.querySelector(".whatsapp-float");
    if (!button) return;

    const update = () => {
      const mobile = window.matchMedia("(max-width: 1024px)").matches;
      button.classList.toggle("is-visible", !mobile || window.scrollY > 120);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function initCounters() {
    document.querySelectorAll("[data-count]").forEach((element) => {
      const target = Number(element.dataset.count);
      let started = false;
      const run = () => {
        if (started) return;
        started = true;
        const start = performance.now();
        const duration = 1200;
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          element.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      });
      observer.observe(element);
    });
  }

  renderShell();
  renderProjects();
  renderProjectDetail();
  initNavigation();
  revealOnScroll();
  initLightbox();
  initContactForm();
  initCounters();
  initWhatsAppVisibility();
})();
