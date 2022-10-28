import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="site-footer js-footer" role="contentinfo">
        <div className="site-footer--container">
          <div className="site-footer--logo">
            <a href="https://stackoverflow.com" aria-label="Stack Overflow">
              <svg
                aria-hidden="true"
                className="native svg-icon iconLogoGlyphMd"
                width="32"
                height="37"
                viewBox="0 0 32 37"
              >
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                ></path>
              </svg>
            </a>
          </div>
          <nav className="site-footer--nav">
            <div className="group">
              <div className="site-footer--col">
                <h5 className="-title">STACK OVERFLOW</h5>
                <ul className="-list js-primary-footer-links">
                  <li>Questions</li>
                  <li>Help</li>
                </ul>
              </div>
              <div className="site-footer--col">
                <h5 className="-title">PRODUCTS</h5>
                <ul className="-list">
                  <li>Teams</li>
                  <li>Advertising</li>
                  <li>Collectives</li>
                  <li>Talent</li>
                </ul>
              </div>
              <div className="site-footer--col">
                <h5 className="-title">COMPANY</h5>
                <ul className="-list">
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
              <div className="site-footer--col site-footer--categories-nav">
                <div>
                  <h5 className="-title">STACK EXCHANGE NETWORK</h5>
                  <ul className="-list">
                    <li>Technology</li>
                    <li>Culture &amp; recreation</li>
                    <li>Life &amp; arts</li>
                    <li>Science</li>
                    <li>Professional</li>
                    <li>Business</li>
                    <br />
                    <li className="mt16 md:mt0">API</li>
                    <li>Data</li>
                  </ul>
                </div>
              </div>
              <div className="site-footer--copyright fs-fine md:mt24">
                <ul className="group2">
                  <li className="group3">Blog</li>
                  <li className="group3">Facebook</li>
                  <li className="group3">Twitter</li>
                  <li className="group3">LinkedIn</li>
                  <li className="group3">Instagram</li>
                </ul>
                <p className="md">
                  Site design / logo © 2022 Stack Exchange Inc; user <br />
                  contributions licensed under
                  <span className="td-underline">CC BY-SA</span>.
                  <span id="svnrev">rev&nbsp;2022.10.25.33519</span>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </footer>
      <style jsx>
        {`
          .md {
            margin-top: 170px;
          }
          .group3 {
            margin-top: 10px;
            margin-right: 10px;
          }
          .group2 {
            display: flex;
          }
          .group {
            display: flex;
            width: 1264px;
            margin: 0 auto;
            padding: 0px 12px 42px 12px;
            justify-content: space-between;
          }
          .site-footer--container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            background: rgb(29, 29, 31);
            color: rgb(172, 178, 183);
            margin: 0;
            padding-top: 1rem;
            padding-left: 1.3rem;
            border: 0;
            vertical-align: baseline;
            font-size: 12px;
            bottom: 0;
            width: auto;
          }
          svg {
            margin-left: 40px;
            margin-top: 10px;
          }
          ul {
            list-style: none;
            padding-left: 0;
          }
          li {
            margin-top: 5px;
          }
          .site-footer {
            box-sizing: border-box;
          }
          h5 {
            font-weight: bold;
            font-size: 15px;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
