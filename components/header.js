const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <link href="../css/common.css" rel="stylesheet" />
  <header>
    <nav>
        <div class="nav__items">
            <a href="/index.html" class="nav__item">Tarefas</a>
            <a href="/pomodoro.html" class="nav__item">Pomodoro</a>
            <a href="/meu-progresso.html" class="nav__item">Meu Progresso</a>
        </div>
        <button class="btn">Login</button>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
