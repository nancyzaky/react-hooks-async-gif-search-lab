import React from "react";

const GifList = ({ items }) => {
  console.log(items.data);
  const newArr = items.data.slice(0, 3);
  console.log(newArr);
  return (
    <ul>
      {newArr.map((item) => {
        return (
          <li>
            <img src={item.images.original.url} />
          </li>
        );
      })}
    </ul>
  );
};

export default GifList;
