// import { useState, useEffect } from "react";
// import axios from "axios";
// import Google from "../social/Google";

// function App() {
//   const [data, setData] = useState(null);
//   const oAuthURL = `http://accounts.google.com/o/oauth2/v2/auth?client_id=348796123545-cu5d85hhiu4uk2e1dnne51dapc0anlcl.apps.googleusercontent.com&
// response_type=token&
// redirect_uri=http://localhost:3000/googlelogin
// scope=http://www.googleapis.com/auth/userinfo.email`;
//   const oAuthHandler = () => {
//     window.location.assign(oAuthURL);
//   };

//   useEffect(async () => {
//     const url = new URL(window.location.href);
//     const hash = url.hash;
//     if (hash) {
//       const accessToken = hash.split("=")[1].split("&")[0];
//       await axios
//         .get(
//           "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
//             accessToken,
//           {
//             headers: {
//               authorization: `token ${accessToken}`,
//               accept: "application/json",
//             },
//           }
//         )
//         .then((data) => {
//           console.log(data);
//           setData(data);
//         })
//         .catch((e) => console.log("oAuth token expired"));
//     }
//   }, []);

//   return (
//     <div>
//       <button id="oAuthBtn" onClick={oAuthHandler}>
//         {Google}
//         <div id="comment">Google Test</div>
//       </button>
//     </div>
//   );
// }

// export default App;
