import React, { useEffect, useState } from "react";

export default function examples() {
  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div
        id="g_id_onload"
        data-client_id="148328336256-djjpl3gcj1cqvtsqspkp2404s9tbs37q.apps.googleusercontent.com"
        data-login_uri="http://localhost:3000/examples"
        data-auto_prompt="false"
      ></div>
      <div
        class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </>
  );
}
