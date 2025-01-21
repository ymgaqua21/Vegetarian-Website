class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="footer">
            <div class="footer-1">
                <div class="logo">
                    <img src="/Images/honeybee.png" alt="">
                </div>
                <address>
                    <p>Email: am925953@aldine-isd.org</p>
                    <p>Adan Mendoza, <br>Street, Houston, Tx </br></p>
                </address>
            </div>
            <div class="footer-2">
                <h2>Powered by <em>Adan M</em></h2>
            </div>
        </div>
        
        `;
    }
}

customElements.define('main-footer', Footer);