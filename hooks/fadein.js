export class FadeIn {
	constructor() {
		this.fadeInItems = document.querySelectorAll(".js-fadeIn");
		this.config = {
			root: null,
			rootMargin: "-40% 0px",
			threshold: 0,
		};
	}

	init() {
		this.fadeIn();
	}

	fadeIn() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					let target = entry.target;
					target.classList.add("is-active");
				}
			});
		}, this.config);

		this.fadeInItems.forEach((elem) => {
			observer.observe(elem);
		});
	}
}
