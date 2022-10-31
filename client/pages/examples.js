import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";

export default function examples() {
  useEffect(() => {
    const gapi = import("gapi-script").then((pack) => pack.gapi);
    const initClient = async () => {
      const d = await gapi;
      d.client.init({
        clientId:
          "148328336256-djjpl3gcj1cqvtsqspkp2404s9tbs37q.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "chat",
      });
    };
    gapi.then((d) => d.load("client:auth2", initClient));
  }, []);
  const [clientId, setClientId] = useState(
    "148328336256-djjpl3gcj1cqvtsqspkp2404s9tbs37q.apps.googleusercontent.com"
  );
  const onSuccess = (res) => {
    console.log("success:", res);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
}
