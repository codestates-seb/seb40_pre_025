import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Image from 'next/image';

export default function examples() {
  const [profile, setProfile] = useState(null);
  const clientId =
    "148328336256-djjpl3gcj1cqvtsqspkp2404s9tbs37q.apps.googleusercontent.com";
  useEffect(() => {
    const gapi = import("gapi-script").then((pack) => pack.gapi);
    const initClient = async () => {
      const d = await gapi;
      d.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.then((d) => d.load("client:auth2", initClient));
  }, []);

  const onSuccess = (res) => {
    console.log("success:", res);
    setProfile(res.profileObj);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };
  const logOut = () => {
    setProfile(null);
  };
  return (
    <div>
      <h2></h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.imageUrl} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <GoogleLogout
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={logOut}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          render={(renderProps) => (
            <button
            className="googleLoginBox"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            >
            <Image className="image" src="/images/google.png" alt="google" width="15" height="15"/>
              <a>Sign in with Google</a>
            </button>
          )}
        />
      )}
      <style jsx>{`
      a {
          margin-left: 5px;
      }
        .googleLoginBox{
          background: white;
          color: black;
          width: 290px;
          padding: 7px 0px 7px 0px;
          cursor: pointer;
          border-radius: 5px;
          display: flex;
          justify-content: center;  
          align-items: center;
          font-size: 13px;
          border: 0.5px solid rgb(208,211,215);
          color:rgb(66,67,68);
        }
        .googleLoginBox:hover {
          background: rgb(247,247,247);
          color: black;
        }
        `}</style>
    </div>

   
  );
}
