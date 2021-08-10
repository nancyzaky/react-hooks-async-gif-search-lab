import React, { useState, useEffect } from "react";
import GifListContainer from "./GifListContainer";

const GifSearch = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);
  const handleSub = (e) => {
    e.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data);
      });
    setVal("");
  };

  return (
    <>
      <form
        type="submit"
        onSubmit={(e) => {
          handleSub(e);
        }}
      >
        <label htmlFor="search">Enter Search Item:</label>
        <input
          name="search"
          id="search"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        ></input>
        <button>Find Gifs</button>
      </form>
      <div>
        <GifListContainer items={items} />
      </div>
    </>
  );
};

export default GifSearch;
