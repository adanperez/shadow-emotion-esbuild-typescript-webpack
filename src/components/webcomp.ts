import create, { Emotion } from "@emotion/css/create-instance";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "search-result": { "name-attribute": string };
    }
  }
}

class SearchResult extends HTMLElement {
  shadowRoot: ShadowRoot;
  emotion: Emotion;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.emotion = create({
      container: this.shadowRoot as unknown as HTMLElement,
      key: "webcomp",
    });

    const { css } = this.emotion;
    const temp = css`
      padding: 16px;
      background-color: aquamarine;
      font-size: 16px;
      &:hover {
        color: blueviolet;
      }
    `;

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="${temp}">
        <p>Click <a target="_blank" rel="noopener">here</a> for a google search</p>
      </div>
    `;
    const n = template.content.cloneNode(true);
    this.shadowRoot.appendChild(n);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.shadowRoot.querySelector("a")!.href = "";
  }

  static get observedAttributes() {
    return ["name-attribute"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "name-attribute") {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.shadowRoot.querySelector(
        "a",
      )!.href = `https://www.google.com/search?q=${newValue}`;
    }
  }
}

window.customElements.define("search-result", SearchResult);
