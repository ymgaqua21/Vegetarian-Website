class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <script src="App.js"></script>
        <header>
            <div class="header">
                <div class="headerbar">
                    <div class="account">
                        <ul>
                            <a href="">
                                <li>
                                    <i class="fa-solid fa-house-chimney"></i>
                                </li>
                            </a>
                            <a href="/index.html">
                                <li>
                                    <i class="fa-solid fa-magnifying-glass searchicon" id="searchicon1"></i>
                                </li>
                            </a>
                            <div class="search" id="searchinput1">
                                <input type="search">
                                <i class="fa-solid fa-magnifying-glass srchicon"></i>
                            </div>
                            <a href="">
                                <li>
                                    <i class="fa-solid fa-user" id="user-mb"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="nav">
                        <ul>
                            <a href="/index.html">
                                <li>Home</li>
                            </a>
                            <a href="/aboutUs.html">
                                <li>About</li>
                            </a>
                            <a href="/index.html#anchor-image">
                                <li>Food Menu</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="logo">
                    <img src="/Images/honeybee.png" alt="Vegetarian Food">
                </div>
                <div class="bar">
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-solid fa-xmark" id="hdcross"></i>
                </div>
                <div class="nav">
                    <ul>
                        <a href="/index.html">
                            <li>Home</li>
                        </a>
                        <a href="/aboutUs.html">
                            <li>About</li>
                        </a>
                        <a href="/index.html#anchor-image">
                            <li>Food Menu</li>
                        </a>
                    </ul>
                </div>
                <div class="account">
                    <ul>
                        <a href="/index.html">
                            <li>
                                <i class="fa-solid fa-house-chimney"></i>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <i class="fa-solid fa-magnifying-glass searchicon" id="searchicon2"></i>
                            </li>
                        </a>
                        <div class="search" id="searchinput2">
                            <input type="search">
                            <i class="fa-solid fa-magnifying-glass srchicon"></i>
                        </div>
                        <a href="#">
                            <li>
                                <i class="fa-solid fa-user" id="user-lap"></i>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </header>
        `;
    }
}

// Define the custom element
customElements.define('main-header', Header);
