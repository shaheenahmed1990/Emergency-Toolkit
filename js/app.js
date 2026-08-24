// ================================
// Emergency Toolkit
// ================================

// Dark mode
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// ================================
// CALCULATOR CARDS
// ================================

document.addEventListener("click", (event) => {

    const card = event.target.closest(".tool-card");

    if (!card) return;

    const title = card.querySelector("strong");

    if (!title) return;

    const name = title.textContent.trim();

    if (name === "GCS") {
        openGCSCalculator();
        return;
    }

    if (name === "NEWS2") {
        openNEWS2Calculator();
        return;
    }

    if (name === "Shock Index") {
        openShockIndexCalculator();
        return;
    }

    if (name === "ABG") {
        openABGCalculator();
        return;
    }

});