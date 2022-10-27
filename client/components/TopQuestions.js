import React from "react";
import { useEffect, useState } from "react";
import Questions from "../components/Questions";
import Seo from "../components/Seo";


export default function TopQuestions() {
  return (
    <>
      <Seo />
      <div className="container">
        {/* 메인  */}
        <div id="content">
          <Questions />
          
        </div>
        <style jsx>{`
          .container {
            flex: 1 1 0;
            width: 100%;
            display: flex;
          }
          #content {
            flex: 1 2 0;
            display: flex;
          }
        `}</style>
      </div>
    </>
  );
}
