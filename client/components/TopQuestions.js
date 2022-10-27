import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Seo from "../components/Seo";


export default function TopQuestions() {
  return (
    <>
      <Seo />
      <Header />
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
