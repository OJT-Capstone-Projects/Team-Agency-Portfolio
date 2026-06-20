/* =============================================================
   DevTeam Portfolio  —  contact-theme.js
   Member 2 ownership:
     - Navigation Functionality
     - Theme Toggle  (light / dark)
     - localStorage Integration
     - Contact Form
     - Client-Side Validation
     - Footer
     - Error Handling
   Plain JavaScript only. CPR level. No frameworks.
   ============================================================= */

/* ══════════════════════════════════════════════════
   1. THEME TOGGLE
   Uses: localStorage.setItem / getItem
        classList.add / remove / toggle
        addEventListener — click
══════════════════════════════════════════════════ */

const THEME_KEY = "devteam-theme";

/* Read saved preference or default to "light" */
const savedTheme = localStorage.getItem(THEME_KEY) || "light";

/* Apply theme on page load (before paint flicker) */
const applyTheme = (theme) => {
  try {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    /* Update toggle button icon */
    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.innerText = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      btn.setAttribute("title",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  } catch (err) {
    console.error("Theme apply error:", err.message);
  }
};

applyTheme(savedTheme);

/* Toggle handler — wired after DOM ready */
const initThemeToggle = () => {
  try {
    const btn = document.getElementById("themeToggleBtn");
    if (!btn) throw new Error("Theme toggle button not found in DOM.");

    btn.addEventListener("click", () => {
      try {
        const isDark = document.body.classList.toggle("dark-theme");
        const newTheme = isDark ? "dark" : "light";
        localStorage.setItem(THEME_KEY, newTheme);
        applyTheme(newTheme);
      } catch (err) {
        console.error("Theme toggle error:", err.message);
      }
    });
  } catch (err) {
    console.error("initThemeToggle error:", err.message);
  } finally {
    /* Always run regardless of success/failure */
    applyTheme(localStorage.getItem(THEME_KEY) || "light");
  }
};

/* ══════════════════════════════════════════════════
   2. NAVIGATION — active-link tracking & Contact nav
══════════════════════════════════════════════════ */

const initNavigation = () => {
  try {
    const navLinks = document.querySelectorAll(".nav-link");
    const allSections = document.querySelectorAll("section[id]");

    /* Smooth scroll for all nav links (including new #contact) */
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    /* Active link on scroll */
    const highlightNav = () => {
      const scrollY = window.scrollY;
      allSections.forEach((sec) => {
        const top = sec.offsetTop - 90;
        const bottom = top + sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollY >= top && scrollY < bottom) {
          navLinks.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(`.nav-link[href="#${id}"]`);
          if (active) active.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", highlightNav);
  } catch (err) {
    console.error("Navigation init error:", err.message);
  }
};

/* ══════════════════════════════════════════════════
   3. CONTACT FORM — Validation & Submission
      Fields: name, email, subject, message
      Button: Submit
      Validation: empty + invalid email
      Error handling: try / catch / finally + Error object
══════════════════════════════════════════════════ */

/* ── Validation helpers ── */
const validators = {
  name: {
    validate: (val) => {
      if (!val || val.trim().length === 0) throw new Error("Name cannot be empty.");
      if (val.trim().length < 2)           throw new Error("Name must be at least 2 characters.");
    }
  },
  email: {
    validate: (val) => {
      if (!val || val.trim().length === 0) throw new Error("Email cannot be empty.");
      /* RFC-5322 simplified regex */
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(val.trim())) throw new Error("Please enter a valid email address.");
    }
  },
  subject: {
    validate: (val) => {
      if (!val || val.trim().length === 0) throw new Error("Subject cannot be empty.");
      if (val.trim().length < 3)           throw new Error("Subject must be at least 3 characters.");
    }
  },
  message: {
    validate: (val) => {
      if (!val || val.trim().length === 0) throw new Error("Message cannot be empty.");
      if (val.trim().length < 10)          throw new Error("Message must be at least 10 characters.");
    }
  }
};

/* ── Show / clear field error ── */
const showFieldError = (fieldId, message) => {
  const input = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}Error`);
  if (!input || !errorEl) return;
  input.classList.add("input-error");
  input.classList.remove("input-success");
  errorEl.innerHTML = `<span class="field-error-icon">⚠</span>${message}`;
};

const clearFieldError = (fieldId) => {
  const input = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}Error`);
  if (!input || !errorEl) return;
  input.classList.remove("input-error");
  input.classList.add("input-success");
  errorEl.innerText = "";
};

/* ── Validate single field, returns true if valid ── */
const validateField = (fieldId) => {
  const input = document.getElementById(fieldId);
  if (!input) return false;
  const validator = validators[fieldId];
  if (!validator) return true;

  try {
    validator.validate(input.value);
    clearFieldError(fieldId);
    return true;
  } catch (err) {
    showFieldError(fieldId, err.message);
    return false;
  }
};

/* ── Validate all fields, returns true if all valid ── */
const validateAllFields = () => {
  const fields = ["name", "email", "subject", "message"];
  let allValid = true;

  fields.forEach((fieldId) => {
    const isValid = validateField(fieldId);
    if (!isValid) allValid = false;
  });

  return allValid;
};

/* ── Toast notification ── */
const showToast = (message, type) => {
  try {
    const container = document.getElementById("toastContainer");
    if (!container) throw new Error("Toast container not found.");

    const toast = document.createElement("div");
    toast.classList.add("toast", `toast-${type}`);

    const icon = type === "success" ? "✅" : "❌";
    toast.innerHTML =
      `<span class="toast-icon">${icon}</span>` +
      `<span class="toast-msg">${message}</span>`;

    container.appendChild(toast);

    /* Auto-remove after 4s */
    setTimeout(() => {
      try {
        toast.classList.add("toast-hiding");
        setTimeout(() => {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 320);
      } catch (removeErr) {
        console.error("Toast remove error:", removeErr.message);
      }
    }, 4000);
  } catch (err) {
    console.error("showToast error:", err.message);
  }
};

/* ── Simulate async form submission ── */
const simulateFormSubmit = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* Simulate 95% success rate */
      if (Math.random() > 0.05) {
        resolve({ ok: true, message: "Message sent successfully!" });
      } else {
        reject(new Error("Server error. Please try again."));
      }
    }, 1400);
  });
};

