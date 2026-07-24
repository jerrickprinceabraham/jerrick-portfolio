/*
	==================================================
	1) DYNAMIC FOOTER YEAR
	--------------------------------------------------
	This sets the current year automatically so the
	footer stays up to date every year.
	==================================================
*/
const yearElement = document.getElementById("year");
if (yearElement) {
	yearElement.textContent = new Date().getFullYear();
}

/*
	If a user prefers reduced motion in system settings,
	we avoid extra animation effects for better comfort.
*/
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/*
	==================================================
	2) SMOOTH SCROLL FOR INTERNAL LINKS
	--------------------------------------------------
	When a user clicks links like #about or #skills,
	the page scrolls smoothly to that section.
	==================================================
*/
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		const targetId = link.getAttribute("href");

		// Ignore invalid or empty hash links.
		if (!targetId || targetId === "#") {
			return;
		}

		const targetSection = document.querySelector(targetId);

		// If target exists on page, prevent default jump and smooth scroll instead.
		if (targetSection) {
			event.preventDefault();
			targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	});
});

/*
	==================================================
	3) FADE-IN ANIMATION ON SCROLL
	--------------------------------------------------
	We observe sections and add "visible" when they
	come into view. CSS handles the animation style.
	==================================================
*/
const fadeSections = document.querySelectorAll(".fade-section");

if (prefersReducedMotion) {
	// Show all sections immediately when user prefers less animation.
	fadeSections.forEach((section) => section.classList.add("visible"));
} else {
	const fadeObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");

					// Once shown, we stop observing that section.
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.2,
		}
	);

	fadeSections.forEach((section) => {
		fadeObserver.observe(section);
	});
}

/*
	==================================================
	4) ACTIVE NAVIGATION HIGHLIGHTING
	--------------------------------------------------
	This highlights the nav link of the section that is
	currently visible in the viewport.
	==================================================
*/
const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("main section[id]");

const navObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const activeId = entry.target.getAttribute("id");

				navLinks.forEach((navLink) => {
					navLink.classList.remove("active");

					if (navLink.getAttribute("href") === `#${activeId}`) {
						navLink.classList.add("active");
					}
				});
			}
		});
	},
	{
		threshold: 0.45,
	}
);

pageSections.forEach((section) => {
	navObserver.observe(section);
});

/*
	==================================================
	5) BACK-TO-TOP BUTTON
	--------------------------------------------------
	The button appears after scrolling down. When clicked,
	it takes the user back to the top smoothly.
	==================================================
*/
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
	if (!backToTopButton) {
		return;
	}

	const shouldShow = window.scrollY > 300;
	backToTopButton.classList.toggle("show", shouldShow);
});

if (backToTopButton) {
	backToTopButton.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}
