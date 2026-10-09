const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const dark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.textContent = dark ? "\u2600 Light mode" : "\U0001F319 Dark mode";
}

themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});

const photos = [
    { src: "images/1790583042500.jpg", alt: "Entrance of Mulungushi University", caption: "Mulungushi University" },
    { src: "images/IMG_78687c26-0e3e-4fd3-b6dc-ddf5441496a4.webp", alt: "The ICT Center of the University", caption: "ICT Center" },
    { src: "images/Snapchat-301104276.jpg", alt: "Me carrying out one of my hobbies", caption: "Gaming" }
];

let currentPhoto = 0;
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");
const galleryCounter = document.getElementById("gallery-counter");

function showPhoto(index) {
    currentPhoto = (index + photos.length) % photos.length;
    galleryImage.src = photos[currentPhoto].src;
    galleryImage.alt = photos[currentPhoto].alt;
    galleryCaption.textContent = photos[currentPhoto].caption;
    galleryCounter.textContent = "Photo " + (currentPhoto + 1) + " of " + photos.length;
}

document.getElementById("gallery-prev").addEventListener("click", () => showPhoto(currentPhoto - 1));
document.getElementById("gallery-next").addEventListener("click", () => showPhoto(currentPhoto + 1));
showPhoto(0); 

const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const searchInput = document.getElementById("project-search");
const resetButton = document.getElementById("filter-reset");
const filterMessage = document.getElementById("filter-message");

let activeCategory = "all";

function applyFilter() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    projectCards.forEach((card) => {
        const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
        const matchesSearch = card.textContent.toLowerCase().includes(query);
        const show = matchesCategory && matchesSearch;
        card.hidden = !show; 
        if (show) visible += 1;
    });

    if (visible === 0) {
        filterMessage.textContent = "No projects match your filter. Try a different word or press Reset.";
        filterMessage.hidden = false;
    } else {
        filterMessage.hidden = true;
        filterMessage.textContent = "";
    }
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.filter;
        filterButtons.forEach((b) => {
            const isActive = b === button;
            b.classList.toggle("active", isActive);
            b.setAttribute("aria-pressed", String(isActive));
        });
        applyFilter();
    });
});

searchInput.addEventListener("input", applyFilter);

resetButton.addEventListener("click", () => {
    activeCategory = "all";
    searchInput.value = "";
    filterButtons.forEach((b) => {
        const isActive = b.dataset.filter === "all";
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-pressed", String(isActive));
    });
    applyFilter();
});

const form = document.getElementById("contact-form");
const preview = document.getElementById("form-preview");

function setFieldError(fieldId, message) {
    document.getElementById(fieldId + "-error").textContent = message;
    document.getElementById(fieldId).setAttribute("aria-invalid", message ? "true" : "false");
    return message === "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameOk = setFieldError("name", name === "" ? "Please enter your name (spaces only are not allowed)." : "");
    const emailOk = setFieldError("email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email address, e.g. name@example.com." : "");
    const messageOk = setFieldError("message", message === "" ? "Please write a message (spaces only are not allowed)." : "");

    preview.hidden = true; 

    if (nameOk && emailOk && messageOk) {
        const topic = document.getElementById("topic").value;
        const lines = [
            "Your data was validated locally in the browser. No message was sent and nothing was stored.",
            "Name: " + name,
            "Email: " + email,
            "Topic: " + topic,
            "Message: " + message
        ];
        preview.replaceChildren(); 
        lines.forEach((line, index) => {
            const p = document.createElement("p");
            p.textContent = line; 
            if (index === 0) p.className = "preview-success";
            preview.appendChild(p);
        });
        preview.hidden = false;
        form.reset();
    }
});
