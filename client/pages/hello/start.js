import Link from "next/link";
import Image from 'next/image';


export default function Hello() {
  return (
    <div className="top">
      <button className="login">Log in</button>
      <button className="signup">Sign up</button>
    <div className="logo">
     <Image src="/images/s.png" alt="stackoverflow" width="472" height="102"/>
    </div>
    <input className="input" type="text" placeholder="  🔍 Search..." onClick=""  />
    <style jsx>{`
      .input {
        display: flex;
        justify-content: center;
      }
    .login {
        cursor: pointer;
        background: rgb(218,232,241);
        color: rgb(45,95,139);
        padding: 5px 10px 5px 10px;
        border: 1px solid rgb(158,190,214);
        border-radius: 3px;
        box-shadow: 0.5px black;
        font-size: 10px;
        margin-top: 10px;
      }
      .login :hover {
        background: rgb(164,201,229);
        color: rgb(19,60,92);
        border: 1px solid rgb(83,138,179);
      }
      .signup {
        cursor: pointer;
        background: rgb(19,127,254);
        color: rgb(255,255,255);
        padding: 5px 10px 5px 10px;
        border: 1px solid rgb(158,190,214);
        border-radius: 3px;
        box-shadow: 0.5px black;
        font-size: 10px;
      }
      .signup :hover {
        background: rgb(10,93,193);
        color: rgb(255,255,255);
        border: 1px solid rgb(0,81,190);
      }
      .logo{
        display: flex;
        justify-content: center;
        margin-top: 250px;
      }
    `}</style>
  </div>
  );
}
