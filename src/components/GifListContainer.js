import React, { useState, useEffect } from "react";
import GifList from "./GifList";

const GifListContainer = ({ items }) => {
  return (
    <>
      <div>
        <GifList items={items} />
      </div>
    </>
  );
};

export default GifListContainer;
