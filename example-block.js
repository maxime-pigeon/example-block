export default class ExampleBlock extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		const name = this.getAttribute("name") || "Exemple";

		this.style.display = "block";
		this.style.margin = "4rem";
		this.style.padding = "0 1rem 1rem 1rem";
		this.style.border = "1px dotted black";
		this.style.resize = "both";
		this.style.overflow = "scroll";

		const style = this.querySelector("style");
		if (style) style.remove();

		const figure = document.createElement("figure");
		figure.innerHTML = this.innerHTML;
		figure.style.margin = "0";

		const figcaption = document.createElement("figcaption");
		figcaption.style.fontFamily ="Verdana";
		figcaption.style.fontSize = "0.5rem";
		figcaption.style.background = "white";
		figcaption.style.textTransform = "uppercase";
		figcaption.style.letterSpacing = "0.15rem";
		figcaption.style.margin = "1rem 0";
		figcaption.textContent = "Exemple " + name;
		figure.prepend(figcaption);

		if (style) this.shadowRoot.append(style);
		this.shadowRoot.append(figure);
	}
}

customElements.define("example-block", ExampleBlock);
