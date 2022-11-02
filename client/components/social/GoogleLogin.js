import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function examples() {
  const [profile, setProfile] = useState(null);
  const clientId =
    "348796123545-cu5d85hhiu4uk2e1dnne51dapc0anlcl.apps.googleusercontent.com";
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
      <h2>React Google Login</h2>
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
              Sign in with Google
            </button>
          )}
        />
      )}
      <style jsx>{`
         
          .googleLoginBox {
          width: 290px;
          height: 40px;
          flex-flow: column wrap;
          background-color: red;
         
        
      `}</style>
    </div>
  );
}
