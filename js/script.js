document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Change background after scrolling 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("search-bar");
    const seasonFilter = document.getElementById("season-filter");
    const sortFilter = document.getElementById("sort-filter");
    const podcastList = document.getElementById("podcast-list");
    const podcastItems = document.querySelectorAll(".podcast-item-wrapper");

    // Filter by season
    seasonFilter.addEventListener("change", function() {
        const selectedSeason = seasonFilter.value;
        podcastItems.forEach(item => {
            if (selectedSeason === "all" || item.getAttribute("data-season") === selectedSeason) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Search functionality
    searchBar.addEventListener("input", function() {
        const query = searchBar.value.toLowerCase();
        podcastItems.forEach(item => {
            const title = item.querySelector(".podcast-title").textContent.toLowerCase();
            const description = item.querySelector(".podcast-description").textContent.toLowerCase();
            if (title.includes(query) || description.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Sort functionality
    sortFilter.addEventListener("change", function() {
        const sortOption = sortFilter.value;
        const sortedItems = Array.from(podcastItems).sort((a, b) => {
            const dateA = new Date(a.getAttribute("data-date"));
            const dateB = new Date(b.getAttribute("data-date"));

            if (sortOption === "latest") {
                return dateB - dateA; // Latest on the top
            } else {
                return dateA - dateB; // First post on the top
            }
        });

        // Clear existing items
        podcastList.innerHTML = "";

        // Append sorted items
        sortedItems.forEach(item => {
            podcastList.appendChild(item);
        });
    });
});





// JavaScript for Animated Counter
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.stat-number');
    let started = false;

    function animateCounter(counter) {
        let startValue = 0;
        const endValue = parseInt(counter.getAttribute('data-number'), 10);
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / endValue));

        const updateCounter = () => {
            startValue += 1;
            counter.textContent = startValue;
            if (startValue < endValue) {
                setTimeout(updateCounter, stepTime);
            } else {
                counter.textContent = endValue;
            }
        };

        updateCounter();
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                started = true; // Ensures the animation only starts once
                observer.disconnect(); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
