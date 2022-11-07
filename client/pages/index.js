import TopQuestions from "../components/TopQuestion/TopQuestions";
import Start from "../pages/hello/start";
import { useEffect, useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return <>{login ? <TopQuestions /> : <Start />}</>;
}