/* ── Collect form data using destructuring ── */
const collectFormData = () => {
  const name    = document.getElementById("name");
  const email   = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  /* ES6 destructuring */
  const { value: nameVal }    = name    || {};
  const { value: emailVal }   = email   || {};
  const { value: subjectVal } = subject || {};
  const { value: msgVal }     = message || {};

  return {
    name:    nameVal    ? nameVal.trim()    : "",
    email:   emailVal   ? emailVal.trim()   : "",
    subject: subjectVal ? subjectVal.trim() : "",
    message: msgVal     ? msgVal.trim()     : ""
  };
};

/* ── Show success state (replaces form body) ── */
const showFormSuccess = (name) => {
  try {
    const formBody    = document.getElementById("contactFormBody");
    const successBanner = document.getElementById("formSuccessBanner");
    const successName   = document.getElementById("successName");

    if (!formBody || !successBanner) throw new Error("Form elements not found.");

    formBody.classList.add("hidden");
    successBanner.classList.add("visible");
    if (successName) successName.innerText = name || "there";
  } catch (err) {
    console.error("showFormSuccess error:", err.message);
  }
};

/* ── Reset form to original state ── */
const resetForm = () => {
  try {
    const form          = document.getElementById("contactForm");
    const formBody      = document.getElementById("contactFormBody");
    const successBanner = document.getElementById("formSuccessBanner");

    if (form)          form.reset();
    if (formBody)      formBody.classList.remove("hidden");
    if (successBanner) successBanner.classList.remove("visible");

    /* Clear all success/error classes */
    const fields = ["name", "email", "subject", "message"];
    fields.forEach((fieldId) => {
      const input = document.getElementById(fieldId);
      const err   = document.getElementById(`${fieldId}Error`);
      if (input) {
        input.classList.remove("input-error", "input-success");
      }
      if (err) err.innerText = "";
    });
  } catch (err) {
    console.error("resetForm error:", err.message);
  }
};

/* ── Wire up real-time validation on input ── */
const initRealTimeValidation = () => {
  const fields = ["name", "email", "subject", "message"];
  fields.forEach((fieldId) => {
    const input = document.getElementById(fieldId);
    if (!input) return;

    /* Validate on input event */
    input.addEventListener("input", () => {
      /* Only show error if field was already touched (has error class) */
      if (input.classList.contains("input-error")) {
        validateField(fieldId);
      }
    });

    /* Validate on change */
    input.addEventListener("change", () => {
      validateField(fieldId);
    });
  });
};

