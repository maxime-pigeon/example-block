export default class ExampleBlock extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		// const details = document.createElement("details");
		// details.innerHTML = this.innerHTML;

		// const summary = document.createElement("summary");
		// summary.textContent = "Exemple";
		// details.prepend(summary);

		// this.shadowRoot.append(details);

		this.style.display = "block";
		this.style.margin = "1rem 0";

		this.shadowRoot.innerHTML = this.innerHTML;
	}
}

customElements.define("example-block", ExampleBlock);
