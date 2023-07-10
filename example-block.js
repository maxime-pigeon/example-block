export default class ExampleBlock extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		const name = this.getAttribute("name") || "Exemple";

		this.style.display = "block";
		this.style.margin = "1rem 0";

		const style = this.querySelector("style");
		if (style) style.remove();

		const details = document.createElement("details");
		details.innerHTML = this.innerHTML;

		const summary = document.createElement("summary");
		summary.textContent = name;
		summary.style.cursor = "pointer";
		details.prepend(summary);

		const adjacentToSummary = details.querySelector("summary + *");
		adjacentToSummary.style.marginTop = "1rem";

		if (style) this.shadowRoot.append(style);
		this.shadowRoot.append(details);
	}
}

customElements.define("example-block", ExampleBlock);