/* ── Contact form submit handler ── */
const initContactForm = () => {
  try {
    const form      = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");

    if (!form)      throw new Error("Contact form not found in DOM.");
    if (!submitBtn) throw new Error("Submit button not found in DOM.");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      /* Run all validations */
      const isValid = validateAllFields();
      if (!isValid) {
        showToast("Please fix the errors before submitting.", "error");
        return;
      }

      /* Collect data */
      const formData = collectFormData();

      /* Show loading state */
      submitBtn.disabled = true;
      submitBtn.classList.add("loading");
      const btnText = submitBtn.querySelector(".submit-btn-text");
      if (btnText) btnText.innerText = "Sending…";

      try {
        await simulateFormSubmit(formData);

        /* Success */
        showFormSuccess(formData.name);
        showToast(`Message sent! We'll get back to you soon, ${formData.name}.`, "success");

      } catch (submitErr) {
        /* Submission error */
        showToast(submitErr.message || "Something went wrong. Please try again.", "error");
        console.error("Form submission error:", submitErr);

      } finally {
        /* Always restore button state */
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        if (btnText) btnText.innerText = "Send Message";
      }
    });

    /* Reset button inside success banner */
    const resetBtn = document.getElementById("successResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        try {
          resetForm();
        } catch (err) {
          console.error("Reset error:", err.message);
        }
      });
    }

    initRealTimeValidation();

  } catch (err) {
    console.error("initContactForm error:", err.message);
  } finally {
    /* Ensure toast container exists */
    if (!document.getElementById("toastContainer")) {
      console.warn("Toast container missing — toasts will not display.");
    }
  }
};

/* ══════════════════════════════════════════════════
   4. INJECT HTML — Theme Toggle Button, Contact
      Section, and Footer Contact link
      All built with DOM methods as required
══════════════════════════════════════════════════ */

/* ── Inject theme toggle button into header ── */
const injectThemeToggle = () => {
  try {
    const headerInner = document.querySelector(".header-inner");
    if (!headerInner) throw new Error(".header-inner not found.");

    const btn = document.createElement("button");
    btn.id = "themeToggleBtn";
    btn.classList.add("theme-toggle-btn");
    btn.setAttribute("aria-label", "Switch to dark theme");
    btn.setAttribute("title", "Switch to dark theme");
    btn.innerText = "🌙";

    /* Insert before the existing "View Projects" button */
    const headerBtn = headerInner.querySelector(".header-btn");
    if (headerBtn) {
      headerInner.insertBefore(btn, headerBtn);
    } else {
      headerInner.appendChild(btn);
    }
  } catch (err) {
    console.error("injectThemeToggle error:", err.message);
  }
};

/* ── Build and inject the full contact section ── */
const injectContactSection = () => {
  try {
    const footer = document.querySelector(".footer");
    if (!footer) throw new Error(".footer element not found.");

    /* Use template literal to build HTML string */
    const sectionHTML = `
<section id="contact" class="contact-section">
  <div class="contact-inner">

    <h2 class="sec-title">Get In Touch</h2>
    <p class="sec-sub">Have a question or want to work together? Drop us a message.</p>

    <div class="contact-grid">

      <!-- Info Panel -->
      <div class="contact-info">
        <div>
          <p class="contact-info-title">Let's start a conversation</p>
          <p class="contact-info-sub">
            We're a team of junior developers eager to collaborate, learn,
            and ship great projects. Whether it's feedback, questions, or
            opportunities — we'd love to hear from you.
          </p>
        </div>

        <div class="contact-item">
          <div class="contact-item-icon">📧</div>
          <div>
            <p class="contact-item-label">Email</p>
            <p class="contact-item-text">devteam@portfolio.dev</p>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-item-icon">💼</div>
          <div>
            <p class="contact-item-label">GitHub</p>
            <p class="contact-item-text">github.com/ojt-capstone-projects</p>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-item-icon">📍</div>
          <div>
            <p class="contact-item-label">Location</p>
            <p class="contact-item-text">Remote — India</p>
          </div>
        </div>

        <div class="contact-socials">
          <a href="https://github.com/tiwarisumitmanoj" target="_blank"
             rel="noopener" class="social-btn">GitHub</a>
          <a href="#" class="social-btn">LinkedIn</a>
          <a href="#" class="social-btn">Twitter / X</a>
        </div>
      </div>

      <!-- Form Card -->
      <div class="contact-form-card">
        <p class="form-title">Send us a message</p>
        <p class="form-subtitle">All fields are required. We respond within 48 hours.</p>

        <form id="contactForm" novalidate>

          <!-- Success Banner (hidden by default) -->
          <div id="formSuccessBanner" class="form-success-banner">
            <div class="success-icon-wrap">🎉</div>
            <p class="success-title">Message sent, <span id="successName"></span>!</p>
            <p class="success-sub">Thanks for reaching out. We'll get back to you within 48 hours.</p>
            <button type="button" id="successResetBtn" class="success-reset-btn">
              Send Another Message
            </button>
          </div>

          <!-- Form Body -->
          <div id="contactFormBody">

            <!-- Name & Email row -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">
                  Name <span class="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  class="form-input"
                  placeholder="Your full name"
                  autocomplete="name"
                />
                <span class="field-error" id="nameError" role="alert" aria-live="polite"></span>
              </div>

              <div class="form-group">
                <label class="form-label" for="email">
                  Email <span class="req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  class="form-input"
                  placeholder="you@example.com"
                  autocomplete="email"
                />
                <span class="field-error" id="emailError" role="alert" aria-live="polite"></span>
              </div>
            </div>

            <!-- Subject -->
            <div class="form-group">
              <label class="form-label" for="subject">
                Subject <span class="req">*</span>
              </label>
              <input
                type="text"
                id="subject"
                class="form-input"
                placeholder="What's this about?"
              />
              <span class="field-error" id="subjectError" role="alert" aria-live="polite"></span>
            </div>

            <!-- Message -->
            <div class="form-group">
              <label class="form-label" for="message">
                Message <span class="req">*</span>
              </label>
              <textarea
                id="message"
                class="form-textarea"
                placeholder="Write your message here…"
                rows="5"
              ></textarea>
              <span class="field-error" id="messageError" role="alert" aria-live="polite"></span>
            </div>

            <!-- Submit -->
            <button type="submit" id="submitBtn" class="submit-btn">
              <span class="submit-spinner"></span>
              <span class="submit-btn-text">Send Message</span>
            </button>

          </div><!-- /contactFormBody -->
        </form>
      </div><!-- /contact-form-card -->
    </div><!-- /contact-grid -->
  </div><!-- /contact-inner -->
</section>`;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = sectionHTML;
    const section = wrapper.firstElementChild;

    /* Insert the section right before the footer */
    footer.parentNode.insertBefore(section, footer);

  } catch (err) {
    console.error("injectContactSection error:", err.message);
  }
};

