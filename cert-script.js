document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const certCards = document.querySelectorAll(".cert-card");

    // Dynamic Badge Counter Assignment
    const updateCounters = () => {
        let total = certCards.length;
        let securityCount = 0;
        let developmentCount = 0;
        let academicCount = 0;

        certCards.forEach(card => {
            const cat = card.getAttribute("data-category");
            if (cat === "security") securityCount++;
            if (cat === "development") developmentCount++;
            if (cat === "academic") academicCount++;
        });

        document.querySelector('[data-filter="all"] .count').textContent = total;
        document.querySelector('[data-filter="security"] .count').textContent = securityCount;
        document.querySelector('[data-filter="development"] .count').textContent = developmentCount;
        document.querySelector('[data-filter="academic"] .count').textContent = academicCount;
    };

    // Filter Logic Handling
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active classes cleanly
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const currentFilter = button.getAttribute("data-filter");

            certCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (currentFilter === "all" || cardCategory === currentFilter) {
                    card.classList.remove("hidden-item");
                } else {
                    card.classList.add("hidden-item");
                }
            });
        });
    });

    // Run counters instantiation initially
    updateCounters();
});