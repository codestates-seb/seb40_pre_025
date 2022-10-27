import React from "react";

const Footer = () => {
  return <div>
    <footer id="footer" class="site-footer js-footer" role="contentinfo">
        <div class="site-footer--container">
                <div class="site-footer--logo">
                    <a href="https://stackoverflow.com" 
                    aria-label="Stack Overflow">
                      <svg aria-hidden="true" class="native svg-icon iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37">
                        <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB">
                          </path>
                          <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path></svg></a>
                </div>
            <nav class="site-footer--nav">
              <div className="test">
                    <div class="site-footer--col">
                        <h5 class="-title">STACK OVERFLOW</h5>
                        <ul class="-list js-primary-footer-links">
                            <li>Questions</li>
                                <li>Help</li>
                        </ul>
                    </div>
                    <div class="site-footer--col">
                        <h5 class="-title">PRODUCTS</h5>
                        <ul class="-list">
                            <li>Teams</li>
                            <li>Advertising</li>
                            <li>Collectives</li>
                            <li>Talent</li>
                        </ul>
                    </div>
                <div class="site-footer--col">
                    <h5 class="-title">COMPANY</h5>
                    <ul class="-list">
                            <li>About</li>
                        <li>Press</li>
                            <li>Work Here</li>
                        <li>Legal</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                            <li>Contact Us</li>
                            <li>Cookie Settings</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div class="site-footer--col site-footer--categories-nav">
                    <div>
                        <h5 class="-title">STACK EXCHANGE NETWORK</h5>
                        <ul class="-list">
                            <li>Technology</li>
                            <li>Culture &amp; recreation</li>
                            <li>Life &amp; arts</li>
                            <li>Science</li>
                            <li>Professional</li>
                            <li>Business</li>
                            <br />
                            <li class="mt16 md:mt0">API</li>
                            <li>Data</li>
                        </ul>
                    </div>
                </div>
                <div class="site-footer--copyright fs-fine md:mt24">
                <ul className="test2">
                    <li>Blog</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                </ul>
                <p class="md:mb0">
              Site design / logo © 2022 Stack Exchange Inc; user contributions licensed under 
              <span class="td-underline">CC BY-SA</span>.                    
              <span id="svnrev">rev&nbsp;2022.10.25.33519</span>
                </p>
            </div>
                </div>
                </nav>
            
        </div>
    </footer>
    <style jsx>
      {`
      .test2 {
        border: 1px solid blue;
        display: flex;
      }
      .test {
        border: solid 1px red;
        display: flex;
        width: 1264px;
        margin: 0 auto;
        padding: 32px 12px 12px 12px;
        justify-content: space-between;
      }
      .site-footer--container {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
      }
      svg{
        margin-left: 10px;
        margin-top: 10px;
      }
      ul{
        list-style: none;
        padding-left: 0;
      }
      
      li{
        margin-top: 5px;
      }
      .site-footer {
        box-sizing: border-box;
      }
      footer {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        background: rgb(29,29,31);
        color: rgb(172,178,183);
        font-size: 10px;
      }
      h5{
        font-weight: bold;
        font-size: 12px;
        }
      `}
    </style>
  </div>;
};

export default Footer;
