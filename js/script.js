class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._count = 0;
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#increment').addEventListener('click', () => {
      this._count++;
      this.render();
    });

    this.shadowRoot.querySelector('#decrement').addEventListener('click', () => {
      this._count--;
      this.render();
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos encapsulados */
        :host {
          display: block;
          font-family: Arial, sans-serif;
        }
        p {
          font-size: 2em;
        }
        button {
          background-color: #4caf50;
          border: none;
          color: white;
          padding: 5px 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      </style>
      <div>
        <p>Contador: ${this._count}</p>
        <button id="increment">+</button>
        <button id="decrement">-</button>
      </div>
    `;

    // Reasignar event listeners
    this.shadowRoot.querySelector('#increment').addEventListener('click', () => {
      this._count++;
      this.render();
    });

    this.shadowRoot.querySelector('#decrement').addEventListener('click', () => {
      this._count--;
      this.render();
    });
  }
}

customElements.define('counter-component', CounterComponent);