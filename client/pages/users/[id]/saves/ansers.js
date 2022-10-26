import CoreInfo from "../coreInfo";
import Saves_ansers from "../../../../components/userPageComponents/saves_ansers";
import { useRouter } from "next/router";
export default function saves_ansers() {
  const router = useRouter();
  return (
    <div className="container">
      <div className="content">
        <CoreInfo></CoreInfo>
        <Saves_ansers></Saves_ansers>
        <style jsx>{`
          .container {
            height: 100vh;
            width: 100vh;
            display: flex;
            justify-content: space-between;
            flex: 1 0 auto;
            position: relative;
            margin: 0;
            text-align: left;
          }
          .content {
            width: 50%;
            min-width: 515px;
            padding: 24px;
            margin: 0;
            border-radius: 0;
            border-top-width: 0;
            border-bottom-width: 0;
          }
        `}</style>
      </div>
    </div>
  );
}
