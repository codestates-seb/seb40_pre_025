import Google from "../../components/social/Google";
import Github from "../../components/social/Github";
import Link from "next/link";
export default function SignUp() {
  return (
    <div className="container">
      <div id="content" className="d-flex flex_center">
        <div className="d-flex ai-center h100">
          <div id="information" className="d-flex fd-column">
            <h1>Join the Stack Overflow community</h1>
            <div className="d-flex ai-center margin-B">
              <div className="icon">
                <svg width="26" height="26">
                  <path
                    fill="#3399ff"
                    opacity=".5"
                    d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                  ></path>
                  <path
                    fill="#3399ff"
                    d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"
                  ></path>
                </svg>
              </div>
              <div>Get unstuck — ask a question</div>
            </div>
            <div className="d-flex ai-center margin-B">
              <div className="icon">
                <svg width="26" height="26" fill="#3399ff">
                  <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path>
                  <path
                    opacity=".5"
                    d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                  ></path>
                </svg>
              </div>
              <div>Unlock new privileges like voting and commenting</div>
            </div>
            <div className="d-flex ai-center margin-B">
              <div className="icon">
                <svg width="26" height="26" fill="#3399ff">
                  <path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"></path>
                  <path
                    opacity=".5"
                    d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                  ></path>
                </svg>
              </div>
              <div>Save your favorite tags, filters, and jobs</div>
            </div>
            <div className="d-flex ai-center margin-B">
              <div>
                <div className="icon">
                  <svg width="26" height="26" fill="#3399ff">
                    <path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"></path>
                  </svg>
                </div>
              </div>
              <div>Earn reputation and badges</div>
            </div>
            <div>
              Collaborate and share knowledge with a private group for FREE.
              <br></br> Get Stack Overflow for Teams free for up to 50 users.
            </div>
          </div>
          <div id="flexItem">
            <div className="socialLogin">
              <div className="socialLoginBtn">
                <Google></Google>
              </div>
              <div className="socialLoginBtn">
                <Github></Github>
              </div>
            </div>
            <div className="formContainer">
              <form id="login-form" className="d-flex fd-column">
                <div className="d-flex fd-column margin-T-B">
                  <label className="lable">Display name</label>
                  <input className="input"></input>
                </div>
                <div className="d-flex fd-column margin-T-B">
                  <label className="lable">Email</label>
                  <input className="input"></input>
                </div>
                <div className="d-flex fd-column">
                  <label className="lable">Password</label>
                  <input className="input"></input>
                  <p className="fc-light">
                    Passwords must contain at least eight characters, including
                    at least 1 letter and 1 number.
                  </p>
                </div>
                <div className="d-flex flex_center m-tb6">
                  <div id="captcha"></div>
                </div>
                <div id="option" className="d-flex m-tb6">
                  <div>
                    <input name="EmailOptIn" type="checkbox"></input>
                  </div>
                  <div>
                    <label className="fw-normal">
                      Opt-in to receive occasional product updates, user
                      research invitations, company announcements, and digests.
                    </label>
                  </div>
                  <div>
                    <Link href="/">
                      <a>
                        <svg
                          fill="#8d9093"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                        >
                          <path d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
                <button className="s-btn margin-T-B">Sign up</button>
              </form>
              <div className="margin-T helf">
                <p className="d-ib">
                  {`By clicking “Sign up”, you agree to our `}
                  <Link className="d-ib" href="/">
                    <a>terms of serviceprivacy policy</a>
                  </Link>
                  {` and `}
                  <Link href="/">
                    <a>cookie policy</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="assistance">
              <div className="margin-T-B">
                {`Already have an account? `}
                <Link href="/">
                  <a href="/">Log in</a>
                </Link>
              </div>
              <div className="margin-T-B">
                {`Are you an employer? `}
                <Link href="/">
                  <a>
                    Sign up on Talent
                    <svg
                      id="footIcon"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"
                        fill="#3399ff"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #flexItem {
          height: 100%;
        }
        .h100 {
          height: 100%;
        }
        .helf {
          font-size: 0.8rem;
          color: gray;
        }
        .socialLogin {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
        }
        .socialLoginBtn {
          margin-top: 4px;
          margin-bottom: 4px;
        }
        .d-ib {
          display: inline-block;
        }
        .fw-normal {
          font-weight: 400;
          font-size: 0.8rem;
        }
        .fc-light {
          color: hsl(210, 8%, 45%);
          font-size: 0.8rem;
        }
        a {
          color: hsl(206, 100%, 40%);
          text-decoration: none;
        }
        .jc-space-between {
          justify-content: space-between !important;
        }
        .ai-center {
          align-items: center !important;
        }
        .margin-T-B {
          margin-top: 5px;
          margin-bottom: 15px;
        }
        .m-tb6 {
          margin-top: 6px;
          margin-bottom: 6px;
        }
        .margin-T {
          margin-top: 1px;
        }
        .margin-B {
          margin-bottom: 24px;
        }
        .icon {
          margin-right: 8px;
        }
        .ta-center {
          text-align: center !important;
          font-size: 1rem;
          margin-bottom: 5rem;
          margin-left: auto;
          margin-right: auto;
        }
        .svg-icon {
          vertical-align: bottom;
        }
        .fd-column {
          flex-direction: column;
        }
        .d-flex {
          display: flex;
        }
        .flex_center {
          justify-content: center;
          align-items: center;
        }
        .container {
          height: 100%;
          background-color: rgb(241 242 243);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }
        #information {
          margin-right: 48px;
          margin-bottom: 128px;
          font-size: 1rem;
        }
        #content {
          width: 100%;
          height: 100%;
          padding: 24px;
          margin: 0;
          border-top-width: 0;
          border-bottom-width: 0;
          border-radius: 0;
          box-sizing: border-box;
          border: 1px solid rgb(223, 223, 223);
        }
        .formContainer {
          box-shadow: 1px 1px 15px 3px rgb(212, 212, 212);
          width: 290px;
          background-color: white;
          border-radius: 7px;
          padding: 24px;
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }
        .lable {
          margin: 4px;
          margin-right: 0;
          margin-left: 0;
          font-size: 1rem;
          font-family: inherit;
          color: black;
          font-weight: 600;
          padding: 0;
        }
        .input {
          -webkit-appearance: none;
          width: auto%;
          margin: 0;
          padding: 0.6em 0.7em;
          border: 1px solid rgb(192, 191, 191);
          border-radius: 3px;
        }
        .s-btn {
          color: white;
          margin: 10px;
          margin-right: 0;
          margin-left: 0;
          background-color: hsl(206, 100%, 52%);
          box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
          padding: 0.8em;
          border: 1px solid transparent;
          border-radius: 3px;
          outline: none;
          font-family: inherit;
          font-weight: normal;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
        }
        .assistance {
          width: 290px;
          height: 78px;
          text-align: center;
          font-size: 0.85rem;
          padding: 16px;
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
        }
        #captcha {
          background-color: hsl(210, 8%, 95%);
          width: 290px;
          height: 7rem;
        }
        h1 {
          color: rgb(82, 82, 82);
          line-height: 1;
          font-size: 1.6rem;
          margin: 0;
          margin-bottom: 32px;
        }
      `}</style>
    </div>
  );
}
