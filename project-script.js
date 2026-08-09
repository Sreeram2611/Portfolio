document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active state cleanly from siblings
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedFilter = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const targetCategory = card.getAttribute("data-category");

                if (selectedFilter === "all" || targetCategory === selectedFilter) {
                    card.classList.remove("filter-hide");
                } else {
                    card.classList.add("filter-hide");
                }
            });
        });
    });
});