/* ── Inject toast container ── */
const injectToastContainer = () => {
  try {
    const existing = document.getElementById("toastContainer");
    if (existing) return;

    const container = document.createElement("div");
    container.id = "toastContainer";
    container.classList.add("toast-container");
    container.setAttribute("aria-live", "polite");
    container.setAttribute("aria-atomic", "false");
    document.body.appendChild(container);
  } catch (err) {
    console.error("injectToastContainer error:", err.message);
  }
};

/* ── Add Contact nav link ── */
const injectContactNavLink = () => {
  try {
    const nav = document.querySelector(".header-inner .nav");
    if (!nav) throw new Error(".nav not found in header.");

    /* Check if already added using includes-style find */
    const existing = Array.from(nav.querySelectorAll(".nav-link"))
      .find((link) => link.getAttribute("href") === "#contact");
    if (existing) return;

    const a = document.createElement("a");
    a.href = "#contact";
    a.classList.add("nav-link");
    a.innerText = "Contact";
    nav.appendChild(a);
  } catch (err) {
    console.error("injectContactNavLink error:", err.message);
  }
};

/* ── Add Contact link in footer ── */
const injectFooterContactLink = () => {
  try {
    const footerCols = document.querySelectorAll(".footer-col");
    if (!footerCols.length) throw new Error(".footer-col elements not found.");

    /* Find "Navigate" column using forEach + find pattern */
    const navColArr = [];
    footerCols.forEach((col) => navColArr.push(col));
    const navigateCol = navColArr.find((col) => {
      const h4 = col.querySelector("h4");
      return h4 && h4.innerText.toLowerCase().includes("navigate");
    });

    if (!navigateCol) throw new Error("Navigate footer column not found.");

    /* Avoid duplicates */
    const alreadyExists = Array.from(navigateCol.querySelectorAll("a"))
      .find((a) => a.getAttribute("href") === "#contact");
    if (alreadyExists) return;

    const link = document.createElement("a");
    link.href = "#contact";
    link.innerText = "Contact";
    navigateCol.appendChild(link);
  } catch (err) {
    console.error("injectFooterContactLink error:", err.message);
  }
};

/* ══════════════════════════════════════════════════
   5. INIT — runs after DOM is fully loaded
══════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  try {
    /* Order matters: inject HTML first, then wire up logic */
    injectToastContainer();
    injectThemeToggle();
    injectContactSection();
    injectContactNavLink();
    injectFooterContactLink();

    /* Wire up logic after HTML is in the DOM */
    initThemeToggle();
    initNavigation();
    initContactForm();

    /* Re-apply saved theme (covers any injected dark-theme-aware elements) */
    applyTheme(localStorage.getItem(THEME_KEY) || "light");

  } catch (err) {
    console.error("Initialization error:", err.message);
  } finally {
    console.log("DevTeam Portfolio — contact-theme.js loaded.");
  }
});
