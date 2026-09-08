const roleElement = document.querySelector("#hero-role");
const sections = document.querySelectorAll("main > section:not(#home)");
const backToTopButton = document.querySelector("#back-to-top");
const welcomeOverlay = document.querySelector("#welcome-overlay");

const roles = [
    "Computer Science Student",
    "Web Developer",
    "Python & Django Developer",
    "Cybersecurity Enthusiast"
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    roleElement.textContent = isDeleting
        ? currentRole.slice(0, characterIndex - 1)
        : currentRole.slice(0, characterIndex + 1);

    characterIndex += isDeleting ? -1 : 1;

    let typingDelay = isDeleting ? 45 : 85;

    if (!isDeleting && characterIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 1800;
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 350;
    }

    window.setTimeout(typeRole, typingDelay);
}

function revealSections() {
    const observer = new IntersectionObserver(
        (entries, sectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    sectionObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    sections.forEach((section) => {
        section.classList.add("reveal-section");
        observer.observe(section);
    });
}

function updateBackToTopVisibility() {
    const shouldShowButton = window.scrollY > 500;
    backToTopButton.classList.toggle("is-visible", shouldShowButton);
    backToTopButton.setAttribute("aria-hidden", String(!shouldShowButton));
    backToTopButton.tabIndex = shouldShowButton ? 0 : -1;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showWelcomeOverlay() {
    document.body.classList.add("welcome-active");

    window.setTimeout(() => {
        welcomeOverlay.classList.add("is-hidden");
    }, 4400);

    window.setTimeout(() => {
        document.body.classList.remove("welcome-active");
    }, 5000);
}

roleElement.textContent = "";
if (prefersReducedMotion) {
    roleElement.textContent = roles[0];
} else {
    typeRole();
}
showWelcomeOverlay();
revealSections();
updateBackToTopVisibility();

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
backToTopButton.addEventListener("click", scrollToTop);
