// ====================================================================
    const svg = document.getElementById("svgPath");
    const length = svg.getTotalLength();

    // Start positioning of SVG drawing
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    // Add smooth transition for drawing
    svg.style.transition = "stroke-dashoffset 0.5s ease-out";

    window.addEventListener("scroll", function () {
        const scrollPosition = document.body.scrollTop + document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Calculate scroll percentage
        const scrollpercent = scrollPosition / scrollHeight;

        // Adjust to start from center
        const centerPoint = 0.6; // 50% of scroll (center)
        const offsetRange = 0.25; // Range where it starts and ends smoothly (25%)

        let adjustedScroll = 0;
        if (scrollpercent >= centerPoint - offsetRange && scrollpercent <= centerPoint + offsetRange) {
            adjustedScroll =
                (scrollpercent - (centerPoint - offsetRange)) / (2 * offsetRange);
        } else if (scrollpercent > centerPoint + offsetRange) {
            adjustedScroll = 1;
        }

        // Apply offset to the path
        const draw = length * adjustedScroll;
        svg.style.strokeDashoffset = length - draw;
    });

// ====================================================================
    document.addEventListener("DOMContentLoaded", () => {
        const svgElement = document.querySelector(".squiggle-left path");
        const length = svgElement.getTotalLength();

        // Initial setup of stroke-dasharray and stroke-dashoffset
        svgElement.style.strokeDasharray = length;
        svgElement.style.strokeDashoffset = length;

        // Add smooth transition
        svgElement.style.transition = "stroke-dashoffset 0.5s ease-out";

        window.addEventListener("scroll", () => {
            const scrollPosition = document.body.scrollTop + document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            // Calculate scroll percentage
            const scrollPercent = scrollPosition / scrollHeight;

            // Adjust animation around center point
            const centerPoint = 0.6; // 40% of scroll height
            const offsetRange = 0.25; // 25% range for smooth animation
            let adjustedScroll = 0;

            if (scrollPercent >= centerPoint - offsetRange && scrollPercent <= centerPoint + offsetRange) {
                adjustedScroll =
                    (scrollPercent - (centerPoint - offsetRange)) / (2 * offsetRange);
            } else if (scrollPercent > centerPoint + offsetRange) {
                adjustedScroll = 1;
            }

            // Update stroke-dashoffset for animation
            const draw = length * adjustedScroll;
            svgElement.style.strokeDashoffset = length - draw;
        });
    });

// ====================================================================
    document.addEventListener("DOMContentLoaded", () => {
        const truckBox = document.querySelector(".truck-box");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    truckBox.classList.add("animate"); // Trigger animation
                }
            });
        }, {
            root: null, // Use the viewport as the root
            threshold: 0.5 // Element is visible when 50% of it is in the viewport
        });

        observer.observe(truckBox);
    });
    document.addEventListener("DOMContentLoaded", () => {
        const bicycleBox = document.querySelector(".bicycle-box");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    bicycleBox.classList.add("animate"); // Trigger the animation
                }
            });
        }, {
            root: null, // Use the viewport as the root
            threshold: 0.5 // Element is visible when 50% of it is in the viewport
        });

        observer.observe(bicycleBox);
    });


// ====================================================================
    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".cold-coco-box img, .chutney-box img, .Gopal-logo-box img");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 500); // Stagger animations by 500ms
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.5
        });

        images.forEach((img) => observer.observe(img));
    });
