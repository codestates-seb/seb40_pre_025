import { useState, useRef } from "react";

export default function test() {
  const [idx, setidx] = useState(0);
  const nameRef = useRef(null);
  const nameList = [
    "안지수",
    "윤세연",
    "김민성",
    "편범준",
    "김정민",
    "김효준",
    "허준오",
  ];
  const test = () => {
    setTimeout(function () {
      setidx(idx + 1);
      return;
    }, 3000);
    if (idx >= nameList.length) {
      setidx(0);
    }
    return nameList[idx];
  };
  console.log(nameRef.current);
  return (
    <div>
      <div ref={nameRef} className="name">
        {test()}
      </div>
      <style jsx>{`
        .name {
          animation-name: jaehee;
          animation-duration: 2s;
          animation-duration: leaner;
          animation-iteration-count: 3;
          animation-direction: alternate;
          animation-fill-mode: forwards;
        }
        @-webkit-keyframes jaehee {
          0% {
            left: 100px;
          }
          100% {
            left: 300px;
          }
        }
      `}</style>
    </div>
  );
}
