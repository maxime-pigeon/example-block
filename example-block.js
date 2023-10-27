export default class ExampleBlock extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		const name = this.getAttribute("name") || "Exemple";

		this.style.display = "block";
		this.style.position = "relative";
		this.style.margin = "4rem";
		this.style.padding = "2.5rem 1rem 1rem 1rem";
		this.style.border = "1px dotted black";
		this.style.resize = "horizontal";
		this.style.overflow = "hidden";

		const style = this.querySelector("style");
		if (style) style.remove();

		const figure = document.createElement("figure");
		figure.innerHTML = this.innerHTML;
		figure.style.margin = "0";

		const figcaption = document.createElement("figcaption");
		figcaption.style.position = "absolute";
		figcaption.style.fontFamily ="Verdana";
		figcaption.style.fontSize = "0.5rem";
		figcaption.style.top = "1rem";
		figcaption.style.background = "white";
		figcaption.style.textTransform = "uppercase";
		figcaption.style.lineHeight = "1";
		figcaption.style.letterSpacing = "0.15rem";
		figcaption.textContent = "Exemple " + name;
		figure.prepend(figcaption);

		if (style) this.shadowRoot.append(style);
		this.shadowRoot.append(figure);
	}
}

customElements.define("example-block", ExampleBlock);
