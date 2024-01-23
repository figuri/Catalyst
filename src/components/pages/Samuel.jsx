import React from "react";
import { useState } from "react";
import  SideArticle   from "../SideArticle";

function Samuel() {
  // add event listener so sidearticle component only shows when you hover over the h1 element
  const title = document.querySelector("h1");

  return (
    <div>
      <h1>Tech Talk</h1>
      <SideArticle page='samuel' />
    </div>
  );
}

export default Samuel;
